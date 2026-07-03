import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <circle cx="32" cy="32" r="30.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M32 14 L46 44 H38.5 L36 38 H28 L25.5 44 H18 L32 14Z M32 24.5 L29.2 32 H34.8 L32 24.5Z"
        fill="currentColor"
      />
      <path d="M20 50 H44" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 text-espresso dark:text-ivory", className)}>
      <LogoMark className={cn("text-brass", markClassName)} />
      <span className="font-display text-xl tracking-wide">
        Aurum
      </span>
    </div>
  );
}
