"use client";

import { motion } from "framer-motion";
import { Clock3, ScanLine } from "lucide-react";
import { DishWithAvailability } from "@/types/dish";
import { formatPrice } from "@/lib/utils";
import { ReticleFrame } from "./ReticleFrame";
import { VegBadge } from "./VegBadge";
import { ModelPoster } from "./ModelPoster";

interface DishCardProps {
  dish: DishWithAvailability;
  index: number;
  onOpen: (dish: DishWithAvailability) => void;
}

export function DishCard({ dish, index, onOpen }: DishCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 6) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brass/15 bg-white/40 shadow-sm transition-shadow duration-500 hover:shadow-[0_18px_40px_-16px_rgba(28,22,19,0.35)] dark:bg-espresso/50"
    >
      <button
        type="button"
        onClick={() => onOpen(dish)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-parchment dark:bg-umber"
      >
        {/* Static 3D model poster — pointer-events disabled inside ModelPoster */}
        <ModelPoster dish={dish} />

        <div className="absolute inset-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <ReticleFrame active={false} />
        </div>
        <div className="absolute left-3 top-3">
          <VegBadge vegetarian={dish.vegetarian} />
        </div>
        {(dish.glbAvailable || dish.usdzAvailable) && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-obsidian/70 px-2.5 py-1.5 backdrop-blur-sm">
            <ScanLine className="h-3 w-3 text-brass" />
            <span className="font-mono text-[9px] uppercase tracking-widest2 text-ivory">AR</span>
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-espresso dark:text-ivory">{dish.name}</h3>
          <span className="shrink-0 font-mono text-sm text-brass-dark dark:text-brass">
            {formatPrice(dish.price, dish.currency)}
          </span>
        </div>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-espresso/60 dark:text-ivory/60">
          {dish.description}
        </p>
        <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-espresso/50 dark:text-ivory/50">
          <Clock3 className="h-3.5 w-3.5" />
          {dish.prepTime}
        </div>

        <button
          type="button"
          onClick={() => onOpen(dish)}
          className="mt-2 flex items-center justify-center gap-2 rounded-full border border-brass/40 py-2.5 font-body text-xs font-medium uppercase tracking-wide text-espresso transition-colors duration-300 hover:bg-espresso hover:text-ivory dark:text-ivory dark:hover:bg-brass dark:hover:text-obsidian"
        >
          <ScanLine className="h-3.5 w-3.5" />
          View in AR
        </button>
      </div>
    </motion.article>
  );
}
