// Inscriptions au projet Makokou — enregistrement dans Supabase.
//
// Projet Supabase : « akoum-gold » (organisation lebayimoly-blip's Org)
// Table          : public.inscriptions_makokou
//
// La clé ci-dessous est une clé PUBLIQUE (« publishable ») : elle peut être
// dans le code du site. La base est protégée : le public peut uniquement
// AJOUTER une inscription, jamais lire la liste. Pour consulter / exporter
// les inscriptions : supabase.com → projet akoum-gold → Table Editor →
// inscriptions_makokou → Export → CSV (s'ouvre dans Excel).

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vnowwavsxzlbwcuzomoh.supabase.co";
export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_WBMnbF9FioC5OYChjZN5pg_nU3DP_4j";

const HEADERS = {
  apikey: SUPABASE_KEY,
  "Content-Type": "application/json",
};

async function fetchAvecDelai(url, options, delaiMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), delaiMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Nombre de places restantes sur 100 (null si indisponible)
export async function getPlacesRestantes() {
  try {
    const res = await fetchAvecDelai(
      `${SUPABASE_URL}/rest/v1/rpc/places_restantes_makokou`,
      { method: "POST", headers: HEADERS, body: "{}" },
      10000
    );
    if (!res.ok) return null;
    const valeur = await res.json();
    return typeof valeur === "number" ? valeur : null;
  } catch {
    return null;
  }
}

// Enregistre une inscription.
// Retourne { ok: true } ou { ok: false, raison: "doublon" | "invalide" | "reseau" | "serveur" }
export async function enregistrerInscription(inscription) {
  let res;
  try {
    res = await fetchAvecDelai(`${SUPABASE_URL}/rest/v1/inscriptions_makokou`, {
      method: "POST",
      headers: { ...HEADERS, Prefer: "return=minimal" },
      body: JSON.stringify(inscription),
    });
  } catch {
    return { ok: false, raison: "reseau" };
  }

  if (res.status === 201 || res.status === 204) return { ok: true };
  if (res.status === 409) return { ok: false, raison: "doublon" };
  if (res.status === 400) return { ok: false, raison: "invalide" };
  return { ok: false, raison: "serveur" };
}
