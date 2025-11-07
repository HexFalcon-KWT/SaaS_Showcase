"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  Zap,
  Shield,
  BarChart,
  Users,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { GradientMesh } from "@/components/backgrounds/gradient-mesh";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Timeline } from "@/components/ui/timeline";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const features = [
  {
    Icon: Zap,
    name: "Lightning Fast",
    description: "Optimized for speed and performance",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Shield,
    name: "Secure by Default",
    description: "Enterprise-grade security built in",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: BarChart,
    name: "Analytics Dashboard",
    description: "Real-time insights and reporting",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: Users,
    name: "Team Collaboration",
    description: "Work together seamlessly",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-purple-500/10" />,
    className: "col-span-3 lg:col-span-1",
  },
];

const timelineData = [
  {
    title: "Connect Your Data",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Integrate with your existing tools in minutes. Support for 100+ platforms
          and services.
        </p>
      </div>
    ),
  },
  {
    title: "Configure Workflows",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Set up automated workflows with our intuitive drag-and-drop interface.
          No coding required.
        </p>
      </div>
    ),
  },
  {
    title: "Launch & Scale",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Deploy your solution and scale effortlessly as your business grows.
          Real-time monitoring included.
        </p>
      </div>
    ),
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "Up to 10 team members",
      "5 GB storage",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    popular: true,
    features: [
      "Up to 50 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom development",
      "SLA guarantee",
    ],
  },
];

export default function Demo1Page() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <GradientMesh className="absolute inset-0 opacity-50" />
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <Zap className="h-4 w-4" />
              <span>Powered by AI</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              Transform Your <br />
              <span className="gradient-text">Business Today</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              The ultimate platform for modern teams. Streamline workflows,
              boost productivity, and drive growth with our innovative solutions.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <ShinyButton className="px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShinyButton>
              <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:bg-background/80">
                <PlayCircle className="h-4 w-4" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Why Choose Us?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join thousands of teams already using our platform to achieve their goals
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
              <h3 className="mb-2 text-5xl font-bold gradient-text">10x</h3>
              <p className="text-muted-foreground">Faster Workflows</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="glassmorphism rounded-lg p-8 text-center"
            >
              <h3 className="mb-2 text-5xl font-bold gradient-text">99.9%</h3>
              <p className="text-muted-foreground">Uptime SLA</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="glassmorphism rounded-lg p-8 text-center"
            >
              <h3 className="mb-2 text-5xl font-bold gradient-text">24/7</h3>
              <p className="text-muted-foreground">Expert Support</p>
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
            <h2 className="mb-4 text-4xl font-bold">Powerful Features</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Everything you need to succeed in one place
            </p>
          </motion.div>

          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard
                key={idx}
                {...feature}
                cta="Learn more"
                href="#"
              />
            ))}
          </BentoGrid>
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
              Get started in three simple steps
            </p>
          </motion.div>

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">See It In Action</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Watch how our platform transforms your workflow
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/arj7oStGLkU"
              thumbnailSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
              thumbnailAlt="Product Demo"
            />
          </div>
        </div>
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
            <h2 className="mb-4 text-4xl font-bold">Integrations</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Connect with the tools you already use
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {["Slack", "GitHub", "Figma", "Notion", "Stripe", "Zapier", "Salesforce", "HubSpot"].map((tool) => (
              <motion.div
                key={tool}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                className="glassmorphism flex h-24 items-center justify-center rounded-lg p-4 transition-all hover:scale-105"
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
            <h2 className="mb-4 text-4xl font-bold">Simple Pricing</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <CardSpotlight className={`p-8 ${plan.popular ? "enhanced-shadow" : ""}`}>
                  <div className="text-white dark:text-foreground">
                    {plan.popular && (
                      <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                        Most Popular
                      </div>
                    )}
                    <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-white/70 dark:text-muted-foreground">/month</span>}
                    </div>
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-105">
                      Get Started
                    </button>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <GradientMesh className="absolute inset-0 opacity-30" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Join thousands of teams using our platform. Start your free trial today.
            </p>
            <ShinyButton className="px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </ShinyButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Demo SaaS. All rights reserved. Built with Aceternity UI & MagicUI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
