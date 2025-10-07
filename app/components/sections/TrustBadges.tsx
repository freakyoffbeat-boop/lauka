export default function TrustBadges() {
  const items = [
    { icon: "🛡️", title: "Secure Checkout" },
    { icon: "↩️", title: "30-Day Returns" },
    { icon: "🚚", title: "Fast Shipping" },
    { icon: "⭐", title: "Verified Reviews" }
  ];
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-4 gap-4">
        {items.map(i => (
          <div key={i.title} className="rounded-lg border p-4 text-center">
            <div className="text-2xl">{i.icon}</div>
            <div className="mt-2 font-[family:var(--header-font)]">{i.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
