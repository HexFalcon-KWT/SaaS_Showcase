import {
  BarChart,
  Palette,
  Zap,
  Terminal,
  Brain,
  Cpu,
} from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";
import { DemoCards } from "@/components/home/demo-cards";
import { FeaturesSection } from "@/components/home/features-section";

// Static data - defined on the server
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

// Server Component - no "use client"
export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section - Client Component Island */}
      <HeroSection stats={stats} />

      {/* Demos Grid - Client Component Island */}
      <DemoCards demos={demos} />

      {/* Features + CTA Sections - Client Component Island */}
      <FeaturesSection />

      {/* Footer - Server Component (static) */}
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
