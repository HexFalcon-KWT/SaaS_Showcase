"use client";

import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  gridSize?: number;
  bgOpacity?: number;
  gridColor?: string;
  timing?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  duration?: number;
}

export function RetroGrid({
  className,
  gridSize = 20,
  bgOpacity = 0.5,
  gridColor = "rgba(255, 255, 255, 0.1)",
  timing = "linear",
  duration = 5,
}: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
      style={{
        "--grid-size": `${gridSize}px`,
        "--grid-color": gridColor,
        "--bg-opacity": bgOpacity,
        "--duration": `${duration}s`,
        "--timing": timing,
      } as React.CSSProperties}
    >
      {/* Perspective grid */}
      <div
        className="absolute inset-0 [transform:rotateX(35deg)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "var(--grid-size) var(--grid-size)",
          backgroundPosition: "center center",
        }}
      >
        {/* Animated overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background"
          style={{
            opacity: "var(--bg-opacity)",
          }}
        />
      </div>

      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}
