"use client"

import { cn } from "@/lib/utils"

interface FloatingShapesProps {
  className?: string
  count?: number
  type?: "circle" | "square" | "mixed"
}

export function FloatingShapes({
  className,
  count = 8,
  type = "mixed"
}: FloatingShapesProps) {
  const shapes = Array.from({ length: count }, (_, i) => {
    const isCircle = type === "circle" || (type === "mixed" && i % 2 === 0)
    const size = Math.floor(Math.random() * 80) + 20
    const delay = Math.random() * 5
    const duration = Math.random() * 10 + 10
    const left = Math.random() * 100
    const top = Math.random() * 100

    return {
      id: i,
      isCircle,
      size,
      delay,
      duration,
      left,
      top
    }
  })

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={cn(
            "absolute opacity-10",
            shape.isCircle ? "rounded-full" : "rounded-lg rotate-45"
          )}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            background: `hsl(${shape.id * 40}, 70%, 60%)`,
            animation: `float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  )
}
