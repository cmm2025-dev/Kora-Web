import Reveal from "../Reveal";
import Badge from "../ui/Badge";
import FeatureCard from "../ui/FeatureCard";
import SectionTitle from "../ui/SectionTitle";

const STORIES = [
  {
    sector: "Municipios",
    story:
      "La presencia reiterada de estiércol de caballos puede anticipar el inicio de botaderos clandestinos.",
  },
  {
    sector: "Minería",
    story:
      "La acumulación de roca en determinadas condiciones puede anticipar un atascamiento de buzones o correas transportadoras.",
  },
  {
    sector: "Hospitales",
    story:
      "La verificación biométrica permite certificar presencia sin depender de teléfonos móviles.",
  },
];

const EMERGING_SECTORS = ["Industria", "Puertos", "Gobierno"];

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="border-t border-kora-border px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionTitle
            eyebrow="Casos de Uso"
            title="No mostramos productos. Mostramos historias."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {STORIES.map((item, i) => (
            <Reveal key={item.sector} delay={i * 0.1}>
              <FeatureCard eyebrow={item.sector} description={item.story} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-6 text-xs italic text-kora-muted">
            Estos ejemplos representan &ldquo;Skills Operacionales&rdquo;: patrones
            detectados a partir del conocimiento operacional de cada
            organización.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-kora-border pt-10">
            <span className="text-xs uppercase tracking-[0.2em] text-kora-muted">
              Aplicando el mismo proceso de ingeniería en
            </span>
            {EMERGING_SECTORS.map((sector) => (
              <Badge key={sector} className="px-4 text-xs text-kora-text">
                {sector}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
