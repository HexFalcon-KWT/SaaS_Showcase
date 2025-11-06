"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GeometricGridProps {
  className?: string;
  gridSize?: number;
  lineColor?: string;
  glowColor?: string;
  animationSpeed?: number;
}

export function GeometricGrid({
  className,
  gridSize = 50,
  lineColor = "rgba(139, 92, 246, 0.2)",
  glowColor = "rgba(139, 92, 246, 0.5)",
  animationSpeed = 0.001,
}: GeometricGridProps) {
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

    const nodes: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      connections: number[];
    }> = [];

    // Create grid of nodes
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          connections: [],
        });
      }
    }

    // Connect nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const dx = node.baseX - otherNode.baseX;
          const dy = node.baseY - otherNode.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < gridSize * 1.5) {
            node.connections.push(j);
          }
        }
      });
    });

    const animate = () => {
      time += animationSpeed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions with wave effect
      nodes.forEach((node, i) => {
        const angle = Math.atan2(
          node.baseY - canvas.height / 2,
          node.baseX - canvas.width / 2
        );
        const distance = Math.sqrt(
          Math.pow(node.baseX - canvas.width / 2, 2) +
            Math.pow(node.baseY - canvas.height / 2, 2)
        );

        node.x =
          node.baseX +
          Math.sin(time * 2 + angle) * 10 +
          Math.sin(time + distance * 0.01) * 5;
        node.y =
          node.baseY +
          Math.cos(time * 2 + angle) * 10 +
          Math.cos(time + distance * 0.01) * 5;
      });

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach((connectionIndex) => {
          const otherNode = nodes[connectionIndex];
          if (!otherNode) return;

          const distance = Math.sqrt(
            Math.pow(node.x - canvas.width / 2, 2) +
              Math.pow(node.y - canvas.height / 2, 2)
          );
          const opacity = Math.sin(time + distance * 0.01) * 0.5 + 0.5;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.strokeStyle = lineColor;
          ctx.globalAlpha = opacity * 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw nodes with glow
      nodes.forEach((node) => {
        const distance = Math.sqrt(
          Math.pow(node.x - canvas.width / 2, 2) +
            Math.pow(node.y - canvas.height / 2, 2)
        );
        const size = 2 + Math.sin(time * 2 + distance * 0.01) * 1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.globalAlpha = 0.8;
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [gridSize, lineColor, glowColor, animationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
