// app/routes/faq/page.tsx (SERVER)

import FaqClient from "./FaqClient";
import { FAQ_SCHEMA_QA } from "./faq-data";

export const metadata = {
  title: "FAQs – lauska.shop",
  description:
    "Answers about orders, shipping, returns, magnets & safety, compatibility, custom builds and support for Lauska magnetic kits.",
};

export default function Page() {
  // Build JSON-LD once on the server
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SCHEMA_QA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="bg-[#f5f6f7] min-h-screen py-10">
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClient />
    </main>
  );
}