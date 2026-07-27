import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "border-kora-teal bg-kora-teal text-kora-black hover:bg-transparent hover:text-kora-teal",
  secondary:
    "border-kora-border bg-kora-panel/60 text-white hover:border-kora-teal hover:text-kora-teal",
  ghost:
    "border-transparent bg-transparent text-kora-teal hover:border-kora-teal/30 hover:bg-kora-teal/[0.06]",
};

export default function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kora-teal focus-visible:ring-offset-4 focus-visible:ring-offset-kora-black ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
