import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lauska.shop";
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/products`, priority: 0.9 },
    { url: `${base}/faq` },
    { url: `${base}/about` },
    { url: `${base}/support` },
    { url: `${base}/trust/shipping-returns` },
    { url: `${base}/trust/privacy-security` }
  ];
}
