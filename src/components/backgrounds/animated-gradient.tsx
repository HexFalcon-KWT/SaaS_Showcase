"use client"

import { cn } from "@/lib/utils"

interface AnimatedGradientProps {
  className?: string
  colors?: string[]
  blur?: "sm" | "md" | "lg" | "xl"
}

export function AnimatedGradient({
  className,
  colors = ["from-blue-400", "via-purple-500", "to-pink-500"],
  blur = "xl"
}: AnimatedGradientProps) {
  const blurClass = {
    sm: "blur-sm",
    md: "blur-md",
    lg: "blur-lg",
    xl: "blur-xl"
  }[blur]

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-30">
        {/* Gradient orb 1 */}
        <div
          className={cn(
            "absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br rounded-full mix-blend-multiply",
            blurClass,
            "animate-blob",
            colors[0]
          )}
        />
        {/* Gradient orb 2 */}
        <div
          className={cn(
            "absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br rounded-full mix-blend-multiply",
            blurClass,
            "animate-blob animation-delay-2000",
            colors[1]
          )}
        />
        {/* Gradient orb 3 */}
        <div
          className={cn(
            "absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br rounded-full mix-blend-multiply",
            blurClass,
            "animate-blob animation-delay-4000",
            colors[2]
          )}
        />
      </div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
