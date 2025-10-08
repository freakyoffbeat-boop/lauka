"use client";
import { ReactNode, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@/lib/seo";
import WhatsAppFloating from "@/app/components/ui/WhatsAppFloating";
import ChatboxToast from "@/app/components/ui/ChatboxToast";
import LoadingScreen from "./components/sections/LoadingScreen";


export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const h = () => {};
    window.addEventListener("pointerdown", h, { once: true });
    return () => window.removeEventListener("pointerdown", h);
  }, []);
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <LoadingScreen minDuration={1600} />

      {children}
      <WhatsAppFloating />
      <ChatboxToast />
    </>
  );
}
