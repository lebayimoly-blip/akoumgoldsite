import Layout from "../../components/Layout";

export default function Makokou() {
  return (
    <Layout>
      <h1>Projet d’autonomisation des femmes de Makokou</h1>
      <p>
        Ce projet vise à renforcer les compétences des femmes et jeunes de Makokou à travers 
        l’alphabétisation fonctionnelle, l’inclusion numérique, l’initiation à l’intelligence artificielle 
        et le développement d’activités génératrices de revenus. 
        Les bénéficiaires seront formés à la fabrication de savon liquide détergent, 
        à la transformation du manioc et à la sériciculture (élevage des vers à soie).
      </p>

      <h2>Objectifs</h2>
      <ul>
        <li>Renforcer les compétences de base en lecture, écriture et calcul.</li>
        <li>Former à l’utilisation des outils numériques et applications de gestion.</li>
        <li>Initier à l’usage pratique de l’intelligence artificielle pour l’entrepreneuriat.</li>
        <li>Développer des AGR durables (savon, manioc, soie).</li>
      </ul>

      <h2>Galerie Photo</h2>
      <div className="gallery">
        <img src="/images/makokou1.jpg" alt="Formation Makokou 1" />
        <img src="/images/makokou2.jpg" alt="Formation Makokou 2" />
        <img src="/images/makokou3.jpg" alt="Formation Makokou 3" />
      </div>
    </Layout>
  );
}
