import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo cliquable */}
      <div className="logo-container">
        <Link href="/">
          <img src="/images/logo.png" alt="ONG Akoum Gold" className="site-logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="site-nav">
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/about">Qui sommes-nous</Link></li>
          <li><Link href="/missions">Nos Missions</Link></li>
          <li><Link href="/impact">Impact</Link></li>
          <li><Link href="/soutenir">Nous soutenir</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
