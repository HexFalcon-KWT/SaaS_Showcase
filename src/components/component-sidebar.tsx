"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ComponentSidebarProps {
  components: Array<{ name: string; id: string }>;
  activeComponent: string;
  onComponentClick: (id: string) => void;
}

export function ComponentSidebar({
  components,
  activeComponent,
  onComponentClick,
}: ComponentSidebarProps) {
  return (
    <div className="max-md:hidden md:flex w-64 border-r bg-muted/30 sticky top-16 h-[calc(100vh-4rem)] flex-shrink-0">
      <ScrollArea className="h-full w-full">
        <div className="p-4">
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Components
          </h3>
          <motion.div
            className="space-y-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {components.map((component) => (
              <motion.div key={component.id} variants={staggerItem}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left font-normal hover:bg-accent",
                    activeComponent === component.id &&
                      "bg-accent text-accent-foreground font-medium"
                  )}
                  onClick={() => onComponentClick(component.id)}
                >
                  {component.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ScrollArea>
    </div>
  );
}
