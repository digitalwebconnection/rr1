"use client";

import { useEffect, useState } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  // Auto open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-center text-2xl font-bold text-[color:var(--brand)]">
          Enquiry Form
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--brand)] focus:ring-[color:var(--brand)]"
              rows={3}
              placeholder="Type your enquiry here..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg  py-3 font-semibold bg-black text-white hover:brightness-110"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
