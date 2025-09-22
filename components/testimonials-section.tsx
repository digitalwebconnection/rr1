"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

/* ------------ data (unchanged) ------------- */
type Review = {
  name: string;
  role: string;
  location?: string;
  rating: number;
  date: string;
  quote: string;
  avatar?: string;
  source?: "Google" | "Site" | "Facebook";
  video?: { src: string; poster?: string };
};

const REVIEWS: Review[] = [
  {
    name: "Rajesh & Priya Sharma",
    role: "Homeowner – 3 BHK",
    location: "Tower A, 12th Floor",
    rating: 5,
    date: "Dec 2024",
    quote:
      "We moved into a home that gives us both space and community. Amenities are top-notch and connectivity is excellent.",
    avatar: "https://i.pravatar.cc/100?img=15",
    source: "Google",
  },
  {
    name: "Neha Desai",
    role: "Homeowner – 2 BHK",
    location: "Tower C, 7th Floor",
    rating: 5,
    date: "Nov 2024",
    quote:
      "Cross ventilation and daylight make a real difference. The team was transparent throughout the process.",
    avatar: "https://i.pravatar.cc/100?img=32",
    source: "Google",
  },
  {
    name: "Arjun Mehta",
    role: "Investor",
    location: "Phase II",
    rating: 4,
    date: "Oct 2024",
    quote:
      "Great value in this micro-market. Strong rental demand—happy with the appreciation so far.",
    avatar: "https://i.pravatar.cc/100?img=11",
    source: "Site",
  },
  {
    name: "Kunal & Aditi",
    role: "Homeowner – 2.5 BHK",
    location: "Tower B, 9th Floor",
    rating: 5,
    date: "Sep 2024",
    quote:
      "Booking and documentation were smooth. Kids love the open areas; we love the peaceful layout.",
    avatar: "https://i.pravatar.cc/100?img=22",
    source: "Google",
  },
];

/* ------------ helpers (unchanged + tilt) ------------- */
function StarRating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < full;
        const isHalf = !filled && i === full && half;
        return (
          <Star
            key={i}
            className={[
              "h-4 w-4 drop-shadow-[0_0_4px_rgba(214,180,127,.35)]",
              filled || isHalf ? "fill-amber-400 text-amber-400" : "text-muted-foreground/50",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
      {children}
    </span>
  );
}

function handleTilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rx = ((y / rect.height) - 0.5) * -4; // tilt range
  const ry = ((x / rect.width) - 0.5) * 4;
  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
}
function resetTilt(e: React.MouseEvent<HTMLElement>) {
  (e.currentTarget as HTMLElement).style.transform =
    "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
}

function ReviewCard({ r }: { r: Review }) {
  const isVideo = !!r.video;
  return (
    <Card
      className="group review-card relative snap-start w-[86%] shrink-0 border-0 bg-background/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 sm:w-[62%] md:w-[48%] lg:w-[32%]"
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      {/* subtle border glow */}
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [box-shadow:0_0_0_1px_rgba(214,180,127,.35)_inset,0_6px_30px_-10px_rgba(0,0,0,.35)]" />
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 translate-x-[-120%] rounded-xl bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.35)_45%,transparent_65%)] opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />

      <CardContent className="relative p-5">
        {/* header */}
        <div className="mb-3 flex items-center gap-3">
          {isVideo ? (
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
              <PlayCircle className="h-5 w-5" />
            </div>
          ) : (
            <img
              src={r.avatar || "https://i.pravatar.cc/100?img=5"}
              alt={r.name}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}

          <div className="min-w-0">
            <div className="truncate font-semibold">{r.name}</div>
            <div className="truncate text-xs text-muted-foreground">
              {r.role} {r.location ? `• ${r.location}` : ""}
            </div>
          </div>
        </div>

        {/* rating + date */}
        <div className="mb-3 flex items-center justify-between">
          <StarRating value={r.rating} />
          <span className="text-xs text-muted-foreground">{r.date}</span>
        </div>

        {isVideo ? (
          <div className="relative overflow-hidden rounded-lg border border-border">
            <video
              className="h-44 w-full bg-black object-cover"
              src={r.video?.src}
              poster={r.video?.poster}
              controls
              preload="metadata"
            />
          </div>
        ) : (
          <>
            {/* animated quote ping */}
            <Quote className="mb-2 h-5 w-5 text-primary drop-shadow-[0_0_6px_rgba(214,180,127,.35)] quote-ping" />
            <blockquote className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">
              “{r.quote}”
            </blockquote>
          </>
        )}

        {/* footer */}
        <div className="mt-4 flex items-center justify-between">
          <BadgePill>{r.source || "Site Review"}</BadgePill>
          <span className="text-xs text-muted-foreground">Verified Resident</span>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------ main section (new bg + progress + ripple) ------------- */
export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  // auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el || hovered) return;
    const id = setInterval(() => {
      el.scrollBy({ left: el.clientWidth * 0.62, behavior: "smooth" });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(id);
  }, [hovered]);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.82;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  const avg =
    Math.round((REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length) * 10) / 10;

  return (
    <section
      className="relative py-10"
      style={
        {
          ["--brand" as any]: "#664632",
          ["--gold" as any]: "#d6b47f",
        } as React.CSSProperties
      }
    >
      {/* ==== Background: brand tint + grain + shimmer + orbs ==== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-50"
        style={{
          background:
            "radial-gradient(900px circle at 80% 10%, rgba(214,180,127,0.12), transparent 55%), radial-gradient(900px circle at 15% 90%, rgba(102,70,50,0.10), transparent 60%), linear-gradient(180deg, #ffffff 0%, #faf7f4 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-40 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.45'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <span className="absolute -left-1/3 top-0 h-[150%] w-1/2 rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(214,180,127,0.18),transparent)] animate-tt-shimmer" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 mix-blend-screen">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full blur-2xl ${
              i % 2 ? "tt-blob-rev" : "tt-blob"
            }`}
            style={{
              top: `${(i * 19) % 90}%`,
              left: `${(i * 27) % 90}%`,
              width: 140 + ((i * 29) % 120),
              height: 140 + ((i * 29) % 120),
              opacity: 0.07 + ((i % 4) * 0.03),
              background:
                "radial-gradient(closest-side, rgba(214,180,127,0.45), rgba(214,180,127,0.0) 60%)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Resident Reviews
          </div>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">What Our Residents Say</h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-lg text-muted-foreground">
            Genuine experiences from families who chose rrealtorStudio.
          </p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
            <StarRating value={avg} />
            <span className="text-sm font-semibold">{avg} / 5.0</span>
            <span className="text-xs text-muted-foreground">• 250+ reviews</span>
          </div>
        </div>

        {/* auto-scroll progress (pauses on hover) */}
        <div className="mx-auto mb-3 h-1 w-full max-w-5xl overflow-hidden rounded-full bg-black/5">
          <span
            className="block h-full w-1/3 rounded-full bg-[color:var(--gold)]/80 tt-progress"
            style={{ animationPlayState: hovered ? "paused" as const : "running" }}
          />
        </div>

        {/* carousel */}
        <div className="relative">
          {/* gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent md:w-16" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent md:w-16" />

          {/* track */}
          <div
            ref={trackRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="hide-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-2"
          >
            {REVIEWS.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>

          {/* arrows with ripple */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 md:pl-3">
            <Button
              size="icon"
              variant="outline"
              className="btn-ripple pointer-events-auto h-9 w-9 rounded-full bg-background/80 backdrop-blur active:scale-95"
              onClick={() => scroll("prev")}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 md:pr-3">
            <Button
              size="icon"
              variant="outline"
              className="btn-ripple pointer-events-auto h-9 w-9 rounded-full bg-background/80 backdrop-blur active:scale-95"
              onClick={() => scroll("next")}
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* footer ctas */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto bg-[#664632]">See All Google Reviews</Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Share Your Experience
          </Button>
        </div>
      </div>

      {/* local css: hide scrollbar + effects */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* shimmer sweep */
        @keyframes tt-shimmer-move { 0% { transform: translateX(-120%) rotate(18deg) } 100% { transform: translateX(120%) rotate(18deg) } }
        .animate-tt-shimmer { animation: tt-shimmer-move 10s linear infinite }

        /* bokeh orbs */
        @keyframes tt-drift { 0%,100% { transform: translateX(-3%) scale(1); opacity:.8 } 50% { transform: translateX(3%) scale(1.03); opacity:.95 } }
        @keyframes tt-drift-rev { 0%,100% { transform: translateX(3%) scale(1); opacity:.75 } 50% { transform: translateX(-3%) scale(1.02); opacity:.9 } }
        .tt-blob { animation: tt-drift 18s ease-in-out infinite }
        .tt-blob-rev { animation: tt-drift-rev 20s ease-in-out infinite }

        /* quote ping */
        @keyframes quote-ping-kf { 0% { transform: translateY(0); opacity: .9 } 50% { transform: translateY(-2px); opacity: 1 } 100% { transform: translateY(0); opacity: .9 } }
        .quote-ping { animation: quote-ping-kf 3.2s ease-in-out infinite }

        /* progress bar */
        @keyframes tt-progress-kf { 0% { transform: translateX(-110%) } 100% { transform: translateX(300%) } }
        .tt-progress { animation: tt-progress-kf 4s linear infinite }

        /* arrow ripple */
        @keyframes ripple { 0% { box-shadow: 0 0 0 0 rgba(102,70,50,.35) } 70% { box-shadow: 0 0 0 10px rgba(102,70,50,0) } 100% { box-shadow: 0 0 0 0 rgba(102,70,50,0) } }
        .btn-ripple:active { animation: ripple .5s ease-out }

        /* reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-tt-shimmer, .tt-blob, .tt-blob-rev, .quote-ping, .tt-progress, .btn-ripple { animation: none }
        }
      `}</style>
    </section>
  );
}
