import Link from "next/link";

type NavBarProps = {
  urlprefix: string
};


export default function NavBar({
  urlprefix
}: NavBarProps) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <a
        href={urlprefix + "/index.html"}
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Novomon
      </a>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href={urlprefix + "/monsters.html"}>Monsters</Link>

        <Link href={urlprefix + "/moves.html"}>Moves</Link>

        <Link href={urlprefix + "/locations.html"}>Locations</Link>

        <Link href={urlprefix + "/items.html"}>Items</Link>
      </div>
    </nav>
  );
}