"use client";

import { motion, useReducedMotion } from "framer-motion";
import Logo from "../Logo";

const NODES = [[50,44],[36,35],[64,34],[28,51],[72,52],[41,63],[60,65],[18,40],[82,41],[31,72],[69,73],[50,16],[12,58],[88,57],[23,27],[77,26]];
const LINKS = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,7],[2,8],[5,9],[6,10],[1,11],[2,11],[3,5],[4,6],[3,12],[4,13],[1,14],[2,15],[7,14],[8,15]];

function SynapseField() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,238,210,0.28),transparent_32%),radial-gradient(circle_at_50%_56%,rgba(0,120,112,0.16),transparent_58%)]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-90">
        <defs>
          <radialGradient id="heroNodeGlow">
            <stop offset="0%" stopColor="rgba(230,255,252,1)" />
            <stop offset="22%" stopColor="rgba(80,255,229,1)" />
            <stop offset="100%" stopColor="rgba(0,180,160,0)" />
          </radialGradient>
        </defs>
        {LINKS.map(([a,b], index) => (
          <motion.line
            key={`${a}-${b}`}
            x1={NODES[a][0]} y1={NODES[a][1]}
            x2={NODES[b][0]} y2={NODES[b][1]}
            stroke="rgba(45,235,210,0.55)"
            strokeWidth="0.22"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0,0.9,0.38] }}
            transition={{ duration: reduceMotion ? 0 : 2.4, delay: reduceMotion ? 0 : 0.8 + index * 0.08 }}
          />
        ))}
        {NODES.map(([x,y], index) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0,1,0.62], scale: [0,1.7,1] }}
            transition={{ duration: reduceMotion ? 0 : 1.5, delay: reduceMotion ? 0 : 0.4 + index * 0.1 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            <circle cx={x} cy={y} r="4" fill="url(#heroNodeGlow)" />
            <circle cx={x} cy={y} r="0.36" fill="rgba(232,255,252,0.98)" />
          </motion.g>
        ))}
      </svg>

      {[0,1,2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-[42%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-kora-teal/45 shadow-[0_0_150px_rgba(0,235,200,0.30)]"
          animate={reduceMotion ? { opacity: 0.22 } : { opacity: [0,0.75,0], scale: [0.45,1.45,2.8] }}
          transition={{ duration: 4.8, delay: ring * 1.15, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#020607] px-6 pb-16 pt-32 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.02)_42%,rgba(0,0,0,0.82)),radial-gradient(circle_at_50%_38%,rgba(0,180,160,0.18),transparent_50%)]" />
      <SynapseField />

      <motion.div
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: reduceMotion ? 1 : [1,1.035,1] }}
        transition={{ opacity: { duration: reduceMotion ? 0 : 1.2 }, scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
        className="relative z-10 mb-3 drop-shadow-[0_0_65px_rgba(0,235,205,0.72)]"
      >
        <Logo size="hero" symbolOnly />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 1.1 }}
        className="relative z-10 text-xl font-medium uppercase tracking-[0.22em] text-white sm:text-3xl lg:text-4xl"
      >
        Datos. Conexión. <span className="text-[#42f5df]">Inteligencia.</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 1.45 }}
        className="relative z-10 mt-5 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-xl"
      >
        Una plataforma abierta para integrar sensores, IA, drones, LoRaWAN, comunicaciones y automatización operacional.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 1.75 }}
        className="relative z-10 mt-8"
      >
        <a href="#arquitectura" className="inline-flex items-center rounded-md border border-kora-teal px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#42f5df] shadow-[0_0_28px_rgba(0,220,190,0.18)] transition-all duration-300 hover:bg-kora-teal hover:text-kora-black hover:shadow-[0_0_40px_rgba(0,220,190,0.38)]">
          Explorar la Plataforma
        </a>
      </motion.div>
    </section>
  );
}
