import Layout from "../../components/Layout";

export default function Formation() {
  return (
    <Layout>
      <h1>Formation 360° des femmes d’Oyem</h1>
      <p>
        Programme complet de formation pour renforcer les compétences
        entrepreneuriales et génératrices de revenus des femmes. 175 femmes
        ont bénéficié de ce projet, favorisant leur autonomie économique.
      </p>

      <h2>Galerie Photo</h2>
      <div className="gallery">
        <img src="/images/formation1.jpg" alt="Formation Oyem 1" />
        <img src="/images/formation2.jpg" alt="Formation Oyem 2" />
        <img src="/images/formation3.jpg" alt="Formation Oyem 3" />
      </div>
    </Layout>
  );
}
