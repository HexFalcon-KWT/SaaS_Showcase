"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  Cpu,
  Layers,
  Shield,
  Zap,
  Database,
  Cloud,
  Code,
  Terminal,
  Box,
  ChevronRight,
  Monitor,
  Smartphone,
  Laptop,
  Download,
} from "lucide-react";
import { AuroraBackground, WarpBackground, RetroGrid, Vortex } from "@/components/client-only";
import { StickyScrollReveal } from "@/components/ui/sticky-scroll-reveal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const stickyContent = [
  {
    title: "Lightning-Fast Performance",
    description:
      "Built on cutting-edge technology, VelocityOS delivers unmatched speed and responsiveness. Experience instant boot times and seamless multitasking.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
        <Zap className="h-32 w-32 text-white animate-pulse" />
      </div>
    ),
  },
  {
    title: "Intelligent Workflow Automation",
    description:
      "Let VelocityOS learn your patterns and automate repetitive tasks. Smart scheduling, predictive file organization, and context-aware suggestions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
        <Cpu className="h-32 w-32 text-white" />
      </div>
    ),
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Military-grade encryption, biometric authentication, and real-time threat detection. Your data stays secure, always.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg">
        <Shield className="h-32 w-32 text-white" />
      </div>
    ),
  },
];

const features = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg p-8">
        <Layers className="h-24 w-24 text-white" />
      </div>
    ),
    title: "Unified Workspace",
    description: "All your apps, files, and tools in one seamless interface",
  },
  {
    id: 2,
    className: "md:col-span-1",
    thumbnail: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-8">
        <Cloud className="h-20 w-20 text-white" />
      </div>
    ),
    title: "Cloud Sync",
    description: "Seamless synchronization across all devices",
  },
  {
    id: 3,
    className: "md:col-span-1",
    thumbnail: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg p-8">
        <Terminal className="h-20 w-20 text-white" />
      </div>
    ),
    title: "Developer Tools",
    description: "Built-in IDE, terminal, and debugging suite",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg p-8">
        <Database className="h-24 w-24 text-white" />
      </div>
    ),
    title: "Smart Data Management",
    description: "Intelligent file organization with AI-powered search and tagging",
  },
];

const integrations = [
  { name: "Docker", icon: <Box className="h-8 w-8" /> },
  { name: "Kubernetes", icon: <Layers className="h-8 w-8" /> },
  { name: "AWS", icon: <Cloud className="h-8 w-8" /> },
  { name: "Azure", icon: <Cloud className="h-8 w-8" /> },
  { name: "GCP", icon: <Cloud className="h-8 w-8" /> },
  { name: "VS Code", icon: <Code className="h-8 w-8" /> },
  { name: "GitHub", icon: <Terminal className="h-8 w-8" /> },
  { name: "GitLab", icon: <Terminal className="h-8 w-8" /> },
];

const pricingTiers = [
  {
    name: "Personal",
    price: "Free",
    description: "Perfect for individual users",
    features: [
      "Single user license",
      "5 GB cloud storage",
      "Basic automation",
      "Community support",
      "All core features",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    popular: true,
    description: "For power users and professionals",
    features: [
      "Unlimited licenses",
      "100 GB cloud storage",
      "Advanced automation",
      "Priority support",
      "Developer tools",
      "Custom themes",
      "Cloud backup",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited cloud storage",
      "Enterprise security",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
      "White-label options",
    ],
  },
];

const faqs = [
  {
    question: "What platforms does VelocityOS support?",
    answer: "VelocityOS runs on Windows, macOS, and Linux. We also offer native apps for iOS and Android for cloud-synced access on the go.",
  },
  {
    question: "Can I migrate my existing data?",
    answer: "Yes! VelocityOS includes a migration wizard that seamlessly imports your files, settings, and app data from your current operating system.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use military-grade AES-256 encryption for all data at rest and in transit. Plus, all cloud storage is end-to-end encrypted.",
  },
  {
    question: "What's included in the free version?",
    answer: "The free Personal tier includes all core features, 5GB cloud storage, and access to our community support forum. It's perfect for trying out VelocityOS.",
  },
];

export default function Demo6Page() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <AuroraBackground>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={staggerItem}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm backdrop-blur-sm"
              >
                <Monitor className="h-5 w-5" />
                <span>Next-Generation Operating System</span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="mb-8 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
              >
                Welcome to <br />
                <span className="gradient-text">VelocityOS</span>
              </motion.h1>

              <motion.div variants={staggerItem} className="mb-12">
                <TypingAnimation
                  text="The operating system that adapts to you. Fast, intelligent, and built for the future."
                  className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl"
                  duration={40}
                />
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <HoverBorderGradient>
                  <span className="flex items-center gap-2 px-8 py-3 text-lg">
                    <Download className="h-5 w-5" />
                    Download Free
                  </span>
                </HoverBorderGradient>
                <Button size="lg" variant="outline" className="text-lg px-8 py-7 hover:scale-105 transition-all">
                  <Monitor className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-16 flex items-center justify-center gap-8"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold">5M+</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-sm text-muted-foreground">User Rating</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AuroraBackground>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <Badge className="mb-6 text-lg px-6 py-2">Features</Badge>
            <h2 className="mb-4 text-5xl font-bold">
              Designed for <span className="gradient-text">Performance</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Every feature built with speed and elegance in mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: feature.id * 0.1 }}
                className={feature.className}
              >
                <Card className="glassmorphism hover:scale-105 transition-all h-full">
                  <CardHeader>
                    {feature.thumbnail}
                    <CardTitle className="text-2xl mt-4">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Experience the Difference</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Discover what makes VelocityOS special
            </p>
          </motion.div>

          <StickyScrollReveal content={stickyContent} />
        </div>
      </section>

      {/* Platform Support */}
      <section className="relative py-24 bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-950/20 dark:to-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Available Everywhere</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              One OS, all your devices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Monitor className="h-16 w-16" />, name: "Desktop", platforms: "Windows, macOS, Linux" },
              { icon: <Laptop className="h-16 w-16" />, name: "Laptop", platforms: "Full feature parity" },
              { icon: <Smartphone className="h-16 w-16" />, name: "Mobile", platforms: "iOS & Android" },
            ].map((platform, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center p-8 glassmorphism hover:scale-105 transition-all">
                  <div className="mx-auto mb-4 text-purple-500">{platform.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.platforms}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Powerful Integrations</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Works seamlessly with your favorite tools
            </p>
          </motion.div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {integrations.map((integration, idx) => (
                <CarouselItem key={idx} className="md:basis-1/4">
                  <Card className="glassmorphism p-8 text-center hover:scale-105 transition-all">
                    <div className="mx-auto mb-3 text-purple-500">{integration.icon}</div>
                    <p className="font-semibold">{integration.name}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-24">
        <WarpBackground className="border-none p-0">
          <div className="container mx-auto px-4 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <Badge className="mb-6 text-lg px-6 py-2">Pricing</Badge>
              <h2 className="mb-4 text-5xl font-bold">Choose Your Edition</h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                Start free, upgrade when you need more power
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {pricingTiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className={`p-8 glassmorphism transition-all hover:scale-105 ${
                    tier.popular ? "enhanced-shadow border-2 border-purple-500" : ""
                  }`}>
                    {tier.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Free" && tier.price !== "Custom" && (
                        <span className="text-muted-foreground">/month</span>
                      )}
                    </div>
                    <ul className="mb-8 space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.popular ? (
                      <HoverBorderGradient>
                        <span className="flex items-center justify-center gap-2 px-6 py-2 w-full">
                          Get Started
                        </span>
                      </HoverBorderGradient>
                    ) : (
                      <Button className="w-full" variant="outline">
                        {tier.price === "Free" ? "Download Free" : "Get Started"}
                      </Button>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </WarpBackground>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Frequently Asked Questions</h2>
          </motion.div>

          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <Vortex className="absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-5xl font-bold md:text-6xl text-white">
              Ready to Experience <span className="gradient-text">VelocityOS?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground">
              Join 5 million users who've already made the switch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverBorderGradient>
                <span className="flex items-center gap-2 px-10 py-4 text-lg">
                  <Download className="h-5 w-5" />
                  Download Now
                </span>
              </HoverBorderGradient>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Free forever. No credit card required. Upgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <RetroGrid className="absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h3 className="mb-4 font-bold flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-500" />
                VelocityOS
              </h3>
              <p className="text-sm text-muted-foreground">
                The next-generation operating system for modern computing
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Download</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">API</Link></li>
                <li><Link href="#">GitHub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 VelocityOS. All rights reserved. Built with Shadcn/ui, Aceternity UI & MagicUI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
