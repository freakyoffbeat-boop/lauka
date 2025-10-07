export type Product = {
  slug: string;
  name: string;
  price: number;
  short: string;
  images: string[];
  features: string[];
  age: string;
  magnets: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    slug: "starter-forest-pack",
    name: "Starter Forest Pack",
    price: 1999,
    short: "Snap-ready grass blocks, birch tree, water tile & décor.",
    images: ["/products/forest-1.jpg", "/products/forest-2.jpg", "/products/forest-3.jpg"],
    features: [
      "Strong neodymium magnets with safe housing",
      "Rounded edges – child friendly",
      "Mix & match with all lauska blocks"
    ],
    age: "6+ years",
    magnets: "N35 housing, 4-point align",
    inStock: true
  },
  {
    slug: "desert-biome-pack",
    name: "Desert Biome Pack",
    price: 1799,
    short: "Sand tiles, cactus pieces, and oasis water block.",
    images: ["/products/desert-1.jpg", "/products/desert-2.jpg"],
    features: ["Durable ABS", "Strong magnets", "Biome compatible"],
    age: "6+ years",
    magnets: "N35",
    inStock: true
  }
];
