import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grass: "#4CAF50",
        dirt: "#795548",
        gold: "#FBC02D",
        stone: "#9E9E9E",
      },
      boxShadow: {
        pixel: "0 0 0 4px #222, 0 8px 0 0 #222",
      },
      backgroundImage: {
        "pixel-paper": "url('/textures/paper.png')",
        "pixel-stone": "url('/textures/stone.png')",
        "pixel-dirt": "url('/textures/dirt.png')",
        "pixel-grass": "url('/textures/grass.png')"
      }
    }
  },
  plugins: []
} satisfies Config;
