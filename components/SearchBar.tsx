"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso/40 dark:text-ivory/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search the menu…"
        aria-label="Search dishes"
        className="w-full rounded-full border border-brass/25 bg-transparent py-3 pl-11 pr-10 font-body text-sm text-espresso placeholder:text-espresso/40 outline-none transition-colors focus:border-brass dark:text-ivory dark:placeholder:text-ivory/40"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-espresso dark:text-ivory/40 dark:hover:text-ivory"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
