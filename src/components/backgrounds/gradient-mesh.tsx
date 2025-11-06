"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
}

export function GradientMesh({
  className,
  colors = [
    "rgba(139, 92, 246, 0.3)",
    "rgba(59, 130, 246, 0.3)",
    "rgba(236, 72, 153, 0.3)",
    "rgba(245, 158, 11, 0.3)",
  ],
  speed = 0.0005,
  blur = 100,
}: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const gradients = colors.map((color, i) => ({
      color,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 200 + 150,
    }));

    const animate = () => {
      time += speed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      gradients.forEach((gradient) => {
        gradient.x += gradient.vx + Math.sin(time) * 0.5;
        gradient.y += gradient.vy + Math.cos(time) * 0.5;

        if (gradient.x < 0 || gradient.x > canvas.width) gradient.vx *= -1;
        if (gradient.y < 0 || gradient.y > canvas.height) gradient.vy *= -1;

        const radialGradient = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.radius
        );

        radialGradient.addColorStop(0, gradient.color);
        radialGradient.addColorStop(1, "transparent");

        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [colors, speed, blur]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ filter: `blur(${blur}px)` }}
    />
  );
}
