"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { staggerReveal, observeReveal, refreshTriggers, isCoarseScreen } from "@/lib/scrollReveal";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

const ABOUT_IMAGE = "/about/obra-em-curso.jpg";

const VALUES = [
  "Atenção ao detalhe em cada acabamento",
  "Equipa responsável e cuidadosa com o seu espaço",
  "Comunicação clara do orçamento à entrega",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, ".ab-text [data-reveal]", 0.08);
    const c2 = observeReveal(sectionRef.current, ".ab-img-wrap[data-reveal]");

    const ctx = gsap.context(() => {
      if (imgRef.current && !isCoarseScreen()) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
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
    <section id="sobre" ref={sectionRef} className="relative section bg-surface-tint">
      <div className="container-tight grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="ab-text lg:col-span-6">
          <p data-reveal="up" className="eyebrow">Sobre</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-navy-900 text-balance">
            Profissionalismo em cada obra
          </h2>
          <p data-reveal="up" className="mt-6 text-base leading-relaxed text-ink-500">
            A P.R. Silva atua na área de pinturas e remodelações com foco em qualidade,
            compromisso e confiança. Cada serviço é realizado com atenção ao detalhe,
            desde a preparação inicial até ao acabamento final.
          </p>
          <p data-reveal="up" className="mt-4 text-base leading-relaxed text-ink-500">
            Trabalhamos para casas, apartamentos e espaços comerciais — pequenos retoques
            ou renovações completas — sempre com a mesma exigência: entregar um espaço
            cuidado, limpo e pronto a viver.
          </p>

          <ul data-reveal="up" className="mt-8 space-y-3">
            {VALUES.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {v}
              </li>
            ))}
          </ul>

          <div data-reveal="up" className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Falar connosco
              <ArrowRightIcon />
            </a>
            <a href="#trabalhos" className="btn-ghost">
              Ver trabalhos
            </a>
          </div>
        </div>

        <div data-reveal="right" className="ab-img-wrap relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy-900 shadow-card-hover">
            <div ref={imgRef} className="absolute inset-0 lg:will-change-transform">
              <Image
                src={ABOUT_IMAGE}
                alt="Pintor profissional a trabalhar"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover scale-110"
              />
            </div>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-72 rounded-2xl border border-line bg-white p-6 shadow-card-hover sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-label-wide text-royal-600">
              Compromisso
            </p>
            <p className="mt-3 font-display text-base font-bold leading-snug text-navy-900">
              &ldquo;Cada parede que pintamos é também o nome que assinamos.&rdquo;
            </p>
            <p className="mt-3 text-xs text-ink-500">— P.R. Silva</p>
          </div>

          <div aria-hidden className="absolute -top-6 -right-4 hidden h-24 w-24 rounded-2xl border border-line bg-white shadow-card sm:block">
            <div className="flex h-full flex-col items-center justify-center">
              <span className="font-display text-2xl font-extrabold text-navy-900">+10</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-label-wide text-ink-500">
                Anos de prática
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
