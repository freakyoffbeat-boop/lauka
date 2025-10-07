import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Minecraft Magnetic Blocks – lauska.shop",
  description: "Bring your Minecraft world to life with magnetic blocks."
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>                       {/* ← remove with-fixed-nav */}
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
