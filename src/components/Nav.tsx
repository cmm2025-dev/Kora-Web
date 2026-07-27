"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#filosofia", label: "Filosofía" },
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#casos-de-uso", label: "Casos de Uso" },
  { href: "#soluciones", label: "Soluciones" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? "border-kora-border bg-kora-black/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-kora-black/70 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-6"
        aria-label="Navegación principal"
      >
        <a href="#top" aria-label="KORA — Inicio" onClick={closeMenu}>
          <Logo size="sm" />
        </a>

        <ul className="hidden items-center gap-8 text-xs uppercase tracking-[0.15em] text-kora-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm py-3 transition-colors hover:text-kora-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kora-teal focus-visible:ring-offset-4 focus-visible:ring-offset-kora-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-kora-border text-kora-muted transition-colors hover:border-kora-teal hover:text-kora-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kora-teal md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-kora-border bg-kora-black/98 transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-6">
          {LINKS.map((link, index) => (
            <li key={link.href} className="border-b border-kora-border/60 last:border-b-0">
              <a
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between py-5 text-sm uppercase tracking-[0.15em] text-kora-muted transition-colors hover:text-kora-teal focus-visible:outline-none focus-visible:text-kora-teal"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-kora-teal" aria-hidden="true">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
