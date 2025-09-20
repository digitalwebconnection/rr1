// app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect your personal information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <section className="rounded-2xl border border-yellow-200 bg-white/90 p-8 shadow-xl md:p-12">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-amber-700 md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-amber-800/90">
            This Privacy Policy explains how we collect, use, and protect your personal
            information when you use our website and services.
          </p>

          <div className="space-y-8 text-amber-900">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-amber-700">
                1. Information We Collect
              </h2>
              <p className="leading-7">
                We may collect your name, email, phone number, and any details you submit
                through our inquiry forms. We also gather analytics and usage data for site
                improvement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-amber-700">
                2. How We Use Information
              </h2>
              <ul className="ml-6 list-disc space-y-2 leading-7">
                <li>To respond to your inquiries and requests.</li>
                <li>To provide property updates and offers.</li>
                <li>To improve our website’s functionality and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-amber-700">
                3. Information Sharing
              </h2>
              <p className="leading-7">
                We never sell your data. We may share it with trusted service providers or
                as required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-amber-700">
                4. Data Security
              </h2>
              <p className="leading-7">
                We use reasonable security measures to safeguard your information. However,
                no online transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-amber-700">
                5. Contact Us
              </h2>
              <p className="leading-7">
                For questions, please email us at <strong>info@mankol.com</strong> or call{" "}
                <strong>+91 7211161521</strong>.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
