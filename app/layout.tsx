// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientShell from "./ClientShell";

export const metadata: Metadata = {
  title: {
    default: "Lauska Magnetic Blocks – Bring Minecraft to Life",
    template: "%s | lauska.shop",
  },
  description:
    "Build your own Minecraft-inspired creations in the real world with Lauska’s modular magnetic blocks. Snap, play, and create endlessly.",
  keywords: [
    "Lauska",
    "magnetic blocks",
    "Minecraft toys",
    "STEM building kits",
    "magnetic cubes",
  ],
  openGraph: {
    title: "Lauska Magnetic Blocks – Bring Minecraft to Life",
    description:
      "Snap, build, and create your world with Lauska’s magnetic building blocks.",
    url: "https://lauska.shop",
    siteName: "Lauska",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Lauska Magnetic Blocks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauska Magnetic Blocks – Bring Minecraft to Life",
    description: "Build your world with Lauska’s modular magnetic kits.",
    images: ["/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 min-h-screen">
        {/* ClientShell handles Header/Footer safely */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
