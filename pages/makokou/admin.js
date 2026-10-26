import { useMemo, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { listerInscriptions } from "../../utils/inscriptionsMakokou";
import { creerClasseurXlsx, telechargerBlob } from "../../utils/xlsx";
import { ATELIERS } from "../../data/makokou";
import styles from "../../styles/ProjetMakokou.module.css";
import { FaLock, FaFileExcel, FaSignOutAlt, FaSyncAlt, FaSearch } from "react-icons/fa";

// Page privée (non référencée, non liée) : liste des inscrits au projet Makokou
// et téléchargement en Excel. Le mot de passe est vérifié par la base Supabase ;
// il n'est jamais enregistré dans le navigateur.

const MESSAGES = {
  mot_de_passe: "Mot de passe incorrect.",
  trop_de_tentatives: "Trop d’essais ratés. Réessayez dans 15 minutes.",
  non_configure: "L’accès n’est pas encore configuré (mot de passe à définir dans Supabase).",
  reseau: "Connexion impossible. Vérifiez votre connexion internet.",
  serveur: "Le serveur n’a pas répondu correctement. Réessayez dans un instant.",
};

const STATUTS = {
  nouvelle: "Nouvelle",
  retenue: "Retenue",
  liste_attente: "Liste d’attente",
  annulee: "Annulée",
};

const formatDate = (iso) =>
  new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Africa/Libreville",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));

export default function AdminMakokou() {
  const [motDePasse, setMotDePasse] = useState("");
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState("");
  const [donnees, setDonnees] = useState(null); // { inscriptions, genere_le }
  const [recherche, setRecherche] = useState("");

  const charger = async (e) => {
    if (e) e.preventDefault();
    if (!motDePasse || chargement) return;
    setChargement(true);
    setErreur("");
    const r = await listerInscriptions(motDePasse);
    setChargement(false);
    if (r.ok) {
      setDonnees({ inscriptions: r.inscriptions || [], genere_le: r.genere_le });
    } else {
      setDonnees(null);
      setErreur(MESSAGES[r.raison] || MESSAGES.serveur);
    }
  };

  const fermer = () => {
    setDonnees(null);
    setMotDePasse("");
    setRecherche("");
  };

  const inscriptions = donnees ? donnees.inscriptions : [];

  const resume = useMemo(() => {
    const actives = inscriptions.filter((i) => i.statut !== "annulee");
    const parAtelier = ATELIERS.map((a) => ({
      atelier: a,
      n: actives.filter((i) => (i.ateliers || []).includes(a)).length,
    }));
    return {
      total: actives.length,
      femmes: actives.filter((i) => i.sexe === "Femme").length,
      hommes: actives.filter((i) => i.sexe === "Homme").length,
      disponibles: actives.filter((i) => i.disponibilite === "Oui").length,
      aConfirmer: actives.filter((i) => i.disponibilite === "À confirmer").length,
      retenues: actives.filter((i) => i.statut === "retenue").length,
      parAtelier,
    };
  }, [inscriptions]);

  const visibles = useMemo(() => {
    const q = recherche.trim().toLowerCase();
    if (!q) return inscriptions;
    return inscriptions.filter((i) =>
      [i.nom, i.telephone, i.quartier].some((v) => (v || "").toLowerCase().includes(q))
    );
  }, [inscriptions, recherche]);

  const telecharger = () => {
    const colonnes = [
      { titre: "N°", largeur: 6 },
      { titre: "Date d’inscription", largeur: 18 },
      { titre: "Nom et prénom(s)", largeur: 30 },
      { titre: "Sexe", largeur: 9 },
      { titre: "Âge", largeur: 6 },
      { titre: "Téléphone", largeur: 18 },
      { titre: "Quartier ou village", largeur: 22 },
      { titre: "Ateliers souhaités", largeur: 48 },
      { titre: "Disponible 7 jours", largeur: 16 },
      { titre: "Motivation", largeur: 48 },
      { titre: "Statut", largeur: 15 },
    ];
    const lignes = inscriptions.map((i, index) => [
      index + 1,
      formatDate(i.date),
      i.nom,
      i.sexe,
      typeof i.age === "number" ? i.age : Number(i.age) || "",
      i.telephone,
      i.quartier,
      (i.ateliers || []).join(", "),
      i.disponibilite,
      i.motivation || "",
      STATUTS[i.statut] || i.statut,
    ]);
    const blob = creerClasseurXlsx({ nomFeuille: "Inscrits Makokou", colonnes, lignes });
    const jour = new Intl.DateTimeFormat("fr-CA", { timeZone: "Africa/Libreville" }).format(new Date());
    telechargerBlob(blob, `inscrits-makokou-${jour}.xlsx`);
  };

  return (
    <Layout>
      <Head>
        <title>Liste des inscrits — Projet Makokou | ONG Akoum Gold</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className={styles.page}>
        <section className={styles.formHero}>
          <div className={styles.wrap}>
            <span className={styles.badge}>
              <FaLock /> Espace réservé à l’ONG
            </span>
            <h1 className={styles.formHeroTitle}>Liste des inscrits</h1>
            <p className={styles.formHeroSub}>
              Projet d’autonomisation des femmes et des jeunes de Makokou – 2026
            </p>
          </div>
        </section>

        <div className={styles.adminLayout}>
          {!donnees ? (
            <form className={`${styles.formCard} ${styles.adminLogin}`} onSubmit={charger}>
              <h2 className={styles.formTitle}>Accès protégé</h2>
              <p className={styles.formIntro}>Saisissez le mot de passe de l’ONG pour afficher la liste.</p>
              {erreur && (
                <div className={`${styles.alert} ${styles.alertError}`} role="alert">
                  <span>{erreur}</span>
                </div>
              )}
              <div className={styles.field}>
                <label htmlFor="admin-mdp">Mot de passe</label>
                <input
                  id="admin-mdp"
                  className={styles.input}
                  type="password"
                  autoComplete="current-password"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                />
              </div>
              <div className={styles.formFooter}>
                <button type="submit" className={styles.submit} disabled={chargement || !motDePasse}>
                  {chargement ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" /> Vérification…
                    </>
                  ) : (
                    "Afficher la liste"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className={styles.formCard}>
              <div className={styles.adminToolbar}>
                <div>
                  <h2 className={styles.formTitle}>
                    {resume.total} inscrit{resume.total > 1 ? "s" : ""}
                  </h2>
                  <p className={styles.formIntro}>Liste à jour du {formatDate(donnees.genere_le)}</p>
                </div>
                <div className={styles.adminActions}>
                  <button type="button" className={styles.btnGold} onClick={telecharger} disabled={!inscriptions.length}>
                    <FaFileExcel /> Télécharger en Excel
                  </button>
                  <button type="button" className={styles.btnOutline} onClick={() => charger()}>
                    <FaSyncAlt /> Actualiser
                  </button>
                  <button type="button" className={styles.linkButton} onClick={fermer}>
                    <FaSignOutAlt /> Fermer
                  </button>
                </div>
              </div>

              <ul className={styles.adminStats}>
                <li><strong>{resume.femmes}</strong> femmes</li>
                <li><strong>{resume.hommes}</strong> hommes</li>
                <li><strong>{resume.disponibles}</strong> disponibles les 7 jours</li>
                <li><strong>{resume.aConfirmer}</strong> à confirmer</li>
                <li><strong>{resume.retenues}</strong> retenu(e)s</li>
              </ul>

              <details className={styles.adminAteliers}>
                <summary>Intérêt par atelier</summary>
                <ul>
                  {resume.parAtelier.map((a) => (
                    <li key={a.atelier}>
                      <span>{a.atelier}</span>
                      <strong>{a.n}</strong>
                    </li>
                  ))}
                </ul>
              </details>

              <div className={styles.adminSearch}>
                <FaSearch aria-hidden="true" />
                <input
                  className={styles.input}
                  type="search"
                  placeholder="Rechercher un nom, un numéro, un quartier…"
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
              </div>

              {visibles.length === 0 ? (
                <p className={styles.formIntro}>Aucune inscription à afficher.</p>
              ) : (
                <div className={styles.adminTableWrap}>
                  <table className={styles.adminTable}>
                    <thead>
                      <tr>
                        <th>N°</th>
                        <th>Date</th>
                        <th>Nom et prénom(s)</th>
                        <th>Sexe</th>
                        <th>Âge</th>
                        <th>Téléphone</th>
                        <th>Quartier</th>
                        <th>Ateliers</th>
                        <th>Dispo.</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibles.map((i) => (
                        <tr key={i.numero} className={i.statut === "annulee" ? styles.adminRowOff : ""}>
                          <td>{inscriptions.indexOf(i) + 1}</td>
                          <td>{formatDate(i.date)}</td>
                          <td>
                            <strong>{i.nom}</strong>
                            {i.motivation && <span className={styles.adminMotivation}>{i.motivation}</span>}
                          </td>
                          <td>{i.sexe}</td>
                          <td>{i.age}</td>
                          <td>
                            <a href={`tel:${(i.telephone || "").replace(/[^\d+]/g, "")}`}>{i.telephone}</a>
                          </td>
                          <td>{i.quartier}</td>
                          <td>{(i.ateliers || []).join(", ")}</td>
                          <td>{i.disponibilite}</td>
                          <td>{STATUTS[i.statut] || i.statut}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className={styles.notice}>
                Ces données sont personnelles : ne les partagez qu’avec les personnes chargées de l’organisation.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
