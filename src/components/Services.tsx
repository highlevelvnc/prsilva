"use client";

import { useEffect, useRef } from "react";
import { observeReveal, staggerReveal } from "@/lib/scrollReveal";
import {
  ArrowRightIcon,
  BrushIcon,
  HouseIcon,
  LayersIcon,
  PaintRollerIcon,
  SunIcon,
  WrenchIcon,
} from "@/components/ui/Icons";
import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  {
    title: "Pintura Interior",
    description:
      "Salas, quartos, cozinhas e corredores. Acabamento uniforme, cores certas e pormenores cuidados.",
    Icon: PaintRollerIcon,
  },
  {
    title: "Pintura Exterior",
    description:
      "Fachadas, varandas e muros. Tintas resistentes às condições climatéricas e proteção duradoura.",
    Icon: SunIcon,
  },
  {
    title: "Remodelações",
    description:
      "Coordenamos pintura, revestimentos e pequenos trabalhos para entregar o espaço pronto a viver.",
    Icon: HouseIcon,
  },
  {
    title: "Preparação de Paredes",
    description:
      "Limpeza, lixagem, isolamento de fissuras e preparação correta da superfície antes da pintura.",
    Icon: BrushIcon,
  },
  {
    title: "Estuque e Acabamentos",
    description:
      "Estuque projetado, betume e nivelamento de paredes para um acabamento liso, impecável e duradouro.",
    Icon: LayersIcon,
  },
  {
    title: "Manutenção e Reparações",
    description:
      "Retoques, reparações de fissuras e manutenção periódica para manter o seu espaço como novo.",
    Icon: WrenchIcon,
  },
] as const;

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const c1 = observeReveal(sectionRef.current, ".services-head [data-reveal]");
    const c2 = staggerReveal(gridRef.current, "[data-reveal]", 0.08);
    return () => {
      c1();
      c2();
    };
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="relative section bg-white">
      <div className="container-tight">
        <div className="services-head mx-auto max-w-2xl text-center">
          <p data-reveal="up" className="eyebrow justify-center">Serviços</p>
          <h2 data-reveal="up" className="mt-5 text-display-lg font-extrabold text-navy-900 text-balance">
            Serviços para renovar o seu espaço
          </h2>
          <p data-reveal="up" className="mt-5 text-base leading-relaxed text-ink-500">
            Da preparação à entrega final, oferecemos um conjunto completo de serviços
            para que cada renovação seja simples, organizada e com o melhor acabamento.
          </p>
        </div>

        <ul ref={gridRef} className="services-grid mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }, i) => (
            <li key={title} data-reveal="up">
              <div className="service-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-royal-400 hover:shadow-card-hover">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-royal-500/0 via-royal-500/0 to-royal-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span aria-hidden className="absolute right-6 top-6 font-display text-xs font-semibold tabular-nums tracking-label-wide text-line-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-md bg-surface-tint text-navy-900 ring-1 ring-line transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white group-hover:ring-navy-900">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="relative mt-7 text-xl font-bold text-navy-900">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-500">{description}</p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-royal-600"
                >
                  <span>Pedir orçamento</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <span aria-hidden className="absolute bottom-0 left-7 right-7 h-px scale-x-0 origin-left bg-gradient-to-r from-royal-500 to-royal-300 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <p className="text-sm text-ink-500">
            Tem um projeto específico em mente? <span className="font-semibold text-navy-900">Falamos consigo.</span>
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Pedir orçamento
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
