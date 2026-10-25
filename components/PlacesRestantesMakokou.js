import { useEffect, useState } from "react";
import { getPlacesRestantes } from "../utils/inscriptionsMakokou";
import { PROJET } from "../data/makokou";
import styles from "../styles/ProjetMakokou.module.css";

// Compteur « X places restantes sur 100 », lu en direct dans Supabase.
// Si la base ne répond pas, on affiche simplement « 100 places ».
export default function PlacesRestantesMakokou({ className = "" }) {
  const [places, setPlaces] = useState(null);
  const [charge, setCharge] = useState(false);

  useEffect(() => {
    let actif = true;
    getPlacesRestantes().then((n) => {
      if (!actif) return;
      setPlaces(n);
      setCharge(true);
    });
    return () => {
      actif = false;
    };
  }, []);

  const total = PROJET.places;
  const connu = typeof places === "number";
  const complet = connu && places <= 0;
  const pourcentage = connu ? Math.min(100, Math.round(((total - places) / total) * 100)) : 0;

  return (
    <div className={`${styles.counter} ${!charge ? styles.counterSkeleton : ""} ${className}`} aria-live="polite">
      <div className={styles.counterTop}>
        <span className={styles.counterNumber}>{complet ? "Complet" : connu ? places : total}</span>
        <span className={styles.counterLabel}>
          {complet ? "— liste d’attente ouverte" : connu ? `place${places > 1 ? "s" : ""} restante${places > 1 ? "s" : ""} sur ${total}` : "places disponibles"}
        </span>
      </div>
      <div className={styles.counterBar} aria-hidden="true">
        <span style={{ width: `${connu ? Math.max(pourcentage, 3) : 3}%` }} />
      </div>
      <span className={styles.counterHint}>Premiers inscrits prioritaires · Inscription gratuite</span>
    </div>
  );
}
