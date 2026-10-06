import '../styles/globals.css';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

// Police dédiée à la page événement "Kits scolaires" (var CSS globale,
// mais utilisée uniquement dans EvenementKitsScolaires.module.css /
// DonationForm.module.css — n'affecte pas le reste du site).
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.variable}>
      <Head>
        {/* Vérification Google Search Console */}
        <meta
          name="google-site-verification"
          content="AXgiQlK9KPNn7dnMX4CK4aKDJHLVZsqPAhn64wOktrA"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
