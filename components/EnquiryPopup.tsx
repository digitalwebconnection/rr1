"use client";

import { useEffect, useState } from "react";


export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

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

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = payload?.error || `HTTP ${res.status}`;
        setSuccess(`❌ Failed to send: ${msg}`);
        console.error("Send error:", payload || res.statusText);
      } else {
        setSuccess("✅ Your enquiry has been sent!");
        e.currentTarget.reset();
      }
    } catch (err: any) {
      console.error("Network error:", err);
      setSuccess("❌ Failed to send: network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-center text-2xl font-bold text-[color:var(--brand)]">
          Enquiry Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={3}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Type your enquiry here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3 font-semibold bg-black text-white hover:brightness-110"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>

        {success && <p className="mt-3 text-center">{success}</p>}
      </div>
    </div>
  );
}
