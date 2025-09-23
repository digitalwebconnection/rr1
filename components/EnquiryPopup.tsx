"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false); // ✅ new state

  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Auto open after 2 sec
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevTouch = body.style.touchAction as string;
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    return () => {
      body.style.overflow = prevOverflow;
      body.style.touchAction = prevTouch || "";
    };
  }, [open]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  if (!open) return null;

  // ✅ Submit handler for Web3Forms
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData(e.currentTarget);

    const payload = {
      access_key: "bf117321-9395-49d6-8d5d-7e32d1ff934e", // your API key
      subject: "",
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      apartmentType: String(fd.get("apartmentType") || ""),
      budgetRange: String(fd.get("budgetRange") || ""),
      timeline: String(fd.get("timeline") || ""),
      siteVisit: String(fd.get("siteVisit") || ""),
      source: String(fd.get("source") || ""),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (result?.success) {
        setSubmitted(true); // ✅ show thank you
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setOpen(false), 3000); // auto close after 3s
      } else {
        setStatus(`❌ Failed: ${result?.message || `HTTP ${res.status}`}`);
      }
    } catch {
      setStatus("❌ Failed: network error");
    } finally {
      setLoading(false);
    }
  }

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm px-4 py-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onKeyDown={onKeyDown}
      onMouseDown={onOverlayClick}
      style={{ minHeight: "120svh" }}
    >
      <div className="mx-auto flex min-h-[100svh] items-start sm:items-center justify-center">
        <div
          ref={dialogRef}
          className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 flex items-center  justify-between border-b border-gray-100 px-4 py-3 sm:px-6 bg-white">
            <h2 id="enquiry-title" className="text-base sm:text-lg font-bold text-gray-900">
              Let’s Connect
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="h-9 w-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* ✅ Conditional Render */}
          {submitted ? (
            <div className="p-8 text-center ">
              <h3 className="text-xl font-semibold text-green-600">🎉 Thank You!</h3>
              <p className="mt-2 text-sm text-gray-700">
                We’ve received your enquiry. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form
              className="px-4 sm:px-6 py-4 space-y-4 max-h-[calc(100svh-8rem)] overflow-y-auto"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:ring-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:ring-black"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:ring-black"
                />
              </div>

              {/* Apartment Type */}
              <fieldset className="rounded-2xl border border-gray-200 p-4">
                <legend className="text-sm font-semibold text-gray-900">1. Which apartment type?</legend>
                <div className="mt-3 grid gap-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="apartmentType" value="4 BHK - 3545 sq.ft" required />
                    <span className="text-sm">4 BHK - 3545 sq.ft</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="apartmentType" value="5 BHK - 5185 sq.ft" />
                    <span className="text-sm">5 BHK - 5185 sq.ft</span>
                  </label>
                </div>
              </fieldset>

              {/* Budget */}
              <fieldset className="rounded-2xl border border-gray-200 p-4">
                <legend className="text-sm font-semibold text-gray-900">2. Preferred budget?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="budgetRange" value="₹2 – 3 Cr" required />
                    <span className="text-sm">₹2 – 3 Cr</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="budgetRange" value="₹3 – 4 Cr" />
                    <span className="text-sm">₹3 – 4 Cr</span>
                  </label>
                </div>
              </fieldset>

              {/* Timeline */}
              <fieldset className="rounded-2xl border border-gray-200 p-4">
                <legend className="text-sm font-semibold text-gray-900">3. When to buy?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeline" value="Immediately" required />
                    <span className="text-sm">Immediately</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeline" value="Within 3 months" />
                    <span className="text-sm">Within 3 months</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeline" value="3 – 6 months" />
                    <span className="text-sm">3 – 6 months</span>
                  </label>
                </div>
              </fieldset>

              {/* Site Visit */}
              <fieldset className="rounded-2xl border border-gray-200 p-4">
                <legend className="text-sm font-semibold text-gray-900">4. Book a site visit?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="siteVisit" value="Yes, this week" required />
                    <span className="text-sm">Yes, this week</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="siteVisit" value="Yes, later" />
                    <span className="text-sm">Yes, later</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="siteVisit" value="Need more details first" />
                    <span className="text-sm">Need more details first</span>
                  </label>
                </div>
              </fieldset>

              {/* Source */}
              <fieldset className="rounded-2xl border border-gray-200 p-4">
                <legend className="text-sm font-semibold text-gray-900">5. How did you hear about us?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" value="Facebook/Instagram" required />
                    <span className="text-sm">Fb/Insta</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" value="Google Search" />
                    <span className="text-sm">Google Search</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" value="Referral" />
                    <span className="text-sm">Referral</span>
                  </label>
                </div>
              </fieldset>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl py-3 text-sm font-semibold bg-black text-white hover:brightness-110 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {status && (
                <p className="text-center text-sm text-gray-700" role="status">
                  {status}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
