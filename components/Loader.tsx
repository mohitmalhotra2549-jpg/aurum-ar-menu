import { LogoMark } from "./Logo";
import { ReticleFrame } from "./ReticleFrame";

export function Loader({ label = "Setting the table" }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ivory dark:bg-obsidian">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <ReticleFrame />
        <LogoMark className="h-10 w-10 animate-pulse text-brass" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-brass-dark dark:text-brass">
          {label}
        </p>
        <div className="h-px w-24 overflow-hidden bg-brass/20">
          <div className="h-full w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-brass to-transparent" />
        </div>
      </div>
    </div>
  );
}
