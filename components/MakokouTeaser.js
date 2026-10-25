import Link from "next/link";

// Encart « Inscriptions ouvertes » du projet Makokou, affiché sur l'accueil.
// Réutilise les styles .event-highlight de styles/globals.css.
export default function MakokouTeaser() {
  return (
    <section className="event-highlight">
      <div className="event-highlight-inner">
        <div className="event-photo">
          <img
            src="/images/makokou/groupe.jpg"
            alt="Formation et autonomisation de 100 femmes et jeunes filles de Makokou"
            style={{ objectPosition: "50% 35%" }}
          />
        </div>

        <div className="event-content">
          <span className="event-eyebrow">Inscriptions ouvertes</span>
          <h2>Formation de 100 femmes et jeunes filles de Makokou</h2>
          <p>
            7 jours d’ateliers pratiques en novembre 2026 : savon, manioc, vers à soie, numérique &amp;
            intelligence artificielle, gestion financière et prise de parole. Inscription gratuite —
            les premiers inscrits sont prioritaires.
          </p>

          <ul className="event-stats-row">
            <li><strong>100</strong> places</li>
            <li><strong>7</strong> jours d’ateliers</li>
            <li><strong>Nov.</strong> 2026</li>
            <li><strong>Gratuit</strong></li>
          </ul>

          <div className="event-cta-row">
            <Link href="/makokou/inscription" className="hero-button">
              Je m’inscris
            </Link>
            <Link href="/makokou" className="cta-button">
              Découvrir le projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
