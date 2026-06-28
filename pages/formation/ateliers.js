import Layout from "../../components/Layout";
import PhotoAlbum from "../../components/PhotoAlbum";
import Breadcrumb from "../../components/Breadcrumb";

export default function Ateliers() {
  const images = [
    "/images/atelier1.jpg",
    "/images/atelier2.jpg",
    "/images/atelier3.jpg",
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
          gestion financière, transformation du manioc et bien plus encore.
        </p>

        {/* Album photo interactif */}
        <PhotoAlbum images={images} />

        {/* Atelier Savonnerie artisanale */}
        <div className="atelier-block">
          <h2>🎥 Atelier Savonnerie artisanale</h2>
          <p className="video-description">
            Formation pratique animée par l’expert Alain Moussavou, initiant les
            participantes à la fabrication de savons naturels à base de peau de
            banane et autres ressources locales, valorisant ainsi les déchets
            organiques en produits à forte valeur ajoutée.
          </p>
          <div className="video-row">
            <iframe
              width="48%"
              height="300"
              src="https://www.youtube.com/embed/iHxoKCPtALg"
              title="Atelier Savonnerie Vidéo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="48%"
              height="300"
              src="https://www.youtube.com/embed/RofRF5oPpvs"
              title="Atelier Savonnerie Vidéo 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Atelier Gestion financière */}
        <div className="atelier-block">
          <h2>💰 Atelier Confiance en soi & Gestion financière</h2>
          <p className="video-description">
            Module animé par Jacquie Yogo, axé sur la confiance en soi et la
            maîtrise des bases de la gestion financière : distinction entre
            finances personnelles et professionnelles, tenue d’un cahier de
            caisse simplifié et introduction aux mécanismes d’épargne et de
            microcrédit.
          </p>
          <div className="video-row">
            <iframe
              width="48%"
              height="300"
              src="https://www.youtube.com/embed/4Rva4l16eAY"
              title="Atelier Gestion financière Vidéo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Atelier IA */}
        <div className="atelier-block">
          <h2>🤖 Atelier Numérique & Intelligence Artificielle</h2>
          <p className="video-description">
            Formation conduite par Lebayi Onguele Moly, initiant les femmes aux
            usages concrets du numérique et de l’IA : smartphone comme outil
            commercial, création de profils en ligne et découverte d’assistants
            IA pour faciliter la rédaction et la promotion des produits.
          </p>
          <div className="video-row">
            <iframe
              width="48%"
              height="300"
              src="https://www.youtube.com/embed/oey53591sM0"
              title="Atelier IA Vidéo 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="48%"
              height="300"
              src="https://www.youtube.com/embed/W7GEuQxUWmg"
              title="Atelier IA Vidéo 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
