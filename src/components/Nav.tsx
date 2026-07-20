import Logo from "./Logo";

const LINKS = [
  { href: "#filosofia", label: "Filosofía" },
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#casos-de-uso", label: "Casos de Uso" },
  { href: "#soluciones", label: "Soluciones" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-kora-border/60 bg-kora-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="KORA — Inicio">
          <Logo size="sm" />
        </a>
        <ul className="hidden gap-8 text-xs uppercase tracking-[0.15em] text-kora-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-kora-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
