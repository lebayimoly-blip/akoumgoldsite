import Layout from "../components/Layout";

export default function Planning() {
  const events = [
    {
      title: "Avril",
      description: "Lancement des formations en alphabétisation fonctionnelle et des activités génératrices de revenus pour les femmes.",
    },
    {
      title: "Juin",
      description: "Programme d’initiation et d’accompagnement à l’exploitation cacaoyère pour les communautés rurales.",
    },
    {
      title: "Août",
      description: "Award d’Oyem – cérémonie de distinction et de valorisation des initiatives locales exemplaires.",
    },
    {
      title: "Décembre",
      description: "Merveilleuse Enfance à Oyem – grande fête dédiée aux enfants vulnérables avec activités récréatives et distributions de cadeaux.",
    },
  ];

  return (
    <Layout>
      <h1>Planning 2026</h1>
      <div className="card-grid">
        {events.map((event, index) => (
          <div key={index} className="card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
