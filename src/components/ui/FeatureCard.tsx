import type { ReactNode } from "react";
import Card from "./Card";

interface FeatureCardProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
  className?: string;
}

export default function FeatureCard({
  eyebrow,
  title,
  description,
  icon,
  footer,
  interactive = false,
  className = "",
}: FeatureCardProps) {
  return (
    <Card interactive={interactive} className={`flex h-full flex-col p-8 ${className}`}>
      {icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal">
          {icon}
        </div>
      ) : null}

      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.2em] text-kora-teal">
          {eyebrow}
        </div>
      ) : null}

      {title ? (
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
          {title}
        </h3>
      ) : null}

      <div className={`${eyebrow || title ? "mt-5" : ""} text-sm leading-relaxed text-kora-text`}>
        {description}
      </div>

      {footer ? (
        <div className="mt-auto border-t border-white/[0.07] pt-6 text-sm text-kora-muted">
          {footer}
        </div>
      ) : null}
    </Card>
  );
}
