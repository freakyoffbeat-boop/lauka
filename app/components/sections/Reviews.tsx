import { sampleReviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl">What builders say</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {sampleReviews.map(r => (
          <div key={r.user} className="rounded-lg bg-white p-4 shadow">
            <div className="flex items-center justify-between">
              <strong>{r.user}</strong>
              {r.verified && <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">🛡️ Verified Purchase</span>}
            </div>
            <div className="mt-1 text-amber-500">{'★'.repeat(r.stars)}{'☆'.repeat(5-r.stars)}</div>
            <p className="mt-2 text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
