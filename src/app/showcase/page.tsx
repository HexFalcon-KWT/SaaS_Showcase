"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackgroundBeams, AuroraBackground, Spotlight, Particles, RetroGrid } from "@/components/client-only";
import { BackgroundBoxes } from "@/components/ui/background-boxes";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShinyButton } from "@/components/ui/shiny-button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { id: "backgrounds", name: "Backgrounds" },
  { id: "interactive", name: "Interactive" },
  { id: "text", name: "Text Effects" },
  { id: "cards", name: "Cards" },
  { id: "buttons", name: "Buttons" },
];

const tooltipItems = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Bob Johnson",
    designation: "UI Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
];

const cardItems = [
  {
    title: "Stripe",
    description: "Payment processing platform",
    link: "#",
  },
  {
    title: "Netflix",
    description: "Streaming entertainment service",
    link: "#",
  },
  {
    title: "Google",
    description: "Search and cloud services",
    link: "#",
  },
];

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState("backgrounds");

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.h1
          variants={staggerItem}
          className="mb-4 text-center text-4xl font-bold md:text-5xl"
        >
          <span className="gradient-text">Component Showcase</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto max-w-2xl text-center text-muted-foreground"
        >
          Explore 40+ premium components from Aceternity UI and MagicUI. Each component
          includes interactive controls and source library attribution.
        </motion.p>
      </motion.div>

      <Tabs defaultValue="backgrounds" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Backgrounds Tab */}
        <TabsContent value="backgrounds" className="space-y-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            animate={activeTab === "backgrounds" ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Background Beams - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
                title="Background Beams"
                library="Aceternity UI"
                description="Animated beam effects for hero sections"
              >
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-slate-950">
                <BackgroundBeams className="absolute inset-0" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-white">Background Beams</p>
                </div>
              </div>
              </ComponentCard>
            </motion.div>

            {/* Background Boxes - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Background Boxes"
              library="Aceternity UI"
              description="Animated grid boxes background"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <BackgroundBoxes className="absolute inset-0" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-foreground">Background Boxes</p>
                </div>
              </div>
              </ComponentCard>
            </motion.div>

            {/* Particles - MagicUI */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Particles"
              library="MagicUI"
              description="Dynamic particle animation background"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-700">
                <Particles
                  className="absolute inset-0"
                  quantity={100}
                  ease={80}
                  color="#ffffff"
                  size={[1, 3]}
                />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-white">Particles Animation</p>
                </div>
              </div>
              </ComponentCard>
            </motion.div>

            {/* Retro Grid - MagicUI */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Retro Grid"
              library="MagicUI"
              description="Retro-style perspective grid"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg bg-background">
                <RetroGrid className="absolute inset-0" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-4xl font-bold text-foreground">Retro Grid</p>
                </div>
              </div>
              </ComponentCard>
            </motion.div>

            {/* Aurora Background - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Aurora Background"
              library="Aceternity UI"
              description="Smooth aurora light effects"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <AuroraBackground className="absolute inset-0">
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <p className="text-white">Aurora Effect</p>
                  </div>
                </AuroraBackground>
              </div>
              </ComponentCard>
            </motion.div>

            {/* Wavy Background - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Wavy Background"
              library="Aceternity UI"
              description="Animated wave pattern background"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <WavyBackground className="absolute inset-0">
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <p className="text-white">Wavy Background</p>
                  </div>
                </WavyBackground>
              </div>
              </ComponentCard>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Interactive Tab */}
        <TabsContent value="interactive" className="space-y-8">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            animate={activeTab === "interactive" ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Animated Tooltip - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Animated Tooltip"
              library="Aceternity UI"
              description="Interactive user profile tooltips"
            >
              <div className="flex h-64 items-center justify-center">
                <AnimatedTooltip items={tooltipItems} />
              </div>
              </ComponentCard>
            </motion.div>

            {/* Spotlight - Aceternity */}
            <motion.div variants={staggerItem}>
              <ComponentCard
              title="Spotlight"
              library="Aceternity UI"
              description="Cursor-following spotlight effect"
            >
              <div className="relative h-64 overflow-hidden rounded-lg bg-slate-950">
                <Spotlight className="absolute -top-40 left-0 md:-top-20 md:left-60" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-white">Hover to see spotlight</p>
                </div>
              </div>
              </ComponentCard>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Text Effects Tab */}
        <TabsContent value="text" className="space-y-8">
          <div className="grid gap-8">
            {/* Text Animate - MagicUI */}
            <ComponentCard
              title="Text Animate"
              library="MagicUI"
              description="Animated text with multiple variants"
            >
              <div className="flex h-64 flex-col items-center justify-center gap-4">
                <TextAnimate animation="fadeIn" by="word">
                  This is a fade in animation by word
                </TextAnimate>
                <TextAnimate animation="blurIn" by="character">
                  Blur in by character
                </TextAnimate>
                <TextAnimate animation="slideUp" by="word">
                  Slide up animation
                </TextAnimate>
              </div>
            </ComponentCard>

            {/* Typing Animation - MagicUI */}
            <ComponentCard
              title="Typing Animation"
              library="MagicUI"
              description="Typewriter effect animation"
            >
              <div className="flex h-64 items-center justify-center">
                <TypingAnimation
                  text="This is a typing animation effect..."
                  duration={100}
                  className="text-2xl font-bold"
                />
              </div>
            </ComponentCard>
          </div>
        </TabsContent>

        {/* Cards Tab */}
        <TabsContent value="cards" className="space-y-8">
          <div className="grid gap-8">
            {/* Card Hover Effect - Aceternity */}
            <ComponentCard
              title="Card Hover Effect"
              library="Aceternity UI"
              description="Cards with smooth hover interactions"
            >
              <div className="h-auto w-full">
                <HoverEffect items={cardItems} />
              </div>
            </ComponentCard>

            {/* Card Spotlight - Aceternity */}
            <div className="grid gap-8 md:grid-cols-2">
              <ComponentCard
                title="Card Spotlight"
                library="Aceternity UI"
                description="Cards with spotlight effects"
              >
                <CardSpotlight className="h-64 p-6">
                  <p className="text-xl font-bold">Spotlight Card</p>
                  <p className="mt-4 text-muted-foreground">
                    Hover over this card to see the spotlight effect
                  </p>
                </CardSpotlight>
              </ComponentCard>

              <ComponentCard
                title="Card Spotlight (Variant)"
                library="Aceternity UI"
                description="Another spotlight card"
              >
                <CardSpotlight className="h-64 p-6">
                  <p className="text-xl font-bold">Another Card</p>
                  <p className="mt-4 text-muted-foreground">
                    Each card has its own spotlight
                  </p>
                </CardSpotlight>
              </ComponentCard>
            </div>
          </div>
        </TabsContent>

        {/* Buttons Tab */}
        <TabsContent value="buttons" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Shiny Button - MagicUI */}
            <ComponentCard
              title="Shiny Button"
              library="MagicUI"
              description="Button with animated shine effect"
            >
              <div className="flex h-64 items-center justify-center gap-4">
                <ShinyButton>Click Me</ShinyButton>
                <ShinyButton className="from-blue-600 to-purple-500">
                  Custom Colors
                </ShinyButton>
              </div>
            </ComponentCard>

            {/* Hover Border Gradient - Aceternity */}
            <ComponentCard
              title="Hover Border Gradient"
              library="Aceternity UI"
              description="Button with animated gradient border"
            >
              <div className="flex h-64 items-center justify-center gap-4">
                <HoverBorderGradient>
                  <span>Gradient Border</span>
                </HoverBorderGradient>
              </div>
            </ComponentCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface ComponentCardProps {
  title: string;
  library: string;
  description: string;
  children: React.ReactNode;
}

function ComponentCard({
  title,
  library,
  description,
  children,
}: ComponentCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg"
    >
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className={`rounded-full px-3 py-1 text-xs ${library === "Aceternity UI" ? "bg-purple-500/10 text-purple-500" : "bg-blue-500/10 text-blue-500"}`}>
            {library}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}
