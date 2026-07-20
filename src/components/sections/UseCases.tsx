import Reveal from "../Reveal";

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
    <section
      id="casos-de-uso"
      className="border-t border-kora-border px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-kora-teal">
            Casos de Uso
          </p>
          <h2 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
            No mostramos productos. Mostramos historias.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-kora-border sm:grid-cols-3">
          {STORIES.map((item, i) => (
            <Reveal key={item.sector} delay={i * 0.1}>
              <div className="h-full bg-kora-panel p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-kora-teal">
                  {item.sector}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-kora-text">
                  {item.story}
                </p>
              </div>
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
              <span
                key={sector}
                className="rounded-full border border-kora-border px-4 py-1.5 text-xs text-kora-text"
              >
                {sector}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
