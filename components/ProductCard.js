import { lienWhatsApp } from "../data/produits";

export default function ProductCard({ produit }) {
  return (
    <article className="product-card">
      <div className="product-media">
        {produit.badge && <span className="product-badge">{produit.badge}</span>}
        <img
          src={produit.image}
          alt={produit.nom}
          className="product-photo"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("no-photo");
          }}
        />
      </div>

      <div className="product-body">
        <span className="product-cat">{produit.categorie}</span>
        <h3 className="product-title">{produit.nom}</h3>
        <p className="product-accroche">{produit.accroche}</p>
        <p className="product-desc">{produit.description}</p>

        {produit.tags?.length > 0 && (
          <ul className="product-tags">
            {produit.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="product-footer">
          <span className="product-price">
            {produit.prix.toLocaleString("fr-FR")} <small>FCFA</small>
          </span>
          <a
            className="product-buy"
            href={lienWhatsApp(produit)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
