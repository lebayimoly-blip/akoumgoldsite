import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [botField, setBotField] = useState(""); // anti-robots : doit rester vide
  const [status, setStatus] = useState("");
  const [envoi, setEnvoi] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Envoi via Netlify Forms : les messages arrivent dans Netlify (onglet Forms)
  // avec une notification par e-mail. Le formulaire est déclaré dans public/__forms.html.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (envoi) return;
    setEnvoi(true);
    setStatus("⏳ Envoi en cours…");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", "bot-field": botField, ...form }).toString(),
      });

      if (res.ok) {
        setStatus("✅ Message envoyé avec succès ! Nous vous répondrons rapidement.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l'envoi du message. Merci de réessayer.");
      }
    } catch (error) {
      setStatus("⚠️ Connexion impossible. Vérifiez votre connexion internet et réessayez.");
    } finally {
      setEnvoi(false);
    }
  };

  return (
    <Layout>
      <h1>📩 Contactez-nous</h1>

      {/* Texte introductif décoré */}
      <section className="contact-intro">
        <p className="intro-text">
          🌍 Pour mener à bien nos activités et répondre aux demandes croissantes des personnes vulnérables
          qui souhaitent se prendre en main grâce aux formations, <strong>nous avons besoin de votre soutien</strong>.
        </p>
        <p className="intro-text">
          🤝 Vous avez un besoin ? Une demande spécifique ? Vous souhaitez collaborer avec nous ou nous aider ?
          N’hésitez pas à nous écrire, nous serons ravis d’échanger avec vous.
        </p>
      </section>

      {/* Coordonnées ONG */}
      <section className="contact-info">
        <h2>📞 Nos coordonnées</h2>
        <div className="info-card">
          <p><strong>ONG Akoum Gold</strong></p>
          <p>📍 Adresse : Derrière la Pédiatrie, Owendo - Gabon</p>
          <p>📞 Téléphone : <a href="tel:+241074567890">+241 07 45 67 890</a></p>
          <p>✉️ Email : <a href="mailto:lebayimoly@gmail.com">Akoumdor@gmail.com</a></p>
        </div>
      </section>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Anti-robots (invisible pour les visiteurs) */}
        <p hidden aria-hidden="true">
          <label>
            Ne pas remplir : <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet de votre message"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={envoi}>{envoi ? "Envoi…" : "Envoyer"}</button>
      </form>

      <p className="status">{status}</p>
    </Layout>
  );
}
