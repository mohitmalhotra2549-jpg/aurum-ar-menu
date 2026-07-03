import { cn } from "@/lib/utils";

export function VegBadge({ vegetarian, className }: { vegetarian: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-obsidian/70 px-2 py-1 backdrop-blur-sm",
        className
      )}
      title={vegetarian ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={cn(
          "flex h-3 w-3 items-center justify-center rounded-[3px] border",
          vegetarian ? "border-sage-light" : "border-burgundy-light"
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", vegetarian ? "bg-sage-light" : "bg-burgundy-light")} />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-widest2 text-ivory">
        {vegetarian ? "Veg" : "Non-Veg"}
      </span>
    </span>
  );
}
