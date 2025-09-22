"use client";
import React from "react";
import { useEffect, useState } from "react";


export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Auto open after 3s
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

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

      const payload = await res.json().catch(() => ({} as any));
      if (!res.ok) {
        setSuccess(`❌ Failed to send: ${payload?.error || `HTTP ${res.status}`}`);
        console.error("Send error:", payload || res.statusText);
      } else {
        setSuccess("✅ Your enquiry has been sent!");
        e.currentTarget.reset();
      }
    } catch (err) {
      console.error("Network error:", err);
      setSuccess("❌ Failed to send: network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm -ms-40">
      {/* Card: mobile-first width, capped height, internal scroll */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          relative w-[92vw] max-w-md sm:max-w-lg
          rounded-2xl bg-white shadow-2xl
          p-5 sm:p-6
          max-h-[90vh] overflow-y-auto
        "
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="mb-5 text-center text-xl sm:text-2xl font-bold text-[color:var(--brand)]">
          Enquiry Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-base sm:py-2 sm:text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Your Name"
              inputMode="text"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-base sm:py-2 sm:text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="you@example.com"
              inputMode="email"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-base sm:py-2 sm:text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="+91 XXXXX XXXXX"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-base sm:py-2 sm:text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Type your enquiry here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-4 sm:py-3 text-base sm:text-sm font-semibold bg-black text-white hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>

        {success && <p className="mt-3 text-center text-sm">{success}</p>}
      </div>
    </div>
  );
}
