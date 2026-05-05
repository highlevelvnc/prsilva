"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => setRevealed(true), 1200);
    const t2 = window.setTimeout(() => setRevealed(false), 5200);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-500 ease-out-expo sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className={`hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-card transition-all duration-500 ease-out-expo ${
          revealed ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Peça já o seu orçamento
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir orçamento pelo WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover ring-4 ring-white/40 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 blur-md transition-opacity group-hover:opacity-90" aria-hidden />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  );
}
