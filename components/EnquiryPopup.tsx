"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Refs for accessibility
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  // Auto open after 3s
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Prevent background scroll when modal is open (mobile-safe)
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevTouch = body.style.touchAction as string;
    body.style.overflow = "hidden";
    body.style.touchAction = "none"; // prevents iOS rubber-band scroll behind the modal
    return () => {
      body.style.overflow = prevOverflow;
      body.style.touchAction = prevTouch || "";
    };
  }, [open]);

  // Focus the first field when opened
  useEffect(() => {
    if (open) {
      // small timeout so that element is in the DOM
      const t = setTimeout(() => firstFieldRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus(`❌ Failed to send: ${payload?.error || `HTTP ${res.status}`}`);
      } else {
        setStatus("✅ Your enquiry has been sent!");
        (e.target as HTMLFormElement).reset();
        // Optionally auto-close after success on mobile
        setTimeout(() => setOpen(false), 1200);
      }
    } catch (err) {
      setStatus("❌ Failed to send: network error");
    } finally {
      setLoading(false);
    }
  }

  // Close when clicking outside the dialog card
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <div
      className="fixed w-[320px] md:w-full inset-0 z-[9999] bg-black/60 backdrop-blur-sm px-4 py-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onKeyDown={onKeyDown}
      onMouseDown={onOverlayClick}
      // Use modern small viewport units to avoid iOS 100vh bugs
      style={{ minHeight: "120svh" }}
    >
      <div className="mx-auto flex  min-h-[100svh] items-start sm:items-center justify-center ">
        <div
          ref={dialogRef}
          className="relative w-full max-w-[300px] sm:max-w-md md:max-w-lg rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-gray-100 px-4 py-3 sm:px-6 bg-white/90 backdrop-blur">
            <h2 id="enquiry-title" className="text-base sm:text-lg font-bold text-gray-900">
              Enquiry Form
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="inline-grid h-9 w-9 place-items-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <form className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4 max-h-[calc(100svh-8rem)] overflow-y-auto" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                ref={firstFieldRef}
                id="name"
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="Your Name"
                inputMode="text"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="you@example.com"
                inputMode="email"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="+91 XXXXX XXXXX"
                inputMode="tel"
                autoComplete="tel"
                pattern="[+0-9\-()\s]{8,}"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-3 text-base focus:border-black focus:ring-black"
                placeholder="Type your enquiry here..."
              />
            </div>

            {/* Submit area */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl py-3 sm:py-3 text-sm sm:text-base font-semibold bg-black text-white hover:brightness-110 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>

            {status && (
              <p className="text-center text-sm text-gray-700" role="status">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
