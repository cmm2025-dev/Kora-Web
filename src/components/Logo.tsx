type LogoProps = {
  size?: "sm" | "md" | "lg";
  symbolOnly?: boolean;
  className?: string;
};

const SIZES: Record<NonNullable<LogoProps["size"]>, { box: number; text: number; tag: number }> = {
  sm: { box: 28, text: 20, tag: 6 },
  md: { box: 40, text: 28, tag: 8 },
  lg: { box: 64, text: 44, tag: 11 },
};

export default function Logo({ size = "md", symbolOnly = false, className = "" }: LogoProps) {
  const { box } = SIZES[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={box}
        height={box}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="var(--color-kora-teal)"
          strokeWidth="1"
          className="kora-pulse-ring"
        />
        <polygon points="40,12 62,40 40,68 18,40" fill="var(--color-kora-teal)" />
        <circle cx="40" cy="40" r="10" fill="var(--color-kora-black)" />
        <circle cx="40" cy="40" r="5" fill="var(--color-kora-teal)" className="kora-pulse-dot" />
      </svg>

      {!symbolOnly && (
        <span className="font-sans font-black tracking-[0.12em] text-white leading-none uppercase text-[1.6rem]">
          KORA
        </span>
      )}
    </div>
  );
}
