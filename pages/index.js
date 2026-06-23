import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const accomplished = [
    {
      title: "Merveilleuse Enfance à Oyem",
      description: "Grande fête dédiée aux enfants vulnérables avec activités récréatives et distributions de cadeaux.",
      image: "/images/enfance.jpg",
      link: "/actions/enfance"
    },
    {
      title: "Formation 360° des femmes d’Oyem",
      description: "175 femmes formées aux activités génératrices de revenus pour renforcer leur autonomie.",
      image: "/images/formation.jpg",
      link: "/actions/formation"
    },
    {
      title: "Exposition-Vente pour la Fête des Mères",
      description: "Valorisation des produits fabriqués par les femmes d’Oyem lors d’une exposition-vente.",
      image: "/images/exposition.jpg",
      link: "/actions/exposition"
    },
  ];

  const upcoming = [
    {
      month: "Août",
      title: "Formation sur la culture du cacao",
      description: "Programme prévu pour initier les communautés rurales à la culture et à l’exploitation du cacao.",
      image: "/images/cacao.jpg",
      link: "/actions/cacao"
    },
    {
      month: "Septembre",
      title: "Formation aux AGR de 100 femmes à Makokou",
      description: "Renforcement des compétences entrepreneuriales des femmes de Makokou.",
      image: "/images/makokou.jpg",
      link: "/actions/makokou"
    },
    {
      month: "Octobre",
      title: "Formation de 100 femmes de Libreville aux AGR",
      description: "Programme pour autonomiser les femmes de Libreville à travers les activités génératrices de revenus.",
      image: "/images/libreville.jpg",
      link: "/actions/libreville"
    },
  ];

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>Ensemble pour la réussite</h1>
          <p>
            Solidarité, inclusion et développement communautaire.
            Chaque enfant mérite de grandir dans la dignité et chaque femme
            doit pouvoir devenir actrice de son propre développement.
          </p>
          <a href="/soutenir" className="hero-button">Nous soutenir</a>
        </div>
      </section>

      <section>
        <h2>Nos récents accomplissements</h2>
        <div className="card-grid">
          {accomplished.map((action, index) => (
            <Link key={index} href={action.link}>
              <div className="card">
                <img src={action.image} alt={action.title} className="card-photo" />
                <h2>{action.title}</h2>
                <p>{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Nos actions à venir</h2>
        <div className="timeline">
          {upcoming.map((action, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-month">{action.month}</span>
                <Link href={action.link}>
                  <div className="card">
                    <img src={action.image} alt={action.title} className="card-photo" />
                    <h2>{action.title}</h2>
                    <p>{action.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
