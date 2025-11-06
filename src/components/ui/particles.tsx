"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number[];
  color?: string;
  shapes?: ("circle" | "square" | "triangle")[];
  twinkle?: boolean;
  refresh?: boolean;
}

export function Particles({
  className = "",
  quantity = 50,
  staticity = 50,
  ease = 50,
  size = [0.4, 1],
  color = "#ffffff",
  shapes = ["circle"],
  twinkle = false,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set initial dimensions
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      shape: string;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (ease / 50),
        vy: (Math.random() - 0.5) * (ease / 50),
        size: Math.random() * (size[1] - size[0]) + size[0],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        opacity: Math.random(),
      });
    }

    let animationFrameId: number;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        if (twinkle) {
          particle.opacity += (Math.random() - 0.5) * 0.1;
          particle.opacity = Math.max(0.1, Math.min(1, particle.opacity));
        }

        context.fillStyle = color;
        context.globalAlpha = particle.opacity;
        context.beginPath();

        if (particle.shape === "circle") {
          context.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
          );
        } else if (particle.shape === "square") {
          context.rect(
            particle.x,
            particle.y,
            particle.size * 2,
            particle.size * 2
          );
        } else if (particle.shape === "triangle") {
          context.moveTo(particle.x, particle.y - particle.size);
          context.lineTo(
            particle.x + particle.size,
            particle.y + particle.size
          );
          context.lineTo(
            particle.x - particle.size,
            particle.y + particle.size
          );
          context.closePath();
        }

        context.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      // Recreate particles on resize
      particles.length = 0;
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (ease / 50),
          vy: (Math.random() - 0.5) * (ease / 50),
          size: Math.random() * (size[1] - size[0]) + size[0],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          opacity: Math.random(),
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    quantity,
    ease,
    size,
    color,
    shapes,
    twinkle,
    refresh,
    staticity,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
