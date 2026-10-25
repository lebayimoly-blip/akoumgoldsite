// Projet « 100 femmes et jeunes filles de Makokou » — ONG Akoum Gold, 2026
//
// Tout le contenu de la page /makokou et du formulaire /makokou/inscription
// est centralisé ici : modifiez ce fichier pour changer un texte, un numéro
// ou la liste des ateliers, sans toucher aux pages.
//
// PHOTOS : /public/images/makokou/
// INSCRIPTIONS : enregistrées dans Supabase (projet « akoum-gold »,
// table « inscriptions_makokou ») — voir utils/inscriptionsMakokou.js.

export const PROJET = {
  titre: "100 femmes et jeunes filles de Makokou",
  intitule: "Projet d’autonomisation économique des femmes et des jeunes de Makokou – 2026",
  places: 100,
  periode: "Novembre 2026",
  duree: "7 jours",
  lieu: "Makokou · Ogooué-Ivindo",
  responsable: "Mme Stevie OYANE DIABATE",
  role: "Présidente de l’ONG Akoum Gold",
  telephones: [
    { affiche: "+241 66 05 25 62", lien: "+24166052562" },
    { affiche: "+241 77 71 48 75", lien: "+24177714875" },
  ],
  // Numéro (format international, sans « + ») qui reçoit les messages WhatsApp
  whatsapp: "24166052562",
  email: "ongakoumdor@gmail.com",
  urlPage: "https://akoumgoldweb.onrender.com/makokou",
  urlInscription: "https://akoumgoldweb.onrender.com/makokou/inscription",
  sponsor: { nom: "Capital", logo: "/images/makokou/capital.png" },
};

// Choix proposés dans le formulaire (le texte est enregistré tel quel)
export const ATELIERS = [
  "Fabrication de savon liquide",
  "Transformation du manioc",
  "Élevage des vers à soie",
  "Informatique & intelligence artificielle",
  "Gestion financière & entrepreneuriat",
  "Prise de parole & confiance en soi",
  "Lecture, écriture & calcul",
];

export const MODULES = [
  {
    numero: "01",
    titre: "Agriculture & fabrication de savons",
    photo: "/images/makokou/atelier-savon.jpg",
    alt: "Atelier pratique de fabrication de savon avec l’ONG Akoum Gold",
    points: [
      "Fabriquer un savon liquide détergent : dosage, hygiène, conditionnement et étiquetage",
      "Transformer le manioc en jus et en chips, le conserver et le vendre localement",
      "S’initier à la sériciculture : élevage des vers à soie et récolte des cocons",
    ],
  },
  {
    numero: "02",
    titre: "Numérique & intelligence artificielle",
    photo: "/images/makokou/atelier-numerique.jpg",
    alt: "Initiation à l’ordinateur et à l’intelligence artificielle",
    points: [
      "Utiliser un ordinateur, Word pour le courrier et Excel pour suivre ses recettes",
      "Vendre grâce aux réseaux sociaux et aux applications de paiement mobile",
      "Utiliser l’IA pour créer ses étiquettes et calculer ses coûts et bénéfices",
    ],
  },
  {
    numero: "03",
    titre: "Gestion financière & prise de parole",
    photo: "/images/makokou/atelier-parole.jpg",
    alt: "Atelier de prise de parole en public",
    points: [
      "Séparer l’argent du foyer et celui de l’activité, tenir un cahier de recettes et de dépenses",
      "Comprendre la tontine, l’épargne collective et les bases du microcrédit",
      "Prendre la parole avec confiance, présenter ses produits et défendre ses prix",
    ],
  },
];

export const PUBLIC_CIBLE = [
  { titre: "Femmes et jeunes filles", texte: "de Makokou et des localités environnantes — public prioritaire." },
  { titre: "Jeunes déscolarisés", texte: "ou en recherche d’activité, qui veulent apprendre un métier." },
  { titre: "Personnes qui lisent peu", texte: "l’alphabétisation fonctionnelle fait partie du programme." },
  { titre: "Porteuses de projets", texte: "commerçantes et actrices de l’économie informelle." },
];

export const ACCOMPAGNEMENT = [
  "Mentorat individuel ou en groupe",
  "Accompagnement vers une coopérative féminine",
  "Suivi à distance et conseils par WhatsApp",
  "Approfondissement des formations selon les besoins",
];

export const FAQ = [
  {
    q: "L’inscription est-elle payante ?",
    r: "Non, l’inscription est entièrement gratuite.",
  },
  {
    q: "Mon inscription me garantit-elle une place ?",
    r: "Pas automatiquement. Les candidatures sont étudiées par l’ONG Akoum Gold et ses partenaires, et les premiers inscrits sont prioritaires. Inscrivez-vous tôt !",
  },
  {
    q: "Je ne sais pas bien lire. Puis-je participer ?",
    r: "Oui. Le programme comprend de l’alphabétisation fonctionnelle (lecture, écriture, calcul). Un proche peut remplir le formulaire avec vous, ou vous pouvez vous inscrire par WhatsApp ou par téléphone.",
  },
  {
    q: "Quand et où a lieu la formation ?",
    r: "À Makokou, en novembre 2026, pendant 7 jours d’ateliers pratiques. Le lieu et le programme détaillé seront communiqués par téléphone ou WhatsApp.",
  },
  {
    q: "Puis-je inscrire une autre personne ?",
    r: "Oui. Après votre inscription, cliquez sur « Inscrire une autre personne ». Chaque personne doit avoir sa propre inscription.",
  },
];

// Message pré-rempli pour s'inscrire directement par WhatsApp
export function lienWhatsAppInscription(form) {
  const lignes = form
    ? [
        "Bonjour ONG Akoum Gold, je souhaite m’inscrire au projet de formation des femmes et des jeunes de Makokou (novembre 2026).",
        `Nom et prénom(s) : ${form.nom || ""}`,
        form.sexe ? `Je suis : ${form.sexe}` : null,
        form.age ? `Âge : ${form.age} ans` : null,
        `Téléphone : ${form.telephone || ""}`,
        `Quartier ou village : ${form.quartier || ""}`,
        form.ateliers && form.ateliers.length ? `Ateliers souhaités : ${form.ateliers.join(", ")}` : null,
        form.disponibilite ? `Disponible pour les 7 jours : ${form.disponibilite}` : null,
        form.motivation ? `Motivation : ${form.motivation}` : null,
      ]
    : [
        "Bonjour ONG Akoum Gold, je souhaite m’inscrire au projet de formation des femmes et des jeunes de Makokou (novembre 2026).",
        "Nom et prénom(s) :",
        "Âge :",
        "Quartier ou village :",
      ];
  return `https://wa.me/${PROJET.whatsapp}?text=${encodeURIComponent(lignes.filter(Boolean).join("\n"))}`;
}

// Petit message de confirmation après une inscription en ligne réussie
export function lienWhatsAppConfirmation(form) {
  const texte = [
    "Bonjour ONG Akoum Gold, je viens de m’inscrire en ligne au projet Makokou 2026.",
    `Nom et prénom(s) : ${form.nom}`,
    `Téléphone : ${form.telephone}`,
  ].join("\n");
  return `https://wa.me/${PROJET.whatsapp}?text=${encodeURIComponent(texte)}`;
}

// Lien de partage WhatsApp (vers n'importe quel contact)
export function lienPartageWhatsApp() {
  const texte =
    "Inscriptions ouvertes : formation gratuite de 100 femmes et jeunes filles à Makokou (novembre 2026) avec l’ONG Akoum Gold — savon, manioc, numérique & IA, gestion financière. Inscris-toi ici : " +
    PROJET.urlPage;
  return `https://wa.me/?text=${encodeURIComponent(texte)}`;
}
