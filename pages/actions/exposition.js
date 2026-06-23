import Layout from "../../components/Layout";

export default function Exposition() {
  return (
    <Layout>
      <h1>Exposition-Vente pour la Fête des Mères</h1>
      <p>
        Organisation d’une exposition-vente mettant en valeur les produits
        fabriqués par les femmes d’Oyem, à l’occasion de la fête des mères.
        Cet événement favorise la visibilité et la valorisation des initiatives
        locales.
      </p>

      <h2>Galerie Photo</h2>
      <div className="gallery">
        <img src="/images/exposition1.jpg" alt="Exposition Oyem 1" />
        <img src="/images/exposition2.jpg" alt="Exposition Oyem 2" />
        <img src="/images/exposition3.jpg" alt="Exposition Oyem 3" />
      </div>
    </Layout>
  );
}
