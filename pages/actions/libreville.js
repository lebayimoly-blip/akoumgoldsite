import Layout from "../../components/Layout";

export default function Libreville() {
  return (
    <Layout>
      <h1>Formation de 100 femmes de Libreville aux AGR</h1>
      <p>
        Ce projet prévu en Octobre 2026 vise à autonomiser 100 femmes de Libreville 
        en leur offrant une formation complète aux activités génératrices de revenus. 
        Les modules incluent la gestion simplifiée, la transformation agroalimentaire 
        et l’utilisation des outils numériques pour la commercialisation.
      </p>

      <h2>Objectifs</h2>
      <ul>
        <li>Renforcer l’autonomie économique des femmes de Libreville.</li>
        <li>Développer des compétences entrepreneuriales adaptées au marché local.</li>
        <li>Promouvoir l’inclusion numérique et l’usage des outils modernes.</li>
      </ul>

      <h2>Galerie Photo</h2>
      <div className="gallery">
        <img src="/images/libreville1.jpg" alt="Formation Libreville 1" />
        <img src="/images/libreville2.jpg" alt="Formation Libreville 2" />
        <img src="/images/libreville3.jpg" alt="Formation Libreville 3" />
      </div>
    </Layout>
  );
}
