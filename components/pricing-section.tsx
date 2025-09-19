"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  LayoutGrid,
  CheckCircle,
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  HandCoins,
} from "lucide-react";

/**
 * Brand-new structure & design (V2)
 * ------------------------------------------------------------
 * Layout:
 * 1) Ribbon Hero with angled gold band + KPI chips
 * 2) Reasons shown as Tabs (Investment • Location • Lifestyle)
 * 3) Mosaic Features grid (staggered cards)
 * 4) Payment plans — side-by-side comparison table
 * 5) CTA strip with location pin & quick facts
 */
export default function WhyInvest_V2() {
  const [openForm, setOpenForm] = React.useState(false);

  return (
    <section
      className="relative overflow-hidden text-[color:var(--ink)]"
      style={{
        ["--brand" as any]: "#664632",
        ["--gold" as any]: "#d6b47f",
        ["--ink" as any]: "#2a211a",
        ["--muted" as any]: "#6d5c4d",
      }}
    >
      <HeroRibbon />

      <div className="container mx-auto max-w-7xl px-6 pb-24">
        {/* Tabs Section */}
        <TabsReasons />

        {/* Mosaic Features */}
        <MosaicHighlights />

        {/* Payment Comparison */}
        <PaymentComparison />
      </div>

      <CtaStrip onEnquire={() => setOpenForm(true)} />
      <BgDecor />

      {/* Controlled popup form */}
      <QuickEnquiryPopup open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

/* ===================== 1) HERO RIBBON ===================== */
function HeroRibbon() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Angled band */}
      <div className="absolute -left-1/3 top-0 h-[160px] w-[160%] -rotate-3 bg-[color:var(--brand)]/5 backdrop-blur-sm" />
      <div className="absolute -left-1/3 top-10 h-[140px] w-[160%] -rotate-3 bg-[color:var(--gold)]/15" />

      <div className="container relative mx-auto max-w-7xl px-6 pt-16 pb-14">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-3 py-1 font-medium text-[color:var(--brand)]">
              South Bopal • Ahmedabad
            </span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]/70" />
            <span className="text-[color:var(--muted)]">RERA-approved luxury addresses</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-4xl font-extrabold tracking-tight text-[color:var(--brand)] sm:text-5xl"
          >
            Why Invest in <span className="text-[color:var(--gold)]">The Masterpiece</span>
          </motion.h1>
          <p className="mt-3 max-w-2xl text-lg text-[color:var(--muted)]">
            Premium 4 & 5 BHK residences designed for appreciation, comfort, and future-ready living.
          </p>

          {/* KPI Chips */}
          <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-[color:var(--brand)]/10 bg-white/60 p-3 backdrop-blur-xl sm:w-auto">
            {[
              ["4 & 5", "BHK"],
              ["RERA", "Approved"],
              ["Prime", "Corridor"],
            ].map(([a, b], i) => (
              <div
                key={i}
                className="rounded-xl bg-white/70 px-4 py-3 text-center shadow-[0_4px_18px_-10px_rgba(0,0,0,0.25)]"
              >
                <div className="text-xl font-bold text-[color:var(--brand)]">{a}</div>
                <div className="text-[11px] tracking-wide text-[color:var(--muted)]">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== 2) TABS: REASONS ===================== */
const TABS = [
  {
    key: "investment",
    label: "Investment",
    icon: TrendingUp,
    points: [
      "Low-density planning preserves premium value",
      "Legally clear titles with RERA transparency",
      "Healthy rental yields & end-user demand",
      "Appreciation potential in a supply-tight micro-market",
    ],
  },
  {
    key: "location",
    label: "Location",
    icon: Landmark,
    points: [
      "Prime connectivity to SG Highway & S.P. Ring Road",
      "Growing social infra: schools, malls, healthcare",
      "Well-planned urban corridor with green pockets",
      "Easy commute to key business hubs",
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle",
    icon: Building2,
    points: [
      "Spacious 4 & 5 BHK layouts with balconies",
      "Curated amenities for wellness & family time",
      "Elevated skyline views and abundant natural light",
      "Secure, community-centric living",
    ],
  },
] as const;

function TabsReasons() {
  const [active, setActive] = React.useState<(typeof TABS)[number]["key"]>("investment");
  return (
    <div className="mx-auto mt-14 max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
              active === t.key
                ? "border-[color:var(--gold)] bg-[color:var(--gold)]/15 text-[color:var(--brand)]"
                : "border-[color:var(--brand)]/15 bg-white/70 text-[color:var(--muted)] hover:bg-white"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-white/70 p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
        <AnimatePresence mode="wait">
          {TABS.map(
            (t) =>
              t.key === active && (
                <motion.ul
                  key={t.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {t.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--gold)]/70" />
                      <span className="text-[color:var(--ink)]/90">{p}</span>
                    </li>
                  ))}
                </motion.ul>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ===================== 3) MOSAIC HIGHLIGHTS ===================== */
const HIGHLIGHTS = [
  {
    title: "Luxury 4 & 5 BHK Residences",
    description:
      "Spacious homes in a premium South Bopal micro-market with curated amenities for daily wellness.",
    Icon: Building2,
  },
  {
    title: "Skyline Views & Future Growth",
    description:
      "Elevated living with open vistas and strong appreciation potential in a low-supply corridor.",
    Icon: LayoutGrid,
  },
  {
    title: "RERA Approved & Legally Clear",
    description: "Clean titles and regulatory compliance ensure purchase confidence.",
    Icon: CheckCircle,
  },
  {
    title: "Limited Inventory, High Exclusivity",
    description: "Low-density planning preserves privacy and premium value over time.",
    Icon: TrendingUp,
  },
] as const;

function MosaicHighlights() {
  return (
    <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {HIGHLIGHTS.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className={`group relative overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-white/70 p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] ${
            idx === 0 ? "lg:col-span-2" : ""
          }`}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-[color:var(--gold)]/70" />
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 ring-1 ring-[color:var(--brand)]/20">
              <item.Icon className="h-5 w-5 text-[color:var(--brand)]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[color:var(--brand)]">{item.title}</h4>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Location highlight card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-gradient-to-br from-white/80 to-white/50 p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
      >
        <span className="absolute right-6 top-6 h-10 w-10 rounded-full bg-[color:var(--gold)]/15" />
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 ring-1 ring-[color:var(--brand)]/20">
            <Landmark className="h-5 w-5 text-[color:var(--brand)]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[color:var(--brand)]">
              Ahmedabad's Prime Growth Corridor
            </h4>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Quick access to SG Highway & S.P. Ring Road with emerging social infrastructure.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ===================== 4) PAYMENT COMPARISON ===================== */
function PaymentComparison() {
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <div className="mb-4 text-center">
        <h3 className="text-2xl font-bold text-[color:var(--brand)]">
          Flexible <span className="text-[color:var(--gold)]">Payment Plans</span>
        </h3>
        <p className="mt-1 text-[color:var(--muted)]">
          Transparent pricing with assistance from leading banks.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[color:var(--brand)]/10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[color:var(--brand)]/5 text-left">
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">What you get</th>
              <th className="px-4 py-3">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[color:var(--brand)]/10">
              <td className="px-4 py-4 font-medium text-[color:var(--brand)] flex items-center gap-2">
                <BadgeDollarSign className="h-4 w-4" /> EMIs & Linked Possession
              </td>
              <td className="px-4 py-4 text-[color:var(--ink)]/90">
                Milestone-based schedule that follows construction stages up to possession.
              </td>
              <td className="px-4 py-4 text-[color:var(--muted)]">
                Buyers seeking predictable cashflow
              </td>
            </tr>
            <tr className="border-t border-[color:var(--brand)]/10">
              <td className="px-4 py-4 font-medium text-[color:var(--brand)] flex items-center gap-2">
                <HandCoins className="h-4 w-4" /> Bank Loan Assistance
              </td>
              <td className="px-4 py-4 text-[color:var(--ink)]/90">
                Faster approvals through tie-ups with leading banks.
              </td>
              <td className="px-4 py-4 text-[color:var(--muted)]">
                Buyers optimising interest & tenure
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===================== 5) CTA STRIP ===================== */
function CtaStrip({ onEnquire }: { onEnquire: () => void }) {
  return (
    <div className="relative mt-20 bg-gradient-to-br from-[color:var(--brand)]/90 to-[color:var(--brand)] text-white">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm/6 opacity-90">South Bopal • Ahmedabad</p>
            <h4 className="text-xl font-semibold">Book a Site Visit & Feel the Difference</h4>
          </div>
          <button
            onClick={onEnquire}
            className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-[color:var(--brand)] font-semibold shadow-md transition hover:brightness-105"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===================== BACKGROUND DECOR ===================== */
function BgDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(214,180,127,0.18),transparent_60%)] blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(102,70,50,0.18),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.04]" />
      <div className="absolute inset-0">
        <span className="absolute -left-1/3 top-20 h-[120%] w-[34%] rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(214,180,127,0.08),transparent)] [animation:shimmer_16s_linear_infinite]" />
      </div>
      <style>{`@keyframes shimmer { 0% { transform: translateX(-100%);} 100% { transform: translateX(100%);} }`}</style>
    </div>
  );
}

/* ===================== POPUP (controlled, opens instantly) ===================== */
function QuickEnquiryPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
          title="Close"
        >
          ✕
        </button>

        <h2 className="mb-4 text-center text-2xl font-bold text-[color:var(--brand)]">
          Enquiry Form
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: handle submit here (API, mailto, etc.)
            onClose();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              rows={3}
              placeholder="Type your enquiry here..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-black hover:brightness-110"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
