"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {


  return (
    <section
      className="relative py-10 text-white overflow-x-clip" // clip avoids mobile side-scroll
      style={
        {
          ["--brand" as any]: "#664632",
          ["--gold" as any]: "#664632",
          ["--paper" as any]: "#664632",
        } as React.CSSProperties
      }
    >
      {/* ==== Background stack ==== */}
      <div aria-hidden className="absolute inset-0 -z-50 bg-[#664632]/70" />
      <div
        aria-hidden
        className="absolute inset-0 -z-40 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(1200px 300px at 50% 10%, black, transparent 70%), radial-gradient(1200px 300px at 50% 90%, black, transparent 70%)",
        } as any}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 mix-blend-screen">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full blur-3xl ${i % 2 ? "cta-blob-rev" : "cta-blob"}`}
            style={{
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23) % 90}%`,
              width: 180 + ((i * 29) % 120),
              height: 180 + ((i * 29) % 120),
              opacity: 0.08 + ((i % 4) * 0.03),
              background:
                "radial-gradient(closest-side, rgba(214,180,127,0.45), rgba(214,180,127,0.0) 60%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header + actions */}
        <div className="mx-auto mb-6 max-w-7xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/80 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Final Call-to-Action
          </span>
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            Upgrade your lifestyle with luxury 4 & 5 BHK apartments in South Bopal Ahmedabad.
          </h2>
          <p className="text-balance mx-auto mt-3 text-xl opacity-90">
            Own premium apartments in South Bopal with skyline views today.
          </p>

         


        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ContactCard
            icon={<Phone className="h-8 w-8" />}
            title="Call Us"
            line="+91-7211161521"
            href="tel:+917211161521"
            ariaLabel="Call +91-7211161521"
          />
          <ContactCard
            icon={<Mail className="h-8 w-8" />}
            title="Email Us"
            line="info@rrealtorstudio.com"
            href="mailto:info@rrealtorstudio.com" // FIX: .com (not .comm)
            ariaLabel="Email info@rrealtorstudio.com"
          />
          <ContactCard
            icon={<MapPin className="h-8 w-8" />}
            title="Visit Us"
            line="Gala Gymkhana Road, South Bopal Ahmedabad"
          />
        </div>
      </div>

      <CTACSS />
    </section>
  );
}

/* ===== Pieces ===== */

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  line: string;
  href?: string;
  ariaLabel?: string;
};

function ContactCard({ icon, title, line, href, ariaLabel }: ContactCardProps) {
  const CardInner = (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,.6)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
      onMouseMove={(e) => handleTilt(e)}
      onMouseLeave={(e) => resetTilt(e)}
    >
      <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm opacity-90">{line}</p>
      <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.25)_45%,transparent_65%)] opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
    </div>
  );

  return href ? (
    <a
      href={href}
      aria-label={ariaLabel}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
    >
      {CardInner}
    </a>
  ) : (
    CardInner
  );
}

function handleTilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rx = ((y / rect.height) - 0.5) * -3.5;
  const ry = ((x / rect.width) - 0.5) * 3.5;
  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
}
function resetTilt(e: React.MouseEvent<HTMLElement>) {
  (e.currentTarget as HTMLElement).style.transform =
    "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
}

function CTACSS() {
  useEffect(() => {
    const css = `
@keyframes cta-shimmer-move { 0% { transform: translateX(-120%) rotate(18deg) } 100% { transform: translateX(120%) rotate(18deg) } }
.cta-shimmer { animation: cta-shimmer-move 8s linear infinite }
@keyframes cta-drift { 0%,100% { transform: translateX(-3%) scale(1); opacity:.8 } 50% { transform: translateX(3%) scale(1.03); opacity:.95 } }
@keyframes cta-drift-rev { 0%,100% { transform: translateX(3%) scale(1); opacity:.75 } 50% { transform: translateX(-3%) scale(1.02); opacity:.9 } }
.cta-blob { animation: cta-drift 16s ease-in-out infinite }
.cta-blob-rev { animation: cta-drift-rev 18s ease-in-out infinite }
@keyframes cta-pulse-kf { 0% { box-shadow: 0 0 0 0 rgba(255,255,255,.35) } 70% { box-shadow: 0 0 0 14px rgba(255,255,255,0) } 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0) } }
.cta-pulse { animation: cta-pulse-kf 2.4s ease-out infinite }
@media (prefers-reduced-motion: reduce) { .cta-shimmer, .cta-blob, .cta-blob-rev, .cta-pulse { animation: none } }
`;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
  return null;
}
