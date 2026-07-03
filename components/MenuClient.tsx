"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { DishWithAvailability } from "@/types/dish";
import { categories } from "@/data/dishes";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { DishCard } from "./DishCard";
import { DishModal } from "./DishModal";
import { ContactSection } from "./ContactSection";

export function MenuClient({ dishes }: { dishes: DishWithAvailability[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [selected, setSelected] = useState<DishWithAvailability | null>(null);

  const filtered = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory = category === "All" || dish.category === category;
      const matchesQuery = dish.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [dishes, query, category]);

  return (
    <div className="min-h-[100dvh] bg-ivory text-espresso dark:bg-obsidian dark:text-ivory">
      <header className="sticky top-0 z-40 border-b border-brass/10 bg-ivory/85 backdrop-blur-md dark:bg-obsidian/85">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                aria-label="Back to home"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brass/25 text-espresso transition-colors hover:border-brass dark:text-ivory"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Logo />
            </div>
            <ThemeToggle />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-brass-dark dark:text-brass">
            {filtered.length} {filtered.length === 1 ? "dish" : "dishes"}
          </p>
          <h1 className="mt-1 font-display text-3xl text-espresso dark:text-ivory">The AR Menu</h1>
        </motion.div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-brass/25 py-20 text-center">
            <UtensilsCrossed className="h-8 w-8 text-espresso/30 dark:text-ivory/30" />
            <p className="font-body text-sm text-espresso/50 dark:text-ivory/50">
              Nothing matches “{query}”. Try another search or category.
            </p>
          </div>
        )}
      </section>

      <ContactSection />

      <DishModal dish={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
