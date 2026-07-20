"use client";

import { motion } from "framer-motion";
import Logo from "../Logo";

export default function Hero() {
  return (
    <section
      id="top"
      className="kora-grid-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,180,160,0.10), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-10"
      >
        <Logo size="lg" symbolOnly />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl"
      >
        La infraestructura que convierte datos en decisiones.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-6 max-w-xl text-base leading-relaxed text-kora-muted sm:text-lg"
      >
        Una plataforma abierta para integrar sensores, IA, drones, LoRaWAN,
        comunicaciones y automatización operacional.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-12"
      >
        <a
          href="#arquitectura"
          className="inline-flex items-center gap-2 rounded-full border border-kora-teal px-8 py-3 text-sm uppercase tracking-[0.15em] text-kora-teal transition-colors hover:bg-kora-teal hover:text-kora-black"
        >
          Explorar la Plataforma
        </a>
      </motion.div>
    </section>
  );
}
