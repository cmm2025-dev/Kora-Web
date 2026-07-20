import Reveal from "../Reveal";

const NOT_LIST = ["un software", "un NOC", "un sistema LoRa", "una IA"];

export default function WhatIsKora() {
  return (
    <section className="border-t border-kora-border px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="space-y-2 text-lg text-kora-muted sm:text-xl">
            {NOT_LIST.map((item) => (
              <p key={item}>
                KORA no es <span className="text-white">{item}</span>.
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            KORA es una plataforma de ingeniería que integra infraestructura
            tecnológica para construir soluciones específicas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
