"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Home */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <Sparkles className="h-6 w-6 text-purple-500" />
          <span className="gradient-text">SaaS Showcase</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Demos Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Demos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/demo1" title="DataInsight Pro">
                    Analytics platform with real-time dashboards
                  </ListItem>
                  <ListItem href="/demo2" title="CreativeHub">
                    Creative workspace for designers and teams
                  </ListItem>
                  <ListItem href="/demo3" title="Business Platform">
                    Business transformation with AI insights
                  </ListItem>
                  <ListItem href="/demo4" title="Developer Platform">
                    Platform for modern development teams
                  </ListItem>
                  <ListItem href="/demo5" title="NexusAI" featured>
                    AI-powered collaboration platform
                  </ListItem>
                  <ListItem href="/demo6" title="VelocityOS" featured>
                    Next-gen OS with workflow automation
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Components Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem href="/components" title="Shadcn/ui Components">
                    54 premium React components built with Radix UI
                  </ListItem>
                  <ListItem href="/showcase" title="Aceternity & MagicUI">
                    40+ animated components and effects
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - Mobile Menu + Theme Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b bg-background overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {/* Demos Section */}
              <Collapsible open={demosOpen} onOpenChange={setDemosOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-md hover:bg-accent transition-colors">
                  <span className="font-medium">Demos</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", demosOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 pl-4 space-y-2">
                  <MobileLink href="/demo1" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">DataInsight Pro</span>
                    <span className="text-xs text-muted-foreground">Analytics platform</span>
                  </MobileLink>
                  <MobileLink href="/demo2" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">CreativeHub</span>
                    <span className="text-xs text-muted-foreground">Creative workspace</span>
                  </MobileLink>
                  <MobileLink href="/demo3" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">Business Platform</span>
                    <span className="text-xs text-muted-foreground">Business transformation</span>
                  </MobileLink>
                  <MobileLink href="/demo4" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">Developer Platform</span>
                    <span className="text-xs text-muted-foreground">For development teams</span>
                  </MobileLink>
                  <MobileLink href="/demo5" onClick={() => setMobileMenuOpen(false)} featured>
                    <span className="font-medium">NexusAI ✨</span>
                    <span className="text-xs text-muted-foreground">AI collaboration</span>
                  </MobileLink>
                  <MobileLink href="/demo6" onClick={() => setMobileMenuOpen(false)} featured>
                    <span className="font-medium">VelocityOS ✨</span>
                    <span className="text-xs text-muted-foreground">Workflow automation</span>
                  </MobileLink>
                </CollapsibleContent>
              </Collapsible>

              {/* Components Section */}
              <Collapsible open={componentsOpen} onOpenChange={setComponentsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-md hover:bg-accent transition-colors">
                  <span className="font-medium">Components</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", componentsOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-2 pl-4 space-y-2">
                  <MobileLink href="/components" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">Shadcn/ui Components</span>
                    <span className="text-xs text-muted-foreground">54 premium components</span>
                  </MobileLink>
                  <MobileLink href="/showcase" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-medium">Aceternity & MagicUI</span>
                    <span className="text-xs text-muted-foreground">40+ animated components</span>
                  </MobileLink>
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const MobileLink = ({
  href,
  onClick,
  children,
  featured
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  featured?: boolean;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "flex flex-col p-2 rounded-md hover:bg-accent transition-colors min-h-[44px] justify-center",
      featured && "border border-purple-500/30 bg-purple-500/5"
    )}
  >
    {children}
  </Link>
);

const ListItem = ({
  className,
  title,
  children,
  href,
  featured,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  featured?: boolean;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            featured && "border border-purple-500/30 bg-purple-500/5",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2">
            {title}
            {featured && <span className="text-xs text-purple-500">✨ New</span>}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
