"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  Building2,
  Plane,
  Sparkles,
} from "lucide-react";
import EnquiryPopup from "@/components/EnquiryPopup";// import the popup

/* ------------------ Data ------------------ */
const LOCATION_POINTS = [
  {
    icon: MapPin,
    title: "Strategic Address",
    description:
      "Located near SG Highway & SP Ring Road for seamless city-wide access.",
  },
  {
    icon: School,
    title: "Renowned Schools Nearby",
    description: "DPS, Shanti Asiatic & Eklavya within a 5–30 minute drive.",
  },
  {
    icon: Hospital,
    title: "Healthcare at Hand",
    description: "Close to Zydus, Sterling, and other leading clinics.",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Markets",
    description: "Quick access to Major Shopping Malls of Ahmedabad.",
  },
  {
    icon: Building2,
    title: "Business & IT Hubs",
    description: "Near Business, corporate zones & IT corridors.",
  },
  {
    icon: Plane,
    title: "International Airport",
    description:
      "Sardar Vallabhbhai Patel Airport reachable within 50 minutes.",
  },
];

/* ------------------ Component ------------------ */
export default function LocationAdvantagesSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="location"
      className="bg-white py-10"
      style={{
        ["--brand" as any]: "#664632",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      <SectionStyles />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--brand)]/10 px-4 py-1 text-sm font-medium text-[color:var(--brand)]">
            <Sparkles className="h-4 w-4" />
            South Bopal • Ahmedabad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Location Advantages</h2>
          <p className="mt-2 max-w-xl mx-auto text-lg text-muted-foreground">
            A lifestyle destination that connects luxury living with convenience
            and accessibility.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATION_POINTS.map((point, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-[color:var(--brand)]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-11 w-11 grid place-items-center rounded-lg bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
                  <point.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-black">
                  {point.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{point.description}</p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[color:var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold">
            Visit The Masterpiece in South Bopal
          </h3>
          <p className="mt-1 text-lg text-muted-foreground">
            Explore the neighborhood, project site, and surrounding lifestyle in
            person.
          </p>
          <div className="mt-4 flex justify-center flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowPopup(true)}
              className="rounded-full bg-[color:var(--brand)] text-white px-10 py-2 hover:bg-[color:var(--brand)]/90"
            >
              Schedule a Site Visit
            </button>
          
          </div>
        </div>
      </div>

      {/* Popup injection */}
      {showPopup && <EnquiryPopup />}
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
