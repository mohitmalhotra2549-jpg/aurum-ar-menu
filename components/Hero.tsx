"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ScanLine } from "lucide-react";
import { LogoMark } from "./Logo";
import { ReticleFrame } from "./ReticleFrame";
import { ThemeToggle } from "./ThemeToggle";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-ivory text-espresso dark:bg-obsidian dark:text-ivory">
      {/* ambient drifting glow, restrained — single accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-brass/20 blur-[120px] animate-drift"
        aria-hidden
      />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]" aria-hidden />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex items-center gap-2.5"
        >
          <LogoMark className="h-7 w-7 text-brass" />
          <span className="font-display text-lg tracking-wide">Aurum</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
        >
          <ThemeToggle />
        </motion.div>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative mb-8 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        >
          <ReticleFrame />
          <LogoMark className="h-14 w-14 text-brass sm:h-16 sm:w-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          className="mb-4 font-mono text-[11px] uppercase tracking-widest2 text-brass-dark dark:text-brass"
        >
          Est. Table-Side · Augmented Tasting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
          className="text-balance max-w-2xl font-display text-4xl font-medium leading-[1.08] sm:text-6xl"
        >
          See your dish
          <br />
          <span className="italic text-brass-dark dark:text-brass">before it arrives.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.35 }}
          className="mt-6 max-w-md text-balance text-[15px] leading-relaxed text-espresso/70 dark:text-ivory/70 sm:text-base"
        >
          Point your camera at the table. Every plate on our menu appears
          life-size, in three dimensions, exactly as it will be served.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
          className="mt-10"
        >
          <Link
            href="/menu"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-espresso px-8 py-4 font-body text-sm font-medium tracking-wide text-ivory shadow-[0_8px_30px_-8px_rgba(198,161,91,0.6)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] dark:bg-brass dark:text-obsidian"
          >
            <ScanLine className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[8deg]" />
            View AR Menu
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40"
        >
          Works on iOS &amp; Android · No app required
        </motion.p>
      </section>
    </main>
  );
}
