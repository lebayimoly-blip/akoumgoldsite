import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Cloture() {
  const images = [
    "/images/cloture1.jpg",
    "/images/cloture2.jpg",
    "/images/cloture3.jpg",
    "/images/cloture4.jpg",
  ];

  return (
    <Layout>
      <section className="formation-section">
        {/* Fil d’Ariane */}
        <Breadcrumb
          items={[
            { label: "Accueil", link: "/" },
            { label: "Formation", link: "/formation" },
            { label: "Clôture & attestations" },
          ]}
        />

        <h1>📜 Cérémonie de clôture & remise d’attestation</h1>
        <p className="intro-text">
          Revivez la cérémonie de clôture et la remise des attestations
          de participation aux femmes officiellement retenues.
        </p>

        {/* Album photo interactif */}
        <PhotoAlbum images={images} />

        {/* Vidéo */}
        <div className="video-container">
          <video controls width="100%">
            <source src="/videos/cloture.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </section>
    </Layout>
  );
}
