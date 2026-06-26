import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Ouverture() {
  const images = [
    "/images/ouverture1.jpg",
    "/images/ouverture2.jpg",
    "/images/ouverture3.jpg",
    "/images/ouverture4.jpg",
  ];

  return (
    <Layout>
      <section className="formation-section">
        {/* Fil d’Ariane */}
        <Breadcrumb
          items={[
            { label: "Accueil", link: "/" },
            { label: "Formation", link: "/formation" },
            { label: "Cérémonie d’ouverture" },
          ]}
        />

        <h1>🎉 Cérémonie d’ouverture</h1>
        <p className="intro-text">
          Revivez les moments forts de la cérémonie d’ouverture de l’atelier
          d’autonomisation des femmes à Oyem, sous le haut parrainage de
          Monsieur Parfait Duffy Bibang.
        </p>

        {/* Album photo interactif */}
        <PhotoAlbum images={images} />

        {/* Vidéo officielle YouTube */}
        <h2>🎥 Vidéo de la cérémonie</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/EdyCzZCDLyY"
            title="Cérémonie d’ouverture Oyem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
