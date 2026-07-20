import Reveal from "../Reveal";

const SOLUTIONS = [
  {
    name: "KORA Vigía",
    tagline: "La presencia que el tribunal ordenó, verificada.",
    description:
      "Infraestructura de confianza judicial para arresto domiciliario: verifica presencia biométrica en los horarios que decreta el tribunal y produce evidencia con cadena de custodia de extremo a extremo.",
    href: "https://kora-vigia.vercel.app",
  },
  {
    name: "KORA SFI",
    tagline: "La certeza de estar.",
    description:
      "Sistema de Fiscalización Inteligente para licencias médicas, arresto domiciliario y medidas de protección: verificación biométrica autónoma, sin smartphone ni supervisión humana constante.",
    href: "https://sfi-rispa.vercel.app",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="border-t border-kora-border px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-kora-teal">
            Soluciones
          </p>
          <h2 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
            Infraestructura compartida, soluciones específicas.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 0.1}>
              <a
                href={solution.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-md border border-kora-border bg-kora-panel p-8 transition-colors hover:border-kora-teal"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-kora-muted">
                  {solution.name}
                </span>
                <p className="mt-4 text-lg font-medium text-white">
                  {solution.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-kora-text">
                  {solution.description}
                </p>
                <span className="mt-6 text-xs uppercase tracking-[0.15em] text-kora-teal transition-colors group-hover:text-white">
                  Visitar →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
