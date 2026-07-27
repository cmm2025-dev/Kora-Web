import Reveal from "../Reveal";
import Badge from "../ui/Badge";
import Panel from "../ui/Panel";
import SectionTitle from "../ui/SectionTitle";

const LAYERS = [
  "Infraestructura",
  "Captura",
  "Normalización",
  "Correlación",
  "Patrones",
  "IA",
  "Automatización",
  "Visualización",
  "Operación",
];

const BASE_INFRA = [
  "LoRaWAN",
  "IoT",
  "IA",
  "Drones",
  "DAFR",
  "Dock3",
  "NOC",
  "LTE / 5G",
  "Video",
  "Sensores",
  "APIs",
  "Automatización",
  "Digital Twins",
];

export default function Architecture() {
  return (
    <section id="arquitectura" className="border-t border-kora-border px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionTitle
            eyebrow="Arquitectura"
            title="La plataforma se organiza por capas. Cada módulo comparte esta arquitectura."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-center">
            {LAYERS.map((layer, i) => (
              <div key={layer} className="flex w-full flex-col items-center">
                <Panel className="w-full max-w-md bg-kora-panel py-4 text-center">
                  <span className="font-mono text-sm tracking-wide text-kora-text">
                    {layer}
                  </span>
                </Panel>
                {i < LAYERS.length - 1 ? (
                  <span className="my-1 h-6 w-px bg-kora-border" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-20 border-t border-kora-border pt-12">
            <p className="text-sm uppercase tracking-[0.2em] text-kora-muted">
              Infraestructura base — reutilizada entre industrias
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {BASE_INFRA.map((tech) => (
                <Badge key={tech} className="px-4 font-mono text-xs text-kora-text">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
