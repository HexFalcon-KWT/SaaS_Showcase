"use client";

import dynamic from "next/dynamic";

// Dynamically import components with client-side only rendering to prevent hydration mismatches
// These components use canvas, random values, or animations that differ between server and client

export const BackgroundGradientAnimation = dynamic(
  () => import("@/components/ui/background-gradient-animation").then((mod) => ({ default: mod.BackgroundGradientAnimation })),
  { ssr: false }
);

export const BackgroundBeams = dynamic(
  () => import("@/components/ui/background-beams").then((mod) => ({ default: mod.BackgroundBeams })),
  { ssr: false }
);

export const CanvasRevealEffect = dynamic(
  () => import("@/components/ui/canvas-reveal-effect").then((mod) => ({ default: mod.CanvasRevealEffect })),
  { ssr: false }
);

export const Particles = dynamic(
  () => import("@/components/ui/particles").then((mod) => ({ default: mod.Particles })),
  { ssr: false }
);

export const Spotlight = dynamic(
  () => import("@/components/ui/spotlight").then((mod) => ({ default: mod.Spotlight })),
  { ssr: false }
);

export const AuroraBackground = dynamic(
  () => import("@/components/ui/aurora-background").then((mod) => ({ default: mod.AuroraBackground })),
  { ssr: false }
);

export const WarpBackground = dynamic(
  () => import("@/components/ui/warp-background").then((mod) => ({ default: mod.WarpBackground })),
  { ssr: false }
);

export const Vortex = dynamic(
  () => import("@/components/ui/vortex").then((mod) => ({ default: mod.Vortex })),
  { ssr: false }
);

export const RetroGrid = dynamic(
  () => import("@/components/ui/retro-grid").then((mod) => ({ default: mod.RetroGrid })),
  { ssr: false }
);
