import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Ateliers() {
  const images = [
    "/images/atelier1.jpg",
    "/images/atelier2.jpg",
    "/images/atelier3.jpg",
    "/images/atelier4.jpg",
  ];

  return (
    <Layout>
      <section className="formation-section">
        {/* Fil d’Ariane */}
        <Breadcrumb
          items={[
            { label: "Accueil", link: "/" },
            { label: "Formation", link: "/formation" },
            { label: "Ateliers pratiques" },
          ]}
        />

        <h1>🛠️ Déroulé des formations & ateliers pratiques</h1>
        <p className="intro-text">
          Découvrez les ateliers pratiques organisés à Oyem : alphabétisation,
          numérique & intelligence artificielle, savonnerie artisanale,
          transformation du manioc et bien plus encore.
        </p>

        {/* Album photo interactif */}
        <PhotoAlbum images={images} />

        {/* Vidéo */}
        <div className="video-container">
          <video controls width="100%">
            <source src="/videos/ateliers.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </section>
    </Layout>
  );
}
