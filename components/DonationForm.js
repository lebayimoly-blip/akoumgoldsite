import { useState } from "react";
import { FaMobileAlt, FaCopy, FaCheck, FaWhatsapp } from "react-icons/fa";
import { lienWhatsAppDon } from "../data/evenements";
import styles from "../styles/DonationForm.module.css";

const ETAPES = [
  "Ouvrez l’application ou le menu Airtel Money sur votre téléphone.",
  "Envoyez le montant de votre choix au numéro ci-dessus.",
  "Remplissez le formulaire puis cliquez sur « Confirmer mon don ».",
];

export default function DonationForm({ evenement }) {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    montant: "",
    reference: "",
  });
  const [copie, setCopie] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopier = async () => {
    const numero = evenement.don.numeroAirtelMoney.replace(/\s/g, "");
    try {
      await navigator.clipboard.writeText(numero);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      // Presse-papiers indisponible : le numéro reste affiché à l'écran, rien à faire.
    }
  };

  const handleConfirmer = () => {
    if (!form.nom.trim() || !form.telephone.trim() || !form.montant.trim()) {
      setErreur("Merci de renseigner au minimum votre nom, votre téléphone et le montant du don.");
      return;
    }
    setErreur("");
    window.open(lienWhatsAppDon(evenement, form), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="don" className={styles.section}>
      <h2 className={styles.title}>Faire un don</h2>
      <p className={styles.lead}>
        Votre don est versé directement via <strong>Airtel Money</strong>, sans intermédiaire.
        Une fois votre dépôt effectué, confirmez-le ci-contre pour que l’ONG Akoum Gold vous
        recontacte et vous délivre un reçu.
      </p>

      <div className={styles.grid}>
        <div className={styles.airtelCard}>
          <span className={styles.airtelTag}>
            <FaMobileAlt /> Dépôt Airtel Money
          </span>

          <div className={styles.airtelNumberRow}>
            <span className={styles.airtelNumber}>{evenement.don.numeroAirtelMoney}</span>
            <button type="button" className={styles.copyBtn} onClick={handleCopier}>
              {copie ? <FaCheck /> : <FaCopy />}
              {copie ? "Copié" : "Copier"}
            </button>
          </div>

          <ol className={styles.steps}>
            {ETAPES.map((etape, i) => (
              <li key={etape}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <span>{etape}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.formCard}>
          <div className={styles.field}>
            <label htmlFor="don-nom">Nom &amp; prénom *</label>
            <input id="don-nom" type="text" name="nom" value={form.nom} onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="don-telephone">Téléphone *</label>
            <input id="don-telephone" type="tel" name="telephone" value={form.telephone} onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="don-email">Email (optionnel)</label>
            <input id="don-email" type="email" name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label htmlFor="don-montant">Montant du don (FCFA) *</label>
            <input id="don-montant" type="number" name="montant" value={form.montant} onChange={handleChange} min="500" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="don-reference">Référence de la transaction (optionnel)</label>
            <input id="don-reference" type="text" name="reference" value={form.reference} onChange={handleChange} />
          </div>

          {erreur && <p className={styles.error}>{erreur}</p>}

          <button type="button" className={styles.submit} onClick={handleConfirmer}>
            <FaWhatsapp /> Confirmer mon don sur WhatsApp
          </button>

          <p className={styles.privacy}>
            Vos informations servent uniquement à confirmer votre don et à vous recontacter si
            nécessaire — elles ne sont jamais partagées.
          </p>
        </div>
      </div>
    </section>
  );
}
