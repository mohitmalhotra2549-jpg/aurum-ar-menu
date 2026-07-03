"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, X } from "lucide-react";
import { DishWithAvailability } from "@/types/dish";
import { formatPrice } from "@/lib/utils";
import { ARViewer } from "./ARViewer";
import { VegBadge } from "./VegBadge";

interface DishModalProps {
  dish: DishWithAvailability | null;
  onClose: () => void;
}

export function DishModal({ dish, onClose }: DishModalProps) {
  useEffect(() => {
    if (!dish) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [dish, onClose]);

  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-obsidian/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-y-auto rounded-t-3xl border border-brass/15 bg-ivory p-6 dark:bg-espresso sm:max-h-[86dvh] sm:rounded-3xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dish details"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-espresso/10 text-espresso transition-colors hover:bg-espresso/20 dark:bg-ivory/10 dark:text-ivory dark:hover:bg-ivory/20"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-8 sm:grid-cols-2">
              <ARViewer dish={dish} />

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <VegBadge vegetarian={dish.vegetarian} />
                  <span className="text-espresso/20 dark:text-ivory/20">·</span>
                  <span className="inline-block rounded-full border border-brass/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-espresso/60 dark:text-ivory/60">
                    {dish.category}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-3xl leading-tight text-espresso dark:text-ivory">
                    {dish.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/65 dark:text-ivory/65">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-mono text-2xl text-brass-dark dark:text-brass">
                    {formatPrice(dish.price, dish.currency)}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-espresso/50 dark:text-ivory/50">
                    <Clock3 className="h-3.5 w-3.5" />
                    {dish.prepTime}
                  </span>
                </div>

                <div>
                  <p className="mb-2.5 font-mono text-[11px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40">
                    Ingredients
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="rounded-full border border-brass/20 px-3 py-1.5 text-xs text-espresso/70 dark:text-ivory/70"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
