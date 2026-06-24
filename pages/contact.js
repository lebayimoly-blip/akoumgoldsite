import Layout from "../components/Layout";
import { useState } from "react";
import { API_URL } from "../utils/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message envoyé avec succès !");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("⚠️ Impossible de contacter le serveur.");
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
        <button type="submit">Envoyer</button>
      </form>

      <p className="status">{status}</p>
    </Layout>
  );
}
