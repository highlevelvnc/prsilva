"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { observeReveal, staggerReveal, refreshTriggers, isCoarseScreen } from "@/lib/scrollReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { BeforeAfter } from "@/components/BeforeAfter";

type Item = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  span: "tall" | "wide" | "square";
};

const ITEMS: Item[] = [
  {
    src: "/portfolio/01-quarto-madeira.jpg",
    alt: "Quarto renovado com paredes brancas, chão de madeira e ar condicionado",
    tag: "Pintura interior",
    title: "Quarto — apartamento renovado",
    span: "tall",
  },
  {
    src: "/portfolio/04-portao-madeira.jpg",
    alt: "Portão de garagem em madeira após envernizamento",
    tag: "Pintura exterior",
    title: "Portão envernizado",
    span: "wide",
  },
  {
    src: "/portfolio/03-marquise.jpg",
    alt: "Marquise com tijoleira em mosaico restaurada",
    tag: "Remodelação",
    title: "Marquise restaurada",
    span: "square",
  },
  {
    src: "/portfolio/02-quarto-armario.jpg",
    alt: "Quarto com armário embutido pintado de branco",
    tag: "Pintura interior",
    title: "Armário embutido",
    span: "square",
  },
  {
    src: "/portfolio/05-janela-exterior.jpg",
    alt: "Janela exterior com moldura em madeira envernizada",
    tag: "Carpintaria & exterior",
    title: "Janela em moradia",
    span: "tall",
  },
  {
    src: "/portfolio/06-janela-pinheiros.jpg",
    alt: "Janela exterior com vista para pinhal",
    tag: "Pintura exterior",
    title: "Janela em moradia",
    span: "square",
  },
];

const BEFORE_IMG = "/portfolio/before-teto-fissuras.jpg";
const AFTER_IMG = "/portfolio/after-teto-renovado.jpg";

const SPAN: Record<Item["span"], string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
};

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const baWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = observeReveal(sectionRef.current, ".pf-head [data-reveal]");
    const c2 = staggerReveal(gridRef.current, "[data-reveal]", 0.08);
    const c3 = observeReveal(baWrapRef.current, "[data-reveal]");

    const ctx = gsap.context(() => {
      if (!isCoarseScreen()) {
        sectionRef.current?.querySelectorAll<HTMLElement>(".pf-img").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement!,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });
      }
    }, sectionRef);
    refreshTriggers();
    return () => {
      c1();
      c2();
      c3();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="trabalhos"
      ref={sectionRef}
      className="relative section bg-surface-tint"
    >
      <div className="container-tight">
        <div className="pf-head flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-reveal="up">
            <p className="eyebrow">Trabalhos</p>
            <h2 className="mt-5 text-display-lg font-extrabold text-navy-900 text-balance">
              Trabalhos que valorizam cada detalhe
            </h2>
          </div>
          <p data-reveal="up" className="max-w-md text-base leading-relaxed text-ink-500">
            Da preparação das superfícies ao acabamento final, cada projeto é executado
            com cuidado para garantir um resultado bonito, duradouro e profissional.
          </p>
        </div>

        <div ref={gridRef} className="pf-grid mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {ITEMS.map((it) => (
            <figure
              key={it.title}
              data-reveal="up"
              className={`relative ${SPAN[it.span]}`}
            >
              <div className="pf-card group relative h-full w-full overflow-hidden rounded-2xl bg-navy-900">
                <div className="absolute inset-0 lg:will-change-transform">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="pf-img object-cover scale-110 transition-transform duration-700 ease-out-expo group-hover:scale-[1.18]"
                  />
                </div>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-label-wide text-royal-200/90">
                      {it.tag}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold">{it.title}</h3>
                  </div>
                  <span className="inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div ref={baWrapRef} className="pf-ba-wrap mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div data-reveal="up" className="lg:col-span-5">
            <p className="eyebrow">Antes &amp; Depois</p>
            <h3 className="mt-5 font-display text-3xl font-extrabold text-navy-900 text-balance">
              A diferença está nos detalhes que ninguém vê.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Limpeza, isolamento de fissuras, lixagem e camadas certas — é o trabalho
              invisível que garante um acabamento bonito, uniforme e duradouro.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Pedir orçamento
              <ArrowRightIcon />
            </a>
          </div>
          <div data-reveal="up" className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card lg:col-span-7">
            <BeforeAfter beforeSrc={BEFORE_IMG} afterSrc={AFTER_IMG} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
