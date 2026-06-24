import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link href={item.link}>{item.label}</Link>
          ) : (
            <span className="active">{item.label}</span>
          )}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
}
