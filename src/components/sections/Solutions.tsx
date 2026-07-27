import Reveal from "../Reveal";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Panel from "../ui/Panel";
import SectionTitle from "../ui/SectionTitle";

const SOLUTIONS = [
  {
    name: "KORA Vigía",
    code: "VIGÍA",
    eyebrow: "Justicia y cumplimiento",
    tagline: "Presencia verificada. Evidencia confiable.",
    description:
      "Infraestructura de confianza judicial para arresto domiciliario: verifica presencia biométrica en los horarios decretados por el tribunal y genera evidencia con cadena de custodia de extremo a extremo.",
    href: "https://kora-vigia.vercel.app",
    features: ["Biometría autónoma", "Cadena de custodia", "Alertas operacionales"],
    icon: "shield",
  },
  {
    name: "KORA SFI",
    code: "SFI",
    eyebrow: "Fiscalización inteligente",
    tagline: "La certeza de estar, sin supervisión constante.",
    description:
      "Sistema de Fiscalización Inteligente para licencias médicas, arresto domiciliario y medidas de protección, con verificación biométrica autónoma y operación sin smartphone.",
    href: "https://sfi-rispa.vercel.app",
    features: ["Operación sin smartphone", "Verificación remota", "Monitoreo continuo"],
    icon: "signal",
  },
];

function ProductIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
        <path d="M24 5 39 11v10c0 10.3-6.2 18.2-15 22-8.8-3.8-15-11.7-15-22V11L24 5Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m17 24 4.5 4.5L31.5 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M15.5 32.5a12 12 0 0 1 0-17M32.5 15.5a12 12 0 0 1 0 17M10 38a20 20 0 0 1 0-28M38 10a20 20 0 0 1 0 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Solutions() {
  return (
    <section id="soluciones" className="relative overflow-hidden border-t border-kora-border px-6 py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,220,190,0.09),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle
            eyebrow="Soluciones KORA"
            title="Una infraestructura común. Aplicaciones especializadas."
            description="Cada solución conserva el mismo núcleo tecnológico, visual y operacional de KORA, adaptado a un contexto de misión específico."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.name} delay={i * 0.1}>
              <a
                href={solution.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kora-teal focus-visible:ring-offset-4 focus-visible:ring-offset-kora-black"
                aria-label={`Explorar ${solution.name}`}
              >
                <Card interactive className="group flex h-full min-h-[430px] flex-col p-8 sm:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-kora-teal/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kora-teal/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal shadow-[inset_0_0_24px_rgba(0,220,190,0.05)]">
                        <ProductIcon type={solution.icon} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.24em] text-kora-muted">{solution.eyebrow}</span>
                        <h3 className="mt-2 text-xl font-semibold tracking-[0.06em] text-white">{solution.name}</h3>
                      </div>
                    </div>
                    <Badge tone="accent" className="font-mono text-[10px] uppercase tracking-[0.18em]">
                      {solution.code}
                    </Badge>
                  </div>

                  <div className="relative mt-10">
                    <p className="max-w-md text-2xl font-medium leading-snug text-white sm:text-[1.7rem]">
                      {solution.tagline}
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-kora-text sm:text-[15px]">
                      {solution.description}
                    </p>
                  </div>

                  <div className="relative mt-8 flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <Badge key={feature}>{feature}</Badge>
                    ))}
                  </div>

                  <div className="relative mt-auto flex items-center justify-between border-t border-white/[0.07] pt-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-kora-teal transition-colors group-hover:text-white">
                      Explorar solución
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-kora-teal/30 text-kora-teal transition-all duration-300 group-hover:translate-x-1 group-hover:border-kora-teal group-hover:bg-kora-teal group-hover:text-kora-black" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Panel className="mt-8 flex flex-col gap-4 px-6 py-5 text-sm text-kora-muted sm:flex-row sm:items-center sm:justify-between">
            <span className="uppercase tracking-[0.18em] text-kora-teal">Núcleo compartido KORA</span>
            <span>Identidad · Biometría · Evidencia · Comunicaciones · Automatización operacional</span>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
