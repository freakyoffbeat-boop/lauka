"use client";
import { useEffect, useState } from "react";

export default function ChatboxToast() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    const handler = (e: CustomEvent<string>) => setMsg(e.detail);
    window.addEventListener("chatbox:toast" as any, handler as any);
    const id = setTimeout(() => setMsg(null), 3500);
    return () => { window.removeEventListener("chatbox:toast" as any, handler as any); clearTimeout(id); };
  }, [msg]);
  if (!msg) return null;
  return <div className="chatbox">▶ {msg}</div>;
}
