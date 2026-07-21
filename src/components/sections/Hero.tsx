"use client";

import { motion } from "framer-motion";
import Logo from "../Logo";

const NODES = [
  [50, 48], [36, 38], [64, 36], [29, 55], [71, 56], [42, 66], [59, 69],
  [20, 43], [80, 44], [33, 75], [68, 77], [50, 20],
];

const LINKS = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 7], [2, 8],
  [5, 9], [6, 10], [1, 11], [2, 11], [3, 5], [4, 6],
];

function SynapseField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: [0, 0.42, 0.22], scale: [0.65, 1.03, 1] }}
        transition={{ duration: 2.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="rgba(71,255,224,0.95)" />
              <stop offset="100%" stopColor="rgba(0,180,160,0)" />
            </radialGradient>
          </defs>

          {LINKS.map(([a, b], index) => (
            <motion.line
              key={`${a}-${b}`}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
              stroke="rgba(74,222,200,0.28)"
              strokeWidth="0.18"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.9, 0.35] }}
              transition={{ duration: 1.5, delay: 0.35 + index * 0.055 }}
            />
          ))}

          {NODES.map(([x, y], index) => (
            <motion.g
              key={`${x}-${y}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.55], scale: [0, 1.7, 1] }}
              transition={{ duration: 1.35, delay: 0.3 + index * 0.07 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r="3.2" fill="url(#nodeGlow)" />
              <circle cx={x} cy={y} r="0.34" fill="rgba(153,255,238,0.95)" />
            </motion.g>
          ))}
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: [0, 0, 0.8, 0], scale: [0.1, 0.1, 1.1, 2.4] }}
        transition={{ duration: 2.8, delay: 1.55, times: [0, 0.35, 0.58, 1] }}
        className="absolute left-1/2 top-[48%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-kora-teal/40 shadow-[0_0_100px_rgba(0,220,190,0.22)]"
      />
    </div>
  );
}

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
            "radial-gradient(circle at 50% 42%, rgba(0,180,160,0.14), transparent 58%)",
        }}
      />

      <SynapseField />

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
