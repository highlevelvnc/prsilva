"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";

const FALLBACK_MS = 3500;

/**
 * Reveal pattern:
 * - Elements are visible by default.
 * - On mount, JS marks them as `data-revealed="false"` (hides them).
 * - IntersectionObserver flips them to `data-revealed="true"` when in view.
 * - A timeout forces all targets to revealed after FALLBACK_MS so nothing
 *   ever stays invisible (defends against headless environments where IO
 *   doesn't fire and against any unexpected failure).
 */
export function observeReveal(
  root: Element | null,
  selector = "[data-reveal]",
  options: IntersectionObserverInit = { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
): () => void {
  if (typeof window === "undefined" || !root) return () => {};

  const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (targets.length === 0) return () => {};

  // 1. Start hidden.
  targets.forEach((el) => el.setAttribute("data-revealed", "false"));

  // 2. Reveal-on-intersect.
  const reveal = (el: HTMLElement) => {
    const delay = parseFloat(el.dataset.revealDelay ?? "0");
    if (delay > 0) {
      el.style.transitionDelay = `${delay}s`;
    }
    el.setAttribute("data-revealed", "true");
  };

  let io: IntersectionObserver | null = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          io!.unobserve(entry.target);
        }
      }
    }, options);
    targets.forEach((el) => io!.observe(el));
  }

  // 3. Safety net: reveal everything after FALLBACK_MS regardless.
  const fallback = window.setTimeout(() => {
    targets.forEach((el) => {
      if (el.getAttribute("data-revealed") !== "true") reveal(el);
    });
  }, FALLBACK_MS);

  return () => {
    io?.disconnect();
    window.clearTimeout(fallback);
  };
}

export function staggerReveal(
  root: Element | null,
  selector = "[data-reveal]",
  step = 0.08,
  base = 0
): () => void {
  if (typeof window === "undefined" || !root) return () => {};
  const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
  targets.forEach((el, i) => {
    el.dataset.revealDelay = String(base + i * step);
  });
  return observeReveal(root, selector);
}

export function parallaxY(
  target: gsap.TweenTarget,
  scope: Element | null,
  amount = 18,
  scrub: number | boolean = 0.6
) {
  if (typeof window === "undefined" || !scope) return null;
  return gsap.to(target, {
    yPercent: amount,
    ease: "none",
    scrollTrigger: {
      trigger: scope,
      start: "top bottom",
      end: "bottom top",
      scrub,
    },
  });
}

export function refreshTriggers() {
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
}
