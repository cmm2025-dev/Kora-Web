import Reveal from "../Reveal";
import Panel from "../ui/Panel";
import ProductCard from "../ui/ProductCard";
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
        <path
          d="M24 5 39 11v10c0 10.3-6.2 18.2-15 22-8.8-3.8-15-11.7-15-22V11L24 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m17 24 4.5 4.5L31.5 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path
        d="M15.5 32.5a12 12 0 0 1 0-17M32.5 15.5a12 12 0 0 1 0 17M10 38a20 20 0 0 1 0-28M38 10a20 20 0 0 1 0 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative overflow-hidden border-t border-kora-border px-6 py-32"
    >
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
              <ProductCard
                name={solution.name}
                code={solution.code}
                eyebrow={solution.eyebrow}
                tagline={solution.tagline}
                description={solution.description}
                features={solution.features}
                href={solution.href}
                icon={<ProductIcon type={solution.icon} />}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Panel className="mt-8 flex flex-col gap-4 px-6 py-5 text-sm text-kora-muted sm:flex-row sm:items-center sm:justify-between">
            <span className="uppercase tracking-[0.18em] text-kora-teal">
              Núcleo compartido KORA
            </span>
            <span>
              Identidad · Biometría · Evidencia · Comunicaciones · Automatización operacional
            </span>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
