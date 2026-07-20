import Reveal from "../Reveal";

const LINES = [
  ["Si comprendemos esas decisiones,", "podemos medirlas."],
  ["Si podemos medirlas,", "podemos automatizarlas."],
  ["Si podemos automatizarlas,", "podemos escalarlas."],
  ["Y si podemos escalarlas,", "podemos transformar organizaciones completas."],
];

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="flex min-h-screen items-center justify-center px-6 py-32"
    >
      <div className="mx-auto max-w-3xl space-y-10">
        {LINES.map((pair, i) => (
          <Reveal key={pair[0]} delay={i * 0.12}>
            <p className="text-2xl font-light leading-snug text-kora-muted sm:text-3xl">
              {pair[0]}
              <br />
              <span className="text-white">{pair[1]}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
