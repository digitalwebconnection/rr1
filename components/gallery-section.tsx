"use client"

import { useEffect, useMemo, useState } from "react"

type Tag = "All" | "Interiors" | "Amenities" | "Exteriors"

const IMAGES: Array<{ src: string; alt: string; tag: Exclude<Tag, "All"> }> = [
  { src: "/apartment-interior-1.png", alt: "Spacious living room with modern furnishing", tag: "Interiors" },
  { src: "/modern-apartment-bedroom.png", alt: "Comfortable bedroom with natural light", tag: "Interiors" },
  { src: "/modern-apartment-kitchen.png", alt: "Modern modular kitchen", tag: "Interiors" },
  { src: "/swimming-pool-residential-complex.jpg", alt: "Swimming pool and recreational area", tag: "Amenities" },
  { src: "/landscaped-garden-residential.jpg", alt: "Landscaped gardens and green spaces", tag: "Amenities" },
  { src: "/residential-building-exterior-architecture.jpg", alt: "rrealtor Studio building exterior", tag: "Exteriors" },
]

export function GallerySection() {
  const [active, setActive] = useState<Tag>("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return active === "All" ? IMAGES : IMAGES.filter((i) => i.tag === active)
  }, [active])

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("gl-visible")
            obs.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [filtered])

  return (
    <section
      id="gallery"
      className="relative py-10"
      style={{
        ["--brand" as any]: "#664632",
        ["--gold" as any]: "#d6b47f",
        ["--paper" as any]: "#faf7f3",
      }}
    >
      <BackgroundFX />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Gallery Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--brand)]/[.06] px-3 py-1 text-xs font-medium">
            Curated by rrealtor Studio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore interiors, skyline balconies, landscaped gardens and lifestyle spaces.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {(["All", "Interiors", "Amenities", "Exteriors"] as Tag[]).map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition border ${
                active === t
                  ? "bg-[color:var(--brand)] text-white border-[color:var(--brand)]"
                  : "bg-white/80 border-[color:var(--brand)]/20 text-foreground hover:bg-[color:var(--brand)]/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((img, i) => (
            <figure
              key={img.src}
              className="group relative mb-4 break-inside-avoid h-60 rounded-xl border border-[color:var(--brand)]/15 bg-white shadow-sm overflow-hidden gl-reveal"
              data-reveal
              style={{ animationDelay: `${i * 60}ms` }}
              onMouseMove={(e) => handleTilt(e)}
              onMouseLeave={(e) => resetTilt(e)}
              onClick={() => setLightboxIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className="h-auto w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <div className="relative z-10">
                  <div className="text-[11px] uppercase tracking-wide opacity-90">{img.tag}</div>
                  <div className="text-sm font-medium">{img.alt}</div>
                </div>
              </figcaption>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.28)_45%,transparent_65%)] opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/20 bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand)] hover:bg-[color:var(--brand)]/10"
          >
            View All Photos
            <svg width="16" height="16" viewBox="0 0 24 24" className="translate-y-[1px]">
              <path fill="currentColor" d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </a>
        </div>

   
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i! - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((i) => (i! + 1) % filtered.length)}
        />
      )}

      <StyleMount />
    </section>
  )
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: Array<{ src: string; alt: string }>
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const img = images[index]
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="relative mx-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl gl-in" />
        <div className="mt-3 text-center text-sm text-white/90">{img.alt}</div>
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20">‹</button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 rounded-l-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20">›</button>
        <button onClick={onClose} className="absolute right-2 top-2 rounded-md bg-white/10 px-2 py-1 text-white hover:bg-white/20">✕</button>
      </div>
    </div>
  )
}

function handleTilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const rx = ((y / rect.height) - 0.5) * -4
  const ry = ((x / rect.width) - 0.5) * 4
  el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
}
function resetTilt(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateZ(0)"
}

function BackgroundFX() {
  return (
    <>
      <div aria-hidden className="absolute inset-0 -z-50" style={{ background: "linear-gradient(180deg, var(--paper) 0%, #fff 40%, var(--paper) 100%)" }} />
      <div aria-hidden className="absolute inset-0 -z-40 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage: "radial-gradient(1000px 300px at 50% 12%, black, transparent 75%), radial-gradient(1000px 300px at 50% 88%, black, transparent 75%)"
      }} />
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <span className="gl-shimmer absolute -left-1/3 top-0 h-[140%] w-1/2 rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(214,180,127,0.14),transparent)]" />
      </div>
    </>
  )
}

function StyleMount() {
  useEffect(() => {
    const css = `
.gl-reveal { opacity: 0; transform: translateY(10px); }
.gl-visible { opacity: 1; transform: translateY(0); transition: opacity .6s ease, transform .6s ease; }
@keyframes gl-in { from { opacity: 0; transform: scale(.98) } to { opacity: 1; transform: scale(1) } }
.gl-in { animation: gl-in .24s ease-out }
@keyframes gl-shimmer-move { 0% { transform: translateX(-120%) rotate(18deg) } 100% { transform: translateX(120%) rotate(18deg) } }
.gl-shimmer { animation: gl-shimmer-move 8s linear infinite }
@media (prefers-reduced-motion: reduce) {
  .gl-reveal, .gl-visible { transition: none }
  .gl-in, .gl-shimmer { animation: none }
}
`
    const tag = document.createElement("style")
    tag.innerHTML = css
    document.head.appendChild(tag)
    return () => tag.remove()
  }, [])
  return null
}
