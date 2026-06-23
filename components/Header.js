import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">ONG Akoum Gold</div>
      <nav>
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
