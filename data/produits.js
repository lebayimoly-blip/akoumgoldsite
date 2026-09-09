// Catalogue de la Boutique solidaire — ONG Akoum Gold
// Les achats soutiennent les activités génératrices de revenus (AGR) des femmes d'Oyem.
//
// PHOTOS : déposez les fichiers dans /public/images/produits/ avec EXACTEMENT ces noms.
// Tant qu'une photo est absente, la carte affiche un cadre "Photo à venir" (pas d'image cassée).
//
// Numéro WhatsApp de commande : ajustez CONTACT_WHATSAPP / le champ "whatsapp" si besoin
// (format international sans "+" ni "0", ex. 24177207217 pour +241 77 20 72 17).

export const CONTACT_WHATSAPP = "24177207217";

export const PRODUITS = [
  {
    id: "savon-citron",
    nom: "Savon liquide Akoum 3-en-1 — Citron",
    categorie: "Entretien",
    prix: 1500,
    image: "/images/produits/savon-citron.jpg",
    badge: "Ultra concentré",
    accroche: "Flacon violet · parfum Citron longue durée.",
    description:
      "Savon liquide multi-usages ultra concentré : nettoie, dégraisse et parfume. Idéal pour la vaisselle comme pour toutes les surfaces de la maison.",
    tags: ["3 fonctions", "Vaisselle & surfaces", "Parfum longue durée"],
    whatsapp: CONTACT_WHATSAPP,
  },
  {
    id: "savon-lavande",
    nom: "Savon liquide Akoum 3-en-1 — Lavande",
    categorie: "Entretien",
    prix: 1500,
    image: "/images/produits/savon-lavande.jpg",
    badge: "Ultra concentré",
    accroche: "Flacon rose · parfum Lavande apaisant.",
    description:
      "Savon liquide multi-usages ultra concentré : nettoie, dégraisse et parfume. Idéal pour la vaisselle comme pour toutes les surfaces de la maison.",
    tags: ["3 fonctions", "Vaisselle & surfaces", "Parfum longue durée"],
    whatsapp: CONTACT_WHATSAPP,
  },
  {
    id: "savon-ocean",
    nom: "Savon liquide Akoum 3-en-1 — Fraîcheur Océan",
    categorie: "Entretien",
    prix: 1500,
    image: "/images/produits/savon-ocean.jpg",
    badge: "Ultra concentré",
    accroche: "Flacon bleu · fraîcheur intense.",
    description:
      "Savon liquide multi-usages ultra concentré : nettoie, dégraisse et parfume. Idéal pour la vaisselle comme pour toutes les surfaces de la maison.",
    tags: ["3 fonctions", "Vaisselle & surfaces", "Parfum longue durée"],
    whatsapp: CONTACT_WHATSAPP,
  },
  {
    id: "amidon-manioc",
    nom: "Amidon de manioc 100 % naturel",
    categorie: "Alimentaire",
    prix: 1500,
    image: "/images/produits/amidon-manioc.jpg",
    badge: "100 % naturel",
    accroche: "Pur · naturel · polyvalent.",
    description:
      "Amidon de manioc obtenu à partir de racines sélectionnées, séché et tamisé. Pour la pâtisserie, les sauces et crèmes, les colles artisanales et les usages cosmétiques. Sans additif, sans conservateur, sans gluten.",
    tags: ["Sans additif", "Sans conservateur", "Sans gluten"],
    whatsapp: "24174001655",
  },
  {
    id: "chips-banane",
    nom: "Chips de banane sucré-salé",
    categorie: "Alimentaire",
    prix: 1500,
    image: "/images/produits/chips-banane.jpg",
    badge: "100 % BIO",
    accroche: "Le goût naturel, le choix sain !",
    description:
      "Chips de banane plantain croustillantes, préparées à Oyem selon une recette sucrée-salée. Sans conservateur ni additif — la gourmandise qui fait du bien.",
    tags: ["Sans conservateur", "Sans additif", "Bon pour la santé"],
    whatsapp: "24177207217",
  },
];

export function lienWhatsApp(produit) {
  const numero = produit.whatsapp || CONTACT_WHATSAPP;
  const texte = `Bonjour ONG Akoum Gold, je souhaite commander : ${produit.nom} — ${produit.prix.toLocaleString(
    "fr-FR"
  )} FCFA.`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;
}
