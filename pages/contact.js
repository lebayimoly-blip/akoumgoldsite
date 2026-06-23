import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <Layout>
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Votre message" value={form.message} onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
      <p>{status}</p>
    </Layout>
  );
}
