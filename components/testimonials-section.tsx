"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

/* ------------ data ------------- */
type Review = {
  name: string;
  role: string;           // e.g., "Homeowner – 3 BHK"
  location?: string;      // e.g., "Tower B, 9th Floor"
  rating: number;         // 1-5
  date: string;           // e.g., "Jan 2025"
  quote: string;
  avatar?: string;
  source?: "Google" | "Site" | "Facebook";
  video?: { src: string; poster?: string }; // optional video testimonial
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

/* ------------ helpers ------------- */
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
              "h-4 w-4",
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

function ReviewCard({ r }: { r: Review }) {
  const isVideo = !!r.video;
  return (
    <Card className="snap-start w-[86%] shrink-0 border-0 bg-background/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm sm:w-[62%] md:w-[48%] lg:w-[32%]">
      <CardContent className="p-5">
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

        {/* rating + quote */}
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
            <Quote className="mb-2 h-5 w-5 text-primary" />
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

/* ------------ main section ------------- */
export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  // optional gentle auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (hovered) return; // pause on hover

    const id = setInterval(() => {
      el.scrollBy({ left: el.clientWidth * 0.62, behavior: "smooth" });
      // loop back if near end
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

  // compute avg rating
  const avg =
    Math.round(
      (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length) * 10
    ) / 10;

  return (
    <section className="relative bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Resident Reviews
          </div>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            What Our Residents Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-lg text-muted-foreground">
            Genuine experiences from families who chose rrealtor Studio.
          </p>

          {/* rating summary */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
            <StarRating value={avg} />
            <span className="text-sm font-semibold">{avg} / 5.0</span>
            <span className="text-xs text-muted-foreground">• 250+ reviews</span>
          </div>
        </div>

        {/* carousel */}
        <div className="relative">
          {/* fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-muted/30 to-transparent md:w-16" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-muted/30 to-transparent md:w-16" />

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

          {/* arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 md:pl-3">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto h-9 w-9 rounded-full bg-background/80 backdrop-blur"
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
              className="pointer-events-auto h-9 w-9 rounded-full bg-background/80 backdrop-blur"
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

      {/* local css: hide scrollbar nicely */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
