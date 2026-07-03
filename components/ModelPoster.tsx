"use client";

import { useEffect, useRef, useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import { DishWithAvailability } from "@/types/dish";
import { ReticleFrame } from "./ReticleFrame";

interface ModelPosterProps {
  dish: DishWithAvailability;
}

/**
 * Renders a non-interactive, still <model-viewer> that acts as a product photo.
 * camera-controls and auto-rotate are intentionally absent; pointer-events are
 * disabled so the card remains fully clickable. Falls back to a placeholder icon
 * when no .glb is available.
 */
export function ModelPoster({ dish }: ModelPosterProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [runtimeError, setRuntimeError] = useState(false);
  const viewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!dish.glbAvailable) return;
    let cancelled = false;
    import("@google/model-viewer").then(() => {
      if (!cancelled) setScriptReady(true);
    });
    return () => { cancelled = true; };
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
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-espresso/30 dark:text-ivory/25">
        <UtensilsCrossed className="h-8 w-8" />
        <span className="font-mono text-[10px] uppercase tracking-widest2">3D model not available</span>
      </div>
    );
  }

  return (
    <>
      {/* Loading state — shown until model paints */}
      {!modelLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="h-16 w-16 opacity-40">
            <ReticleFrame active={false} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-espresso/40 dark:text-ivory/40">
            Loading…
          </span>
        </div>
      )}

      {scriptReady && (
        /* pointer-events: none makes the model-viewer a still render —
           no drag / rotate possible; the parent button handles clicks.  */
        <model-viewer
          ref={viewerRef}
          src={dish.modelPath}
          alt={`3D preview of ${dish.name}`}
          camera-orbit="45deg 72deg 105%"
          field-of-view="30deg"
          shadow-intensity="0.8"
          shadow-softness="0.7"
          exposure="1.1"
          interaction-prompt="none"
          loading="lazy"
          reveal="auto"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            "--progress-bar-color": "transparent",
          } as React.CSSProperties}
        />
      )}
    </>
  );
}
