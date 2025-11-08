"use client";

import { motion } from "motion/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Lazy load heavy components - not critical for LCP
const RetroGrid = dynamic(
  () => import("@/components/client-only").then((mod) => ({ default: mod.RetroGrid })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10" />
    ),
  }
);

const TextAnimate = dynamic(
  () => import("@/components/ui/text-animate").then((mod) => ({ default: mod.TextAnimate })),
  { ssr: false }
);

const ShinyButton = dynamic(
  () => import("@/components/ui/shiny-button").then((mod) => ({ default: mod.ShinyButton })),
  { ssr: false }
);

interface HeroSectionProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10">
      <Suspense fallback={null}>
        <RetroGrid className="absolute inset-0" gridColor="rgba(59,130,246,0.3)" />
      </Suspense>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* LCP element - already optimized in page.tsx */}
          <h1
            className="mb-8 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
            style={{ contentVisibility: "auto" }}
          >
            6 Amazing SaaS <br />
            <span className="gradient-text">Demo Pages</span>
          </h1>

          <motion.div variants={staggerItem} className="mb-12">
            <Suspense
              fallback={
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl">
                  Combining the best of Shadcn/ui, Aceternity UI, and MagicUI into stunning,
                  production-ready demos
                </p>
              }
            >
              <TextAnimate
                className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl"
                duration={0.5}
              >
                Combining the best of Shadcn/ui, Aceternity UI, and MagicUI into stunning,
                production-ready demos
              </TextAnimate>
            </Suspense>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-16"
          >
            <Link href="#demos">
              <Suspense
                fallback={
                  <Button className="h-14 px-8 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Explore Demos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                }
              >
                <ShinyButton className="h-14 px-8 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Explore Demos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShinyButton>
              </Suspense>
            </Link>
            <Link href="/components">
              <Button
                variant="outline"
                className="h-14 text-lg px-8 hover:scale-105 transition-all"
              >
                Browse Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
