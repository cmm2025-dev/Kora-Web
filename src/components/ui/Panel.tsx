import type { HTMLAttributes, ReactNode } from "react";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Panel({ children, className = "", ...props }: PanelProps) {
  return (
    <div
      className={`rounded-xl border border-kora-border/70 bg-kora-panel/40 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
