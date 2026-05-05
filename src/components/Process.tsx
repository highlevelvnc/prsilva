"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { observeReveal, staggerReveal, refreshTriggers } from "@/lib/scrollReveal";

const STEPS = [
  {
    title: "Primeiro contacto",
    description: "Fala connosco por WhatsApp, telefone ou e-mail. Ouvimos o seu projeto.",
  },
  {
    title: "Análise do espaço",
    description: "Visitamos o local, avaliamos as superfícies e percebemos o resultado pretendido.",
  },
  {
    title: "Orçamento à medida",
    description: "Apresentamos um orçamento claro, com prazos e materiais definidos.",
  },
  {
    title: "Execução do serviço",
    description: "Trabalhamos com proteção, organização e a qualidade que o seu espaço merece.",
  },
  {
    title: "Entrega final",
    description: "Verificamos cada detalhe consigo e devolvemos o espaço pronto a usar.",
  },
] as const;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const c1 = observeReveal(sectionRef.current, ".pr-head [data-reveal]");
    const c2 = staggerReveal(sectionRef.current, ".pr-step", 0.1);

    const ctx = gsap.context(() => {
      const fillV = sectionRef.current?.querySelector<HTMLElement>(".pr-rail-fill");
      if (fillV) {
        gsap.fromTo(
          fillV,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector(".pr-list") ?? sectionRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );
      }

      const fillH = sectionRef.current?.querySelector<HTMLElement>(".pr-rail-fill-h");
      if (fillH) {
        gsap.fromTo(
          fillH,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector(".pr-list-h") ?? sectionRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);
    refreshTriggers();

    return () => {
      c1();
      c2();
      ctx.revert();
    };
  }, []);

  return (
    <section id="processo" ref={sectionRef} className="relative section bg-white">
      <div className="container-tight">
        <div className="pr-head mx-auto max-w-2xl text-center">
          <p data-reveal="up" className="eyebrow justify-center">Processo</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-navy-900 text-balance">
            Um processo simples, claro e profissional
          </h2>
          <p data-reveal="up" className="mt-5 text-base leading-relaxed text-ink-500">
            Cada etapa pensada para que saiba sempre o que vai acontecer e quando.
            Sem surpresas, sem pressas, com a qualidade que esperamos de cada projeto.
          </p>
        </div>

        {/* Mobile + tablet vertical timeline */}
        <ol className="pr-list relative mt-14 lg:hidden">
          <span aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-line" />
          <span aria-hidden className="pr-rail-fill absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-royal-500 to-royal-300" />
          {STEPS.map((s, i) => (
            <li key={s.title} data-reveal="up" className="pr-step relative flex gap-5 pb-10 last:pb-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white ring-4 ring-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop horizontal timeline */}
        <ol className="pr-list-h relative mt-16 hidden lg:block">
          <span aria-hidden className="absolute left-[5%] right-[5%] top-[28px] h-px bg-line" />
          <span aria-hidden className="pr-rail-fill-h absolute left-[5%] right-[5%] top-[28px] h-px origin-left bg-gradient-to-r from-royal-500 via-royal-400 to-royal-300" />
          <div className="grid grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal="up" className="pr-step relative flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 font-display text-base font-bold text-white ring-8 ring-white shadow-card">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 max-w-[18ch] text-sm leading-relaxed text-ink-500">{s.description}</p>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
