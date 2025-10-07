// app/(routes)/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About – lauska.shop",
  description:
    "Lauska brings the joy of Minecraft into the real world with premium magnetic blocks. Safe materials, modular design, and kits inspired by biomes.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Kid-safe by design",
      icon: "🧒",
      text: "Enclosed neodymium magnets, non-toxic inks, rounded edges, and durable PET laminate on ABS.",
    },
    {
      title: "Built to last",
      icon: "🧱",
      text: "Scratch-resistant surface, strong snap, and consistent grid so your worlds stay modular forever.",
    },
    {
      title: "Play = learning",
      icon: "🧠",
      text: "Creativity, spatial thinking, and collaboration — class projects or rainy-day builds, it all counts.",
    },
  ];

  type Founder = { name: string; role: string; href: string; img: string; handle?: string };
  const founders: Founder[] = [
    {
      name: "Ausan Gaming",
      role: "YouTuber • Gamer",
      href: "https://youtube.com/@AusanGaming",
      img: "/founders/a.png", // add your image
    },
    {
      name: "Mr. Lapis",
      role: "YouTuber • Gamer",
      href: "https://www.youtube.com/@MrLapis",
      img: "/founders/b.png",
    },
    {
      name: "Founder 03",
      role: "YouTuber • Gamer",
      href: "https://www.youtube.com/@kapeshaha",
      img: "/founders/c.png",
    },
  ];

  const timeline = [
    { y: "2023", t: "Idea", d: "A simple goal: bring voxel builds off-screen with real blocks that feel magical." },
    { y: "2024", t: "Prototypes", d: "Grid, magnet strength, and skins perfected. First classroom pilots." },
    { y: "2025", t: "Lauska.shop", d: "Our store launches with biome kits, creator collabs, and school bundles." },
  ];

  // JSON-LD Organization
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lauska",
    url: "https://lauska.shop",
    sameAs: [
      "https://www.youtube.com/", // replace with real
      "https://www.instagram.com/",
      "https://twitter.com/",
    ],
    logo: "https://lauska.shop/logo.png",
    description:
      "Lauska builds premium magnetic block kits inspired by voxel/Minecraft worlds.",
  };

  return (
    <main className="bg-[#f7f8fb] text-[#0e1220]">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-12 grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-[family:var(--header-font)]">
              Building worlds you can touch.
            </h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Lauska brings the joy of Minecraft into the real world with
              premium magnetic blocks. Our kits are safe, modular, and designed
              by creators — so kids, families, and classrooms can build biomes,
              mobs, and imaginations together.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/products"
                className="pixel-btn bg-white border border-gray-300"
              >
                🧱 Explore Kits
              </a>
              <a
                href="https://wa.link/6b0n4j"
                className="pixel-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

      {/* Hero video */}
<div className="rounded-2xl border border-gray-200 bg-white/70 shadow-sm p-3">
  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
    <video
      src="/about/LAUSKA.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="object-cover w-full h-full rounded-xl"
      poster="/about/hero-placeholder.jpg" // optional fallback image
    />
  </div>
</div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-[family:var(--header-font)]">
          What we make
        </h2>
        <p className="text-gray-600 mt-1">
          Three pillars define every Lauska kit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl">{v.icon}</div>
              <div className="mt-2 font-semibold">{v.title}</div>
              <p className="text-sm text-gray-700 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY STRIP */}
      <section className="border-y bg-white/70">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 grid sm:grid-cols-3 gap-3 text-sm">
          <SafetyTip
            icon="🧲"
            title="Sealed magnets"
            text="Secure and tuned for the perfect snap."
          />
          <SafetyTip
            icon="🧪"
            title="Non-toxic inks"
            text="Vivid skins, lab-tested for safety."
          />
          <SafetyTip
            icon="🧼"
            title="Easy clean"
            text="Wipe with a soft damp cloth; dry before storing."
          />
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-[family:var(--header-font)]">
          The creators behind Lauska
        </h2>
        <p className="text-gray-600 mt-1">
          Founded by three well-known Indian YouTubers who build, teach, and
          entertain — now turning digital worlds into tangible play.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {founders.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-square">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{f.name}</div>
                <div className="text-sm text-gray-600">{f.role}</div>
                {f.handle ? (
                  <div className="text-xs text-gray-500 mt-1">{f.handle}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-[family:var(--header-font)]">
            Our values
          </h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li>• Play is meaningful — we design for curiosity and agency.</li>
            <li>• Safety isn’t a feature — it’s the baseline.</li>
            <li>• Materials matter — durability over disposability.</li>
            <li>• Open-ended builds — your world, your rules.</li>
            <li>• Support creators, teachers, and parents.</li>
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-14">
        <h2 className="text-2xl md:text-3xl font-[family:var(--header-font)]">
          Our journey
        </h2>
        <div className="mt-6 grid gap-4">
          {timeline.map((e) => (
            <div
              key={e.y}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm text-gray-500">{e.y}</div>
              <div className="font-semibold">{e.t}</div>
              <p className="text-sm text-gray-700 mt-1">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
          <div className="text-center text-sm text-gray-500">
            As seen with creators and communities
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center opacity-80">
            <Logo name="Creator A" />
            <Logo name="Creator B" />
            <Logo name="School X" />
            <Logo name="Event Y" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="rounded-2xl bg-[#0e1220] text-white p-8 md:p-10">
          <h2 className="text-3xl font-[family:var(--header-font)]">
            Let’s build together.
          </h2>
          <p className="mt-3 text-white/80">
            Bulk orders for schools, custom kits for events, or just a question
            about your first biome — we’re here.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.link/6b0n4j"
              className="pixel-btn whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
            <a href="/products" className="pixel-btn bg-white text-black">
              🧱 Browse Kits
            </a>
            <a href="/support" className="pixel-btn bg-white text-black">
              🧰 Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------- tiny presentational helpers ------------------- */

function SafetyTip({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 flex items-center gap-3 hover:shadow-sm">
      <span className="text-lg">{icon}</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-gray-600 text-xs">{text}</div>
      </div>
    </div>
  );
}

function Logo({ name }: { name: string }) {
  return (
    <div className="h-14 rounded-lg border border-gray-200 bg-white grid place-items-center text-[12px] text-gray-500">
      {name}
    </div>
  );
}
