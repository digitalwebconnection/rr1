"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Crown,
  FileDown,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Wind,
  Wallet,
  Wand2,
} from "lucide-react";

/* =================== Reveal on scroll =================== */
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
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* =================== Data =================== */
const KPIS = [
  { label: "RERA ID", value: "PR/GJ/AHMEDABAD/2025/XXXX" },
  { label: "Possession", value: "March 2027" },
  { label: "Configurations", value: "4 & 5 BHK" },
  { label: "Towers / Floors", value: "7 Towers / 18 Floors" },
];

const PRIVILEGES = [
  { icon: Crown, title: "Concierge Services", text: "From maintenance to reservations." },
  { icon: Wallet, title: "Flexible Payment", text: "Customized payment plans for you." },
  { icon: ShieldCheck, title: "RERA Approved", text: "Safe and secure investment." },
  { icon: Users, title: "Elite Community", text: "Curated events & lifestyle upgrades." },

];

const PLAN_DATA = {
  "4BHK": {
    area: "2250–2500 sq.ft*",
    priceFrom: "₹1.49 Cr*",
    maintenance: "Premium society-managed",
    keypoints: [
      "Private foyers for exclusive luxury homes in South Bopal.",
      "Clubhouse with gym, pool, theatre and lifestyle indulgences.",
      "Corner units with city views",
    ],
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61f4d8?auto=format&fit=crop&w=1600&q=80",
  },
  "5BHK": {
    area: "2850–3200 sq.ft*",
    priceFrom: "₹1.99 Cr*",
    maintenance: "Luxury-tier services included",
    keypoints: [
      "RERA-approved project offering safe and secure investment.",
      "Trusted developer shaping premium residences in Ahmedabad.",
      "Penthouse-style corner units",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
};

const COMP_ROWS = [
  { label: "Private Foyer", you: true, other: false },
  { label: "Sky Lounge Access", you: true, other: false },
  { label: "Club, Gym & Pool", you: true, other: true },
  { label: "RERA Safety Compliance", you: true, other: true },
  { label: "Luxury Interiors", you: true, other: false },
];

/* =================== Main Section =================== */
export function WhyChooseSection() {
  const [plan, setPlan] = useState<"4BHK" | "5BHK">("4BHK");

  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-black/10 py-20"
      style={{
        ["--brand" as any]: "#6b4a3a",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--gold)]/80 bg-[color:var(--brand)]/85 px-6 py-1 text-sm font-semibold text-white">
              <Wand2 className="h-3.5 w-3.5" />
              Premium Highlights
            </span>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Seven towers of luxury 4 & 5 BHK apartments.
            </h2>
        
          </div>
        </Reveal>

        {/* KPIs */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-5xl rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {KPIS.map((kpi, i) => (
                <Reveal key={kpi.label} delay={i * 60}>
                  <div className="text-center">
                    <div className="text-xs text-[#030201]">{kpi.label}</div>
                    <div className="mt-1 text-lg font-semibold">{kpi.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Plan Comparison */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand)]/15 bg-white shadow-sm">
                  <img
                    src={PLAN_DATA[plan].image}
                    alt={`${plan} showcase`}
                    className="h-72 w-full object-cover md:h-[26rem]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
                    {plan === "4BHK" ? "Large Family Living" : "Penthouse Style"}
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-2 text-xs shadow">
                    From {PLAN_DATA[plan].priceFrom} • {PLAN_DATA[plan].area}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="w-full bg-[color:var(--brand)] text-white sm:flex-1 hover:brightness-110"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Request a Call Back
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:flex-1">
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-7">
            <Reveal>
              <Card className="border border-[color:var(--brand)]/65 bg-white/80 shadow-sm">
                <CardContent className="p-6">
                  {/* Plan Toggle */}
                  <div className="mb-5 inline-flex rounded-full border border-black/40 bg-[color:var(--brand)]/[.06] p-1 ring-1 ring-[color:var(--brand)]/15">
                    {(["4BHK", "5BHK"] as const).map((key) => (
                      <button
                        key={key}
                        onClick={() => setPlan(key)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                          plan === key
                            ? "bg-white shadow text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <StatItem icon={Ruler} label="Carpet Area" value={PLAN_DATA[plan].area} />
                    <StatItem icon={Wallet} label="Starting Price" value={PLAN_DATA[plan].priceFrom} />
                    <StatItem icon={LayoutGrid} label="Maintenance" value={PLAN_DATA[plan].maintenance} />
                  </div>

                  {/* Features */}
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {PLAN_DATA[plan].keypoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-black">
                        <Check className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" />
                        {pt}
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="mt-5 flex flex-wrap text-black items-center gap-2 text-xs">
                    <Chip icon={MapPin}>South Bopal, Ahmedabad</Chip>
                    <Chip icon={Star}>4.9★ Resident Ratings</Chip>
                    <Chip icon={TrendingUp}>High ROI Location</Chip>
                    <Chip icon={ShieldCheck}>Fully RERA Compliant</Chip>
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button className="w-full sm:w-auto bg-[color:var(--brand)] text-white hover:brightness-110">
                      Schedule a Site Visit
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Privileges */}
        <Reveal>
          <div className="mt-14">
            <h3 className="mb-4 text-xl font-semibold">Premium Customer Privileges</h3>
            <div className="group relative max-w-7xl mx-auto  px-4">
              <div className="flex snap-x snap-mandatory gap-4">
                {PRIVILEGES.map((p) => (
                  <div key={p.title} className="snap-center" style={{ minWidth: 260 }}>
                    <Card className="relative h-full border border-[color:var(--brand)]/85 bg-[color:var(--brand)]/[.04] shadow-sm">
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
                            <p.icon className="h-5 w-5" />
                          </div>
                          <div className="text-base font-semibold">{p.title}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">{p.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal>
          <div className="mt-14">
            <h3 className="mb-4 text-xl font-semibold">How We Compare</h3>
            <div className="overflow-hidden rounded-2xl border border-[color:var(--brand)]/15 bg-white shadow-sm">
              <div className="grid grid-cols-12 border-b border-[color:var(--brand)]/15 bg-[color:var(--brand)]/[.04] px-4 py-3 text-sm font-medium">
                <div className="col-span-6">Feature</div>
                <div className="col-span-3 text-center">Typical Project</div>
                <div className="col-span-3 text-center text-[color:var(--brand)]">Our Project</div>
              </div>
              {COMP_ROWS.map((row, i) => (
                <div key={row.label} className="grid grid-cols-12 items-center px-4 py-3 text-sm">
                  <div className="col-span-6">{row.label}</div>
                  <div className="col-span-3 text-center">
                    {row.other ? <Check className="mx-auto h-4 w-4 text-muted-foreground" /> : "—"}
                  </div>
                  <div className="col-span-3 text-center">
                    {row.you ? <Check className="mx-auto h-4 w-4 text-[color:var(--brand)]" /> : "—"}
                  </div>
                  {i < COMP_ROWS.length - 1 && (
                    <div className="col-span-12 border-b border-[color:var(--brand)]/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <SectionStyles />
    </section>
  );
}

/* =================== Utility Components =================== */
function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[color:var(--brand)]/15 bg-[color:var(--brand)]/[.05] p-3 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Chip({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--brand)]/[.06] px-3 py-1 text-[11px] font-medium text-foreground/80">
      <Icon className="h-3.5 w-3.5 text-[color:var(--brand)]" />
      {children}
    </span>
  );
}

function SectionStyles() {
  useEffect(() => {
    const css = `.h-4.5 { height: 1.125rem } .w-4.5 { width: 1.125rem }`;
    const tag = document.createElement("style");
    tag.innerHTML = css;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
  return null;
}
