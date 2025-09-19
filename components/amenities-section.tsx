"use client";

import { useEffect } from "react";
import {
  Dumbbell,
  Waves,
  Baby,
  Gamepad2,
  Theater,
  Users,
  ShieldCheck,
  Camera,
  TreePine,
  Footprints,
} from "lucide-react";

/* ------------------ Types & Data ------------------ */
type Category = {
  icon: React.ElementType;
  title: string;
  description: string;
  amenities: string[];
};

const AMENITY_CATEGORIES: Category[] = [
  {
    icon: Dumbbell,
    title: "Wellness & Fitness",
    description: "Dedicated spaces for a healthier lifestyle and active living.",
    amenities: ["Modern Gym", "Yoga Lawns", "Swimming Pool", "Kids’ Pool"],
  },
  {
    icon: Baby,
    title: "Family & Kids",
    description: "Safe, fun zones for children and versatile indoor activities.",
    amenities: ["Play Areas", "Multipurpose Courts", "Indoor Games Arena"],
  },
  {
    icon: Theater,
    title: "Social & Lifestyle",
    description: "Spaces designed for connection, celebration and entertainment.",
    amenities: ["Theatre Room", "Party Lawns", "Lounge & Clubhouse"],
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description: "Peace of mind with round-the-clock protection.",
    amenities: ["Gated Entry", "CCTV Surveillance", "24/7 Security Staff"],
  },
  {
    icon: TreePine,
    title: "Outdoor Spaces",
    description: "Breathe easy in green, open-air environments.",
    amenities: ["Landscaped Gardens", "Jogging Track", "Open-air Sit-outs"],
  },
];

/* ------------------ Component ------------------ */
export default function AmenitiesAtlasPage() {
  return (
    <section
      className="bg-white py-20 text-[color:var(--brand)]"
      id="amenities"
      style={{
        ["--brand" as any]: "#664632",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      <SectionStyles />

      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="mb-3 inline-block rounded-full bg-[color:var(--gold)]/10 px-4 py-1 text-sm font-semibold text-[color:var(--brand)]">
            Amenities Atlas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience Lifestyle Like Never Before</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-lg">
            Curated spaces designed to nurture wellness, family time, social joy, safety, and nature.
          </p>
        </div>

        {/* Amenity Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITY_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-[color:var(--brand)]/15 bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                <ul className="text-sm text-black/80 space-y-1 list-disc list-inside">
                  {cat.amenities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* gold accent hover underline */}
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-[color:var(--gold)]/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>

        {/* Optional CTA at Bottom */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to explore the full lifestyle offering?</h3>
          <p className="text-sm text-muted-foreground mb-4">Book a visit to experience the amenities first-hand.</p>
          <button className="rounded-full bg-[color:var(--brand)] px-6 py-2 text-white hover:bg-[color:var(--brand)]/90 transition">
            Schedule a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Styles ------------------ */
function SectionStyles() {
  useEffect(() => {
    const css = `
      @keyframes fadeUp { 0% {opacity:0; transform: translateY(6px)} 100% {opacity:1; transform:none} }
      .fade-up { animation: fadeUp .5s ease-out both }
    `;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
  return null;
}
