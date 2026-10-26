// Génère un vrai fichier Excel (.xlsx) dans le navigateur, sans bibliothèque.
// Un .xlsx est une archive ZIP de fichiers XML : on écrit ces fichiers puis on
// les assemble dans un ZIP « sans compression ». Toutes les cellules texte sont
// enregistrées comme du texte (aucune formule possible).

const encoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;

const TABLE_CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(octets) {
  let c = 0xffffffff;
  for (let i = 0; i < octets.length; i++) c = TABLE_CRC[(c ^ octets[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zipSansCompression(fichiers) {
  const morceaux = [];
  const central = [];
  let position = 0;

  for (const { nom, contenu } of fichiers) {
    const nomOctets = encoder.encode(nom);
    const donnees = encoder.encode(contenu);
    const crc = crc32(donnees);

    const entete = new DataView(new ArrayBuffer(30));
    entete.setUint32(0, 0x04034b50, true);
    entete.setUint16(4, 20, true);
    entete.setUint16(6, 0x0800, true); // noms en UTF-8
    entete.setUint16(8, 0, true); // stockage simple
    entete.setUint16(10, 0, true);
    entete.setUint16(12, 0x21, true);
    entete.setUint32(14, crc, true);
    entete.setUint32(18, donnees.length, true);
    entete.setUint32(22, donnees.length, true);
    entete.setUint16(26, nomOctets.length, true);
    entete.setUint16(28, 0, true);
    morceaux.push(new Uint8Array(entete.buffer), nomOctets, donnees);

    const cd = new DataView(new ArrayBuffer(46));
    cd.setUint32(0, 0x02014b50, true);
    cd.setUint16(4, 20, true);
    cd.setUint16(6, 20, true);
    cd.setUint16(8, 0x0800, true);
    cd.setUint16(10, 0, true);
    cd.setUint16(12, 0, true);
    cd.setUint16(14, 0x21, true);
    cd.setUint32(16, crc, true);
    cd.setUint32(20, donnees.length, true);
    cd.setUint32(24, donnees.length, true);
    cd.setUint16(28, nomOctets.length, true);
    cd.setUint16(30, 0, true);
    cd.setUint16(32, 0, true);
    cd.setUint16(34, 0, true);
    cd.setUint16(36, 0, true);
    cd.setUint32(38, 0, true);
    cd.setUint32(42, position, true);
    central.push(new Uint8Array(cd.buffer), nomOctets);

    position += 30 + nomOctets.length + donnees.length;
  }

  const tailleCentral = central.reduce((s, m) => s + m.length, 0);
  const fin = new DataView(new ArrayBuffer(22));
  fin.setUint32(0, 0x06054b50, true);
  fin.setUint16(4, 0, true);
  fin.setUint16(6, 0, true);
  fin.setUint16(8, fichiers.length, true);
  fin.setUint16(10, fichiers.length, true);
  fin.setUint32(12, tailleCentral, true);
  fin.setUint32(16, position, true);
  fin.setUint16(20, 0, true);

  return new Blob([...morceaux, ...central, new Uint8Array(fin.buffer)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

function echapper(texte) {
  return String(texte)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    // caractères de contrôle interdits en XML
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

function lettreColonne(index) {
  let s = "";
  let n = index + 1;
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

/**
 * colonnes : [{ titre, largeur }]
 * lignes   : tableau de tableaux de valeurs (texte ou nombre)
 */
export function creerClasseurXlsx({ nomFeuille = "Feuille1", colonnes, lignes }) {
  const derniereCol = lettreColonne(colonnes.length - 1);
  const nbLignes = lignes.length + 1;

  const cellule = (valeur, ref, style) => {
    if (typeof valeur === "number" && Number.isFinite(valeur)) {
      return `<c r="${ref}"${style ? ` s="${style}"` : ""}><v>${valeur}</v></c>`;
    }
    const texte = valeur === null || valeur === undefined ? "" : valeur;
    return `<c r="${ref}" t="inlineStr"${style ? ` s="${style}"` : ""}><is><t xml:space="preserve">${echapper(texte)}</t></is></c>`;
  };

  const entete = `<row r="1">${colonnes
    .map((c, i) => cellule(c.titre, `${lettreColonne(i)}1`, 1))
    .join("")}</row>`;
  const corps = lignes
    .map(
      (ligne, j) =>
        `<row r="${j + 2}">${ligne.map((v, i) => cellule(v, `${lettreColonne(i)}${j + 2}`, 2)).join("")}</row>`
    )
    .join("");

  const feuille = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<dimension ref="A1:${derniereCol}${nbLignes}"/>
<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15"/>
<cols>${colonnes
    .map((c, i) => `<col min="${i + 1}" max="${i + 1}" width="${c.largeur || 15}" customWidth="1"/>`)
    .join("")}</cols>
<sheetData>${entete}${corps}</sheetData>
<autoFilter ref="A1:${derniereCol}${nbLignes}"/>
</worksheet>`;

  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/><family val="2"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font></fonts>
<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF0D3A21"/><bgColor indexed="64"/></patternFill></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf></cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;

  const classeur = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets><sheet name="${echapper(nomFeuille).slice(0, 31)}" sheetId="1" r:id="rId1"/></sheets>
<definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">'${echapper(nomFeuille).slice(0, 31)}'!$A$1:$${derniereCol}$${nbLignes}</definedName></definedNames>
</workbook>`;

  return zipSansCompression([
    {
      nom: "[Content_Types].xml",
      contenu: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`,
    },
    {
      nom: "_rels/.rels",
      contenu: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,
    },
    { nom: "xl/workbook.xml", contenu: classeur },
    {
      nom: "xl/_rels/workbook.xml.rels",
      contenu: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`,
    },
    { nom: "xl/worksheets/sheet1.xml", contenu: feuille },
    { nom: "xl/styles.xml", contenu: styles },
  ]);
}

export function telechargerBlob(blob, nomFichier) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nomFichier;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
