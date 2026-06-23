import Layout from "../components/Layout";

export default function About() {
  const members = [
    { name: "Stevie OYANE DIABATE", role: "Présidente", details: "Diplômée en Management des affaires, elle incarne la vision et la détermination de l’ONG.", photo: "/images/equipe/stevie.jpg" },
    { name: "NGO YOGO JACQUIE", role: "Vice-Présidente", details: "Spécialiste en coordination des programmes, elle veille à la cohérence et à l’efficacité des actions.", photo: "/images/equipe/jacquie.jpg" },
    { name: "Soulounganga Esther Grâce", role: "Secrétaire Générale", details: "Responsable de la gestion administrative, elle assure le bon fonctionnement interne.", photo: "/images/equipe/esther.jpg" },
    { name: "MOUMBANGOU Horry Vahid", role: "Trésorier", details: "Expert en gestion financière et comptabilité, garant de la transparence et de la rigueur.", photo: "/images/equipe/horry.jpg" },
    { name: "MOUTANGANI ALIXE PRISCA", role: "Chargée de Relations Ext.", details: "Elle développe les relations partenariales et externes pour renforcer notre rayonnement.", photo: "/images/equipe/alixe.jpg" },
    { name: "LEBAYI ONGUELE Moly", role: "Marketing & Stratégie", details: "Architecte de la stratégie et du développement, il impulse l’innovation et la visibilité.", photo: "/images/equipe/moly.jpg" },
    { name: "Gabrielle ENDELLE", role: "Commissaire aux Comptes", details: "Chargée de l’audit financier et du contrôle interne, elle garantit la crédibilité de nos actions.", photo: "/images/equipe/gabrielle.jpg" },
  ];

  return (
    <Layout>
      <h1>Qui sommes-nous ?</h1>
      <p className="intro-text">
        L'ONG Akoum Gold est une organisation à vocation sociale et humanitaire,
        engagée pour l'amélioration des conditions de vie des populations vulnérables.
      </p>
      <p>
        Nous sommes un groupe d’entrepreneurs et de diplômés expérimentés dans divers secteurs,
        animés par la volonté de promouvoir le bien-être social, de transmettre le savoir
        et surtout de favoriser l’autonomisation des personnes vulnérables.
      </p>
      <p>
        Notre force réside dans la diversité de nos parcours et la complémentarité de nos compétences,
        qui nous permettent d’apporter des solutions concrètes et durables aux défis sociaux.
      </p>

      <h2>Notre Histoire & Vision</h2>
      <p>
        Notre organisation est née de la volonté de transformer l’engagement individuel en une force collective.
        Nous croyons qu’en conjuguant solidarité, inclusion et expertise, nous pouvons bâtir une société
        où chaque enfant et chaque femme trouvent leur place et leur dignité.
      </p>

      <h2>Nos valeurs</h2>
      <ul className="values-list">
        <li><strong>Solidarité :</strong> unir nos forces pour soutenir les plus fragiles.</li>
        <li><strong>Inclusion :</strong> garantir à chacun une place dans la société.</li>
        <li><strong>Développement :</strong> impulser des projets durables et porteurs d’avenir.</li>
        <li><strong>Dignité :</strong> défendre le respect et l’autonomie de chaque personne.</li>
      </ul>

      <h2>Notre Équipe</h2>
      <div className="card-grid">
        {members.map((member, index) => (
          <div key={index} className="card">
            <img src={member.photo} alt={member.name} className="card-photo" />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.details}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
