import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Exposition() {
  const images = [
    "/images/exposition1.jpg",
    "/images/exposition2.jpg",
    "/images/exposition3.jpg",
    "/images/exposition4.jpg",
    "/images/exposition5.jpg",
    "/images/exposition6.jpg",
  ];

  return (
    <Layout>
      <section className="formation-section">
        {/* Fil d’Ariane */}
        <Breadcrumb
          items={[
            { label: "Accueil", link: "/" },
            { label: "Nos Actions", link: "/actions" },
            { label: "Exposition-Vente" },
          ]}
        />

        <h1>🛍️ Exposition-Vente pour la Fête des Mères</h1>
        <p className="intro-text">
          Organisation d’une exposition-vente mettant en valeur les produits
          fabriqués par les femmes d’Oyem, à l’occasion de la fête des mères.
          Cet événement favorise la visibilité et la valorisation des initiatives
          locales.
        </p>
        <p className="intro-text">
          Il s’agit de la <strong>deuxième exposition des femmes d’Oyem</strong>,
          organisée un mois seulement après leur formation. Elle s’est tenue
          derrière la <strong>place de l’Indépendance</strong>, avec le soutien
          de la <strong>Mairie d’Oyem</strong> et de Monsieur le Maire
          <strong> CHEN MEZUI</strong>. Les participantes ont pu réaliser des
          ventes et présenter leurs produits. Ce fut un <strong>succès total</strong> :
          les visiteurs ont découvert des saveurs locales dont ils ignoraient
          l’existence.Nous avons cloturé en remettant aux femmes des pagnes à titre 
          de cadeau pour la fête des mères
        </p>

        {/* Album photo interactif */}
        <h2>Galerie Photo</h2>
        <PhotoAlbum images={images} />

        {/* Vidéos officielles hébergées sur YouTube */}
        <h2>🎥 Vidéos de l’événement</h2>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/jdtWmpDzSIQ"
            title="Exposition vidéo 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/Qs03bfEuCQ8"
            title="Exposition vidéo 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/ikKFvwUKBuc"
            title="Exposition vidéo 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
