import { cn } from "@/lib/utils";

interface ReticleFrameProps {
  className?: string;
  active?: boolean;
  strokeClassName?: string;
}

/**
 * Four corner brackets, like a camera AR viewfinder. This is the recurring
 * signature of the whole app — it appears framing the hero mark, on dish
 * imagery, and as the loading indicator — tying the visual language back to
 * "point your camera here" throughout.
 */
export function ReticleFrame({ className, active = true, strokeClassName }: ReticleFrameProps) {
  const corner = cn("absolute h-6 w-6 border-brass sm:h-8 sm:w-8", strokeClassName);
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", active && "animate-reticle-pulse", className)}
      aria-hidden
    >
      <span className={cn(corner, "left-0 top-0 border-l-2 border-t-2 rounded-tl-md")} />
      <span className={cn(corner, "right-0 top-0 border-r-2 border-t-2 rounded-tr-md")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2 rounded-br-md")} />
    </div>
  );
}
