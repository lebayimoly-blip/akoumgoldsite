import Layout from "../components/Layout";
import { FaHandsHelping, FaBuilding, FaHeart, FaBullhorn } from "react-icons/fa";
import Link from "next/link";

export default function Soutenir() {
  const options = [
    {
      title: "Bénévolat",
      description: "En rejoignant notre équipe, vous contribuez directement à des actions qui ont déjà permis à plus de 500 enfants de retrouver le sourire et à 200 femmes de renforcer leur autonomie. Votre temps devient un moteur de changement.",
      color: "var(--primary-color)",
      icon: <FaHandsHelping size={40} />,
    },
    {
      title: "Partenariat",
      description: "Nos partenariats ont permis d’organiser plus de 20 activités et de toucher 10 communautés. En tant qu’institution ou entreprise, votre soutien amplifie notre impact et ouvre la voie à des projets durables.",
      color: "var(--secondary-color)",
      icon: <FaBuilding size={40} />,
    },
    {
      title: "Don & Parrainage",
      description: "Chaque contribution financière se traduit par des formations, des activités génératrices de revenus et des sourires retrouvés. Vos dons permettent de transformer des vies et de bâtir un avenir plus inclusif.",
      color: "var(--accent-color)",
      icon: <FaHeart size={40} />,
    },
    {
      title: "Sensibilisation",
      description: "En partageant notre mission, vous mobilisez vos réseaux autour des valeurs d’inclusion et de solidarité. Votre voix peut inspirer et rallier de nouveaux soutiens pour élargir notre impact.",
      color: "#6c63ff",
      icon: <FaBullhorn size={40} />,
    },
  ];

  return (
    <Layout>
      <h1>Nous Rejoindre & Nous Soutenir</h1>
      <p className="intro-text">
        Grâce à votre engagement, nous avons déjà touché des centaines d’enfants et de femmes. 
        Ensemble, nous pouvons aller encore plus loin et bâtir une société plus inclusive et solidaire.
      </p>

      <div className="support-grid">
        {options.map((opt, index) => (
          <div key={index} className="support-card" style={{ backgroundColor: opt.color }}>
            <div className="icon">{opt.icon}</div>
            <h2>{opt.title}</h2>
            <p>{opt.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link href="/contact" className="cta-button"> 
          Agir maintenant
        </Link>
      </div>
    </Layout>
  );
}
