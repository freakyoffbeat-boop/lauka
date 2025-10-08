// app/(routes)/policies/shipping-returns/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns | Lauska",
  description:
    "Everything you need to know about processing times, delivery windows, returns, and refunds for Lauska magnetic blocks.",
  alternates: { canonical: "/policies/shipping-returns" },
};

const SHIP_CARDS = [
  { icon: "🚚", title: "Processing", body: "Orders placed before 3 PM IST ship the same/next business day. Customized builds take 2–4 extra days." },
  { icon: "📦", title: "Domestic Delivery", body: "Standard India delivery: 3–7 business days. Express options appear at checkout for eligible pincodes." },
  { icon: "🌍", title: "International", body: "We ship select kits internationally. Transit 6–12 business days. Duties/taxes are payable by recipient." },
];

const RATES = [
  { zone: "India (Standard)", eta: "3–7 business days", cost: "₹ Free above ₹1499" },
  { zone: "India (Express)", eta: "1–3 business days", cost: "Calculated at checkout" },
  { zone: "International", eta: "6–12 business days", cost: "Shown at checkout" },
];

const RETURN_POINTS = [
  "Returns accepted within 7 days of delivery for unused items in original packaging.",
  "To start a return, message us on WhatsApp with your Order ID (LS-####).",
  "Refunds are processed to the original payment method after quality check (3–5 business days).",
];

const EXCLUSIONS = [
  "Used or damaged items not due to transit/defect.",
  "Custom builds / special orders (unless damaged on arrival).",
  "Clearance or final-sale items (marked on product page).",
];

const MINI_FAQ = [
  { q: "Can I change my shipping address?", a: "Yes, within ~2 hours of placing the order. Message us on WhatsApp with your Order ID and the corrected address." },
  { q: "My order is delayed — what do I do?", a: "Paste your Order ID on our Support page or ping us on WhatsApp. We'll escalate with the courier and update you." },
  { q: "I received a damaged kit.", a: "Snap a quick photo of the outer box and the kit. Send it along with your Order ID — we’ll ship a replacement part/kit." },
  { q: "How long do refunds take?", a: "After QC at our facility, refunds are initiated within 24–48 hours. Banks typically reflect the amount within 3–5 business days." },
];

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-6">
        <h1 className="mt-4 text-4xl font-header">Shipping &amp; Returns</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Everything you need to know about processing times, delivery windows, returns, and refunds for Lauska magnetic blocks.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="https://wa.link/6b0n4j"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 WhatsApp Support
          </a>
          <a href="/support" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            🛠️ Go to Support
          </a>
          <a href="/faq" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            ❓ FAQs
          </a>
        </div>
      </section>

      <div className="mc-grid h-4 w-full" />

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {SHIP_CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-2xl">{c.icon}</div>
              <div className="mt-2 font-semibold">{c.title}</div>
              <p className="mt-1 text-sm text-gray-700">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rates Table */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
        <h2 className="text-2xl font-header">Shipping Speeds &amp; Rates</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="[&>th]:px-4 [&>th]:py-3 text-left">
                <th>Zone</th>
                <th>Estimated Delivery</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {RATES.map((r) => (
                <tr key={r.zone} className="[&>td]:px-4 [&>td]:py-3">
                  <td>{r.zone}</td>
                  <td>{r.eta}</td>
                  <td>{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm text-gray-600">
          * Estimated times exclude weekends/holidays and may vary based on pincode, weather, or courier load. You’ll receive tracking via email after dispatch.
        </p>
      </section>

      {/* Returns Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-12">
        <div className="rounded-2xl border border-gray-200 bg-white">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
            <div className="p-6 md:p-7 bg-gray-50 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-2xl font-header">Returns &amp; Replacements</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {RETURN_POINTS.map((p, i) => <li key={i}>{p}</li>)}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://wa.link/6b0n4j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
                >
                  ➕ Start a Return (WhatsApp)
                </a>
                <a href="/support" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
                  🔎 Track / Ask Support
                </a>
              </div>
            </div>

            <div className="p-6 md:p-7">
              <h3 className="font-semibold">Return Flow</h3>
              <ol className="mt-2 list-decimal pl-5 text-sm text-gray-700 space-y-1">
                <li>Share Order ID and reason on WhatsApp.</li>
                <li>We issue a return label or pickup (where available).</li>
                <li>Pack securely (original box preferred).</li>
                <li>After QC, refund/replacement is processed.</li>
              </ol>

              <h3 className="mt-5 font-semibold">Exclusions</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {EXCLUSIONS.map((e, i) => <li key={i}>{e}</li>)}
              </ul>

              <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm">
                <div className="font-semibold">Damaged on Arrival?</div>
                <p className="text-gray-700">
                  Send clear photos of the outer box and affected parts within 48 hours of delivery.
                  We’ll ship exact replacements fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-16">
        <h2 className="text-2xl font-header mb-3">Quick Questions</h2>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {MINI_FAQ.map((f, i) => (
            <div key={f.q}>
              <details className="group">
                <summary className="w-full text-left px-4 md:px-5 py-4 flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-semibold">{f.q}</span>
                  <span className="transition group-open:rotate-45">＋</span>
                </summary>
                <div className="px-4 md:px-5 pb-4 text-gray-700">{f.a}</div>
              </details>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <a
            href="https://wa.link/6b0n4j"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-emerald-500 text-white border border-emerald-600 hover:brightness-110"
          >
            💬 Ask on WhatsApp
          </a>
          <a href="/faq" className="pixel-btn bg-white border border-gray-300 hover:bg-gray-50">
            📚 View All FAQs
          </a>
        </div>
      </section>
    </main>
  );
}
