// Événements & campagnes de dons — ONG Akoum Gold
//
// PHOTO : déposez le visuel de l'événement dans /public/images/evenements/
// avec exactement le nom indiqué dans le champ "image" ci-dessous.
// Tant qu'elle est absente, un cadre "Photo à venir" s'affiche à la place.
//
// DON — Airtel Money : "numeroAirtelMoney" est affiché tel quel sur le site.
// "whatsappConfirmation" est le numéro (format international, sans "+" ni "0")
// qui reçoit le message de confirmation envoyé par le donateur une fois son
// formulaire rempli. Par défaut on réutilise le même numéro que le dépôt
// Airtel Money — changez-le si les confirmations doivent partir ailleurs.

export const EVENEMENTS = [
  {
    id: "kits-scolaires",
    eyebrow: "Action réalisée",
    titre: "Distribution de kits scolaires — Rentrée 2026-2027",
    sousTitre: "De la maternelle à la 5ᵉ année",
    partenaires: ["2M Consulting", "Women In Logistics Africa", "ONG Akoum Gold"],
    image: "/images/evenements/kits-scolaires.jpg",
    resume:
      "300 enfants d'Oyem, de la maternelle à la 5ᵉ année, ont reçu un kit scolaire complet et adapté à leur niveau pour la rentrée 2026-2027. Merci à nos partenaires et à tous les donateurs !",
    objectif:
      "Objectif atteint : 300 enfants accompagnés pour une rentrée scolaire dans de meilleures conditions.",
    stats: [
      { chiffre: "300", label: "enfants bénéficiaires" },
      { chiffre: "150", label: "filles" },
      { chiffre: "150", label: "garçons" },
      { chiffre: "6", label: "niveaux scolaires" },
    ],
    contenuKit: [
      "Sac scolaire",
      "Trousse et fournitures scolaires",
      "Cahiers",
      "Crayons & stylos",
      "Règle et matériel de géométrie",
      "Matériel de coloriage",
      "Imperméable",
      "Ardoise",
    ],
    don: {
      numeroAirtelMoney: "077 71 48 75",
      whatsappConfirmation: "24177714875",
    },
  },
];

export function getEvenement(id) {
  return EVENEMENTS.find((e) => e.id === id);
}

export function lienWhatsAppDon(evenement, donateur) {
  const { nom, telephone, email, montant, reference } = donateur;
  const lignes = [
    `Bonjour ONG Akoum Gold, je viens d'effectuer un don Airtel Money pour : ${evenement.titre}.`,
    `Nom & prénom : ${nom}`,
    `Téléphone : ${telephone}`,
    email ? `Email : ${email}` : null,
    `Montant : ${Number(montant).toLocaleString("fr-FR")} FCFA`,
    reference ? `Référence de la transaction : ${reference}` : "Référence de la transaction : (non renseignée)",
  ].filter(Boolean);
  return `https://wa.me/${evenement.don.whatsappConfirmation}?text=${encodeURIComponent(lignes.join("\n"))}`;
}
