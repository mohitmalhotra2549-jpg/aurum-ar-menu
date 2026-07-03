"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by category">
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "rounded-full border px-4 py-2 font-body text-xs uppercase tracking-wide transition-all duration-300",
              isActive
                ? "border-brass bg-espresso text-ivory dark:bg-brass dark:text-obsidian"
                : "border-brass/25 text-espresso/70 hover:border-brass dark:text-ivory/70"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
