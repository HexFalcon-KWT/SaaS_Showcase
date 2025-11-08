"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

interface Demo {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  libraries: string[];
  tags: string[];
  href: string;
  featured?: boolean;
}

interface DemoCardsProps {
  demos: Demo[];
}

export function DemoCards({ demos }: DemoCardsProps) {
  return (
    <section id="demos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 border-0">
            Showcase
          </Badge>
          <h2 className="mb-4 text-5xl font-bold">
            Explore Our <span className="gradient-text">Demo Collection</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Each demo showcases different UI libraries and design patterns
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {demos.map((demo) => (
            <motion.div key={demo.id} variants={staggerItem}>
              <Link href={demo.href}>
                <Card
                  className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    demo.featured ? "border-2 border-blue-500 enhanced-shadow" : ""
                  }`}
                >
                  {demo.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 border-0">
                        New
                      </Badge>
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />

                  <CardHeader className="relative">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {demo.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{demo.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {demo.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Libraries */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">Built with:</p>
                      <div className="flex flex-wrap gap-2">
                        {demo.libraries.map((lib) => (
                          <Badge
                            key={lib}
                            className={`text-xs ${
                              lib === "Shadcn/ui"
                                ? "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50"
                                : lib === "Aceternity UI"
                                ? "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/50"
                                : "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/50"
                            }`}
                          >
                            {lib}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        View Demo
                      </span>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
