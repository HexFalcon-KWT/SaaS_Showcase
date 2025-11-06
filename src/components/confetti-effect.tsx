"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
  colors?: string[];
  particleCount?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
}

export function ConfettiEffect({
  trigger,
  onComplete,
  colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
  particleCount = 50
}: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: 50, // Start from center
        y: 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 100,
        velocityY: -Math.random() * 80 - 20,
      }));

      setParticles(newParticles);

      // Clear particles after animation
      setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
    }
  }, [trigger, particleCount, colors, onComplete]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 1,
              rotate: particle.rotation,
            }}
            animate={{
              x: `calc(${particle.x}% + ${particle.velocityX}px)`,
              y: `calc(${particle.y}% + ${particle.velocityY * 3}px)`,
              opacity: 0,
              rotate: particle.rotation + 720,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
