"use client";

import { useEffect, useRef, useState } from "react";
import { PackageX, RotateCw, ScanLine, ZoomIn } from "lucide-react";
import { DishWithAvailability } from "@/types/dish";
import { ReticleFrame } from "./ReticleFrame";

interface ARViewerProps {
  dish: DishWithAvailability;
}

/**
 * Renders <model-viewer> for the given dish. The element itself is only
 * defined once /public/models/<slug>.glb is confirmed to exist (checked
 * server-side); if it's missing, or the browser fails to load/parse it at
 * runtime, we show a single honest message instead of a broken viewer.
 */
export function ARViewer({ dish }: ARViewerProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [runtimeError, setRuntimeError] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!dish.glbAvailable) return;
    let cancelled = false;
    import("@google/model-viewer").then(() => {
      if (!cancelled) setScriptReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [dish.glbAvailable]);

  useEffect(() => {
    const node = viewerRef.current;
    if (!node) return;
    const onError = () => setRuntimeError(true);
    const onLoad = () => setModelLoaded(true);
    node.addEventListener("error", onError as EventListener);
    node.addEventListener("load", onLoad as EventListener);
    return () => {
      node.removeEventListener("error", onError as EventListener);
      node.removeEventListener("load", onLoad as EventListener);
    };
  }, [scriptReady]);

  const unavailable = !dish.glbAvailable || runtimeError;

  if (unavailable) {
    return (
      <div className="relative flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brass/30 bg-parchment/60 dark:bg-umber/40">
        <ReticleFrame active={false} />
        <PackageX className="h-8 w-8 text-espresso/30 dark:text-ivory/30" />
        <p className="font-mono text-xs uppercase tracking-widest2 text-espresso/50 dark:text-ivory/50">
          3D model not available.
        </p>
        <p className="max-w-[220px] text-center text-[11px] leading-relaxed text-espresso/40 dark:text-ivory/40">
          Drop {dish.slug}.glb into /public/models to enable AR for this dish.
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-parchment dark:bg-umber">
      {!modelLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
          <ReticleFrame />
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40">
            Loading model…
          </p>
        </div>
      )}

      {scriptReady && (
        <model-viewer
          ref={viewerRef}
          src={dish.modelPath}
          ios-src={dish.usdzAvailable ? dish.iosModelPath : undefined}
          alt={`3D preview of ${dish.name}`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ar-placement="floor"
          camera-controls
          auto-rotate
          auto-rotate-delay={800}
          interaction-prompt="auto"
          shadow-intensity="1"
          shadow-softness="0.8"
          exposure="1"
          camera-orbit="0deg 75deg 105%"
          field-of-view="30deg"
          loading="eager"
          reveal="auto"
          className="h-full w-full"
        >
          <button
            slot="ar-button"
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-espresso px-5 py-3 font-body text-xs font-medium uppercase tracking-wide text-ivory shadow-lg dark:bg-brass dark:text-obsidian"
          >
            <ScanLine className="h-4 w-4" />
            View on your table
          </button>
        </model-viewer>
      )}

      {modelLoaded && (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40">
          <span className="flex items-center gap-1">
            <RotateCw className="h-3 w-3" /> Drag to rotate
          </span>
          <span className="flex items-center gap-1">
            <ZoomIn className="h-3 w-3" /> Pinch to zoom
          </span>
        </div>
      )}
    </div>
  );
}
