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

        {/* Vidéo */}
        <div className="video-container">
          <video controls width="100%">
            <source src="/videos/ouverture.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </section>
    </Layout>
  );
}
