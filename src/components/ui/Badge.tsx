import type { HTMLAttributes, ReactNode } from "react";

type BadgeTone = "default" | "accent";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: BadgeTone;
}

const TONES: Record<BadgeTone, string> = {
  default: "border-white/[0.08] bg-white/[0.025] text-kora-muted",
  accent: "border-kora-teal/25 bg-kora-teal/[0.06] text-kora-teal",
};

export default function Badge({
  children,
  tone = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] ${TONES[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
