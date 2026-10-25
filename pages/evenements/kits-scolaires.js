import Layout from "../../components/Layout";
import Link from "next/link";
import { getEvenement } from "../../data/evenements";
import styles from "../../styles/EvenementKitsScolaires.module.css";
import {
  FaChild,
  FaFemale,
  FaMale,
  FaGraduationCap,
  FaShoppingBag,
  FaPencilAlt,
  FaBook,
  FaRulerCombined,
  FaPalette,
  FaUmbrella,
  FaChalkboard,
  FaBullseye,
  FaArrowRight,
  FaHandHoldingHeart,
} from "react-icons/fa";

const evenement = getEvenement("kits-scolaires");

const STAT_ICONS = [FaChild, FaFemale, FaMale, FaGraduationCap];

const KIT_ICONS = {
  "Sac scolaire": FaShoppingBag,
  "Trousse et fournitures scolaires": FaPencilAlt,
  Cahiers: FaBook,
  "Crayons & stylos": FaPencilAlt,
  "Règle et matériel de géométrie": FaRulerCombined,
  "Matériel de coloriage": FaPalette,
  Imperméable: FaUmbrella,
  Ardoise: FaChalkboard,
};

export default function KitsScolaires() {
  return (
    <Layout>
      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <span className={styles.heroArc} aria-hidden="true" />

          <div className={styles.heroInner}>
            <div>
              <span className={styles.badge}>{evenement.eyebrow}</span>
              <h1 className={styles.heroTitle}>
                Distribution de
                <br />
                <span>kits scolaires</span>
              </h1>
              <p className={styles.heroSubtitle}>{evenement.sousTitre} · Rentrée 2026-2027</p>
              <p className={styles.heroLead}>{evenement.resume}</p>

              <div className={styles.heroActions}>
                <a href="#kit" className={styles.btnGold}>
                  Voir le contenu du kit <FaArrowRight />
                </a>
                <Link href="/soutenir" className={styles.btnGhost}>
                  Soutenir nos prochaines actions
                </Link>
              </div>
            </div>

            <div className={styles.heroMedia}>
              <div className={styles.heroPhoto}>
                <img
                  src={evenement.image}
                  alt={evenement.titre}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(styles.noPhoto);
                  }}
                />
              </div>
              <div className={styles.heroFloatingBadge}>
                <strong>{evenement.stats[0].chiffre}</strong>
                <span>enfants</span>
              </div>
            </div>
          </div>
        </section>

        {/* PARTENAIRES */}
        <section className={styles.partners}>
          <span className={styles.partnersLabel}>En partenariat avec</span>
          <div className={styles.partnersRow}>
            {evenement.partenaires.map((p) => (
              <span key={p} className={styles.partnerChip}>
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            {evenement.stats.map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statIcon}>
                    <Icon />
                  </span>
                  <strong className={styles.statNumber}>{s.chiffre}</strong>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* OBJECTIF */}
        <section className={styles.objective}>
          <FaBullseye className={styles.objectiveIcon} />
          <p>{evenement.objectif}</p>
        </section>

        {/* CONTENU DU KIT */}
        <section id="kit" className={styles.kit}>
          <h2 className={styles.sectionTitle}>Chaque enfant a reçu un kit complet</h2>
          <p className={styles.sectionLead}>Adapté à son niveau, de la maternelle à la 5ᵉ année.</p>

          <div className={styles.kitGrid}>
            {evenement.contenuKit.map((item) => {
              const Icon = KIT_ICONS[item] || FaBook;
              return (
                <div key={item} className={styles.kitItem}>
                  <span className={styles.kitIcon}>
                    <Icon />
                  </span>
                  {item}
                </div>
              );
            })}
          </div>
        </section>

        {/* REMERCIEMENTS */}
        <section className={styles.ctaBanner}>
          <FaHandHoldingHeart className={styles.ctaIcon} />
          <h2>Merci à nos partenaires et à tous nos donateurs !</h2>
          <Link href="/soutenir" className={styles.btnGold}>
            Soutenir nos prochaines actions <FaArrowRight />
          </Link>
        </section>
      </div>
    </Layout>
  );
}
