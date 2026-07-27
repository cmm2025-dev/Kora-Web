import type { ReactNode } from "react";
import Badge from "./Badge";
import Card from "./Card";

interface ProductCardProps {
  name: string;
  code: string;
  eyebrow: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  icon: ReactNode;
  ctaLabel?: string;
}

export default function ProductCard({
  name,
  code,
  eyebrow,
  tagline,
  description,
  features,
  href,
  icon,
  ctaLabel = "Explorar solución",
}: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kora-teal focus-visible:ring-offset-4 focus-visible:ring-offset-kora-black"
      aria-label={`${ctaLabel}: ${name}`}
    >
      <Card interactive className="group flex h-full min-h-[430px] flex-col p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-kora-teal/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kora-teal/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal shadow-[inset_0_0_24px_rgba(0,220,190,0.05)]">
              {icon}
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-kora-muted">
                {eyebrow}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-[0.06em] text-white">
                {name}
              </h3>
            </div>
          </div>

          <Badge tone="accent" className="font-mono text-[10px] uppercase tracking-[0.18em]">
            {code}
          </Badge>
        </div>

        <div className="relative mt-10">
          <p className="max-w-md text-2xl font-medium leading-snug text-white sm:text-[1.7rem]">
            {tagline}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-kora-text sm:text-[15px]">
            {description}
          </p>
        </div>

        <div className="relative mt-8 flex flex-wrap gap-2">
          {features.map((feature) => (
            <Badge key={feature}>{feature}</Badge>
          ))}
        </div>

        <div className="relative mt-auto flex items-center justify-between border-t border-white/[0.07] pt-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-kora-teal transition-colors group-hover:text-white">
            {ctaLabel}
          </span>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-kora-teal/30 text-kora-teal transition-all duration-300 group-hover:translate-x-1 group-hover:border-kora-teal group-hover:bg-kora-teal group-hover:text-kora-black"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </Card>
    </a>
  );
}
