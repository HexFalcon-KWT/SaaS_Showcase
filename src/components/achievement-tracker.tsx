"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useEasterEggs, EASTER_EGGS } from "@/hooks/use-easter-eggs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Trophy, Lock, Check } from "lucide-react";

export function AchievementTracker() {
  const { foundCount, totalCount, foundEggs, lastFound, resetEasterEggs, isUnlocked } = useEasterEggs();
  const [isOpen, setIsOpen] = useState(false);

  const progress = (foundCount / totalCount) * 100;
  const eggName = lastFound ? EASTER_EGGS.find(e => e.id === lastFound)?.name : null;

  return (
    <>
      {/* Floating Badge */}
      {/* Announcement for screen readers */}
      {lastFound && eggName && (
        <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          Achievement unlocked: {eggName}
        </div>
      )}

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="relative h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all"
          aria-label={`Achievements: ${foundCount} of ${totalCount} found. Click to view details.`}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            {lastFound ? (
              <motion.div
                key="celebrating"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🎉
              </motion.div>
            ) : (
              <motion.div
                key="trophy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center"
              >
                <Trophy className="h-6 w-6" />
                <span className="text-xs font-bold">{foundCount}/{totalCount}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Pulse animation when new achievement */}
        <AnimatePresence>
          {lastFound && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 -z-10"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Achievements Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-6 bottom-24 z-50 w-96 max-h-[600px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-label="Achievements panel"
              aria-modal="false"
            >
              <Card className="shadow-2xl border-2">
                <CardHeader className="relative pb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <CardTitle>Secret Achievements</CardTitle>
                  </div>
                  <CardDescription>
                    Discover hidden interactions throughout the components
                  </CardDescription>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-bold">{foundCount}/{totalCount}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <ScrollArea className="h-[400px] px-6">
                    <div className="space-y-3 py-4">
                      {EASTER_EGGS.map((egg) => {
                        const unlocked = isUnlocked(egg.id);
                        const isNew = lastFound === egg.id;

                        return (
                          <motion.div
                            key={egg.id}
                            initial={false}
                            animate={{
                              scale: isNew ? [1, 1.05, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              unlocked
                                ? "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-300 dark:border-purple-700"
                                : "bg-muted/30 border-muted"
                            } ${isNew ? "ring-2 ring-yellow-400" : ""}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`mt-0.5 ${unlocked ? "text-green-500" : "text-muted-foreground"}`}>
                                {unlocked ? (
                                  <Check className="h-5 w-5" />
                                ) : (
                                  <Lock className="h-5 w-5" />
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className={`font-medium ${unlocked ? "" : "text-muted-foreground"}`}>
                                    {unlocked ? egg.name : "???"}
                                  </h4>
                                  {isNew && (
                                    <Badge variant="default" className="text-xs">NEW!</Badge>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {unlocked ? egg.hint : "Locked - Keep exploring!"}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </ScrollArea>

                  {/* Reset Button */}
                  {foundCount > 0 && (
                    <div className="p-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (confirm("Reset all achievements? This cannot be undone!")) {
                            resetEasterEggs();
                          }
                        }}
                        className="w-full"
                      >
                        Reset All Achievements
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
