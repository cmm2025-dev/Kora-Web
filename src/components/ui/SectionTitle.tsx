import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col gap-7 border-b border-kora-border/80 pb-12 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-kora-teal">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      {description ? (
        <div className="max-w-md text-sm leading-relaxed text-kora-muted sm:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}
