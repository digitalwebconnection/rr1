"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ------------------ Brand & Data ------------------ */
const LOGO_URL = "/logo-rrealtor.png";



const bgImages = [
  "https://urbtechindia.com/wp-content/uploads/2020/09/Amenities-for-Modern-Real-Estate-Projects.jpg",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
];

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  

  // background slideshow (5s)
  useEffect(() => {
    const t2 = setInterval(() => setBgIndex((p) => (p + 1) % bgImages.length), 5000);
    return () => clearInterval(t2);
  }, []);

  // scroll tracking (for parallax + progress)
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY || 0);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // derived transforms (non-linear ease) + progress
  const { yShift, yFog, brightness, scaleBoost, progressPct } = useMemo(() => {
    const max = 800;
    const clamped = Math.min(scrollY, max);
    const t = clamped / max;
    const ease = 1 - Math.pow(1 - t, 3);
    return {
      yShift: ease * 60,
      yFog: ease * 120,
      brightness: 1 - ease * 0.12,
      scaleBoost: 1 + ease * 0.02,
      progressPct: Math.round(ease * 100),
    };
  }, [scrollY]);

  // particles
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        top: `${(i * 37) % 100}%`,
        left: `${(i * 61) % 100}%`,
        size: 4 + ((i * 7) % 8),
        delay: (i % 8) * 0.35,
      })),
    []
  );

  // bokeh orbs
  const orbs = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        top: `${(i * 19) % 100}%`,
        left: `${(i * 27) % 100}%`,
        size: 120 + ((i * 17) % 80),
        delay: (i % 6) * 0.6,
        opacity: 0.08 + ((i % 4) * 0.03),
      })),
    []
  );

  // cursor spotlight vars on the section
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative py-24 flex items-center justify-center text-center overflow-hidden"
      style={{
        ["--brand" as any]: "#6b4a3a",
        ["--brand-900" as any]: "#4a3126",
        ["--cream" as any]: "#f6efe8",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      {/* Background slideshow with parallax + ken-burns + alternating drift */}
      {bgImages.map((img, i) => {
        const isActive = i === bgIndex;
        const dir = i % 2 === 0 ? 1 : -1;
        return (
          <div
            key={i}
            className={`absolute inset-0 -z-50 bg-cover bg-center transition-opacity duration-[1100ms] ${isActive ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url('${img}')`,
              transform: `translate3d(0, ${yShift * dir}px, 0) scale(${scaleBoost})`,
              filter: `brightness(${brightness})`,
            }}
          >
            <div
              className={`absolute inset-0 ${isActive ? "animate-kenburns" : ""}`}
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </div>
        );
      })}

      {/* Brand overlays */}
      <div className="absolute inset-0 -z-40">
        <div className="absolute inset-0 bg-[linear-gradient(280deg,rgba(31,17,12,0.60),rgba(31,17,12,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,180,127,0.22),transparent_35%)]" />
      </div>

      {/* Aurora ribbons (parallax faster) */}
      <div
        className="pointer-events-none absolute inset-0 -z-35"
        style={{ transform: `translate3d(0, ${yFog}px, 0)` }}
      >
        <div className="absolute -left-20 top-1/4 h-[42rem] w-[42rem] blur-3xl rounded-full bg-[conic-gradient(from_20deg,rgba(214,180,127,0.22),rgba(107,74,58,0.18),transparent_70%)] animate-aurora" />
        <div className="absolute -right-16 top-[55%] h-[36rem] w-[36rem] blur-3xl rounded-full bg-[conic-gradient(from_220deg,rgba(246,239,232,0.18),rgba(214,180,127,0.15),transparent_70%)] animate-aurora-rev" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 -z-30 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.5'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Bokeh orbs */}
      <div
        className="pointer-events-none absolute inset-0 -z-25 mix-blend-screen"
        style={{ transform: `translate3d(0, ${yShift * 0.5}px, 0)` }}
      >
        {orbs.map((o, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-orb"
            style={{
              top: o.top,
              left: o.left,
              width: o.size,
              height: o.size,
              opacity: o.opacity,
              background:
                "radial-gradient(closest-side, rgba(214,180,127,0.55), rgba(214,180,127,0.0) 60%)",
              animationDelay: `${o.delay}s`,
              filter: "blur(10px)",
            }}
          />
        ))}
      </div>

      {/* Cursor spotlight (brand + gold glow that follows mouse) */}
      <div
        className="pointer-events-none absolute inset-0 -z-15"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(214,180,127,0.16), rgba(214,180,127,0) 40%)",
        }}
      />

      {/* Shimmer + particles */}
    
      <div className="pointer-events-none absolute inset-0 -z-20">
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-[color:var(--gold)]/65 blur-[3px] animate-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Lens flare twinkle (subtle accent) */}
      <div className="pointer-events-none absolute right-8 top-10 -z-10">
        <div className="relative h-24 w-24">
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_60%)] blur-md animate-flare" />
          <span className="absolute left-1/2 top-1/2 h-[1px] w-24 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)]" />
          <span className="absolute left-1/2 top-1/2 h-24 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.6),transparent)]" />
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="container relative z-10 px-4">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--cream)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--cream)] backdrop-blur">
          RRealtorStudio
        </div>

        {/* Staggered headline reveal */}
        <h1 className="text-3xl md:text-6xl text-white font-bold">Luxury 4 & 5 BHK Apartments in South Bopal Ahmedabad</h1>

        <p className="mt-4 text-lg md:text-2xl text-[color:var(--cream)]/85 animate-fade-in-up max-w-7xl mx-auto">
        Live in spacious homes with stunning views and top-class lifestyle. A prime location offering comfort, style, and privacy.
        </p>

       
      </div>

      {/* Scroll progress (bottom bar) */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[linear-gradient(90deg,rgba(214,180,127,0.2),rgba(214,180,127,0.8))]"
        style={{ width: `${progressPct}%` }}
      />

      <StyleMount />
    </section>
  );
}

/* ===== Staggered Headline ===== */


/* ------------------ Animations & Mount ------------------ */
function StyleMount() {
  useEffect(() => {
    const css = `
/* text + headline motions */
@keyframes fade-in-up { from { opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
.animate-fade-in-up { animation: fade-in-up 0.9s forwards; }
@keyframes pop { 0% { opacity:0; transform: translateY(14px) scale(0.96); } 60% { opacity:1; } 100% { opacity:1; transform: translateY(0) scale(1);} }
.animate-pop { animation: pop 600ms cubic-bezier(.21,1.02,.73,1) both; }

/* ken burns for active slide */
@keyframes kenburns { 0% { transform: scale(1) translateY(0); } 100% { transform: scale(1.06) translateY(-6px); } }
.animate-kenburns { animation: kenburns 5s ease-in-out forwards; }

/* gold shimmer sweep */
@keyframes shimmer { 0% { transform: translateX(-120%) rotate(20deg);} 100% { transform: translateX(120%) rotate(20deg);} }
.animate-shimmer { animation: shimmer 6.5s linear infinite; }

/* particles */
@keyframes float { 0%,100% { transform: translateY(0) translateX(0); opacity: 0.8;} 50% { transform: translateY(-10px) translateX(6px); opacity: 1; } }
.animate-float { animation: float 7s ease-in-out infinite; }

/* aurora ribbons */
@keyframes auroraMove { 0%,100% { transform: translateX(-4%) scale(1); opacity: .7; } 50% { transform: translateX(4%) scale(1.03); opacity: .9; } }
@keyframes auroraMoveRev { 0%,100% { transform: translateX(3%) scale(1); opacity: .65; } 50% { transform: translateX(-3%) scale(1.02); opacity: .85; } }
.animate-aurora { animation: auroraMove 12s ease-in-out infinite; }
.animate-aurora-rev { animation: auroraMoveRev 14s ease-in-out infinite; }

/* bokeh orbs */
@keyframes orb { 0%,100% { transform: translateY(0) translateX(0) scale(1);} 50% { transform: translateY(-16px) translateX(10px) scale(1.04);} }
.animate-orb { animation: orb 10s ease-in-out infinite; }

/* lens flare */
@keyframes flare { 0%,100% { opacity:.55; transform: scale(1);} 50% { opacity:.9; transform: scale(1.08);} }
.animate-flare { animation: flare 6s ease-in-out infinite; }
`;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
  return null;
}
