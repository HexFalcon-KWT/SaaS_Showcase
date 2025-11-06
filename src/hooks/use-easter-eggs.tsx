"use client";

import { useState, useEffect, useCallback } from "react";

export const EASTER_EGGS = [
  { id: "destructive-button", name: "Triple Trouble", hint: "Click something dangerous... three times" },
  { id: "large-avatar", name: "Patient Press", hint: "Hold down on something round" },
  { id: "destructive-badge", name: "Badge Bash", hint: "Double tap the danger" },
  { id: "toggle-sequence", name: "Perfect Alignment", hint: "Align them all in order" },
  { id: "table-clicker", name: "Data Dash", hint: "Rapidly select three rows" },
  { id: "checkbox-spinner", name: "Indecision", hint: "Can't make up your mind?" },
  { id: "slider-nice", name: "Nice", hint: "Find the nice number" },
  { id: "switch-flipper", name: "Flip Flop", hint: "On, off, on, off, on, off" },
  { id: "progress-complete", name: "Achievement", hint: "Click when you've made it to 100%" },
  { id: "rainbow-input", name: "Color Me Impressed", hint: "Type a colorful word" },
  { id: "disco-textarea", name: "Party Mode", hint: "Type the word for a dance party" },
  { id: "card-inverter", name: "Perspective Shift", hint: "Triple click a title" },
  { id: "select-stubborn", name: "Stubborn Choice", hint: "Choose the same thing repeatedly" },
  { id: "radio-indecisive", name: "All The Options", hint: "Try every radio button" },
  { id: "dialog-spam", name: "Dialog Drama", hint: "Open and close rapidly" },
  { id: "alert-patience", name: "Everything's Fine", hint: "Hold the error message" },
  { id: "tooltip-reader", name: "Bookworm", hint: "Hover longer than anyone should" },
  { id: "breadcrumb-lost", name: "Navigation Confusion", hint: "Go back and forth rapidly" },
] as const;

export type EasterEggId = typeof EASTER_EGGS[number]["id"];

export function useEasterEggs() {
  const [foundEggs, setFoundEggs] = useState<Set<EasterEggId>>(new Set());
  const [lastFound, setLastFound] = useState<EasterEggId | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("easter-eggs-found");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFoundEggs(new Set(parsed));
      } catch (e) {
        // Failed to parse - ignore and continue with empty set
      }
    }
  }, []);

  // Listen for localStorage changes from other tabs/windows and same-window updates
  useEffect(() => {
    // Cross-tab synchronization
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "easter-eggs-found" && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setFoundEggs(new Set(parsed));
        } catch (error) {
          // Failed to parse - ignore and continue
        }
      }
    };

    // Same-window synchronization
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFoundEggs(new Set(customEvent.detail));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("easterEggsUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("easterEggsUpdated", handleCustomEvent);
    };
  }, []);

  // Save to localStorage whenever found eggs change
  useEffect(() => {
    if (foundEggs.size > 0) {
      localStorage.setItem("easter-eggs-found", JSON.stringify(Array.from(foundEggs)));
    }
  }, [foundEggs]);

  const unlockEasterEgg = useCallback((id: EasterEggId) => {
    setFoundEggs((prev) => {
      if (prev.has(id)) {
        return prev; // Already found
      }
      const newSet = new Set(prev);
      newSet.add(id);
      setLastFound(id);

      // Dispatch custom event for same-window synchronization
      // Defer to next tick to avoid React state update during render
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("easterEggsUpdated", {
            detail: Array.from(newSet),
          })
        );
      }, 0);

      // Clear last found after 3 seconds
      setTimeout(() => setLastFound(null), 3000);

      return newSet;
    });
  }, []);

  const resetEasterEggs = useCallback(() => {
    setFoundEggs(new Set());
    localStorage.removeItem("easter-eggs-found");
  }, []);

  const isUnlocked = useCallback((id: EasterEggId) => {
    return foundEggs.has(id);
  }, [foundEggs]);

  return {
    foundEggs: Array.from(foundEggs),
    foundCount: foundEggs.size,
    totalCount: EASTER_EGGS.length,
    lastFound,
    unlockEasterEgg,
    resetEasterEggs,
    isUnlocked,
    allEggs: EASTER_EGGS,
  };
}
