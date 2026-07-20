import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-kora-border px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Logo size="sm" />
        <p className="max-w-md text-sm text-kora-muted">
          Una sola infraestructura. Múltiples soluciones. Un solo lenguaje de
          ingeniería.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-kora-muted/70">
          © 2026 KORA — Redes Ingeniería SPA
        </p>
      </div>
    </footer>
  );
}
