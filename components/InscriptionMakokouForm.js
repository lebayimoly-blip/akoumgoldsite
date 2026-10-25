import { useRef, useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaWhatsapp,
  FaExclamationTriangle,
  FaInfoCircle,
  FaShareAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  ATELIERS,
  lienWhatsAppInscription,
  lienWhatsAppConfirmation,
  lienPartageWhatsApp,
} from "../data/makokou";
import { enregistrerInscription } from "../utils/inscriptionsMakokou";
import styles from "../styles/ProjetMakokou.module.css";

const VIDE = {
  nom: "",
  sexe: "",
  age: "",
  telephone: "",
  quartier: "",
  ateliers: [],
  disponibilite: "",
  motivation: "",
  site: "", // anti-robots : champ invisible, doit rester vide
};

const ORDRE_CHAMPS = ["nom", "sexe", "age", "telephone", "quartier", "ateliers", "disponibilite"];

function chiffres(valeur) {
  return (valeur || "").replace(/\D/g, "");
}

function valider(f) {
  const e = {};
  if (f.nom.trim().length < 2) e.nom = "Indiquez votre nom et votre prénom.";
  if (!f.sexe) e.sexe = "Choisissez une réponse.";
  const age = Number(f.age);
  if (!f.age || !Number.isInteger(age) || age < 12 || age > 99) e.age = "Indiquez votre âge en chiffres (ex. 28).";
  const n = chiffres(f.telephone).length;
  if (n < 8 || n > 15) e.telephone = "Indiquez un numéro valide, ex. 066 05 25 62.";
  if (f.quartier.trim().length < 2) e.quartier = "Indiquez votre quartier ou votre village.";
  if (f.ateliers.length === 0) e.ateliers = "Choisissez au moins un atelier.";
  if (!f.disponibilite) e.disponibilite = "Choisissez une réponse.";
  return e;
}

export default function InscriptionMakokouForm() {
  const [form, setForm] = useState(VIDE);
  const [erreurs, setErreurs] = useState({});
  const [etat, setEtat] = useState("saisie"); // saisie | envoi | succes | doublon | echec
  const [envoyee, setEnvoyee] = useState(null);
  const carteRef = useRef(null);

  const maj = (champ, valeur) => {
    setForm((f) => ({ ...f, [champ]: valeur }));
    if (erreurs[champ]) setErreurs((e) => ({ ...e, [champ]: undefined }));
  };

  const basculerAtelier = (atelier) => {
    const deja = form.ateliers.includes(atelier);
    maj("ateliers", deja ? form.ateliers.filter((a) => a !== atelier) : [...form.ateliers, atelier]);
  };

  const remonter = () => {
    if (carteRef.current) carteRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const soumettre = async (ev) => {
    ev.preventDefault();
    if (etat === "envoi") return;

    const e = valider(form);
    setErreurs(e);
    const premier = ORDRE_CHAMPS.find((c) => e[c]);
    if (premier) {
      const el = document.getElementById(`champ-${premier}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        const focusable = el.querySelector("input, textarea") || el;
        if (focusable.focus) focusable.focus({ preventScroll: true });
      }
      return;
    }

    const inscription = {
      nom: form.nom.trim().replace(/\s+/g, " "),
      sexe: form.sexe,
      age: Number(form.age),
      telephone: form.telephone.trim(),
      quartier: form.quartier.trim(),
      ateliers: ATELIERS.filter((a) => form.ateliers.includes(a)),
      disponibilite: form.disponibilite,
      motivation: form.motivation.trim() || null,
    };
    setEnvoyee(inscription);

    // Robot détecté : on fait comme si tout s'était bien passé, sans rien enregistrer.
    if (form.site) {
      setEtat("succes");
      remonter();
      return;
    }

    setEtat("envoi");
    const resultat = await enregistrerInscription(inscription);
    if (resultat.ok) setEtat("succes");
    else if (resultat.raison === "doublon") setEtat("doublon");
    else setEtat("echec");
    remonter();
  };

  const recommencer = () => {
    setForm(VIDE);
    setErreurs({});
    setEnvoyee(null);
    setEtat("saisie");
    remonter();
  };

  // ---------- Écran de confirmation ----------
  if (etat === "succes" && envoyee) {
    return (
      <div ref={carteRef} className={styles.formCard}>
        <div className={styles.success}>
          <div className={styles.successIcon}>
            <FaCheckCircle />
          </div>
          <h2>Merci, votre inscription est enregistrée !</h2>
          <p>
            Les candidatures seront étudiées par l’ONG Akoum Gold et ses partenaires. L’inscription ne
            garantit pas automatiquement une place : <strong>les premiers inscrits sont prioritaires</strong>.
            Vous serez recontacté(e) par téléphone ou WhatsApp.
          </p>

          <div className={styles.successRecap}>
            <span><strong>Nom :</strong> {envoyee.nom}</span>
            <span><strong>Téléphone :</strong> {envoyee.telephone}</span>
            <span><strong>Ateliers :</strong> {envoyee.ateliers.join(", ")}</span>
          </div>

          <div className={styles.successActions}>
            <a
              href={lienPartageWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
            >
              <FaShareAlt /> Partager avec une amie
            </a>
            <a
              href={lienWhatsAppConfirmation(envoyee)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              <FaWhatsapp /> Prévenir l’ONG sur WhatsApp (facultatif)
            </a>
            <button type="button" className={styles.linkButton} onClick={recommencer}>
              Inscrire une autre personne
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Formulaire ----------
  const enEnvoi = etat === "envoi";
  const classeChamp = (champ, extra = "") =>
    `${styles.field} ${erreurs[champ] ? styles.invalid : ""} ${extra}`.trim();

  return (
    <form ref={carteRef} className={styles.formCard} onSubmit={soumettre} noValidate>
      <h2 className={styles.formTitle}>Vos informations</h2>
      <p className={styles.formIntro}>
        8 questions, 2 minutes. Les champs marqués <b>*</b> sont obligatoires.
      </p>

      {etat === "doublon" && (
        <div className={`${styles.alert} ${styles.alertInfo}`} role="status">
          <FaInfoCircle />
          <div>
            <strong>Vous êtes déjà inscrit(e)</strong> avec ce nom et ce numéro de téléphone. Inutile de
            recommencer : l’ONG Akoum Gold vous recontactera.
            <div className={styles.alertActions}>
              <button type="button" className={styles.btnOutline} onClick={recommencer}>
                Inscrire une autre personne
              </button>
            </div>
          </div>
        </div>
      )}

      {etat === "echec" && envoyee && (
        <div className={`${styles.alert} ${styles.alertError}`} role="alert">
          <FaExclamationTriangle />
          <div>
            <strong>L’inscription en ligne n’a pas pu aboutir</strong> (connexion instable ?). Pas
            d’inquiétude : vos réponses sont prêtes, envoyez-les par WhatsApp en un clic.
            <div className={styles.alertActions}>
              <a
                href={lienWhatsAppInscription(envoyee)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <FaWhatsapp /> Envoyer par WhatsApp
              </a>
              <button type="submit" className={styles.btnOutline}>
                Réessayer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.formGrid}>
        {/* Nom */}
        <div id="champ-nom" className={classeChamp("nom", styles.full)}>
          <label htmlFor="mk-nom">
            Nom et prénom(s)<span className={styles.req}>*</span>
          </label>
          <input
            id="mk-nom"
            className={styles.input}
            type="text"
            autoComplete="name"
            maxLength={120}
            placeholder="Ex. NDONG Marie-Claire"
            value={form.nom}
            onChange={(e) => maj("nom", e.target.value)}
            aria-invalid={!!erreurs.nom}
          />
          {erreurs.nom && <span className={styles.errorText}>{erreurs.nom}</span>}
        </div>

        {/* Sexe */}
        <fieldset id="champ-sexe" className={`${styles.fieldset} ${erreurs.sexe ? styles.invalid : ""}`}>
          <legend className={styles.legend}>
            Vous êtes<span className={styles.req}>*</span>
          </legend>
          <div className={styles.chips}>
            {["Femme", "Homme"].map((s) => (
              <label key={s} className={styles.chip}>
                <input
                  type="radio"
                  name="sexe"
                  value={s}
                  checked={form.sexe === s}
                  onChange={() => maj("sexe", s)}
                />
                <span>
                  <FaCheck /> {s}
                </span>
              </label>
            ))}
          </div>
          {erreurs.sexe && <span className={styles.errorText}>{erreurs.sexe}</span>}
        </fieldset>

        {/* Âge */}
        <div id="champ-age" className={classeChamp("age")}>
          <label htmlFor="mk-age">
            Âge<span className={styles.req}>*</span>
          </label>
          <input
            id="mk-age"
            className={styles.input}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            placeholder="Ex. 28"
            value={form.age}
            onChange={(e) => maj("age", e.target.value.replace(/\D/g, "").slice(0, 2))}
            aria-invalid={!!erreurs.age}
          />
          {erreurs.age && <span className={styles.errorText}>{erreurs.age}</span>}
        </div>

        {/* Téléphone */}
        <div id="champ-telephone" className={classeChamp("telephone")}>
          <label htmlFor="mk-tel">
            Téléphone (WhatsApp de préférence)<span className={styles.req}>*</span>
          </label>
          <input
            id="mk-tel"
            className={styles.input}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={22}
            placeholder="Ex. 066 05 25 62"
            value={form.telephone}
            onChange={(e) => maj("telephone", e.target.value)}
            aria-invalid={!!erreurs.telephone}
          />
          {erreurs.telephone ? (
            <span className={styles.errorText}>{erreurs.telephone}</span>
          ) : (
            <span className={styles.help}>C’est ce numéro que l’ONG utilisera pour vous recontacter.</span>
          )}
        </div>

        {/* Quartier */}
        <div id="champ-quartier" className={classeChamp("quartier")}>
          <label htmlFor="mk-quartier">
            Quartier ou village<span className={styles.req}>*</span>
          </label>
          <input
            id="mk-quartier"
            className={styles.input}
            type="text"
            maxLength={120}
            placeholder="Nom de votre quartier ou village"
            value={form.quartier}
            onChange={(e) => maj("quartier", e.target.value)}
            aria-invalid={!!erreurs.quartier}
          />
          {erreurs.quartier && <span className={styles.errorText}>{erreurs.quartier}</span>}
        </div>

        {/* Ateliers */}
        <fieldset
          id="champ-ateliers"
          className={`${styles.fieldset} ${styles.full} ${erreurs.ateliers ? styles.invalid : ""}`}
        >
          <legend className={styles.legend}>
            Quels ateliers vous intéressent le plus ?<span className={styles.req}>*</span>{" "}
            <span className={styles.optional}>(plusieurs choix possibles)</span>
          </legend>
          <div className={styles.chips}>
            {ATELIERS.map((a) => (
              <label key={a} className={styles.chip}>
                <input
                  type="checkbox"
                  value={a}
                  checked={form.ateliers.includes(a)}
                  onChange={() => basculerAtelier(a)}
                />
                <span>
                  <FaCheck /> {a}
                </span>
              </label>
            ))}
          </div>
          {erreurs.ateliers && <span className={styles.errorText}>{erreurs.ateliers}</span>}
        </fieldset>

        {/* Disponibilité */}
        <fieldset
          id="champ-disponibilite"
          className={`${styles.fieldset} ${styles.full} ${erreurs.disponibilite ? styles.invalid : ""}`}
        >
          <legend className={styles.legend}>
            Serez-vous disponible pendant les 7 jours de formation, en novembre 2026 ?
            <span className={styles.req}>*</span>
          </legend>
          <div className={styles.chips}>
            {[
              { valeur: "Oui", texte: "Oui, je serai disponible" },
              { valeur: "À confirmer", texte: "À confirmer" },
            ].map((d) => (
              <label key={d.valeur} className={styles.chip}>
                <input
                  type="radio"
                  name="disponibilite"
                  value={d.valeur}
                  checked={form.disponibilite === d.valeur}
                  onChange={() => maj("disponibilite", d.valeur)}
                />
                <span>
                  <FaCheck /> {d.texte}
                </span>
              </label>
            ))}
          </div>
          {erreurs.disponibilite && <span className={styles.errorText}>{erreurs.disponibilite}</span>}
        </fieldset>

        {/* Motivation */}
        <div id="champ-motivation" className={classeChamp("motivation", styles.full)}>
          <label htmlFor="mk-motivation">
            Pourquoi souhaitez-vous participer ? <span className={styles.optional}>(facultatif)</span>
          </label>
          <textarea
            id="mk-motivation"
            className={styles.textarea}
            maxLength={600}
            placeholder="Ex. Je vends déjà du manioc et je veux apprendre à mieux gérer mon argent."
            value={form.motivation}
            onChange={(e) => maj("motivation", e.target.value)}
          />
        </div>

        {/* Anti-robots (invisible pour les visiteurs) */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="mk-site">Ne pas remplir</label>
          <input
            id="mk-site"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.site}
            onChange={(e) => maj("site", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.submit} disabled={enEnvoi}>
          {enEnvoi ? (
            <>
              <span className={styles.spinner} aria-hidden="true" /> Envoi en cours…
            </>
          ) : (
            <>
              Valider mon inscription <FaArrowRight />
            </>
          )}
        </button>
        <p className={styles.notice}>
          Inscription gratuite. Vos informations servent uniquement à l’organisation de la formation par
          l’ONG Akoum Gold et ne sont jamais revendues.
        </p>
      </div>
    </form>
  );
}
