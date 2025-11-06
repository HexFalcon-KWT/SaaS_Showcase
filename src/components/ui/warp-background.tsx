"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface BeamProps {
  width: string;
  x: string;
  delay: number;
  duration: number;
}

const Beam = ({ width, x, delay, duration }: BeamProps) => {
  return (
    <div
      className="absolute top-0 h-full w-full origin-top animate-beam-scroll"
      style={{
        width,
        left: x,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        "--beam-width": "var(--beam-size)",
        "--beam-delay": `${delay}ms`,
        "--beam-duration": `${duration}ms`,
      } as React.CSSProperties}
    />
  );
};

interface WarpBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  perspective?: number;
  gridColor?: string;
  beamSize?: number;
  beamDuration?: number;
  beamsPerSide?: number;
  beamDelayMin?: number;
  beamDelayMax?: number;
  children?: React.ReactNode;
}

export function WarpBackground({
  children,
  className,
  perspective = 1000,
  gridColor = "#ffffff26",
  beamSize = 2,
  beamDuration = 2000,
  beamsPerSide = 10,
  beamDelayMin = 0,
  beamDelayMax = 3000,
  ...rest
}: WarpBackgroundProps) {
  const generateBeams = () => {
    return Array.from({ length: beamsPerSide }).map((_, index) => {
      const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
      return {
        x: Math.random(),
        delay: delay,
      };
    });
  };

  const topBeams = useMemo(() => generateBeams(), [beamsPerSide, beamDelayMin, beamDelayMax]);
  const rightBeams = useMemo(() => generateBeams(), [beamsPerSide, beamDelayMin, beamDelayMax]);
  const bottomBeams = useMemo(() => generateBeams(), [beamsPerSide, beamDelayMin, beamDelayMax]);
  const leftBeams = useMemo(() => generateBeams(), [beamsPerSide, beamDelayMin, beamDelayMax]);

  return (
    <div className={cn("relative rounded border p-20", className)} {...rest}>
      <div
        style={{
          "--perspective": `${perspective}px`,
          "--grid-color": gridColor,
          "--beam-size": `${beamSize}%`,
        } as React.CSSProperties}
        className="pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clipPath:inset(0)] [perspective:var(--perspective)] [transform-style:preserve-3d] [container-type:size]"
      >
        {/* top side */}
        <div className="absolute z-20 [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d] [container-type:inline-size]">
          {topBeams.map((beam, index) => (
            <Beam
              key={`top-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* bottom side */}
        <div className="absolute top-full [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d] [container-type:inline-size]">
          {bottomBeams.map((beam, index) => (
            <Beam
              key={`bottom-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* left side */}
        <div className="absolute left-0 top-0 [height:100cqmax] [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d] [container-type:inline-size]">
          {leftBeams.map((beam, index) => (
            <Beam
              key={`left-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
        {/* right side */}
        <div className="absolute right-0 top-0 [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d] [container-type:inline-size]">
          {rightBeams.map((beam, index) => (
            <Beam
              key={`right-${index}`}
              width={`${beamSize}%`}
              x={`${beam.x * beamSize}%`}
              delay={beam.delay}
              duration={beamDuration}
            />
          ))}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
