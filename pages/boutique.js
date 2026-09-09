import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { PRODUITS } from "../data/produits";

export default function Boutique() {
  const categories = [...new Set(PRODUITS.map((p) => p.categorie))];

  return (
    <Layout>
      <section className="shop-hero">
        <h1>La Boutique solidaire</h1>
        <p className="intro-text">
          Chaque produit est fabriqué par les femmes formées par l’ONG Akoum Gold à Oyem.
          En achetant, vous financez directement leurs activités génératrices de revenus
          et leur autonomie.
        </p>
        <ul className="shop-trust">
          <li>Retrait à Oyem</li>
          <li>Expéditions Gabon &amp; international</li>
          <li>Paiement à la livraison</li>
        </ul>
      </section>

      {categories.map((cat) => (
        <section key={cat} className="shop-section">
          <h2>{cat}</h2>
          <div className="product-grid">
            {PRODUITS.filter((p) => p.categorie === cat).map((p) => (
              <ProductCard key={p.id} produit={p} />
            ))}
          </div>
        </section>
      ))}

      <section className="shop-note">
        <p>
          Une commande en gros, un partenariat revendeur ou une question&nbsp;? Écrivez-nous
          via la page <a href="/contact">Contact</a>.
        </p>
      </section>
    </Layout>
  );
}
