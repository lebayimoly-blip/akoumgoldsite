import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import InscriptionMakokouForm from "../../components/InscriptionMakokouForm";
import PlacesRestantesMakokou from "../../components/PlacesRestantesMakokou";
import { PROJET, lienWhatsAppInscription } from "../../data/makokou";
import styles from "../../styles/ProjetMakokou.module.css";
import { FaArrowLeft, FaGift, FaClock, FaCalendarAlt, FaUsers, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const DESCRIPTION =
  "Inscrivez-vous gratuitement au projet de formation et d’autonomisation des femmes et des jeunes de Makokou (novembre 2026). 100 places, premiers inscrits prioritaires.";

export default function InscriptionMakokou() {
  return (
    <Layout>
      <Head>
        <title>Formulaire d’inscription — Projet Makokou 2026 | ONG Akoum Gold</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PROJET.urlInscription} />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Inscription — 100 femmes et jeunes filles de Makokou" key="og:title" />
        <meta property="og:description" content={DESCRIPTION} key="og:description" />
        <meta property="og:url" content={PROJET.urlInscription} key="og:url" />
        <meta property="og:image" content="https://akoumgoldweb.onrender.com/images/makokou/og-makokou.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:locale" content="fr_FR" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.page}>
        <section className={styles.formHero}>
          <div className={styles.wrap}>
            <Link href="/makokou" className={styles.backLink}>
              <FaArrowLeft /> Découvrir le projet
            </Link>
            <span className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" /> Inscriptions ouvertes
            </span>
            <h1 className={styles.formHeroTitle}>Formulaire d’inscription</h1>
            <p className={styles.formHeroSub}>{PROJET.intitule}</p>
            <ul className={styles.pillRow}>
              <li><FaUsers /> 100 places</li>
              <li><FaGift /> Inscription gratuite</li>
              <li><FaCalendarAlt /> Novembre 2026</li>
              <li><FaClock /> 2 minutes</li>
            </ul>
          </div>
        </section>

        <div className={styles.formLayout}>
          <InscriptionMakokouForm />

          <aside className={styles.formAside}>
            <PlacesRestantesMakokou />

            <div className={styles.asideCard}>
              <h3>Bon à savoir</h3>
              <p>
                Les candidatures sont étudiées par l’ONG Akoum Gold et ses partenaires. L’inscription ne
                garantit pas automatiquement une place : les premiers inscrits sont prioritaires.
              </p>
            </div>

            <div className={styles.asideCard}>
              <h3>Pas à l’aise avec internet ?</h3>
              <p>Inscrivez-vous directement par WhatsApp ou par téléphone.</p>
              <a
                href={lienWhatsAppInscription()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <FaWhatsapp /> S’inscrire par WhatsApp
              </a>
              <p style={{ margin: "12px 0 0" }}>
                <FaPhoneAlt />{" "}
                {PROJET.telephones.map((t, i) => (
                  <span key={t.lien}>
                    {i > 0 && " / "}
                    <a href={`tel:${t.lien}`}>{t.affiche}</a>
                  </span>
                ))}
                <br />
                <a href={`mailto:${PROJET.email}`}>{PROJET.email}</a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
