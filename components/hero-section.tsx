"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Calendar,
  Banknote,
  Download,
  PlayCircle,
  Leaf,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-200 via-amber-700/40 to-[#664632]/90 py-20">
      {/* soft radial glow + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-30%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: copy */}
          <div className="lg:col-span-6">
            {/* eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              <MapPin className="h-4 w-4" />
              Ahmedabad • Nature-Inspired Community
            </div>

            {/* <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
             rrealtor Studio
            </h1> */}

            <h1 className="mt-3 text-2xl font-semibold text-slate-900 md:text-4xl">
              Spacious 2 & 3 BHK Homes in Ahmedabad 
            </h1>
            <p className="mt-1 text-lg text-slate-600">
              RERA-approved apartments with lifestyle amenities & prime connectivity.
            </p>

            {/* price ribbon */}
            <div className="mt-6 rounded-2xl border border-emerald-600/20 bg-white/70 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20">
                  <Banknote className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-600">Starting Price</div>
                  <div className="text-lg font-semibold text-emerald-700">Price on Request</div>
                  <div className="text-xs text-slate-500">(Easy EMI options available • T&amp;C apply)</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group px-6 py-6 bg-[#664632] text-base">
                Book Your Site Visit Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-6 text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>

            {/* quick stats */}
            <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <Stat
                icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
                label="RERA Approved"
                value="PR/GJ/2025/XXXX"
              />
              <Stat
                icon={<Calendar className="h-4 w-4 text-emerald-600" />}
                label="Possession"
                value="Dec 2026"
              />
              <Stat
                icon={<Leaf className="h-4 w-4 text-emerald-600" />}
                label="Configurations"
                value="2 & 3 BHK"
              />
            </ul>
          </div>

          {/* RIGHT: media card */}
          <div className="lg:col-span-6">
            <div className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-20px_rgba(2,6,23,.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/17b30c_f16a21f4a78e476c8e6fccb57ba38ad0~mv2.jpeg/v1/fill/w_1425,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17b30c_f16a21f4a78e476c8e6fccb57ba38ad0~mv2.jpeg"
                alt="Aranyam residences with landscaped gardens"
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* top-left tag */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
                Show Flat Open
              </span>

              {/* shiny sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.36)_40%,transparent_60%)] opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100"
              />

              {/* walkthrough button */}
              <button
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-black/60"
                aria-label="Play walkthrough"
              >
                <PlayCircle className="h-4 w-4" />
                Walkthrough
              </button>

              {/* price chip */}
              <div className="absolute bottom-4 right-4 rounded-xl bg-white/90 px-3 py-2 text-xs text-slate-800 shadow">
                Launch Offer • Limited Units
              </div>
            </div>
          </div>
        </div>

        {/* filter chips (paths to explore) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <FilterChip>2 BHK</FilterChip>
          <FilterChip>3 BHK</FilterChip>
          <FilterChip>Garden-Facing</FilterChip>
          <FilterChip>Corner Unit</FilterChip>
          <FilterChip>Ready-to-Move Nearby</FilterChip>
        </div>
      </div>
    </section>
  );
}

/* ---------- tiny components ---------- */

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 backdrop-blur">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-600/10 ring-1 ring-emerald-600/20">
        {icon}
      </span>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm font-semibold text-slate-800">{value}</div>
      </div>
    </li>
  );
}

function FilterChip({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-emerald-600 bg-gray-600 px-3 py-1.5 text-xs  text-white transition hover:bg-emerald-600/15">
      {children}
    </button>
  );
}
