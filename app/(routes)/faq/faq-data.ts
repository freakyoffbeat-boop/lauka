// app/routes/faq/faq-data.ts

export type QA = { q: string; a: string; tags?: string[] };
export type Section = { id: string; title: string; icon: string; qa: QA[] };

export const SECTIONS: Section[] = [
  {
    id: "orders",
    title: "Orders & Payments",
    icon: "🧾",
    qa: [
      {
        q: "What payment methods do you accept?",
        a: "UPI, debit/credit cards, NetBanking, and COD in select pin codes. For WhatsApp orders, we share a secure payment link.",
        tags: ["payments", "upi", "cards", "cod", "netbanking"],
      },
      {
        q: "Can I change or cancel my order?",
        a: "Yes—if it hasn’t shipped. Message us on WhatsApp within 4 hours with the order ID and requested change.",
        tags: ["cancel", "change", "edit"],
      },
      {
        q: "Is checkout secure?",
        a: "Yes. We use SSL across the site and trusted payment gateways. Card details are never stored on our servers.",
        tags: ["security", "ssl"],
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Tracking",
    icon: "🚚",
    qa: [
      {
        q: "When will my order ship?",
        a: "Orders placed before 12 PM IST dispatch the same or next business day. During high demand, allow 1–2 extra days.",
      },
      {
        q: "How long does delivery take?",
        a: "Metro: 2–4 business days. Non-metro: 3–7 business days. Tracking link is shared via SMS/Email.",
      },
      {
        q: "How much is shipping?",
        a: "Free above ₹1499. Otherwise, rates are shown at checkout based on your pincode.",
      },
    ],
  },
  {
    id: "safety",
    title: "Product Safety & Care",
    icon: "🧼",
    qa: [
      {
        q: "Are magnets safe for kids?",
        a: "Yes—magnets are enclosed and ultrasonically sealed. Recommended age 6+. Keep away from children under 3 due to small parts.",
        tags: ["kids", "safe", "sealed"],
      },
      {
        q: "How do I clean the tiles?",
        a: "Wipe with a slightly damp microfiber cloth; avoid soaking or high heat. Dry thoroughly before storing.",
        tags: ["clean", "wash", "care"],
      },
      {
        q: "Are inks and materials non-toxic?",
        a: "Yes. Non-toxic inks with PET laminate on ABS plastic. Meets common toy safety expectations.",
        tags: ["non-toxic", "materials"],
      },
    ],
  },
  {
    id: "compatibility",
    title: "Compatibility",
    icon: "🧱",
    qa: [
      {
        q: "Do all Lauska kits work together?",
        a: "Yes. All packs share the same grid size and magnet orientation. Build biomes seamlessly across sets.",
        tags: ["compatibility", "grid"],
      },
      {
        q: "Can I use these blocks with other brands?",
        a: "Lauska kits are tuned to our magnet layout; other brands may partially fit but may not hold optimally.",
        tags: ["brands", "fit"],
      },
      {
        q: "Can I rebuild Minecraft scenes?",
        a: "Absolutely. The tiles are voxel-inspired, so you can recreate your favorite builds IRL.",
        tags: ["minecraft", "recreate"],
      },
    ],
  },
  {
    id: "custom",
    title: "Custom Builds & Bulk",
    icon: "🎨",
    qa: [
      {
        q: "Do you make custom themes?",
        a: "Yes—events, schools, clubs, and creators. Message us on WhatsApp with moodboards or references.",
        tags: ["custom", "events", "school"],
      },
      {
        q: "Do you provide educator discounts?",
        a: "We support STEM/STEAM programs with special pricing. Contact us for a quote.",
        tags: ["educator", "bulk", "discount"],
      },
      {
        q: "Lead time for custom orders?",
        a: "Typically 7–21 days depending on scope and quantity. We’ll confirm timelines after reviewing your brief.",
        tags: ["timeline", "lead time"],
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Warranty",
    icon: "↩️",
    qa: [
      {
        q: "What is your return policy?",
        a: "7-day easy returns on unused items in original packaging. Initiate via WhatsApp; we’ll guide pickup or drop.",
      },
      {
        q: "Warranty coverage?",
        a: "1-year limited warranty against manufacturing defects. We’ll repair or replace affected parts after evaluation.",
      },
      {
        q: "Refund timeline?",
        a: "Refunds are issued to your original payment method within 3–7 business days after QC.",
      },
    ],
  },
];

/** Flat list for JSON-LD schema */
export const FAQ_SCHEMA_QA: { q: string; a: string }[] = SECTIONS.flatMap((s) =>
  s.qa.map(({ q, a }) => ({ q, a }))
);