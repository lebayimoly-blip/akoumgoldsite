import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Enfance() {
  const images = [
    "/images/enfance1.jpg",
    "/images/enfance2.jpg",
    "/images/enfance3.jpg",
    "/images/enfance4.jpg",
  ];

  return (
    <Layout>
      <section className="formation-section">
        {/* Fil d’Ariane */}
        <Breadcrumb
          items={[
            { label: "Accueil", link: "/" },
            { label: "Nos Actions", link: "/actions" },
            { label: "Merveilleuse Enfance à Oyem" },
          ]}
        />

        <h1>🎈 Merveilleuse Enfance à Oyem</h1>
        <p className="intro-text">
          Grande fête dédiée aux enfants vulnérables : activités récréatives,
          distributions de cadeaux et moments de joie. Cet événement vise à
          redonner le sourire aux enfants et à promouvoir l’inclusion sociale.
        </p>
        <p className="intro-text">
          L’événement a été accompagné par la <strong>Mairie d’Oyem</strong> et
          Monsieur le Maire <strong>CHEN MEZUI</strong>, témoignant du soutien
          institutionnel et communautaire à cette initiative.
        </p>

        {/* Album photo interactif */}
        <h2>Galerie Photo</h2>
        <PhotoAlbum images={images} />

        {/* Vidéos officielles */}
        <h2>🎥 Vidéos de l’événement</h2>
        <div className="video-grid">
          <video controls width="100%">
            <source src="/videos/enfancevideo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
          <video controls width="100%">
            <source src="/videos/enfance2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </section>
    </Layout>
  );
}
