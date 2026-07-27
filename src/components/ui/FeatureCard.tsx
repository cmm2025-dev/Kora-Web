import type { ReactNode } from "react";
import Card from "./Card";

interface FeatureCardProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
  headerAside?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
  layout?: "stacked" | "inline";
  className?: string;
  bodyClassName?: string;
}

export default function FeatureCard({
  eyebrow,
  title,
  description,
  icon,
  headerAside,
  footer,
  interactive = false,
  layout = "stacked",
  className = "",
  bodyClassName = "",
}: FeatureCardProps) {
  const headerContent = (
    <>
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
    </>
  );

  return (
    <Card interactive={interactive} className={`flex h-full flex-col p-8 ${className}`}>
      {layout === "inline" ? (
        <div className="relative flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            {icon ? (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal shadow-[inset_0_0_24px_rgba(0,220,190,0.05)]">
                {icon}
              </div>
            ) : null}
            <div>{headerContent}</div>
          </div>
          {headerAside ? <div className="shrink-0">{headerAside}</div> : null}
        </div>
      ) : (
        <>
          {icon ? (
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal">
              {icon}
            </div>
          ) : null}
          {headerContent}
          {headerAside ? <div className="mt-4">{headerAside}</div> : null}
        </>
      )}

      <div
        className={`${eyebrow || title || icon || headerAside ? "mt-5" : ""} text-sm leading-relaxed text-kora-text ${bodyClassName}`}
      >
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
