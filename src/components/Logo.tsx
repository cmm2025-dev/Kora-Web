type LogoProps = {
  size?: "sm" | "md" | "lg" | "hero";
  symbolOnly?: boolean;
  className?: string;
};

const SIZES: Record<NonNullable<LogoProps["size"]>, { box: number }> = {
  sm: { box: 28 },
  md: { box: 40 },
  lg: { box: 64 },
  hero: { box: 220 },
};

export default function Logo({ size = "md", symbolOnly = false, className = "" }: LogoProps) {
  const { box } = SIZES[size];
  const isHero = size === "hero";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={box}
        height={box}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id={`kora-glow-${size}`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation={isHero ? "2.2" : "0.8"} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={`kora-teal-${size}`} x1="20" y1="12" x2="60" y2="68" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8CFFF0" />
            <stop offset="0.48" stopColor="var(--color-kora-teal)" />
            <stop offset="1" stopColor="#009F8F" />
          </linearGradient>
        </defs>

        {isHero ? (
          <g
            fill="none"
            stroke={`url(#kora-teal-${size})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#kora-glow-${size})`}
          >
            <path d="M40 7 68 36 40 73 12 36 40 7Z" strokeWidth="2.2" />
            <path d="M40 7v29m0 37V36M12 36h56" strokeWidth="1.45" opacity="0.95" />
            <path d="M12 36 40 22l28 14M12 36l28 18 28-18M40 22v32" strokeWidth="1.55" />
            <path d="M40 7 25 36l15 37M40 7l15 29-15 37" strokeWidth="0.8" opacity="0.42" />
          </g>
        ) : (
          <>
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
          </>
        )}
      </svg>

      {!symbolOnly && (
        <span className="font-sans text-[1.6rem] font-black uppercase leading-none tracking-[0.12em] text-white">
          KORA
        </span>
      )}
    </div>
  );
}
