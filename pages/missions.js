import Layout from "../components/Layout";

export default function Missions() {
  const missions = [
    "Soutien aux enfants vulnérables : moral, éducatif et social",
    "Inclusion & Bien-être : activités éducatives, culturelles et récréatives",
    "Autonomisation des femmes : formations et AGR",
    "Entrepreneuriat féminin : développement des compétences",
    "Sensibilisation communautaire : solidarité et inclusion sociale",
  ];

  const upcoming = [
    {
      month: "Août",
      description: "Formation sur la culture du cacao – programme prévu pour initier les communautés rurales à la culture et à l’exploitation du cacao.",
    },
    {
      month: "Septembre",
      description: "Formation aux AGR de 100 femmes à Makokou – renforcement des compétences entrepreneuriales des femmes.",
    },
    {
      month: "Octobre",
      description: "Formation de 100 femmes de Libreville aux AGR – autonomisation des femmes à travers les activités génératrices de revenus.",
    },
  ];

  return (
    <Layout>
      <h1>Nos Missions</h1>
      <p className="intro-text">
        Notre ONG œuvre chaque jour pour bâtir une société plus inclusive et solidaire. 
        Voici nos principales missions et les actions prévues pour 2026.
      </p>

      <div className="missions-grid">
        {missions.map((mission, index) => (
          <div key={index} className="mission-card">
            <p>{mission}</p>
          </div>
        ))}
      </div>

      <h2>Actions prévues en 2026</h2>
      <div className="upcoming-grid">
        {upcoming.map((event, index) => (
          <div key={index} className="upcoming-card">
            <span className="upcoming-month">{event.month}</span>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
