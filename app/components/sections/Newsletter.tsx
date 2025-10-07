"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative bg-amber-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h3 className="text-2xl">Join the Builder Club 💚</h3>
        <p className="opacity-80">Get 10% off your first order + early access to new kits.</p>
        <form className="mt-5 flex gap-2 justify-center">
          <input value={email} onChange={e=>setEmail(e.target.value)}
                 placeholder="you@email.com"
                 className="rounded-md border px-4 py-3 w-full max-w-sm"/>
          <button className="btn btn-gold"
            onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new CustomEvent("chatbox:toast", { detail: "Subscribed! Loot incoming…" }));}}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
