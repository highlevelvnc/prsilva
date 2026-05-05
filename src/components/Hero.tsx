"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { staggerReveal, refreshTriggers, isCoarseScreen } from "@/lib/scrollReveal";

const HERO_IMAGE = "/hero/interior-renovado.jpg";

const HIGHLIGHTS = ["Orçamento sem compromisso", "Equipa qualificada", "Acabamento garantido"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = staggerReveal(sectionRef.current, "[data-reveal]", 0.08);
    const lite = isCoarseScreen();

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: "expo.out", delay: 0.6 });
      }

      if (lite) return; // skip parallax + blob scrub on mobile/reduced-motion

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: -8,
          opacity: 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      gsap.to(blob1Ref.current, {
        yPercent: -25,
        x: 20,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.7 },
      });
      gsap.to(blob2Ref.current, {
        yPercent: 20,
        x: -30,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 0.9 },
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
      id="inicio"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-900 pt-28 text-white"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10 lg:will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/95 via-navy-900/85 to-navy-800/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid-navy opacity-40" />

      <div
        ref={blob1Ref}
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[20rem] w-[20rem] rounded-full bg-royal-500/30 blur-3xl lg:h-[28rem] lg:w-[28rem] lg:blur-[120px] lg:will-change-transform"
      />
      <div
        ref={blob2Ref}
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-24 h-[18rem] w-[18rem] rounded-full bg-royal-300/20 blur-3xl lg:h-[24rem] lg:w-[24rem] lg:blur-[120px] lg:will-change-transform"
      />

      <svg
        aria-hidden
        viewBox="0 0 200 80"
        className="pointer-events-none absolute right-6 top-28 hidden h-32 w-72 stroke-white/12 lg:block"
      >
        <path d="M2 60 C40 10 90 10 130 40 S 200 60 198 30" fill="none" strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>

      <div className="container-tight relative grid grid-cols-1 items-center gap-14 pb-24 lg:grid-cols-12 lg:pb-32">
        <div ref={contentRef} className="lg:col-span-7">
          <p
            data-reveal="up"
            className="hero-eyebrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label-wide text-royal-200"
          >
            <span className="h-px w-10 bg-royal-300" />
            Pinturas e Remodelações em Portugal
          </p>

          <h1 className="mt-6 text-display-2xl font-extrabold leading-[1.02] text-white text-balance">
            <span data-reveal="up" className="hero-title-line block">Pinturas e Remodelações</span>
            <span data-reveal="up" className="hero-title-line block">
              com{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-royal-200 via-white to-royal-200 bg-clip-text text-transparent">
                  Acabamento Profissional
                </span>
                <span ref={lineRef} className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-royal-400 to-royal-200" />
              </span>
            </span>
          </h1>

          <p data-reveal="up" className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-royal-100/80">
            Transformamos casas, apartamentos e espaços comerciais com qualidade,
            organização e atenção ao detalhe — do primeiro contacto à entrega final.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
              className="hero-cta btn bg-white text-navy-900 shadow-card hover:-translate-y-0.5 hover:bg-royal-100 hover:shadow-card-hover"
            >
              Pedir orçamento
              <ArrowRightIcon />
            </a>
            <a
              href="#servicos"
              data-reveal="up"
              className="hero-cta btn border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h}
                data-reveal="up"
                className="hero-meta flex items-center gap-2 text-sm text-royal-100/85"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-royal-500/30 ring-1 ring-royal-300/40">
                  <CheckIcon className="h-3 w-3 text-royal-200" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative ml-auto w-full max-w-md">
            <div
              data-reveal="up"
              className="hero-stat relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 p-6 lg:bg-white/5 lg:backdrop-blur-md"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-royal-400/30 blur-3xl" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-label-wide text-royal-200">Em destaque</p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                Cada projecto, um detalhe que faz a diferença.
              </h3>
              <p className="mt-3 text-sm text-royal-100/75">
                Da preparação das paredes ao último retoque, garantimos um acabamento
                que valoriza o seu espaço e que dura.
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "+10", v: "Anos de prática" },
                  { k: "100%", v: "Compromisso" },
                  { k: "5★", v: "Cliente satisfeito" },
                ].map((s) => (
                  <div key={s.v} className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
                    <dt className="font-display text-2xl font-extrabold text-white">{s.k}</dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-label-wide text-royal-200/80">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div aria-hidden className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border border-white/10 bg-navy-800/60 lg:bg-white/5 lg:backdrop-blur-md" />
            <div aria-hidden className="absolute -right-4 top-10 h-16 w-16 rounded-full bg-royal-400/20 blur-2xl" />
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <a
        href="#confianca"
        aria-label="Continuar para a próxima secção"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-label-wide text-royal-100/70 hover:text-white sm:flex"
      >
        <span>Descobrir</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-pulse-soft bg-white" />
        </span>
      </a>
    </section>
  );
}
