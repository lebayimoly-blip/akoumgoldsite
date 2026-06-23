import Layout from "../../components/Layout";

export default function Enfance() {
  return (
    <Layout>
      <h1>Merveilleuse Enfance à Oyem</h1>
      <p>
        Grande fête dédiée aux enfants vulnérables : activités récréatives,
        distributions de cadeaux et moments de joie. Cet événement vise à
        redonner le sourire aux enfants et à promouvoir l’inclusion sociale.
      </p>

      <h2>Galerie Photo</h2>
      <div className="gallery">
        <img src="/images/enfance1.jpg" alt="Enfance Oyem 1" />
        <img src="/images/enfance2.jpg" alt="Enfance Oyem 2" />
        <img src="/images/enfance3.jpg" alt="Enfance Oyem 3" />
      </div>
    </Layout>
  );
}
