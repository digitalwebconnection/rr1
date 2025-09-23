"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  LayoutGrid,
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  HandCoins,
} from "lucide-react";

export default function WhyInvest_V2() {
  const [openForm, setOpenForm] = React.useState(false);

  // Prevent background scroll when popup is open (iOS safe)
  React.useEffect(() => {
    if (!openForm) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevTouch = body.style.touchAction as string;
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    return () => {
      body.style.overflow = prevOverflow;
      body.style.touchAction = prevTouch || "";
    };
  }, [openForm]);

  return (
    <section id="pricing" className="relative overflow-hidden text-[color:var(--ink)]">
      <HeroRibbon />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 pb-4">
        {/* Tabs Section */}
        <TabsReasons />

        {/* Mosaic Features */}
        <MosaicHighlights />

        {/* Payment Comparison */}
        <PaymentComparison />
      </div>



      {/* Controlled popup form */}
      <QuickEnquiryPopup open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

/* ===================== 1) HERO RIBBON ===================== */
function HeroRibbon() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Angled bands, softened for mobile */}
      <div className="absolute left-1/2  top-0
            h-[120px] sm:h-[160px] w-[120vw] sm:w-[140vw]
            -rotate-3 bg-[color:var(--brand)]/5 backdrop-blur-sm" />
      <div className="absolute left-1/2  top-8 sm:top-10
            h-[100px] sm:h-[140px] w-[120vw] sm:w-[140vw]
            -rotate-3 bg-[color:var(--gold)]/15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-16 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs">
            <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2.5 py-1 font-medium text-[color:var(--brand)]">
              South Bopal • Ahmedabad
            </span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]/70" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-3xl sm:text-5xl font-extrabold tracking-tight text-[color:var(--brand)]"
          >
            Why Invest in <span className="text-[color:var(--gold)]">The Masterpiece</span>
          </motion.h1>
          <p className="mt-3 max-w-2xl text-[15px] sm:text-lg text-black">
            Premium 4 & 5 BHK residences designed for appreciation, comfort, and future-ready living.
          </p>

          {/* KPI Chips */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 rounded-2xl border border-[color:var(--brand)]/10 bg-white/60 p-3 backdrop-blur-xl sm:w-auto">
            {[
              ["4 & 5", "BHK"],
              ["Prime", "Corridor"],
            ].map(([a, b], i) => (
              <div
                key={i}
                className="rounded-xl bg-[#664632] px-3 sm:px-4 py-2.5 sm:py-3 text-center shadow-[0_4px_18px_-10px_rgba(0,0,0,0.25)]"
              >
                <div className="text-lg sm:text-xl font-bold text-white">{a}</div>
                <div className="text-[10px] sm:text-[11px] tracking-wide text-[color:var(--muted)]">{b}</div>
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
    <div className="mx-auto mt-12 sm:mt-14 max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`group flex items-center gap-2 rounded-full border px-3 sm:px-4 py-2 text-xs sm:text-sm transition ${
              active === t.key
                ? "border-[color:var(--gold)] bg-[color:var(--gold)]/15 text-[color:var(--brand)]"
                : "border-[color:var(--brand)]/15 bg-black/90 text-white"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mt-5 sm:mt-6 overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-white/70 p-4 sm:p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
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
                    <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px]">
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
    title: "Limited Inventory, High Exclusivity",
    description: "Low-density planning preserves privacy and premium value over time.",
    Icon: TrendingUp,
  },
] as const;

function MosaicHighlights() {
  return (
    <div className="mx-auto mt-14 sm:mt-16 grid w-full max-w-6xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {HIGHLIGHTS.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className={`group relative overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-white/70 p-5 sm:p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] ${
            idx === 0 ? "lg:col-span-3" : ""
          }`}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-[color:var(--gold)]/70" />
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 ring-1 ring-[color:var(--brand)]/20">
              <item.Icon className="h-5 w-5 text-[color:var(--brand)]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[color:var(--brand)]">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-black/90">{item.description}</p>
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
        className="relative overflow-hidden rounded-3xl border border-[color:var(--brand)]/10 bg-gradient-to-br from-white/80 to-white/50 p-5 sm:p-6 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
      >
        <span className="absolute right-6 top-6 h-10 w-10 rounded-full bg-[color:var(--gold)]/15" />
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 ring-1 ring-[color:var(--brand)]/20">
            <Landmark className="h-5 w-5 text-[color:var(--brand)]" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[color:var(--brand)]">
              Ahmedabad's Prime Growth Corridor
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-black">
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
    <div className=" hidden md:flex md:flex-col mx-auto mt-16 sm:mt-20 w-full max-w-5xl">
      <div className="mb-4 text-center px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--brand)]">
          Flexible <span className="text-[color:var(--gold)]">Payment Plans</span>
        </h3>
        <p className="mt-1 text-[13px] sm:text-sm text-black">
          Transparent pricing with assistance from leading banks.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[color:var(--brand)]/10">
        <table className="min-w-[640px] w-full border-collapse text-[13px] sm:text-sm">
          <thead>
            <tr className="bg-[color:var(--brand)]/5 text-left">
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">What you get</th>
              <th className="px-4 py-3">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[color:var(--brand)]/10">
              <td className="px-4 py-4 font-medium text-[color:var(--brand)] flex items-center gap-2 whitespace-nowrap">
                <BadgeDollarSign className="h-4 w-4" /> EMIs & Linked Possession
              </td>
              <td className="px-4 py-4 text-[color:var(--ink)]/90">
                Milestone-based schedule that follows construction stages up to possession.
              </td>
              <td className="px-4 py-4 text-black">
                Buyers seeking predictable cashflow
              </td>
            </tr>
            <tr className="border-t border-[color:var(--brand)]/10">
              <td className="px-4 py-4 font-medium text-[color:var(--brand)] flex items-center gap-2 whitespace-nowrap">
                <HandCoins className="h-4 w-4" /> Bank Loan Assistance
              </td>
              <td className="px-4 py-4 text-[color:var(--ink)]/90">
                Faster approvals through tie-ups with leading banks.
              </td>
              <td className="px-4 py-4 text-black">
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


/* ===================== POPUP (mobile-perfect, controlled) ===================== */
function QuickEnquiryPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = React.useRef<HTMLDivElement | null>(null);
  const firstFieldRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (open) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm px-4 py-[max(1rem,env(safe-area-inset-top))]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enq-title"
      onClick={handleOverlay}
      onKeyDown={onKeyDown}
      style={{ minHeight: "100svh" }}
    >
      <div className="mx-auto flex min-h-[100svh] items-start sm:items-center justify-center">
        <div
          ref={dialogRef}
          className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-white shadow-2xl"
        >
          {/* Sticky header with close */}
          <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-gray-100 px-4 sm:px-6 py-3 bg-white/90 backdrop-blur">
            <h2 id="enq-title" className="text-base sm:text-lg font-bold text-[color:var(--brand)]">
              Enquiry Form
            </h2>
            <button
              onClick={onClose}
              className="inline-grid h-9 w-9 place-items-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Body scrolls within the card */}
          <form
            className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4 max-h-[calc(100svh-8rem)] overflow-y-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: integrate API
              onClose();
            }}
          >
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                ref={firstFieldRef}
                id="name"
                type="text"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="Your Name"
                required
                autoComplete="name"
                inputMode="text"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="you@example.com"
                required
                autoComplete="email"
                inputMode="email"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="+91 XXXXX XXXXX"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="[+0-9\-()\s]{8,}"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                rows={4}
                placeholder="Type your enquiry here..."
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-2xl bg-black py-3 text-sm sm:text-base font-semibold text-black hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
