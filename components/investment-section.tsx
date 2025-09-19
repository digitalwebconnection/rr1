"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Ruler,
  Wallet,
  Building2,
  ShieldCheck,
  Flower,
  Landmark,
  Phone,
  FileDown,
} from "lucide-react"

/* ------------------ Data ------------------ */
const projectInfo = [
  {
    icon: Home,
    title: "Luxury 4 & 5 BHK Apartments",
    description: "Crafted for families who value comfort, lifestyle, and exclusivity.",
  },
  {
    icon: Landmark,
    title: "Located in South Bopal",
    description: "Premium skyline views in one of Ahmedabad's most coveted neighborhoods.",
  },
  {
    icon: Flower,
    title: "World-Class Amenities",
    description: "Landscaped greens, clubhouse, gym, pool, and wellness zones.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Transparent Investment",
    description: "RERA-approved with flexible EMIs and investor-friendly offers.",
  },
]

const configurations = [
  {
    type: "4 BHK",
    area: "3545+ sq.ft",
    price: "Starting from ₹2.23 CR (All Inclusive)",
    highlights: ["Ideal for joint families", "Balconies with skyline views", "Smart layouts for privacy"],
  },
  {
    type: "5 BHK",
    area: "3545+ sq.ft",
    price: "Starting from ₹2.23 CR (All Inclusive)",
    highlights: ["Extra lounge/family room", "Dual terrace options", "Penthouse-grade finishes"],
  },
  {
    type: "Penthouse",
    area: "Private Terraces",
    price: "Price on Request",
    highlights: ["Top-floor exclusivity", "Skyline-facing deck", "Ultra-luxury fit-outs"],
  },
]

/* ------------------ Component ------------------ */
export default function InvestmentSection () {
  return (
    <section
      className="bg-white pt-20 pb-8"
      style={{
        ["--brand" as any]: "#6b4a3a",
        ["--gold" as any]: "#d6b47f",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-[color:var(--brand)]/10 px-4 py-1 text-sm font-semibold text-[color:var(--brand)]">
            About the Project
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">The Masterpiece, South Bopal</h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Premium 4 & 5 BHK residences designed for luxurious living in Ahmedabad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectInfo.map((item, i) => (
            <Card
              key={i}
              className="border border-[color:var(--brand)]/15 bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-[color:var(--brand)]/10 text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Configurations Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Apartment Configurations & Pricing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {configurations.map((cfg, i) => (
              <Card
                key={cfg.type + i}
                className="border border-[color:var(--brand)]/15 bg-[color:var(--brand)]/[.03] shadow-sm hover:shadow-md transition duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[color:var(--brand)] mb-1">{cfg.type}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    {cfg.area} • {cfg.price}
                  </div>
                  <ul className="text-sm list-disc list-inside space-y-1 text-black/90">
                    {cfg.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="rounded-2xl border border-[color:var(--brand)]/15 bg-[color:var(--brand)]/[.06] p-6 text-center shadow-sm">
          <h3 className="text-xl font-semibold">Explore floor plans, pricing, and offers</h3>
          <p className="mx-auto mt-1 max-w-xl text-sm text-muted-foreground">
            Schedule a private site visit or request a personalized investment brochure.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <Button className="bg-[color:var(--brand)] text-white hover:brightness-110">
              <Phone className="mr-2 h-4 w-4" />
             <a href="tel:+917211161521">Request a Call Back</a>
            </Button>
        
          </div>
        </div>
      </div>
    </section>
  )
}
