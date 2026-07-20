import Reveal from "../Reveal";

const LINES = [
  "No comenzamos hablando de tecnología.",
  "Comenzamos escuchando.",
  "Cada organización posee comportamientos repetitivos.",
  "Esos comportamientos contienen patrones.",
  "Los patrones contienen conocimiento.",
  "Y ese conocimiento puede convertirse en decisiones automáticas.",
  "La tecnología viene después.",
];

export default function Principle() {
  return (
    <section className="border-t border-kora-border bg-kora-panel px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <blockquote className="space-y-3 text-center text-xl font-light leading-relaxed text-white sm:text-2xl">
            {LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
