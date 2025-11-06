"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlassContainerProps {
  children: ReactNode
  className?: string
  blur?: "sm" | "md" | "lg" | "xl"
}

export function GlassContainer({
  children,
  className,
  blur = "md"
}: GlassContainerProps) {
  const blurClass = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  }[blur]

  return (
    <div
      className={cn(
        "bg-white/10 dark:bg-black/10 border border-white/20",
        blurClass,
        "rounded-lg shadow-xl",
        className
      )}
    >
      {children}
    </div>
  )
}
