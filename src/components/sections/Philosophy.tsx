import Reveal from "../Reveal";

const PROCESS = [
  "Escuchar",
  "Comprender",
  "Identificar patrones",
  "Modelar decisiones",
  "Automatizar",
  "Escalar",
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="border-t border-kora-border px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-kora-teal">
            Filosofía
          </p>
          <h2 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
            La tecnología nunca es el punto de partida.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <ol className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-3">
            {PROCESS.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-kora-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-kora-text sm:text-base">
                    {step}
                  </span>
                </div>
                {i < PROCESS.length - 1 && (
                  <span className="hidden text-kora-border sm:block">→</span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-16 max-w-2xl text-lg leading-relaxed text-kora-muted">
            La plataforma existe para transformar conocimiento operacional en
            decisiones automatizadas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
