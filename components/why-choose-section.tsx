"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Home,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Wind,
  Building2,
} from "lucide-react";

/* ---------- Content ---------- */
const features: Array<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = [
  {
    icon: Home,
    title: "Smartly Planned Residences",
    description:
      "2 & 3 BHK layouts with cross-ventilation, bay windows, and optimal daylight for healthier living.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Luxury",
    description:
      "Premium finishes & amenities starting at just ₹49.9 Lakhs* — unmatched value in this micro-market.",
  },
  {
    icon: MapPin,
    title: "Prime, Connected Location",
    description:
      "Near SG Highway & SP Ring Road; minutes from leading schools, hospitals, and malls.",
  },
  {
    icon: ShieldCheck,
    title: "RERA Compliant & Transparent",
    description:
      "Clear documentation, escrow protection, and milestone-based progress updates.",
  },
  {
    icon: Wind,
    title: "Sustainable by Design",
    description:
      "Energy-efficient orientation, water harvesting & landscaped pockets for a cooler micro-climate.",
  },
  {
    icon: Building2,
    title: "High ROI Potential",
    description:
      "Growth corridor with strong rental demand and appreciation outlook.",
  },
];

const kpis = [
  { label: "RERA ID", value: "PR/GJ/2025/XXXX" },
  { label: "Possession", value: "Dec 2026" },
  { label: "Configurations", value: "2 & 3 BHK" },
  { label: "Towers / Floors", value: "3 Towers / 14 Floors" },
];

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- Section ---------- */

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative overflow-hidden bg-muted/30 py-20">
      {/* subtle grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:22px_22px]"
      />
      <div className="container max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Why rrealtor Studio
          </span>
          <h2 className="text-balance mb-3 text-3xl font-bold md:text-4xl">
            The Smarter Way to Own a Premium Home
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            A lifestyle upgrade that blends thoughtful planning, location advantage, and transparent delivery.
          </p>
        </div>

        {/* KPI Row */}
        <Reveal>
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {kpis.map((kpi, i) => (
              <Reveal key={kpi.label} delay={i * 60}>
                <Card className="border-0 bg-background/60 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">{kpi.label}</div>
                    <div className="mt-1 text-lg font-semibold">{kpi.value}</div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Main Grid: sticky showcase + features */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sticky showcase image / proof */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-background/60 shadow-lg backdrop-blur">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://static.wixstatic.com/media/17b30c_67fc017a97084214afa046a832e9018a~mv2.jpg/v1/fill/w_980,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kavisha-the-canvas-gate-view.jpg"
                    alt="rrealtor Studio Residences"
                    className="h-72 w-full object-cover md:h-[26rem]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium shadow">
                    Show Flat Open
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-3 py-2 text-xs shadow">
                    Starting ₹49.9 Lakhs* • Limited Units
                  </div>
                  {/* light sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.28)_40%,transparent_60%)] opacity-0 transition-all duration-700 hover:translate-x-[120%] hover:opacity-100" />
                </div>
              </Reveal>

              {/* CTA block under image */}
              <Reveal delay={120}>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="w-full bg-[#664632] sm:flex-1">
                    Get Brochure
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:flex-1">
                    Schedule Site Visit
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Feature tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={i} delay={i * 80}>
                  <FeatureCard icon={f.icon} title={f.title} description={f.description} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="group relative flex h-full flex-col justify-between border-0 bg-background/60 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col p-6">
        {/* Icon + Title */}
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* tiny checks row */}
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="h-4 w-4 text-primary" />
          Included in standard specification
        </div>

        {/* gradient edge on hover */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </CardContent>
    </Card>
  );
}
