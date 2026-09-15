import Link from "next/link";

export default function EventTeaser({ evenement }) {
  return (
    <section className="event-highlight">
      <div className="event-highlight-inner">
        <div className="event-photo">
          <img
            src={evenement.image}
            alt={evenement.titre}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("no-photo");
            }}
          />
        </div>

        <div className="event-content">
          <span className="event-eyebrow">{evenement.eyebrow}</span>
          <h2>{evenement.titre}</h2>
          <p>{evenement.resume}</p>

          <ul className="event-stats-row">
            {evenement.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.chiffre}</strong> {s.label}
              </li>
            ))}
          </ul>

          <div className="event-cta-row">
            <Link href={`/evenements/${evenement.id}`} className="hero-button">
              Découvrir l’événement
            </Link>
            <Link href={`/evenements/${evenement.id}#don`} className="cta-button">
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
