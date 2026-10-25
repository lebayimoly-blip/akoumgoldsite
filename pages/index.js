import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUITS } from "../data/produits";
import EventTeaser from "../components/EventTeaser";
import { EVENEMENTS } from "../data/evenements";
import MakokouTeaser from "../components/MakokouTeaser";

export default function Home() {
  // Bannière dynamique
  const banners = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpg",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Données des accomplissements
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

  // Données des actions à venir
  const upcoming = [
    {
      month: "Août",
      title: "Formation sur la culture du cacao",
      description: "Programme prévu pour initier les communautés rurales à la culture et à l’exploitation du cacao.",
      image: "/images/cacao.jpg",
      link: "/actions/cacao"
    },
    {
      month: "Novembre",
      title: "Formation de 100 femmes et jeunes filles à Makokou",
      description: "Inscriptions ouvertes : savon, manioc, vers à soie, numérique & IA, gestion financière et prise de parole.",
      image: "/images/makokou.jpg",
      link: "/makokou"
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
      {/* Bannière dynamique */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${banners[currentBanner]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      {/* Inscriptions ouvertes : projet Makokou */}
      <MakokouTeaser />

      {/* Événement en cours */}
      {EVENEMENTS.map((ev) => (
        <EventTeaser key={ev.id} evenement={ev} />
      ))}

      {/* Accomplissements */}
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

      {/* Boutique solidaire */}
      <section className="shop-section shop-home">
        <h2>Nos produits à acheter</h2>
        <p className="intro-text">
          La Boutique solidaire d’Akoum Gold&nbsp;: des produits fabriqués par les femmes
          d’Oyem. Chaque achat finance directement leurs activités génératrices de revenus.
        </p>
        <div className="product-grid">
          {PRODUITS.map((p) => (
            <ProductCard key={p.id} produit={p} />
          ))}
        </div>
        <div className="cta-container">
          <Link href="/boutique" className="hero-button">Voir toute la boutique</Link>
        </div>
      </section>

      {/* Témoignages */}
      <section>
        <h2>Nos Témoignages</h2>
        <p className="intro-text">
          Découvrez les témoignages des bénéficiaires et des partenaires qui
          partagent leurs expériences et impressions. Ces récits reflètent
          l’impact réel de nos actions sur le terrain et la transformation
          vécue par les communautés.
        </p>
        <div className="video-grid">
          <iframe src="https://www.youtube.com/embed/aqjOFoW6TZc" title="Témoignage 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/Z6WYMYElxm4" title="Témoignage 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/6ypYlIpW8Pg" title="Témoignage 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      {/* Actions à venir */}
      <section>
        <h2>Nos actions à venir</h2>
        <p className="intro-text">
          Nous avons besoin de vous — sponsors, partenaires et bienfaiteurs — 
          pour rendre possibles ces programmes. Votre soutien permettra aux femmes 
          et aux communautés de transformer leurs compétences en véritables 
          opportunités économiques et sociales durables.
        </p>
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

        {/* Bouton formations pratiques */}
        <div className="cta-container">
          <a 
            href="http://172.16.0.2:3000/formation/ateliers" 
            className="hero-button"
          >
            Voir nos dernières formations pratiques
          </a>
        </div>
      </section>
    </Layout>
  );
}
