// utils/api.js

// URL du backend : en local ou sur Render
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Exemple d'appel API avec fetch
export async function getStats() {
  const res = await fetch(`${API_URL}/api/v1/stats`);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des statistiques");
  }
  return res.json();
}

// Exemple d'appel API pour créer un participant
export async function createParticipant(data) {
  const res = await fetch(`${API_URL}/api/v1/participants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Erreur lors de l'enregistrement du participant");
  }
  return res.json();
}
