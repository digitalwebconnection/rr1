"use client";

import { useEffect } from "react";
import {
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  Building2,
  Plane,
  Sparkles,
} from "lucide-react";

/* ------------------ Location Data ------------------ */
const LOCATION_ADVANTAGES = [
  {
    icon: MapPin,
    title: "Near SG Highway & SP Ring Road",
    desc: "Strategically located for fast access across Ahmedabad.",
  },
  {
    icon: School,
    title: "Top-Rated Schools Nearby",
    desc: "Close to DPS, Shanti Asiatic, Eklavya and other institutions.",
  },
  {
    icon: Hospital,
    title: "Healthcare in Minutes",
    desc: "Zydus, Sterling, SAL & multi-specialty clinics nearby.",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Retail Destinations",
    desc: "One Mall, Gulmohar Park, Cinepolis just a short drive away.",
  },
  {
    icon: Building2,
    title: "Proximity to IT & Business Zones",
    desc: "Easy commute to GIFT City and emerging corporate parks.",
  },
  {
    icon: Plane,
    title: "Airport in 25 Minutes",
    desc: "Direct route to Sardar Vallabhbhai Patel International Airport.",
  },
];

/* ------------------ Component ------------------ */
export default function LocationAdvantagesSection() {
  return (
    <section
      id="location"
      className="relative bg-white py-24"
      style={{
        ["--brand" as any]: "#664632",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      <SectionStyles />

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--brand)]/10 px-5 py-1 text-sm font-medium text-[color:var(--brand)]">
            <Sparkles className="h-4 w-4" />
            South Bopal • Ahmedabad
          </span>
          <h2 className="text-4xl font-bold">Live Where Everything Connects</h2>
          <p className="mt-3 max-w-xl mx-auto text-lg text-muted-foreground">
            Prime location. Premium lifestyle. South Bopal puts the city at your doorstep.
          </p>
        </div>

        {/* Visual + Feature Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual / Map Placeholder */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--brand)]/10 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
                alt="South Bopal Map"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {LOCATION_ADVANTAGES.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex gap-4 rounded-xl border border-[color:var(--brand)]/15 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="h-11 w-11 grid place-items-center rounded-lg bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[color:var(--brand)]">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--gold)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold">Visit The Masterpiece in South Bopal</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Schedule your site tour and discover what elevated living feels like.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-full bg-[color:var(--brand)] px-6 py-3 text-white hover:bg-[color:var(--brand)]/90 transition">
              Schedule a Site Visit
            </button>
            <button className="rounded-full border border-[color:var(--brand)] px-6 py-3 text-[color:var(--brand)] hover:bg-[color:var(--brand)]/5 transition">
              View on Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Styles ------------------ */
function SectionStyles() {
  useEffect(() => {
    const css = `
      @keyframes fadeUp { 0% { opacity: 0; transform: translateY(6px) } 100% { opacity: 1; transform: none } }
      .fade-up { animation: fadeUp .5s ease-out both }
    `;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
  return null;
}
