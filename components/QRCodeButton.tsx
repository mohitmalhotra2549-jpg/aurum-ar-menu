"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import { QrCode, X } from "lucide-react";
import { ReticleFrame } from "./ReticleFrame";

export function QRCodeButton({ path = "/menu", className }: { path?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}${path}`);
    }
  }, [path]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "inline-flex items-center gap-2 rounded-full border border-brass/30 px-5 py-3 font-body text-sm text-espresso transition-colors hover:border-brass dark:text-ivory"}
      >
        <QrCode className="h-4 w-4 text-brass" />
        Scan to open menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-obsidian/70 backdrop-blur-sm px-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-xs flex-col items-center gap-5 rounded-2xl border border-brass/20 bg-ivory p-8 text-center dark:bg-espresso"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-espresso/50 hover:text-espresso dark:text-ivory/50 dark:hover:text-ivory"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-brass-dark dark:text-brass">
                Scan with your phone
              </p>
              <div className="relative rounded-xl bg-white p-4">
                <ReticleFrame />
                {url && <QRCodeCanvas value={url} size={176} fgColor="#1C1613" bgColor="#ffffff" />}
              </div>
              <p className="text-sm text-espresso/60 dark:text-ivory/60">
                Opens the AR menu directly in your camera, so you can view
                every dish on your own table.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
