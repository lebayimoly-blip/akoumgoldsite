// Adresse publique du site (utilisée pour les liens de partage, l'image
// d'aperçu WhatsApp/Facebook et les URL canoniques).
// Hébergement : Netlify (projet « ong-akoumgold »), sous-domaine d'olouomolab.com.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ong-akoumgold.olouomolab.com").replace(/\/$/, "");
