"use client";

/*
  KORA — Sección "Filosofía"
  --------------------------------------------------------------
  Riel vertical que evoluciona 01→06: onda análoga (manuscrita) →
  umbral A/D que brilla → señal digital → catarsis de lluvia de bits (Matrix).

  Integración (Next.js / Vercel):
  - Es un Client Component ("use client").
  - Fuentes: agrega en tu layout (recomendado next/font) las familias
    Space Grotesk, IBM Plex Mono y Caveat. Ejemplo rápido con <link> en app/layout:
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@500;600;700&display=swap" rel="stylesheet" />
  - El header/nav de KORA es un concern global: NO se incluye acá.
  - Estilos vía styled-jsx (incluido en Next). Todo va scopeado a .kora-filo.
*/

import { useEffect, useRef } from "react";

export default function KoraFilosofia() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const railRef = useRef(null);
  const bigRef = useRef(null);
  const flowRef = useRef(null);
  const bigWrapRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const flow = flowRef.current;
    const bigWrap = bigWrapRef.current;
    const cv = railRef.current;
    const bigCv = bigRef.current;
    const bgCv = bgRef.current;
    if (!root || !flow || !cv || !bigCv || !bgCv) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stepEls = [...flow.querySelectorAll(".step")];
    const zoneAna = flow.querySelector(".zone.ana");
    const zoneDig = flow.querySelector(".zone.dig");
    const closing = root.querySelector(".closing");
    const headline = root.querySelector(".headline");
    const ctx = cv.getContext("2d");
    const bigCtx = bigCv.getContext("2d");

    let killed = false;
    let rafMain = 0, rafBg = 0;
    const timeouts = new Set();
    const tset = (fn, ms) => { const id = setTimeout(() => { timeouts.delete(id); if (!killed) fn(); }, ms); timeouts.add(id); return id; };

    /* ---------------- riel + catarsis ---------------- */
    const RX = 30, Aa = 12, Dd = 12, DY = 20;
    let DPR = 1, W = 0, H = 0, nodes = [], yTop = 0, yBot = 0, thrY = 0, ky = 0.05, started = false, last = performance.now();
    let phase = "idle", u = 0, t = 0, thrLit = 0, thrFlash = -1, crossed = false, ambT = 0;

    let BW = 0, BH = 0, cols = [], fs = 14, bigPhase = "idle", bigT = 0, bigFlash = -1, bigWash = 0;
    const BURST = 1700, GLYPHS = "01";

    const cyc = (el) => el.offsetTop + el.offsetHeight / 2;
    function measure() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = flow.clientWidth; H = flow.clientHeight;
      cv.width = W * DPR; cv.height = H * DPR; cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      nodes = stepEls.map((el, i) => ({ y: cyc(el), i, dig: i >= 3, lit: false, flash: -1 }));
      yTop = nodes[0].y - 22; yBot = nodes[5].y + 22;
      thrY = (nodes[2].y + nodes[3].y) / 2;
      ky = (2 * Math.PI * 2.4) / Math.max(1, thrY - yTop);
    }
    const line = (x1, y1, x2, y2, c, w) => { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };
    const dot = (x, y, r, c, glow) => { if (glow) { ctx.shadowColor = "rgba(55,236,189,.85)"; ctx.shadowBlur = glow; } ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fillStyle = c; ctx.fill(); ctx.shadowBlur = 0; };

    function render(now) {
      ctx.clearRect(0, 0, W, H);
      if (!nodes.length) return;
      const headY = phase === "reveal" ? yTop + u * (yBot - yTop) : yBot;

      line(RX, yTop, RX, yBot, "rgba(120,150,160,.14)", 1.5);
      line(RX, yTop, RX, Math.min(headY, yBot), "rgba(55,236,189,.4)", 1.5);

      ctx.strokeStyle = "rgba(150,214,197,.7)"; ctx.lineWidth = 2; ctx.beginPath();
      for (let y = yTop; y <= thrY; y += 2) { const x = RX + Aa * Math.sin(ky * (y - yTop) - t); if (y === yTop) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();

      ctx.strokeStyle = "rgba(55,236,189,.92)"; ctx.lineWidth = 2.2; ctx.beginPath();
      let px = null;
      for (let i = 0; ; i++) {
        const y0 = thrY + i * DY; if (y0 > yBot) break;
        const val = Math.sin(0.9 * i - t * 1.3);
        const x = RX + (val >= 0 ? Dd : -Dd);
        if (px === null) ctx.moveTo(x, y0); else { ctx.lineTo(px, y0); ctx.lineTo(x, y0); }
        ctx.lineTo(x, Math.min(y0 + DY, yBot));
        px = x;
      }
      ctx.stroke();

      const pulse = 0.5 + 0.5 * Math.sin(now / 460);
      const inten = thrLit * (0.7 + 0.3 * pulse);
      if (inten > 0.02) {
        const g = ctx.createLinearGradient(0, thrY - 14, 0, thrY + 14);
        g.addColorStop(0, "rgba(55,236,189,0)"); g.addColorStop(0.5, `rgba(55,236,189,${0.5 * inten})`); g.addColorStop(1, "rgba(55,236,189,0)");
        ctx.fillStyle = g; ctx.fillRect(RX - 24, thrY - 14, 48, 28);
        ctx.strokeStyle = `rgba(120,255,220,${0.85 * inten})`; ctx.lineWidth = 1.8;
        ctx.shadowColor = "rgba(55,236,189,.9)"; ctx.shadowBlur = 16 * inten;
        ctx.beginPath(); ctx.moveTo(RX - 20, thrY); ctx.lineTo(RX + 20, thrY); ctx.stroke(); ctx.shadowBlur = 0;
      }
      const tf = (now - thrFlash) / 650;
      if (thrFlash > 0 && tf < 1) { ctx.strokeStyle = `rgba(55,236,189,${1 - tf})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(RX, thrY, 8 + tf * 40, 0, 7); ctx.stroke(); }

      for (const n of nodes) {
        const col = n.lit ? (n.dig ? "rgba(120,255,220,.95)" : "rgba(190,235,215,.95)") : "rgba(150,178,188,.4)";
        dot(RX, n.y, n.lit ? 3.4 : 2.4, col, n.lit ? 9 : 0);
        const ft = (now - n.flash) / 500;
        if (n.flash > 0 && ft < 1) { ctx.beginPath(); ctx.arc(RX, n.y, 4 + ft * 12, 0, 7); ctx.strokeStyle = `rgba(55,236,189,${1 - ft})`; ctx.lineWidth = 2; ctx.stroke(); }
      }
      if (phase === "reveal") {
        const hx = headY <= thrY ? RX + Aa * Math.sin(ky * (headY - yTop) - t) : RX;
        dot(hx, headY, 3.2, "rgba(180,255,235,1)", 16);
      }
    }

    function measureBig() {
      BW = bigWrap.clientWidth; BH = Math.round(Math.max(190, Math.min(320, BW * 0.55)));
      bigCv.width = BW * DPR; bigCv.height = BH * DPR; bigCv.style.height = BH + "px";
      bigCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
      fs = Math.max(13, Math.min(19, Math.round(BW / 26)));
      const step = Math.max(9, Math.round(fs * 0.72));
      const n = Math.max(6, Math.floor(BW / step));
      const rows = Math.floor(BH / fs) + 2;
      cols = [];
      for (let c = 0; c < n; c++) {
        const len = rows + 8;
        const ch = []; for (let i = 0; i < len; i++) ch.push(GLYPHS[(Math.random() * GLYPHS.length) | 0]);
        cols.push({ x: 2 + c * step, head: -Math.random() * BH, speed: 60 + Math.random() * 95, trail: Math.min(20, Math.max(8, Math.floor(rows * 0.5))), ch, len, mt: 0 });
      }
    }
    function bigTrigger(now) {
      bigPhase = "burst"; bigT = 0; bigFlash = now; bigWash = 1;
      for (const col of cols) col.head = -Math.random() * fs * 10;
    }
    function bigTick(dt, now) {
      if (bigPhase === "idle") return;
      if (bigPhase === "burst") {
        bigT += dt; const p = Math.min(1, bigT / BURST);
        if (p > 0.5) closing.classList.add("in");
        if (p >= 1) bigPhase = "alive";
      }
      for (const col of cols) {
        col.head += col.speed * (dt / 1000);
        col.mt += dt; if (col.mt > 70) { col.mt = 0; col.ch[(Math.random() * col.len) | 0] = GLYPHS[(Math.random() * GLYPHS.length) | 0]; }
        if (col.head - col.trail * fs > BH) { col.head = -Math.random() * fs * 6; col.speed = 60 + Math.random() * 95; }
      }
      if (bigWash > 0) bigWash = Math.max(0, bigWash - dt / 520);
      renderBig(now);
    }
    function renderBig() {
      if (!BW || !cols.length) return;
      bigCtx.clearRect(0, 0, BW, BH);
      bigCtx.font = fs + 'px "IBM Plex Mono", monospace';
      bigCtx.textBaseline = "top";
      for (const col of cols) {
        for (let k = 0; k <= col.trail; k++) {
          const yPx = col.head - k * fs;
          if (yPx < -fs || yPx > BH) continue;
          const ri = Math.floor(yPx / fs);
          const ch = col.ch[((ri % col.len) + col.len) % col.len];
          if (k === 0) { bigCtx.fillStyle = "rgba(205,255,238,0.98)"; bigCtx.shadowColor = "rgba(55,236,189,.9)"; bigCtx.shadowBlur = 8; }
          else { const a = 1 - k / col.trail; bigCtx.fillStyle = `rgba(55,236,189,${0.12 + 0.7 * a * a})`; bigCtx.shadowBlur = 0; }
          bigCtx.fillText(ch, col.x, yPx);
        }
      }
      bigCtx.shadowBlur = 0;
      if (bigWash > 0) { bigCtx.fillStyle = `rgba(55,236,189,${0.18 * bigWash})`; bigCtx.fillRect(0, 0, BW, BH); }
    }

    function tick(now) {
      if (killed) return;
      const dt = Math.min(50, now - last); last = now;
      t += dt * 0.0022;
      if (phase === "reveal") {
        u = Math.min(1, u + dt / 2800);
        const headY = yTop + u * (yBot - yTop);
        if (headY >= thrY) { thrLit = Math.min(1, thrLit + dt / 420); if (!crossed) { crossed = true; thrFlash = now; zoneDig.classList.add("in"); } }
        for (const n of nodes) {
          if (!n.lit && headY >= n.y) {
            n.lit = true; n.flash = now;
            stepEls[n.i].classList.add("in", "flash");
            tset(((el) => () => el.classList.remove("flash"))(stepEls[n.i]), 600);
          }
        }
        if (u > 0.02) zoneAna.classList.add("in");
        if (u >= 1) { phase = "alive"; ambT = 0; closing.classList.add("in"); }
      } else if (phase === "alive") {
        thrLit = Math.min(1, thrLit + dt / 420);
        ambT += dt; if (ambT > 4600) { ambT = 0; thrFlash = now; }
      }
      render(now);
      bigTick(dt, now);
      rafMain = requestAnimationFrame(tick);
    }

    function start() {
      if (started) return; started = true; measure(); measureBig(); headline.classList.add("in");
      if (reduce) {
        zoneAna.classList.add("in"); zoneDig.classList.add("in");
        stepEls.forEach((el) => el.classList.add("in"));
        nodes.forEach((n) => (n.lit = true)); thrLit = 1; phase = "alive"; closing.classList.add("in");
        bigPhase = "alive"; for (const col of cols) col.head = Math.random() * BH;
        render(performance.now()); renderBig(); return;
      }
      tset(() => { phase = "reveal"; u = 0; last = performance.now(); rafMain = requestAnimationFrame(tick); }, 450);
    }

    const onResize = () => { if (started) { measure(); measureBig(); render(performance.now()); renderBig(); } buildBg(); };
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { start(); io.disconnect(); } }), { threshold: 0.2 });
    io.observe(flow);
    const io2 = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && !reduce) { if (!started) start(); if (bigPhase === "idle" || bigPhase === "alive") { measureBig(); bigTrigger(performance.now()); } }
    }), { threshold: 0.45 });
    io2.observe(bigWrap);
    tset(() => { if (!started) start(); }, 400);

    /* ---------------- fondo neuronal (scopeado a la sección) ---------------- */
    const bgCtx = bgCv.getContext("2d");
    let bW, bH, bDPR, ns = [], edges = [], sig = null, bLast = performance.now(), sigT = 0;
    function buildBg() {
      bDPR = Math.min(window.devicePixelRatio || 1, 2);
      bW = root.clientWidth; bH = root.clientHeight;
      bgCv.width = bW * bDPR; bgCv.height = bH * bDPR; bgCv.style.width = bW + "px"; bgCv.style.height = bH + "px";
      bgCtx.setTransform(bDPR, 0, 0, bDPR, 0, 0);
      const N = Math.round(Math.max(12, Math.min(20, (bW * bH) / 64000))); ns = [];
      for (let i = 0; i < N; i++) ns.push({ x: Math.random() * bW, y: Math.random() * bH, vx: (Math.random() - 0.5) * 0.05, vy: (Math.random() - 0.5) * 0.05 });
      edges = []; for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) { if (Math.hypot(ns[i].x - ns[j].x, ns[i].y - ns[j].y) < Math.min(bW, bH) * 0.34) edges.push([i, j]); }
    }
    function bgFrame(now) {
      if (killed) return;
      const dt = Math.min(50, now - bLast); bLast = now;
      for (const n of ns) { n.x += n.vx * dt; n.y += n.vy * dt; if (n.x < 0 || n.x > bW) n.vx *= -1; if (n.y < 0 || n.y > bH) n.vy *= -1; }
      bgCtx.clearRect(0, 0, bW, bH);
      for (const [i, j] of edges) { const a = ns[i], b = ns[j]; const d = Math.hypot(a.x - b.x, a.y - b.y);
        bgCtx.strokeStyle = `rgba(120,150,160,${Math.max(0, 0.05 * (1 - d / (Math.min(bW, bH) * 0.34)))})`; bgCtx.lineWidth = 1;
        bgCtx.beginPath(); bgCtx.moveTo(a.x, a.y); bgCtx.lineTo(b.x, b.y); bgCtx.stroke(); }
      for (const n of ns) { bgCtx.beginPath(); bgCtx.arc(n.x, n.y, 1.4, 0, 7); bgCtx.fillStyle = "rgba(150,178,188,.12)"; bgCtx.fill(); }
      sigT += dt; if (!sig && sigT > 3400 && edges.length) { sig = { e: edges[(Math.random() * edges.length) | 0], t: 0 }; sigT = 0; }
      if (sig) { sig.t += dt / 900; const [i, j] = sig.e, a = ns[i], b = ns[j]; const x = a.x + (b.x - a.x) * sig.t, y = a.y + (b.y - a.y) * sig.t;
        bgCtx.beginPath(); bgCtx.arc(x, y, 1.8, 0, 7); bgCtx.fillStyle = "rgba(55,236,189,.5)"; bgCtx.shadowColor = "rgba(55,236,189,.7)"; bgCtx.shadowBlur = 8; bgCtx.fill(); bgCtx.shadowBlur = 0; if (sig.t >= 1) sig = null; }
      rafBg = requestAnimationFrame(bgFrame);
    }
    buildBg();
    if (reduce) { bgCtx.clearRect(0, 0, bW, bH); for (const n of ns) { bgCtx.beginPath(); bgCtx.arc(n.x, n.y, 1.4, 0, 7); bgCtx.fillStyle = "rgba(150,178,188,.12)"; bgCtx.fill(); } }
    else rafBg = requestAnimationFrame(bgFrame);

    return () => {
      killed = true;
      cancelAnimationFrame(rafMain); cancelAnimationFrame(rafBg);
      io.disconnect(); io2.disconnect();
      window.removeEventListener("resize", onResize);
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section ref={rootRef} className="kora-filo">
      <canvas ref={bgRef} className="bg" aria-hidden="true" />
      <div className="scrim" aria-hidden="true" />

      <div className="inner">
        <div className="eyebrow">Filosofía</div>
        <h1 className="headline">La tecnología nunca es el punto de partida.</h1>

        <div className="flow" ref={flowRef}>
          <canvas ref={railRef} className="rail" aria-hidden="true" />

          <div className="zone ana">Conversación humana</div>
          <div className="step ana"><span className="num">01</span><span className="label">Escuchar</span></div>
          <div className="step ana"><span className="num">02</span><span className="label">Comprender</span></div>
          <div className="step ana"><span className="num">03</span><span className="label">Identificar patrones</span></div>

          <div className="zone dig">Señal digital</div>
          <div className="step"><span className="num">04</span><span className="label">Modelar decisiones</span></div>
          <div className="step"><span className="num">05</span><span className="label">Automatizar</span></div>
          <div className="step"><span className="num">06</span><span className="label">Escalar</span></div>
        </div>

        <div className="bigdata" ref={bigWrapRef}>
          <canvas ref={bigRef} className="big" aria-hidden="true" />
        </div>

        <p className="closing">La plataforma existe para transformar <b>conocimiento operacional</b> en <b>decisiones automatizadas</b>.</p>
      </div>

      <style jsx>{`
        .kora-filo {
          --muted:#565f68; --dim:#3b444c; --bright:#f3f6f7; --teal:#17c39a; --teal-hi:#37ecbd; --warm:#bfe0d3;
          position:relative; background:#080a0b; color:var(--bright); overflow:hidden;
          font-family:"Space Grotesk", system-ui, -apple-system, sans-serif; -webkit-font-smoothing:antialiased;
        }
        .kora-filo :global(*) { box-sizing:border-box; }
        .bg { position:absolute; inset:0; width:100%; height:100%; z-index:0; display:block; opacity:.7; }
        .scrim { position:absolute; inset:0; z-index:1; pointer-events:none;
          background:radial-gradient(120% 90% at 50% 45%, transparent 44%, rgba(6,8,9,.62) 100%); }

        .inner { position:relative; z-index:2; max-width:640px; margin:0 auto; padding:4rem 1.5rem 6rem; }
        .eyebrow { font-family:"IBM Plex Mono", monospace; font-size:.78rem; letter-spacing:.42em; text-transform:uppercase;
          color:var(--teal); margin:0 0 1.4rem; }
        .headline { font-size:clamp(2.1rem,8.2vw,3.1rem); font-weight:600; line-height:1.06; max-width:16ch;
          opacity:0; transform:translateY(18px); transition:opacity .9s ease, transform .9s ease; }
        .headline.in { opacity:1; transform:none; }

        .flow { position:relative; margin:3rem 0 2.4rem; }
        .rail { position:absolute; top:0; left:0; z-index:0; pointer-events:none; }

        .zone { font-family:"IBM Plex Mono", monospace; font-size:.64rem; letter-spacing:.28em; text-transform:uppercase;
          padding-left:72px; margin-bottom:.5rem; opacity:0; transform:translateY(6px);
          transition:opacity .6s ease, transform .6s ease; }
        .zone.in { opacity:.7; transform:none; }
        .zone.ana { color:var(--warm); }
        .zone.dig { color:var(--teal); margin-top:1.9rem; }

        .step { position:relative; z-index:2; min-height:62px; padding-left:72px; display:flex; align-items:center; gap:.9rem;
          opacity:0; transform:translateX(-12px);
          transition:opacity .55s cubic-bezier(.2,.7,.2,1), transform .55s cubic-bezier(.2,.7,.2,1); }
        .step.in { opacity:1; transform:none; }
        .step .num { font-family:"IBM Plex Mono", monospace; font-size:.8rem; letter-spacing:.1em; color:var(--dim);
          min-width:1.6em; transition:color .5s ease; }
        .step.flash .num { color:var(--teal-hi); }
        .step .label { font-size:clamp(1.2rem,5vw,1.55rem); font-weight:500; }
        .step.ana .label { font-family:"Caveat", cursive; font-weight:600; line-height:1;
          font-size:clamp(1.95rem,8vw,2.6rem); color:#e4f1ea; letter-spacing:.005em; }

        .bigdata { position:relative; z-index:2; margin:.6rem 0 0; min-height:210px; }
        .big { display:block; width:100%; }

        .closing { position:relative; z-index:2; color:var(--muted); font-size:clamp(1.3rem,5.4vw,1.7rem); line-height:1.32;
          max-width:26ch; margin:1.6rem 0 0; padding-left:72px;
          opacity:0; transform:translateY(16px); transition:opacity 1s ease, transform 1s ease; }
        .closing.in { opacity:1; transform:none; }
        .closing b { color:var(--bright); font-weight:500; }

        @media (prefers-reduced-motion: reduce) {
          .headline, .step, .zone, .closing { opacity:1; transform:none; transition:none; }
        }
      `}</style>
    </section>
  );
}
