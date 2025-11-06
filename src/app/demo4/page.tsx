"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  Rocket,
  Lock,
  TrendingUp,
  Globe,
  Play,
  ChevronRight,
} from "lucide-react";
import { GeometricGrid } from "@/components/backgrounds/geometric-grid";
import { WarpBackground, RetroGrid, Particles } from "@/components/client-only";
import { StickyScrollReveal } from "@/components/ui/sticky-scroll-reveal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const stickyContent = [
  {
    title: "Connect Everything",
    description:
      "Seamlessly integrate all your tools and services. Our platform supports hundreds of popular applications out of the box.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
        <Globe className="h-20 w-20 text-white" />
      </div>
    ),
  },
  {
    title: "Automate Workflows",
    description:
      "Build powerful automations without writing code. Drag, drop, and connect your way to increased productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
        <Rocket className="h-20 w-20 text-white" />
      </div>
    ),
  },
  {
    title: "Scale Securely",
    description:
      "Enterprise-grade security and compliance built in. Scale your operations with confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
        <Lock className="h-20 w-20 text-white" />
      </div>
    ),
  },
];

const features = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Rapid Deployment",
    description: "Go from idea to production in minutes, not weeks",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Bank-Level Security",
    description: "Your data is protected with military-grade encryption",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Real-Time Analytics",
    description: "Make data-driven decisions with live insights",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global CDN",
    description: "Lightning-fast performance worldwide",
  },
];

const pricingTiers = [
  {
    name: "Hobbyist",
    price: "$0",
    description: "Perfect for side projects",
    features: [
      "5 projects",
      "10 GB bandwidth",
      "Community support",
      "Basic features",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For professional developers",
    popular: true,
    features: [
      "Unlimited projects",
      "100 GB bandwidth",
      "Priority support",
      "Advanced features",
      "Custom domains",
      "Team collaboration",
    ],
  },
  {
    name: "Team",
    price: "$199",
    description: "For growing teams",
    features: [
      "Everything in Pro",
      "500 GB bandwidth",
      "Dedicated support",
      "SSO & SAML",
      "Advanced security",
      "Audit logs",
    ],
  },
];

export default function Demo2Page() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GeometricGrid className="absolute inset-0 opacity-30" />
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={80}
          color="#8b5cf6"
          size={[0.5, 1.5]}
        />

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <Rocket className="h-4 w-4" />
              <span>Next Generation Platform</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              Build The Future <br />
              <span className="gradient-text">With Confidence</span>
            </motion.h1>

            <motion.div variants={staggerItem} className="mb-12">
              <TypingAnimation
                text="The all-in-one platform for modern development teams"
                className="mx-auto max-w-2xl text-lg text-muted-foreground"
                duration={50}
              />
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <HoverBorderGradient>
                <span className="flex items-center gap-2 px-6 py-2">
                  Start Building Free
                  <ChevronRight className="h-4 w-4" />
                </span>
              </HoverBorderGradient>
              <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:bg-background/80">
                <Play className="h-4 w-4" />
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-24">
        <RetroGrid className="absolute inset-0" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Trusted By Industry Leaders</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Companies of all sizes rely on our platform for mission-critical operations
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              className="glassmorphism rounded-lg p-8 text-center"
            >
              <h3 className="mb-2 text-5xl font-bold gradient-text">500K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="glassmorphism rounded-lg p-8 text-center"
            >
              <h3 className="mb-2 text-5xl font-bold gradient-text">1M+</h3>
              <p className="text-muted-foreground">Projects Deployed</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="glassmorphism rounded-lg p-8 text-center"
            >
              <h3 className="mb-2 text-5xl font-bold gradient-text">150+</h3>
              <p className="text-muted-foreground">Countries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Everything You Need</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Built for developers, loved by teams
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="glassmorphism rounded-lg p-6 transition-all hover:scale-105 hover:enhanced-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Three simple steps to transform your workflow
            </p>
          </motion.div>

          <StickyScrollReveal content={stickyContent} />
        </div>
      </section>

      {/* Product Demo */}
      <section className="relative py-24 bg-muted/50">
        <WarpBackground className="border-none p-0">
          <div className="container mx-auto px-4 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold">Live Demo</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Experience the power of our platform firsthand
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              className="mx-auto max-w-4xl glassmorphism rounded-lg p-8"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <div className="text-center">
                  <Play className="mx-auto h-16 w-16 text-white mb-4" />
                  <p className="text-white text-lg">Interactive Demo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </WarpBackground>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Seamless Integrations</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Works with your favorite tools
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-5">
            {["AWS", "Vercel", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "Cloudflare", "Twilio", "Sendgrid"].map((tool, idx) => (
              <motion.div
                key={tool}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="glassmorphism flex h-24 items-center justify-center rounded-lg p-4 transition-all hover:scale-105 hover:enhanced-shadow"
              >
                <p className="font-semibold">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Flexible Pricing</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Start free, scale as you grow
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`glassmorphism rounded-lg p-8 transition-all hover:scale-105 ${
                  tier.popular ? "enhanced-shadow border-2 border-primary" : ""
                }`}
              >
                {tier.popular && (
                  <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-lg px-6 py-3 font-medium transition-all hover:scale-105 ${
                    tier.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background"
                  }`}
                >
                  {tier.price === "$0" ? "Start Free" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <GeometricGrid className="absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Ready To Transform Your Workflow?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Join the next generation of developers building the future.
            </p>
            <HoverBorderGradient>
              <span className="flex items-center gap-2 px-8 py-3 text-lg">
                Get Started Now
                <ChevronRight className="h-5 w-5" />
              </span>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Integrations</Link></li>
                <li><Link href="#">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Developers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">API Reference</Link></li>
                <li><Link href="#">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Community</Link></li>
                <li><Link href="#">Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Platform. All rights reserved. Powered by Aceternity UI & MagicUI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
