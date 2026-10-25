import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import PlacesRestantesMakokou from "../../components/PlacesRestantesMakokou";
import {
  PROJET,
  MODULES,
  PUBLIC_CIBLE,
  ACCOMPAGNEMENT,
  FAQ,
  lienPartageWhatsApp,
  lienWhatsAppInscription,
} from "../../data/makokou";
import styles from "../../styles/ProjetMakokou.module.css";
import {
  FaArrowRight,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaGift,
  FaLeaf,
  FaLaptop,
  FaMicrophone,
  FaCheckCircle,
  FaBookOpen,
  FaFemale,
  FaUserGraduate,
  FaPencilAlt,
  FaStore,
  FaChevronDown,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";

const MODULE_ICONS = [FaLeaf, FaLaptop, FaMicrophone];
const PUBLIC_ICONS = [FaFemale, FaUserGraduate, FaPencilAlt, FaStore];

const TITRE_PAGE = "100 femmes et jeunes filles de Makokou — Inscriptions ouvertes | ONG Akoum Gold";
const DESCRIPTION =
  "Formation gratuite de 7 jours à Makokou en novembre 2026 : savon, manioc, vers à soie, numérique & IA, gestion financière et prise de parole. 100 places — inscrivez-vous en ligne.";

export default function ProjetMakokou() {
  return (
    <Layout>
      <Head>
        <title>{TITRE_PAGE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PROJET.urlPage} />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="100 femmes et jeunes filles de Makokou — Inscriptions ouvertes" key="og:title" />
        <meta property="og:description" content={DESCRIPTION} key="og:description" />
        <meta property="og:url" content={PROJET.urlPage} key="og:url" />
        <meta property="og:image" content="https://akoumgoldweb.onrender.com/images/makokou/og-makokou.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:locale" content="fr_FR" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.page}>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <span className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" /> Inscriptions ouvertes · Gratuit
              </span>
              <h1 className={styles.heroTitle}>
                100 femmes et jeunes filles <span>de Makokou</span>
              </h1>
              <p className={styles.heroSubtitle}>Formation et autonomisation économique · {PROJET.periode}</p>
              <p className={styles.heroLead}>
                7 jours d’ateliers pratiques pour apprendre une activité qui rapporte — savon, manioc,
                vers à soie —, maîtriser le numérique et l’intelligence artificielle, et gérer son argent
                avec confiance.
              </p>
              <div className={styles.heroActions}>
                <Link href="/makokou/inscription" className={styles.btnGold}>
                  Je m’inscris gratuitement <FaArrowRight />
                </Link>
                <a href="#programme" className={styles.btnGhost}>
                  Voir le programme
                </a>
              </div>
            </div>

            <div className={styles.heroMedia}>
              <div className={styles.heroPhoto}>
                <img
                  src="/images/makokou/groupe.jpg"
                  alt="Participantes d’une précédente formation de l’ONG Akoum Gold, attestation en main"
                />
              </div>
              <div className={styles.heroCounter}>
                <PlacesRestantesMakokou />
              </div>
            </div>
          </div>
        </section>

        {/* ============ CHIFFRES CLÉS ============ */}
        <section className={styles.facts} aria-label="Le projet en bref">
          <div className={styles.wrap}>
            <div className={styles.factsGrid}>
              <div className={styles.fact}>
                <span className={styles.factIcon}><FaUsers /></span>
                <div><strong>100 places</strong><span>femmes et jeunes</span></div>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}><FaClock /></span>
                <div><strong>7 jours</strong><span>d’ateliers pratiques</span></div>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}><FaCalendarAlt /></span>
                <div><strong>Novembre 2026</strong><span>à Makokou</span></div>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}><FaGift /></span>
                <div><strong>Gratuit</strong><span>inscription sans frais</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ POURQUOI ============ */}
        <section className={styles.section}>
          <div className={`${styles.wrap} ${styles.aboutGrid}`}>
            <div className={styles.aboutText}>
              <span className={styles.eyebrow}>Pourquoi ce projet</span>
              <h2 className={styles.sectionTitle}>Des compétences d’aujourd’hui, des leaders de demain</h2>
              <p>
                À Makokou, comme dans de nombreuses villes du Gabon, beaucoup de femmes restent à l’écart
                de l’économie moderne : accès limité à l’éducation, aux outils numériques et aux
                formations professionnelles.
              </p>
              <p>
                Pourtant, l’Ogooué-Ivindo regorge d’atouts — agriculture, transformation agroalimentaire,
                artisanat et une filière soie prometteuse. L’ONG Akoum Gold propose un programme intégré
                pour transformer ces atouts en revenus durables.
              </p>
              <ul className={styles.taglineRow}>
                <li>Former</li>
                <li>Outiller</li>
                <li>Autonomiser</li>
                <li>Transformer</li>
              </ul>
            </div>
            <div className={styles.aboutPhoto}>
              <img src="/images/makokou/participantes.jpg" alt="Participantes attentives lors d’un atelier de l’ONG Akoum Gold" />
              <span className={styles.photoCaption}>Lors d’une précédente formation de l’ONG Akoum Gold</span>
            </div>
          </div>
        </section>

        {/* ============ PROGRAMME ============ */}
        <section id="programme" className={styles.sectionAlt}>
          <div className={styles.wrap}>
            <div className={styles.center}>
              <span className={styles.eyebrow}>Le programme</span>
              <h2 className={`${styles.sectionTitle} ${styles.center}`}>3 modules, 100 % pratiques</h2>
              <p className={styles.sectionLead}>
                Des ateliers concrets et progressifs : chaque participante repart avec des savoir-faire
                directement utilisables pour lancer ou développer son activité.
              </p>
            </div>

            <div className={styles.modulesGrid}>
              {MODULES.map((m, i) => {
                const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
                return (
                  <article key={m.numero} className={styles.moduleCard}>
                    <div className={styles.moduleMedia}>
                      <img src={m.photo} alt={m.alt} loading="lazy" />
                      <span className={styles.moduleIcon}><Icon /></span>
                    </div>
                    <div className={styles.moduleBody}>
                      <span className={styles.moduleNumber}>MODULE {m.numero}</span>
                      <h3 className={styles.moduleTitle}>{m.titre}</h3>
                      <ul className={styles.checkList}>
                        {m.points.map((p) => (
                          <li key={p}>
                            <FaCheckCircle /> <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.literacy}>
              <span className={styles.literacyIcon}><FaBookOpen /></span>
              <p>
                <strong>Alphabétisation fonctionnelle intégrée :</strong> lecture, écriture et calcul
                appliqués aux activités (fiches de production, reçus, petites dépenses et recettes). Le
                programme accueille aussi les personnes qui lisent peu ou pas.
              </p>
            </div>
          </div>
        </section>

        {/* ============ POUR QUI / APRÈS ============ */}
        <section className={styles.section}>
          <div className={`${styles.wrap} ${styles.twoCol}`}>
            <div>
              <span className={styles.eyebrow}>Pour qui ?</span>
              <h2 className={styles.sectionTitle}>Une formation ouverte en priorité aux femmes</h2>
              <p className={styles.sectionLead}>
                Le projet s’adresse aux habitantes et habitants de Makokou et des localités environnantes
                qui souhaitent renforcer leurs compétences et améliorer leurs conditions de vie.
              </p>
              <div className={styles.publicGrid}>
                {PUBLIC_CIBLE.map((p, i) => {
                  const Icon = PUBLIC_ICONS[i % PUBLIC_ICONS.length];
                  return (
                    <div key={p.titre} className={styles.publicCard}>
                      <strong><Icon /> {p.titre}</strong>
                      <p>{p.texte}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className={styles.afterCard}>
              <h3>Et après la formation ?</h3>
              <p>L’ONG Akoum Gold continue de vous accompagner :</p>
              <ul className={styles.checkList}>
                {ACCOMPAGNEMENT.map((a) => (
                  <li key={a}>
                    <FaCheckCircle /> <span>{a}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ============ PREUVE : OYEM ============ */}
        <section className={styles.proof}>
          <div className={styles.proofBg} aria-hidden="true">
            <img src="/images/makokou/oyem-promotion.jpg" alt="" loading="lazy" />
          </div>
          <div className={styles.wrap}>
            <div className={styles.proofInner}>
              <span className={styles.proofNumber}>175</span>
              <h2 className={styles.proofTitle}>femmes déjà formées à Oyem</h2>
              <p className={styles.proofText}>
                Forte de la réussite de sa formation 360° à Oyem, l’ONG Akoum Gold reproduit le modèle à
                Makokou, avec des femmes unies, solidaires et actrices du changement.
              </p>
              <Link href="/actions/formation" className={styles.btnGhost}>
                Découvrir la formation d’Oyem
              </Link>
            </div>
          </div>
        </section>

        {/* ============ COMMENT S'INSCRIRE ============ */}
        <section className={styles.sectionAlt}>
          <div className={styles.wrap}>
            <div className={styles.center}>
              <span className={styles.eyebrow}>Inscription</span>
              <h2 className={`${styles.sectionTitle} ${styles.center}`}>Comment s’inscrire ?</h2>
              <p className={styles.sectionLead}>Simple, rapide et gratuit — les premiers inscrits sont prioritaires.</p>
            </div>

            <ol className={styles.steps}>
              <li className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <strong>Remplissez le formulaire</strong>
                <p>8 questions simples, environ 2 minutes, depuis votre téléphone.</p>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <strong>Votre candidature est étudiée</strong>
                <p>par l’ONG Akoum Gold et ses partenaires, par ordre d’arrivée.</p>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <strong>Vous êtes recontacté(e)</strong>
                <p>par téléphone ou WhatsApp pour confirmer votre place.</p>
              </li>
            </ol>

            <div className={styles.ctaRow}>
              <Link href="/makokou/inscription" className={styles.btnGold}>
                Je m’inscris maintenant <FaArrowRight />
              </Link>
            </div>
            <p className={styles.altNote}>
              Pas à l’aise avec internet ?{" "}
              <a href={lienWhatsAppInscription()} target="_blank" rel="noopener noreferrer">
                Inscrivez-vous par WhatsApp
              </a>{" "}
              ou appelez le{" "}
              <a href={`tel:${PROJET.telephones[0].lien}`}>{PROJET.telephones[0].affiche}</a>.
            </p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.center}>
              <span className={styles.eyebrow}>Questions fréquentes</span>
              <h2 className={`${styles.sectionTitle} ${styles.center}`}>Vous vous demandez…</h2>
            </div>
            <div className={styles.faq}>
              {FAQ.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary>
                    {item.q} <FaChevronDown />
                  </summary>
                  <p>{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT & SPONSOR ============ */}
        <section className={styles.sectionAlt}>
          <div className={`${styles.wrap} ${styles.contactGrid}`}>
            <div className={styles.contactCard}>
              <span className={styles.eyebrow}>Contact</span>
              <h3>{PROJET.responsable}</h3>
              <p className={styles.contactRole}>{PROJET.role} — responsable du projet</p>
              <ul className={styles.contactList}>
                {PROJET.telephones.map((t) => (
                  <li key={t.lien}>
                    <FaPhoneAlt /> <a href={`tel:${t.lien}`}>{t.affiche}</a>
                  </li>
                ))}
                <li>
                  <FaEnvelope /> <a href={`mailto:${PROJET.email}`}>{PROJET.email}</a>
                </li>
                <li>
                  <FaMapMarkerAlt /> <span>{PROJET.lieu}</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/${PROJET.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <FaWhatsapp /> Écrire sur WhatsApp
              </a>
            </div>

            <div className={styles.sponsorCard}>
              <span className={styles.sponsorLabel}>Sponsorisé par</span>
              <img src={PROJET.sponsor.logo} alt={PROJET.sponsor.nom} loading="lazy" />
            </div>
          </div>
        </section>

        {/* ============ BANDEAU FINAL ============ */}
        <section className={styles.finalCta}>
          <h2>Les places sont limitées : réservez la vôtre dès aujourd’hui</h2>
          <p>Vous connaissez une femme ou une jeune fille de Makokou que ce projet peut aider ? Partagez-lui cette page.</p>
          <div className={styles.ctaRow}>
            <Link href="/makokou/inscription" className={styles.btnGold}>
              Je m’inscris <FaArrowRight />
            </Link>
            <a href={lienPartageWhatsApp()} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              <FaShareAlt /> Partager sur WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
