"use client";

import { motion } from "motion/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

// Lazy load ShinyButton for CTA section
const ShinyButton = dynamic(
  () => import("@/components/ui/shiny-button").then((mod) => ({ default: mod.ShinyButton })),
  { ssr: false, suspense: true }
);

const features = [
  {
    title: "Production Ready",
    description:
      "All demos are fully functional and ready to be used as templates for your projects",
    icon: "✨",
  },
  {
    title: "Best Practices",
    description:
      "Built with modern React patterns, TypeScript, and optimized for performance",
    icon: "⚡",
  },
  {
    title: "Multiple Libraries",
    description: "Learn how to integrate Shadcn/ui, Aceternity UI, and MagicUI together",
    icon: "🎨",
  },
];

export function FeaturesSection() {
  return (
    <>
      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Why This Showcase?</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card className="text-center p-8 glassmorphism hover:scale-105 transition-all">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="max-w-4xl mx-auto glassmorphism rounded-3xl p-16"
          >
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-blue-500" />
            <h2 className="mb-6 text-5xl font-bold md:text-6xl">
              Start Building <span className="gradient-text">Today</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground">
              Choose any demo as your starting point and customize it to fit your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demos">
                <Suspense
                  fallback={
                    <Button className="h-14 px-10 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                      Browse Demos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  }
                >
                  <ShinyButton className="h-14 px-10 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Browse Demos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ShinyButton>
                </Suspense>
              </Link>
              <Link href="/components">
                <Button
                  variant="outline"
                  className="h-14 text-lg px-10 hover:scale-105 transition-all"
                >
                  Shadcn/ui Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/showcase">
                <Button
                  variant="outline"
                  className="h-14 text-lg px-10 hover:scale-105 transition-all"
                >
                  Aceternity/MagicUI Showcase
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
