import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";

// Ancienne page du projet Makokou : le projet a désormais sa page dédiée /makokou.
// (La redirection serveur est aussi déclarée dans next.config.ts ; ce composant
// couvre les navigations internes.)
export default function AnciennePageMakokou() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/makokou");
  }, [router]);

  return (
    <Layout>
      <section className="about-section">
        <h1>Projet d’autonomisation des femmes de Makokou</h1>
        <p>
          Le projet a maintenant sa page dédiée, avec le formulaire d’inscription.{" "}
          <Link href="/makokou">Accéder à la page du projet</Link>.
        </p>
      </section>
    </Layout>
  );
}
