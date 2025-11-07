"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Brain,
  Zap,
  Users,
  Shield,
  Globe,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Star,
  PlayCircle,
} from "lucide-react";
import { BackgroundBeams, Spotlight, Particles } from "@/components/client-only";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Timeline } from "@/components/ui/timeline";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const features = [
  {
    Icon: Brain,
    name: "AI-Powered Insights",
    description: "Leverage advanced AI to analyze data and generate actionable insights in real-time",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: MessageSquare,
    name: "Smart Collaboration",
    description: "Communicate seamlessly with AI-assisted messaging and context-aware suggestions",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Zap,
    name: "Lightning Automation",
    description: "Automate workflows with intelligent triggers and actions that learn from your patterns",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Shield,
    name: "Enterprise Security",
    description: "Bank-level encryption with AI-powered threat detection and compliance monitoring",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />,
    className: "col-span-3 lg:col-span-2",
  },
];

const timelineData = [
  {
    title: "Connect Your Team",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Invite your team members and AI assistants to your workspace. Set up channels,
          projects, and collaborative spaces in minutes.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="glassmorphism rounded-lg p-4">
            <Users className="h-8 w-8 mb-2 text-purple-500" />
            <p className="text-sm font-semibold">Team Sync</p>
          </div>
          <div className="glassmorphism rounded-lg p-4">
            <Brain className="h-8 w-8 mb-2 text-blue-500" />
            <p className="text-sm font-semibold">AI Onboarding</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI-Enhanced Workflows",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          Let AI learn your workflows and suggest optimizations. Automate repetitive tasks
          and focus on what matters most.
        </p>
        <div className="glassmorphism rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Smart task prioritization</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Predictive scheduling</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Automated reporting</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Scale & Optimize",
    content: (
      <div>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          As your team grows, NexusAI scales with you. Advanced analytics and
          AI-driven recommendations keep your operations running smoothly.
        </p>
        <div className="glassmorphism rounded-lg p-4">
          <TrendingUp className="h-12 w-12 mb-2 text-cyan-500 mx-auto" />
          <p className="text-center font-semibold">Continuous Improvement</p>
        </div>
      </div>
    ),
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams",
    features: [
      "Up to 10 team members",
      "5 AI assistants",
      "10GB storage",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    popular: true,
    description: "For growing businesses",
    features: [
      "Up to 50 team members",
      "Unlimited AI assistants",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Dedicated AI models",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom development",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
];

export default function Demo5Page() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <BackgroundBeams className="absolute inset-0" />
        <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#a855f7"
          size={[0.5, 2]}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-purple-400" />
              <span className="font-medium">Powered by Advanced AI</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="mb-8 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
            >
              Collaboration Meets <br />
              <span className="gradient-text">Artificial Intelligence</span>
            </motion.h1>

            <motion.div variants={staggerItem} className="mb-12">
              <TextAnimate
                className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl"
                duration={0.5}
              >
                Transform how your team works with AI-powered collaboration tools that learn, adapt, and optimize
              </TextAnimate>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <ShinyButton className="px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </ShinyButton>
              <Button size="lg" variant="outline" className="text-lg px-8 py-7 hover:scale-105 transition-all">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "10M+", label: "Active Users", icon: Users },
              { value: "99.9%", label: "Uptime SLA", icon: Zap },
              { value: "50K+", label: "Companies", icon: Globe },
              { value: "4.9/5", label: "User Rating", icon: Star },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <CardSpotlight className="text-center p-8">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-purple-500" />
                  <h3 className="mb-2 text-4xl font-bold gradient-text">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 border-0">
              Features
            </Badge>
            <h2 className="mb-4 text-5xl font-bold">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Powerful AI-driven features designed for modern teams
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Get started in three simple steps
            </p>
          </motion.div>

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">See NexusAI in Action</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Experience the power of AI-driven collaboration
            </p>
          </motion.div>

          <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ai">AI Features</TabsTrigger>
              <TabsTrigger value="collab">Collaboration</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-8">
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/arj7oStGLkU"
                thumbnailSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop"
                thumbnailAlt="NexusAI Platform Overview"
              />
            </TabsContent>
            <TabsContent value="ai" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-purple-500" />
                    AI-Powered Features
                  </CardTitle>
                  <CardDescription>
                    Advanced AI capabilities that enhance your workflow
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Smart task recommendations",
                    "Automated document summarization",
                    "Predictive project analytics",
                    "Natural language commands",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="collab" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-500" />
                    Real-Time Collaboration
                  </CardTitle>
                  <CardDescription>
                    Work together seamlessly with your team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glassmorphism p-6 rounded-lg">
                      <MessageSquare className="h-8 w-8 mb-3 text-cyan-500" />
                      <h4 className="font-semibold mb-2">Smart Messaging</h4>
                      <p className="text-sm text-muted-foreground">
                        Context-aware chat with AI suggestions
                      </p>
                    </div>
                    <div className="glassmorphism p-6 rounded-lg">
                      <Zap className="h-8 w-8 mb-3 text-yellow-500" />
                      <h4 className="font-semibold mb-2">Live Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time sync across all devices
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    Advanced Analytics
                  </CardTitle>
                  <CardDescription>
                    Gain insights into your team's performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 mb-4 text-purple-500 mx-auto" />
                    <p className="text-lg font-semibold">Interactive Dashboard Preview</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold">Trusted by Industry Leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Chen", role: "CTO, TechCorp", content: "NexusAI transformed how our team collaborates. The AI suggestions are incredibly accurate and save us hours every week." },
              { name: "Michael Rodriguez", role: "Product Manager, InnovateLab", content: "The automation features are game-changing. We've reduced manual work by 70% since adopting NexusAI." },
              { name: "Emily Watson", role: "CEO, FutureScale", content: "Best collaboration platform we've used. The AI integration is seamless and actually useful, not just a gimmick." },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <CardSpotlight className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <Badge className="mb-6 text-lg px-6 py-2">Pricing</Badge>
            <h2 className="mb-4 text-5xl font-bold">Choose Your Plan</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Flexible pricing that scales with your team
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <CardSpotlight className={`p-8 ${plan.popular ? "enhanced-shadow border-2 border-purple-500" : ""}`}>
                  <div className="text-white dark:text-foreground">
                    {plan.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                    <p className="mb-4 text-sm text-white/70 dark:text-muted-foreground">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-white/70 dark:text-muted-foreground">/month</span>}
                    </div>
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={60}
          color="#a855f7"
          size={[1, 3]}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glassmorphism rounded-3xl p-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-purple-500" />
              <h2 className="mb-6 text-5xl font-bold md:text-6xl">
                Ready to Transform Your <span className="gradient-text">Workflow?</span>
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground">
                Join 10 million users and 50,000+ companies already using NexusAI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  className="max-w-md h-14 text-lg"
                />
                <ShinyButton className="px-10 py-4 text-lg">
                  Get Started Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </ShinyButton>
              </div>
              <p className="text-sm text-muted-foreground">
                Start your 14-day free trial. No credit card required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h3 className="mb-4 font-bold flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                NexusAI
              </h3>
              <p className="text-sm text-muted-foreground">
                AI-powered collaboration platform for modern teams
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Security</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 NexusAI. All rights reserved. Built with Shadcn/ui, Aceternity UI & MagicUI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
