"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { staggerReveal, refreshTriggers } from "@/lib/scrollReveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, "[data-reveal]", 0.1);
    const ctx = gsap.context(() => {
      gsap.to(".cta-shimmer-1", {
        x: "+=120",
        y: "-=60",
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".cta-shimmer-2", {
        x: "-=140",
        y: "+=80",
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);
    refreshTriggers();
    return () => {
      c1();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-navy-900 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-navy opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-radial" />
      <div
        aria-hidden
        className="cta-shimmer-1 pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-royal-500/30 blur-[120px] will-change-transform"
      />
      <div
        aria-hidden
        className="cta-shimmer-2 pointer-events-none absolute -bottom-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-royal-300/20 blur-[120px] will-change-transform"
      />

      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal="up" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label-wide text-royal-200">
            <span className="h-px w-10 bg-royal-300" />
            Pronto a começar
          </p>

          <h2 data-reveal="up" className="mt-6 font-display text-display-xl font-extrabold leading-[1.05] text-white text-balance">
            Está a pensar renovar o seu espaço?
          </h2>

          <p data-reveal="up" className="mt-7 text-lg leading-relaxed text-royal-100/85">
            Fale connosco e receba um orçamento adequado ao seu projeto. Resposta rápida,
            sem compromisso e com a clareza que merece.
          </p>

          <div data-reveal="up" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-card-hover transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir orçamento pelo WhatsApp
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>

          <p data-reveal="up" className="mt-8 text-xs text-royal-200/70">
            Resposta tipicamente em 24h • Orçamento sem compromisso • {""}
            <span className="text-white/90">Lisboa e arredores</span>
          </p>
        </div>
      </div>
    </section>
  );
}
