"use client";

import { motion, useReducedMotion } from "framer-motion";
import Logo from "../Logo";

const NODES = [[50,48],[36,38],[64,36],[29,55],[71,56],[42,66],[59,69],[20,43],[80,44],[33,75],[68,77],[50,20]];
const LINKS = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,7],[2,8],[5,9],[6,10],[1,11],[2,11],[3,5],[4,6]];

function SynapseField() {
  const reduceMotion = useReducedMotion();
  const instant = reduceMotion ? 0 : undefined;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.45, 0.22] }}
        transition={{ duration: instant ?? 6.2, times: [0, 0.18, 0.68, 1] }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(0,220,190,0.24),transparent_42%)]"
      />

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="heroNodeGlow">
            <stop offset="0%" stopColor="rgba(210,255,248,1)" />
            <stop offset="28%" stopColor="rgba(71,255,224,0.96)" />
            <stop offset="100%" stopColor="rgba(0,180,160,0)" />
          </radialGradient>
        </defs>

        {LINKS.map(([a,b], index) => (
          <motion.line
            key={`${a}-${b}`}
            x1={NODES[a][0]} y1={NODES[a][1]}
            x2={NODES[b][0]} y2={NODES[b][1]}
            stroke="rgba(90,240,215,0.42)" strokeWidth="0.18" vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0,1,1], opacity: [0,0.95,0.34] }}
            transition={{ duration: instant ?? 2.2, delay: reduceMotion ? 0 : 1.3 + index * 0.11 }}
          />
        ))}

        {NODES.map(([x,y], index) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0,1,0.55], scale: [0,1.9,1] }}
            transition={{ duration: instant ?? 1.5, delay: reduceMotion ? 0 : 0.7 + index * 0.16 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            <circle cx={x} cy={y} r="3.6" fill="url(#heroNodeGlow)" />
            <circle cx={x} cy={y} r="0.34" fill="rgba(220,255,250,0.98)" />
          </motion.g>
        ))}
      </svg>

      {[0,1,2].map((ring) => (
        <motion.div
          key={ring}
          initial={{ opacity: 0, scale: 0.08 }}
          animate={{ opacity: [0,0,0.9,0], scale: [0.08,0.08,1.2,3.1] }}
          transition={{ duration: instant ?? 2.9, delay: reduceMotion ? 0 : 4.55 + ring * 0.12, times: [0,0.26,0.5,1] }}
          className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-kora-teal/50 shadow-[0_0_140px_rgba(0,235,200,0.32)]"
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: [0,0,1,0], scale: [0.1,0.1,1.5,2.9] }}
        transition={{ duration: instant ?? 1.8, delay: reduceMotion ? 0 : 4.8, times: [0,0.28,0.52,1] }}
        className="absolute left-1/2 top-[46%] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-kora-teal/15 blur-3xl"
      />
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const delay = (value: number) => reduceMotion ? 0 : value;

  return (
    <section id="top" className="kora-grid-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,8,9,0.34),rgba(2,8,9,0.08)_34%,rgba(2,8,9,0.58)),radial-gradient(circle_at_50%_42%,rgba(0,180,160,0.15),transparent_58%)]" />
      <SynapseField />

      <motion.div
        initial={{ opacity: 0, scale: 0.78 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.8, delay: delay(0.15), ease: [0.16,1,0.3,1] }}
        className="relative z-10 mb-8 scale-125 drop-shadow-[0_0_44px_rgba(0,220,190,0.48)] sm:scale-150"
      >
        <Logo size="lg" symbolOnly />
      </motion.div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center rounded-[2rem] border border-white/[0.06] bg-black/25 px-6 py-7 shadow-[0_24px_100px_rgba(0,0,0,0.38)] backdrop-blur-[6px] sm:px-10 sm:py-9">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.45em" }} animate={{ opacity: 1, letterSpacing: "0.22em" }}
          transition={{ duration: reduceMotion ? 0 : 1.5, delay: delay(2.4) }}
          className="mb-5 text-[11px] font-semibold uppercase text-[#72ffe7] drop-shadow-[0_0_18px_rgba(0,235,200,0.55)] sm:text-sm"
        >
          Datos. Conexión. Inteligencia.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: reduceMotion ? 0 : 1.35, delay: delay(4.75), ease: [0.16,1,0.3,1] }}
          className="max-w-4xl text-3xl font-semibold leading-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl"
        >
          La infraestructura que convierte datos en decisiones.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.15, delay: delay(5.25) }}
          className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-lg"
        >
          Una plataforma abierta para integrar sensores, IA, drones, LoRaWAN, comunicaciones y automatización operacional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, delay: delay(5.65) }}
          className="mt-10"
        >
          <a href="#arquitectura" className="inline-flex items-center gap-2 rounded-full border border-kora-teal bg-black/20 px-8 py-3 text-sm uppercase tracking-[0.15em] text-[#72ffe7] shadow-[0_0_28px_rgba(0,220,190,0.14)] transition-all duration-300 hover:bg-kora-teal hover:text-kora-black hover:shadow-[0_0_38px_rgba(0,220,190,0.34)]">
            Explorar la Plataforma
          </a>
        </motion.div>
      </div>
    </section>
  );
}
