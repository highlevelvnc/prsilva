import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

type LogoProps = {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  href?: string;
  className?: string;
};

export function Logo({ variant = "dark", showWordmark = true, href = "#inicio", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-royal-200" : "text-royal-600";

  return (
    <Link
      href={href}
      aria-label={`${COMPANY.name} — ${COMPANY.tagline}`}
      className={`inline-flex items-center gap-3 group ${className}`}
    >
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-soft ring-1 ring-line transition-transform duration-300 group-hover:scale-105">
        <Image src="/logo.png" alt="" width={40} height={40} className="h-9 w-auto object-contain" priority />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-base font-extrabold tracking-tight ${wordColor}`}>
            P.R. <span className="text-royal-600">Silva</span>
          </span>
          <span className={`mt-1 text-[10px] font-semibold uppercase tracking-label-wide ${subColor}`}>
            Pinturas &amp; Remodelações
          </span>
        </span>
      )}
    </Link>
  );
}
