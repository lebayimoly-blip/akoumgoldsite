import Layout from "../../components/Layout";
import Link from "next/link";

export default function Formation() {
  return (
    <Layout>
      <section className="formation-section">
        <h1>Formation 360° des femmes d’Oyem</h1>
        <p className="intro-text">
          Programme complet de formation pour renforcer les compétences
          entrepreneuriales et génératrices de revenus des femmes.
          <strong> 175 participantes</strong> ont bénéficié de ce projet,
          favorisant leur autonomie économique et sociale.
        </p>

        {/* Contexte et bilan */}
        <div className="context-card">
          <h2>Contexte & Objectifs</h2>
          <p>
            Dans un contexte marqué par des inégalités persistantes entre les genres,
            l’ONG Akoum Gold, Parrainée par PARFAIT DUFFY BIBANG, entrepreneur et natif de la localité,l'ONG a organisé un ambitieux atelier multidisciplinaire à Oyem,
            du 13 au 17 avril 2025. L’objectif central était de doter les femmes
            de compétences concrètes dans la transformation agroalimentaire,
            la savonnerie, le numérique et l’alphabétisation.
          </p>
          <p>
            Initialement prévu pour 100 participantes, l’atelier a mobilisé
            <strong> 175 femmes</strong>, preuve de l’engouement et de la nécessité
            de ce programme.
          </p>
        </div>

        {/* Galerie */}
        <h2>Galerie Photo</h2>
        <div className="gallery">
          <img src="/images/formation1.jpg" alt="Formation Oyem 1" />
          <img src="/images/formation2.jpg" alt="Formation Oyem 2" />
          <img src="/images/formation3.jpg" alt="Formation Oyem 3" />
        </div>

        {/* Boutons vers sous-pages */}
        <div className="formation-buttons">
          <Link href="/formation/ouverture" className="cta-button">
            🎉 Voir la cérémonie d’ouverture
          </Link>
          <Link href="/formation/ateliers" className="cta-button">
            🛠️ Voir le déroulé des formations & ateliers pratiques
          </Link>
          <Link href="/formation/cloture" className="cta-button">
            📜 Voir la cérémonie de clôture & remise d’attestation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
