"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RetroGrid } from "@/components/client-only";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  BarChart,
  Palette,
  Zap,
  Terminal,
  Brain,
  Cpu,
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const demos = [
  {
    id: 1,
    title: "DataInsight Pro",
    description: "Data analytics platform with real-time dashboards and predictive modeling",
    icon: <BarChart className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500",
    libraries: ["Shadcn/ui"],
    tags: ["Analytics", "Dashboard", "Enterprise"],
    href: "/demo1",
  },
  {
    id: 2,
    title: "CreativeHub",
    description: "All-in-one creative workspace for designers and teams",
    icon: <Palette className="h-8 w-8" />,
    gradient: "from-cyan-400 to-teal-400",
    libraries: ["Shadcn/ui"],
    tags: ["Design", "Collaboration", "Creative"],
    href: "/demo2",
  },
  {
    id: 3,
    title: "Business Platform",
    description: "Modern business transformation platform with AI-powered insights",
    icon: <Zap className="h-8 w-8" />,
    gradient: "from-teal-400 to-blue-400",
    libraries: ["Aceternity UI", "MagicUI"],
    tags: ["Business", "AI", "Automation"],
    href: "/demo3",
  },
  {
    id: 4,
    title: "Developer Platform",
    description: "Next-generation platform for modern development teams",
    icon: <Terminal className="h-8 w-8" />,
    gradient: "from-blue-400 to-cyan-400",
    libraries: ["Aceternity UI", "MagicUI"],
    tags: ["Development", "DevOps", "Platform"],
    href: "/demo4",
  },
  {
    id: 5,
    title: "NexusAI",
    description: "AI-powered collaboration platform that learns and adapts",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-500",
    libraries: ["Shadcn/ui", "Aceternity UI", "MagicUI"],
    tags: ["AI", "Collaboration", "Innovation"],
    href: "/demo5",
    featured: true,
  },
  {
    id: 6,
    title: "VelocityOS",
    description: "Next-gen operating system with intelligent workflow automation",
    icon: <Cpu className="h-8 w-8" />,
    gradient: "from-cyan-500 to-teal-500",
    libraries: ["Shadcn/ui", "Aceternity UI", "MagicUI"],
    tags: ["OS", "Performance", "Innovation"],
    href: "/demo6",
    featured: true,
  },
];

const stats = [
  { value: "6", label: "Demo Pages" },
  { value: "94+", label: "UI Components" },
  { value: "3", label: "UI Libraries" },
  { value: "100%", label: "Free & Open" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10">
        <RetroGrid
          className="absolute inset-0"
          gridColor="rgba(59,130,246,0.3)"
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={staggerItem}
              className="mb-8 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
            >
              6 Amazing SaaS <br />
              <span className="gradient-text">Demo Pages</span>
            </motion.h1>

            <motion.div variants={staggerItem} className="mb-12">
              <TextAnimate
                className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl"
                duration={0.5}
              >
                Combining the best of Shadcn/ui, Aceternity UI, and MagicUI into stunning, production-ready demos
              </TextAnimate>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-16"
            >
              <Link href="#demos">
                <ShinyButton className="h-14 px-8 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Explore Demos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShinyButton>
              </Link>
              <Link href="/components">
                <Button variant="outline" className="h-14 text-lg px-8 hover:scale-105 transition-all">
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

      {/* Demos Grid */}
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
              <motion.div
                key={demo.id}
                variants={staggerItem}
              >
                <Link href={demo.href}>
                  <Card className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    demo.featured ? "border-2 border-blue-500 enhanced-shadow" : ""
                  }`}>
                    {demo.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 border-0">
                          New
                        </Badge>
                      </div>
                    )}

                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

                    <CardHeader className="relative">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
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
                                lib === "Shadcn/ui" ? "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50" :
                                lib === "Aceternity UI" ? "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/50" :
                                "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/50"
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
            {[
              {
                title: "Production Ready",
                description: "All demos are fully functional and ready to be used as templates for your projects",
                icon: "✨",
              },
              {
                title: "Best Practices",
                description: "Built with modern React patterns, TypeScript, and optimized for performance",
                icon: "⚡",
              },
              {
                title: "Multiple Libraries",
                description: "Learn how to integrate Shadcn/ui, Aceternity UI, and MagicUI together",
                icon: "🎨",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
              >
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
                <ShinyButton className="h-14 px-10 text-lg whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Browse Demos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShinyButton>
              </Link>
              <Link href="/components">
                <Button variant="outline" className="h-14 text-lg px-10 hover:scale-105 transition-all">
                  Shadcn/ui Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/showcase">
                <Button variant="outline" className="h-14 text-lg px-10 hover:scale-105 transition-all">
                  Aceternity/MagicUI Showcase
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS v4
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 SaaS Showcase. Powered by Shadcn/ui, Aceternity UI & MagicUI.
          </p>
        </div>
      </footer>
    </div>
  );
}
