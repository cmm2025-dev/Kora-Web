import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export default function Card({
  children,
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(13,24,24,0.96),rgba(4,10,11,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${
        interactive
          ? "transition-all duration-500 hover:-translate-y-1 hover:border-kora-teal/70 hover:shadow-[0_30px_100px_rgba(0,220,190,0.12)]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
