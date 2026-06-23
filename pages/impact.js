import Layout from "../components/Layout";

export default function Impact() {
  const stats = [
    { number: "500+", label: "Enfants bénéficiaires", color: "#3366cc" },
    { number: "200+", label: "Femmes formées", color: "var(--secondary-color)" },
    { number: "20+", label: "Activités organisées", color: "var(--accent-color)" },
    { number: "10+", label: "Communautés touchées", color: "#6c63ff" }, // violet premium
  ];

  const actions = [
    {
      id: "enfance",
      title: "Merveilleuse Enfance à Oyem (Décembre)",
      description: "Grande fête dédiée aux enfants vulnérables : activités récréatives, distributions de cadeaux et moments de joie.",
      image: "/images/enfance.jpg",
    },
    {
      id: "formation",
      title: "Formation 360° de 175 femmes d’Oyem aux AGR",
      description: "Programme complet de formation pour renforcer les compétences entrepreneuriales et génératrices de revenus des femmes.",
      image: "/images/formation.jpg",
    },
    {
      id: "exposition",
      title: "Exposition-Vente pour la Fête des Mères",
      description: "Organisation d’une exposition-vente mettant en valeur les produits fabriqués par les femmes d’Oyem, à l’occasion de la fête des mères.",
      image: "/images/exposition.jpg",
    },
  ];

  return (
    <Layout>
      <h1>Notre Impact pour 2026</h1>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ backgroundColor: stat.color }}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <h2>Nos Actions Concrètes</h2>
      <div className="card-grid">
        {actions.map((action) => (
          <div key={action.id} id={action.id} className="card">
            <img src={action.image} alt={action.title} className="card-photo" />
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
