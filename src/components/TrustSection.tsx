"use client";

import { useEffect, useRef } from "react";
import { staggerReveal } from "@/lib/scrollReveal";
import { ShieldCheckIcon, SparklesIcon, ClipboardIcon } from "@/components/ui/Icons";

const ITEMS = [
  {
    title: "Acabamento de qualidade",
    description:
      "Materiais selecionados, técnicas adequadas a cada superfície e atenção ao detalhe em cada metro pintado.",
    Icon: SparklesIcon,
  },
  {
    title: "Serviço limpo e organizado",
    description:
      "Protegemos os seus móveis e pavimentos, mantemos a obra em ordem e devolvemos o espaço pronto a usar.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Orçamento personalizado",
    description:
      "Avaliamos o espaço, falamos consigo sobre o resultado pretendido e apresentamos um orçamento claro e justo.",
    Icon: ClipboardIcon,
  },
] as const;

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => staggerReveal(sectionRef.current, "[data-reveal]", 0.12), []);

  return (
    <section id="confianca" ref={sectionRef} className="relative bg-surface-tint py-20 sm:py-24">
      <div className="container-tight">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {ITEMS.map(({ title, description, Icon }, i) => (
            <li key={title} data-reveal="up">
              <div className="trust-card group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-royal-300 hover:shadow-card">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal-100/0 blur-2xl transition-colors duration-500 group-hover:bg-royal-100"
                />
                <span className="absolute right-6 top-6 font-display text-xs font-semibold tabular-nums text-line-muted">
                  0{i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{description}</p>
                <span aria-hidden className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-royal-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
