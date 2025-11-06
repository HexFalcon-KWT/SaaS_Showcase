"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ComponentSidebar } from "@/components/component-sidebar";
import { DemoContainer } from "@/components/demo-container";
import { ConfettiEffect } from "@/components/confetti-effect";
import { AchievementTracker } from "@/components/achievement-tracker";
import { useEasterEggs } from "@/hooks/use-easter-eggs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Loader2, ChevronRight, Terminal, AlertCircle, Info, Home, Settings, User, ChevronsUpDown, Check, X, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Menu, MoreVertical } from "lucide-react";
import { Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const componentsByCategory = {
  Input: [
    { name: "Button", id: "button" },
    { name: "Checkbox", id: "checkbox" },
    { name: "Input", id: "input" },
    { name: "Label", id: "label" },
    { name: "Radio Group", id: "radio-group" },
    { name: "Select", id: "select" },
    { name: "Slider", id: "slider" },
    { name: "Switch", id: "switch" },
    { name: "Textarea", id: "textarea" },
    { name: "Toggle", id: "toggle" },
    { name: "Toggle Group", id: "toggle-group" },
  ],
  Display: [
    { name: "Avatar", id: "avatar" },
    { name: "Badge", id: "badge" },
    { name: "Card", id: "card" },
  ],
  Layout: [
    { name: "Accordion", id: "accordion" },
    { name: "Aspect Ratio", id: "aspect-ratio" },
    { name: "Collapsible", id: "collapsible" },
    { name: "Scroll Area", id: "scroll-area" },
    { name: "Separator", id: "separator" },
    { name: "Tabs", id: "tabs" },
  ],
  Overlay: [
    { name: "Alert Dialog", id: "alert-dialog" },
    { name: "Dialog", id: "dialog" },
    { name: "Dropdown Menu", id: "dropdown-menu" },
    { name: "Popover", id: "popover" },
    { name: "Sheet", id: "sheet" },
    { name: "Tooltip", id: "tooltip" },
  ],
  Navigation: [
    { name: "Breadcrumb", id: "breadcrumb" },
  ],
  Feedback: [
    { name: "Alert", id: "alert" },
    { name: "Progress", id: "progress" },
    { name: "Skeleton", id: "skeleton" },
    { name: "Spinner", id: "spinner" },
  ],
  Data: [
    { name: "Table", id: "table" },
  ],
};

const categories = ["Input", "Display", "Layout", "Overlay", "Navigation", "Feedback", "Data"];

export default function ComponentsPage() {
  const [activeTab, setActiveTab] = useState("Input");
  const [activeComponent, setActiveComponent] = useState("");
  const [sliderValue, setSliderValue] = useState([50]);
  const componentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Easter Egg System
  const { unlockEasterEgg } = useEasterEggs();
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  const [confettiColors, setConfettiColors] = useState(["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]);

  // Easter egg trackers
  const [buttonDestructiveClicks, setButtonDestructiveClicks] = useState(0);
  const [badgeDestructiveClicks, setBadgeDestructiveClicks] = useState(0);
  const [checkboxToggles, setCheckboxToggles] = useState(0);
  const [switchToggles, setSwitchToggles] = useState(0);
  const [toggleSequence, setToggleSequence] = useState<string[]>([]);
  const [tableRowClicks, setTableRowClicks] = useState(0);
  const [tableLastClickTime, setTableLastClickTime] = useState(0);
  const [selectSameCount, setSelectSameCount] = useState(0);
  const [lastSelectValue, setLastSelectValue] = useState("");
  const [radioSelections, setRadioSelections] = useState<Set<string>>(new Set());
  const [dialogToggles, setDialogToggles] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tooltipHoverStart, setTooltipHoverStart] = useState<number | null>(null);
  const [breadcrumbSequence, setBreadcrumbSequence] = useState<string[]>([]);
  const [inputRainbow, setInputRainbow] = useState(false);
  const [inputRainbowUnlocked, setInputRainbowUnlocked] = useState(false);
  const [textareaDisco, setTextareaDisco] = useState(false);
  const [textareaDiscoUnlocked, setTextareaDiscoUnlocked] = useState(false);
  const [cardTitleClicks, setCardTitleClicks] = useState(0);
  const [cardInverted, setCardInverted] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [checkboxSpinning, setCheckboxSpinning] = useState(false);

  const handleComponentClick = (id: string) => {
    setActiveComponent(id);
    componentRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const activeComponents = componentsByCategory[activeTab as keyof typeof componentsByCategory] || [];

  // Easter Egg Handlers
  const triggerConfetti = (colors?: string[]) => {
    if (colors) setConfettiColors(colors);
    setConfettiTrigger(true);
  };

  const handleDestructiveButtonClick = () => {
    const newCount = buttonDestructiveClicks + 1;
    setButtonDestructiveClicks(newCount);
    if (newCount === 3) {
      unlockEasterEgg("destructive-button");
      triggerConfetti(["#ff0000", "#ff4444", "#cc0000"]);
      toast("💥 Triple Trouble Unlocked!", { description: "You found the destructive secret!" });
      setButtonDestructiveClicks(0);
    }
  };

  const handleBadgeDestructiveClick = () => {
    const newCount = badgeDestructiveClicks + 1;
    setBadgeDestructiveClicks(newCount);
    if (newCount === 2) {
      unlockEasterEgg("destructive-badge");
      triggerConfetti(["#ff00ff", "#ff66ff", "#cc00cc"]);
      toast("🏷️ Badge Bash Unlocked!", { description: "Double tap master!" });
      setBadgeDestructiveClicks(0);
    }
  };

  const handleCheckboxChange = () => {
    const newCount = checkboxToggles + 1;
    setCheckboxToggles(newCount);
    if (newCount >= 5) {
      unlockEasterEgg("checkbox-spinner");
      setCheckboxSpinning(true);
      toast("🌀 Indecision Unlocked!", { description: "Can't make up your mind?" });
      setTimeout(() => {
        setCheckboxSpinning(false);
        setCheckboxToggles(0);
      }, 2000);
    }
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    if (value[0] === 69) {
      unlockEasterEgg("slider-nice");
      toast("😏 Nice!", { description: "You found the nice number!" });
    }
  };

  const handleSwitchToggle = () => {
    const newCount = switchToggles + 1;
    setSwitchToggles(newCount);
    if (newCount === 6) {
      unlockEasterEgg("switch-flipper");
      toast("⚡ Flip Flop Unlocked!", { description: "On, off, on, off, on, off!" });
      setSwitchToggles(0);
    }
  };

  const handleToggleGroupChange = (value: string) => {
    const newSequence = [...toggleSequence, value];
    setToggleSequence(newSequence);
    if (newSequence.length === 3 && newSequence.join("") === "leftcenterright") {
      unlockEasterEgg("toggle-sequence");
      triggerConfetti();
      toast("🎯 Perfect Alignment Unlocked!", { description: "You aligned them all!" });
      setToggleSequence([]);
    }
    if (newSequence.length > 3) {
      setToggleSequence([value]);
    }
  };

  const handleTableRowClick = () => {
    const now = Date.now();
    if (now - tableLastClickTime < 1000) {
      const newCount = tableRowClicks + 1;
      setTableRowClicks(newCount);
      if (newCount === 3) {
        unlockEasterEgg("table-clicker");
        triggerConfetti(["#4444ff", "#66ff66", "#ffaa00"]);
        toast("📊 Data Dash Unlocked!", { description: "Fast clicker detected!" });
        setTableRowClicks(0);
      }
    } else {
      setTableRowClicks(1);
    }
    setTableLastClickTime(now);
  };

  const handleSelectChange = (value: string) => {
    if (value === lastSelectValue) {
      const newCount = selectSameCount + 1;
      setSelectSameCount(newCount);
      if (newCount === 3) {
        unlockEasterEgg("select-stubborn");
        toast("🔄 Stubborn Choice Unlocked!", { description: "Really sure about that choice!" });
        setSelectSameCount(0);
      }
    } else {
      setSelectSameCount(1);
      setLastSelectValue(value);
    }
  };

  const handleRadioChange = (value: string) => {
    const newSelections = new Set(radioSelections);
    newSelections.add(value);
    setRadioSelections(newSelections);
    if (newSelections.size === 3) {
      unlockEasterEgg("radio-indecisive");
      toast("🤔 All The Options Unlocked!", { description: "You're very indecisive!" });
    }
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      const newCount = dialogToggles + 1;
      setDialogToggles(newCount);
      if (newCount === 5) {
        unlockEasterEgg("dialog-spam");
        toast("🚪 Dialog Drama Unlocked!", { description: "Make up your mind! 😅" });
        setDialogToggles(0);
      }
    }
  };

  const handleAlertLongPress = () => {
    const timer = setTimeout(() => {
      unlockEasterEgg("alert-patience");
      toast("✅ Everything's Fine Unlocked!", { description: "Everything's actually fine! 😊" });
    }, 3000);
    setLongPressTimer(timer);
  };

  const handleAlertLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const handleAvatarLongPress = () => {
    const timer = setTimeout(() => {
      unlockEasterEgg("large-avatar");
      triggerConfetti();
      toast("👤 Patient Press Unlocked!", { description: "You're patient!" });
    }, 2000);
    setLongPressTimer(timer);
  };

  const handleInputChange = (value: string) => {
    const hasRainbow = value.toLowerCase().includes("rainbow");
    setInputRainbow(hasRainbow);

    if (hasRainbow && !inputRainbowUnlocked) {
      setInputRainbowUnlocked(true);
      unlockEasterEgg("rainbow-input");
      toast("🌈 Color Me Impressed Unlocked!", {
        description: "Rainbow border animation activated!"
      });
    }
  };

  const handleTextareaChange = (value: string) => {
    if (value.toLowerCase().includes("disco") && !textareaDiscoUnlocked) {
      setTextareaDiscoUnlocked(true);
      setTextareaDisco(true);
      unlockEasterEgg("disco-textarea");
      toast("🪩 Party Mode Unlocked!", { description: "Let's disco!" });
      setTimeout(() => setTextareaDisco(false), 3000);
    }
  };

  const handleCardTitleClick = () => {
    const newCount = cardTitleClicks + 1;
    setCardTitleClicks(newCount);
    if (newCount === 3) {
      unlockEasterEgg("card-inverter");
      setCardInverted(!cardInverted);
      toast("🔄 Perspective Shift Unlocked!", { description: "Card inverted!" });
      setCardTitleClicks(0);
      setTimeout(() => setCardInverted(false), 3000);
    }
  };

  const handleBreadcrumbClick = (item: string) => {
    const newSequence = [...breadcrumbSequence, item];
    setBreadcrumbSequence(newSequence);
    if (newSequence.length >= 4) {
      const last4 = newSequence.slice(-4);
      if (last4.join("-") === "home-components-home-components") {
        unlockEasterEgg("breadcrumb-lost");
        toast("🗺️ Navigation Confusion Unlocked!", { description: "Lost? 😅" });
        setBreadcrumbSequence([]);
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="font-medium">Shadcn/ui Components</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              50+ Premium <span className="gradient-text">React Components</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mx-auto max-w-2xl mb-8 text-lg text-muted-foreground"
            >
              Beautifully designed, accessible components built with Radix UI and Tailwind CSS.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Sidebar + Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Input" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="flex gap-6">
                  <ComponentSidebar
                    components={componentsByCategory[category as keyof typeof componentsByCategory]}
                    activeComponent={activeComponent}
                    onComponentClick={handleComponentClick}
                  />

                  <div className="flex-1 space-y-12">
                    {/* INPUT COMPONENTS */}
                    {category === "Input" && (
                      <>
                        {/* Button with destructive easter egg */}
                        <div id="button" ref={(el) => { componentRefs.current["button"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Button ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a button or a component that looks like a button.
                            </p>
                          </div>

                          <DemoContainer title="Variants" description="All available button variants">
                            <div className="flex flex-wrap gap-4">
                              <Button>Default</Button>
                              <Button variant="secondary">Secondary</Button>
                              <Button
                                variant="destructive"
                                onClick={handleDestructiveButtonClick}
                                className="cursor-game"
                              >
                                Destructive
                              </Button>
                              <Button variant="outline">Outline</Button>
                              <Button variant="ghost">Ghost</Button>
                              <Button variant="link">Link</Button>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Sizes" description="Different button sizes">
                            <div className="flex flex-wrap items-center gap-4">
                              <Button size="sm">Small</Button>
                              <Button size="default">Default</Button>
                              <Button size="lg">Large</Button>
                              <Button size="icon">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Icons" description="Buttons with icons">
                            <div className="flex flex-wrap gap-4">
                              <Button>
                                <Mail className="mr-2 h-4 w-4" /> Login with Email
                              </Button>
                              <Button variant="outline">
                                <ChevronRight className="mr-2 h-4 w-4" /> Continue
                              </Button>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Loading State" description="Button with loading spinner">
                            <Button disabled>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Please wait
                            </Button>
                          </DemoContainer>
                        </div>

                        {/* Checkbox with spinning easter egg */}
                        <div id="checkbox" ref={(el) => { componentRefs.current["checkbox"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Checkbox ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A control that allows the user to toggle between checked and not checked.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic checkbox">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="terms" />
                              <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Accept terms and conditions
                              </label>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Text" description="Checkbox with label">
                            <motion.div
                              className="space-y-4 cursor-game"
                              animate={checkboxSpinning ? { rotate: 360 } : {}}
                              transition={{ duration: 1, ease: "easeInOut" }}
                            >
                              <div className="flex items-center space-x-2">
                                <Checkbox id="option1" defaultChecked onCheckedChange={handleCheckboxChange} />
                                <label htmlFor="option1" className="text-sm font-medium">Option 1</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="option2" onCheckedChange={handleCheckboxChange} />
                                <label htmlFor="option2" className="text-sm font-medium">Option 2</label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="option3" disabled />
                                <label htmlFor="option3" className="text-sm font-medium">Disabled</label>
                              </div>
                            </motion.div>
                          </DemoContainer>
                        </div>

                        {/* Input with rainbow easter egg */}
                        <div id="input" ref={(el) => { componentRefs.current["input"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Input ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a form input field or a component that looks like an input field.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic input field">
                            <div className="w-full max-w-sm space-y-2">
                              <Input type="email" placeholder="Email" />
                              <Input
                                type="password"
                                placeholder="Try typing 'rainbow'"
                                onChange={(e) => handleInputChange(e.target.value)}
                                className={inputRainbow ? "rainbow-border cursor-game" : "cursor-game"}
                              />
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Label" description="Input with label">
                            <div className="w-full max-w-sm space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="m@example.com" />
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Disabled" description="Disabled input">
                            <Input disabled placeholder="Disabled input" className="max-w-sm" />
                          </DemoContainer>
                        </div>

                        {/* Label */}
                        <div id="label" ref={(el) => { componentRefs.current["label"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Label</h2>
                            <p className="text-lg text-muted-foreground">
                              Renders an accessible label associated with controls.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic label">
                            <div className="w-full max-w-sm space-y-2">
                              <Label htmlFor="name">Your name</Label>
                              <Input id="name" placeholder="Enter your name" />
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Radio Group with easter egg */}
                        <div id="radio-group" ref={(el) => { componentRefs.current["radio-group"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Radio Group ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic radio group">
                            <RadioGroup defaultValue="option-one" onValueChange={handleRadioChange} className="space-y-1 cursor-game">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Option One</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Option Two</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-three" id="option-three" />
                                <Label htmlFor="option-three">Option Three</Label>
                              </div>
                            </RadioGroup>
                          </DemoContainer>
                        </div>

                        {/* Select with easter egg */}
                        <div id="select" ref={(el) => { componentRefs.current["select"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Select ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a list of options for the user to pick from—triggered by a button.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic select">
                            <Select onValueChange={handleSelectChange}>
                              <SelectTrigger className="w-[180px] cursor-game">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                                <SelectItem value="grape">Grape</SelectItem>
                              </SelectContent>
                            </Select>
                          </DemoContainer>

                          <DemoContainer title="With Label" description="Select with label">
                            <div className="w-full max-w-sm space-y-2">
                              <Label>Select a timezone</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Slider with easter egg */}
                        <div id="slider" ref={(el) => { componentRefs.current["slider"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Slider ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              An input where the user selects a value from within a given range.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic slider">
                            <div className="w-full max-w-sm space-y-4 cursor-game">
                              <Slider defaultValue={[50]} max={100} step={1} />
                              <div className="text-sm text-muted-foreground">Value: {sliderValue[0]}</div>
                              <Slider
                                value={sliderValue}
                                onValueChange={handleSliderChange}
                                max={100}
                                step={1}
                              />
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Switch with easter egg */}
                        <div id="switch" ref={(el) => { componentRefs.current["switch"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Switch ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A control that allows the user to toggle between checked and not checked.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic switch">
                            <div className="flex items-center space-x-2">
                              <Switch id="airplane-mode" onCheckedChange={handleSwitchToggle} className="cursor-game" />
                              <Label htmlFor="airplane-mode">Airplane Mode</Label>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Description" description="Switch with label and description">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                  <Label>Marketing emails</Label>
                                  <div className="text-sm text-muted-foreground">
                                    Receive emails about new products and features
                                  </div>
                                </div>
                                <Switch />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                  <Label>Security emails</Label>
                                  <div className="text-sm text-muted-foreground">
                                    Receive emails about your account security
                                  </div>
                                </div>
                                <Switch defaultChecked />
                              </div>
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Textarea with easter egg */}
                        <div id="textarea" ref={(el) => { componentRefs.current["textarea"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Textarea ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a form textarea or a component that looks like a textarea.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic textarea">
                            <Textarea
                              placeholder="Try typing 'disco'"
                              className={`max-w-sm cursor-game ${textareaDisco ? "disco-bg" : ""}`}
                              onChange={(e) => handleTextareaChange(e.target.value)}
                            />
                          </DemoContainer>

                          <DemoContainer title="With Label" description="Textarea with label">
                            <div className="w-full max-w-sm space-y-2">
                              <Label htmlFor="message">Your message</Label>
                              <Textarea id="message" placeholder="Type your message here." />
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Disabled" description="Disabled textarea">
                            <Textarea disabled placeholder="Disabled textarea" className="max-w-sm" />
                          </DemoContainer>
                        </div>

                        {/* Toggle */}
                        <div id="toggle" ref={(el) => { componentRefs.current["toggle"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Toggle</h2>
                            <p className="text-lg text-muted-foreground">
                              A two-state button that can be either on or off.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic toggle">
                            <Toggle aria-label="Toggle italic">
                              <Bold className="h-4 w-4" />
                            </Toggle>
                          </DemoContainer>

                          <DemoContainer title="Variants" description="Toggle variants">
                            <div className="flex gap-2">
                              <Toggle variant="default" aria-label="Toggle bold">
                                <Bold className="h-4 w-4" />
                              </Toggle>
                              <Toggle variant="outline" aria-label="Toggle italic">
                                <Italic className="h-4 w-4" />
                              </Toggle>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Text" description="Toggle with text">
                            <Toggle aria-label="Toggle italic">
                              <Italic className="mr-2 h-4 w-4" />
                              Italic
                            </Toggle>
                          </DemoContainer>
                        </div>

                        {/* Toggle Group with easter egg */}
                        <div id="toggle-group" ref={(el) => { componentRefs.current["toggle-group"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Toggle Group ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A set of two-state buttons that can be toggled on or off.
                            </p>
                          </div>

                          <DemoContainer title="Single" description="Single selection toggle group">
                            <ToggleGroup type="single">
                              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                <Bold className="h-4 w-4" />
                              </ToggleGroupItem>
                              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                <Italic className="h-4 w-4" />
                              </ToggleGroupItem>
                              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                                <Underline className="h-4 w-4" />
                              </ToggleGroupItem>
                            </ToggleGroup>
                          </DemoContainer>

                          <DemoContainer title="Multiple" description="Multiple selection toggle group">
                            <ToggleGroup type="single" onValueChange={handleToggleGroupChange} className="cursor-game">
                              <ToggleGroupItem value="left" aria-label="Align left">
                                <AlignLeft className="h-4 w-4" />
                              </ToggleGroupItem>
                              <ToggleGroupItem value="center" aria-label="Align center">
                                <AlignCenter className="h-4 w-4" />
                              </ToggleGroupItem>
                              <ToggleGroupItem value="right" aria-label="Align right">
                                <AlignRight className="h-4 w-4" />
                              </ToggleGroupItem>
                            </ToggleGroup>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* DISPLAY COMPONENTS */}
                    {category === "Display" && (
                      <>
                        {/* Avatar with long-press easter egg */}
                        <div id="avatar" ref={(el) => { componentRefs.current["avatar"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Avatar ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              An image element with a fallback for representing the user.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic avatar">
                            <div className="flex gap-4">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Sizes" description="Different avatar sizes">
                            <div className="flex gap-4 items-center">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="text-xs">SM</AvatarFallback>
                              </Avatar>
                              <Avatar>
                                <AvatarFallback>MD</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="h-16 w-16 cursor-game"
                                onMouseDown={handleAvatarLongPress}
                                onMouseUp={handleAlertLongPressEnd}
                                onMouseLeave={handleAlertLongPressEnd}
                                onTouchStart={handleAvatarLongPress}
                                onTouchEnd={handleAlertLongPressEnd}
                              >
                                <AvatarFallback className="text-lg">LG</AvatarFallback>
                              </Avatar>
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Badge with easter egg */}
                        <div id="badge" ref={(el) => { componentRefs.current["badge"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Badge ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a badge or a component that looks like a badge.
                            </p>
                          </div>

                          <DemoContainer title="Variants" description="All badge variants">
                            <div className="flex flex-wrap gap-4">
                              <Badge>Default</Badge>
                              <Badge variant="secondary">Secondary</Badge>
                              <Badge
                                variant="destructive"
                                onClick={handleBadgeDestructiveClick}
                                className="cursor-game"
                              >
                                Destructive
                              </Badge>
                              <Badge variant="outline">Outline</Badge>
                            </div>
                          </DemoContainer>
                        </div>

                        {/* Card with easter egg */}
                        <div id="card" ref={(el) => { componentRefs.current["card"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Card ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a card with header, content, and footer.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic card">
                            <Card className={`w-full max-w-md ${cardInverted ? "bg-foreground text-background" : ""} transition-colors duration-500`}>
                              <CardHeader>
                                <CardTitle
                                  onClick={handleCardTitleClick}
                                  className="cursor-game"
                                >
                                  Card Title
                                </CardTitle>
                                <CardDescription className={cardInverted ? "text-background/70" : ""}>
                                  Card Description
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p>Card content goes here.</p>
                              </CardContent>
                            </Card>
                          </DemoContainer>

                          <DemoContainer title="With Footer" description="Card with footer">
                            <Card className="w-full max-w-md">
                              <CardHeader>
                                <CardTitle>Create Account</CardTitle>
                                <CardDescription>Enter your details to create an account</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Name</Label>
                                  <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                              </CardContent>
                              <CardFooter>
                                <Button className="w-full">Create Account</Button>
                              </CardFooter>
                            </Card>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* LAYOUT COMPONENTS */}
                    {category === "Layout" && (
                      <>
                        <div id="accordion" ref={(el) => { componentRefs.current["accordion"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Accordion</h2>
                            <p className="text-lg text-muted-foreground">
                              A vertically stacked set of interactive headings that reveal content.
                            </p>
                          </div>

                          <DemoContainer title="Single Item" description="Only one item can be opened at a time">
                            <div className="w-full max-w-2xl">
                              <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                                  <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Multiple Items" description="Multiple items can be opened at the same time">
                            <div className="w-full max-w-2xl">
                              <Accordion type="multiple">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>What is Shadcn UI?</AccordionTrigger>
                                  <AccordionContent>
                                    Shadcn UI is a collection of re-usable components built with Radix UI and Tailwind CSS.
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                  <AccordionTrigger>How do I install it?</AccordionTrigger>
                                  <AccordionContent>
                                    You can install components using the CLI: npx shadcn@latest add accordion
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </DemoContainer>
                        </div>

                        <div id="aspect-ratio" ref={(el) => { componentRefs.current["aspect-ratio"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Aspect Ratio</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays content within a desired ratio.
                            </p>
                          </div>

                          <DemoContainer title="16/9 Ratio" description="Common video aspect ratio">
                            <div className="w-full max-w-md">
                              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                                <div className="text-muted-foreground">16:9 Aspect Ratio</div>
                              </AspectRatio>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="4/3 Ratio" description="Classic aspect ratio">
                            <div className="w-full max-w-md">
                              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
                                <div className="text-muted-foreground">4:3 Aspect Ratio</div>
                              </AspectRatio>
                            </div>
                          </DemoContainer>
                        </div>

                        <div id="collapsible" ref={(el) => { componentRefs.current["collapsible"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Collapsible</h2>
                            <p className="text-lg text-muted-foreground">
                              An interactive component which expands/collapses a panel.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic collapsible">
                            <Collapsible className="w-full max-w-md space-y-2">
                              <CollapsibleTrigger asChild>
                                <Button variant="outline" className="w-full justify-between">
                                  Can I use this in my project?
                                  <ChevronsUpDown className="h-4 w-4" />
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="space-y-2">
                                <div className="rounded-md border px-4 py-3 text-sm">
                                  Yes. Free to use for personal and commercial projects. No attribution required.
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          </DemoContainer>
                        </div>

                        <div id="scroll-area" ref={(el) => { componentRefs.current["scroll-area"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Scroll Area</h2>
                            <p className="text-lg text-muted-foreground">
                              Augments native scroll functionality for custom, cross-browser styling.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic scroll area">
                            <ScrollArea className="h-72 w-full max-w-md rounded-md border p-4">
                              <div className="space-y-4">
                                {Array.from({ length: 20 }).map((_, i) => (
                                  <div key={i} className="text-sm">
                                    Item {i + 1} - This is scrollable content
                                  </div>
                                ))}
                              </div>
                            </ScrollArea>
                          </DemoContainer>
                        </div>

                        <div id="separator" ref={(el) => { componentRefs.current["separator"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Separator</h2>
                            <p className="text-lg text-muted-foreground">
                              Visually or semantically separates content.
                            </p>
                          </div>

                          <DemoContainer title="Horizontal" description="Horizontal separator">
                            <div className="w-full max-w-md space-y-4">
                              <div>Section 1</div>
                              <Separator />
                              <div>Section 2</div>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Vertical" description="Vertical separator">
                            <div className="flex h-12 items-center gap-4">
                              <div>Item 1</div>
                              <Separator orientation="vertical" />
                              <div>Item 2</div>
                              <Separator orientation="vertical" />
                              <div>Item 3</div>
                            </div>
                          </DemoContainer>
                        </div>

                        <div id="tabs" ref={(el) => { componentRefs.current["tabs"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Tabs</h2>
                            <p className="text-lg text-muted-foreground">
                              A set of layered sections of content—known as tab panels—that are displayed one at a time.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic tabs">
                            <Tabs defaultValue="account" className="w-full max-w-md">
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                              </TabsList>
                              <TabsContent value="account" className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="username">Username</Label>
                                  <Input id="username" defaultValue="@johndoe" />
                                </div>
                              </TabsContent>
                              <TabsContent value="password" className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="current">Current password</Label>
                                  <Input id="current" type="password" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="new">New password</Label>
                                  <Input id="new" type="password" />
                                </div>
                              </TabsContent>
                            </Tabs>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* OVERLAY COMPONENTS */}
                    {category === "Overlay" && (
                      <>
                        <div id="alert-dialog" ref={(el) => { componentRefs.current["alert-dialog"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Alert Dialog</h2>
                            <p className="text-lg text-muted-foreground">
                              A modal dialog that interrupts the user with important content and expects a response.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic alert dialog">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive">Delete Account</Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </DemoContainer>
                        </div>

                        <div id="dialog" ref={(el) => { componentRefs.current["dialog"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Dialog ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A window overlaid on either the primary window or another dialog window.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic dialog">
                            <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="cursor-game">Edit Profile</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit profile</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="John Doe" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="@johndoe" />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="submit">Save changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </DemoContainer>
                        </div>

                        <div id="dropdown-menu" ref={(el) => { componentRefs.current["dropdown-menu"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Dropdown Menu</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a menu to the user—such as a set of actions or functions—triggered by a button.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic dropdown menu">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                  <Menu className="mr-2 h-4 w-4" />
                                  Open Menu
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </DemoContainer>
                        </div>

                        <div id="popover" ref={(el) => { componentRefs.current["popover"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Popover</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays rich content in a portal, triggered by a button.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic popover">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline">Open Popover</Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-2">
                                  <h4 className="font-medium leading-none">Dimensions</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Set the dimensions for the layer.
                                  </p>
                                  <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                      <Label htmlFor="width">Width</Label>
                                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                      <Label htmlFor="height">Height</Label>
                                      <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </DemoContainer>
                        </div>

                        <div id="sheet" ref={(el) => { componentRefs.current["sheet"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Sheet</h2>
                            <p className="text-lg text-muted-foreground">
                              Extends the Dialog component to display content that complements the main content of the screen.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic sheet">
                            <Sheet>
                              <SheetTrigger asChild>
                                <Button variant="outline">Open Sheet</Button>
                              </SheetTrigger>
                              <SheetContent>
                                <SheetHeader>
                                  <SheetTitle>Edit profile</SheetTitle>
                                  <SheetDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                  </SheetDescription>
                                </SheetHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="John Doe" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="@johndoe" />
                                  </div>
                                </div>
                                <div className="flex justify-end">
                                  <Button type="submit">Save changes</Button>
                                </div>
                              </SheetContent>
                            </Sheet>
                          </DemoContainer>
                        </div>

                        <div id="tooltip" ref={(el) => { componentRefs.current["tooltip"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Tooltip ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic tooltip">
                            <TooltipProvider>
                              <Tooltip
                                onOpenChange={(open) => {
                                  if (open) {
                                    setTooltipHoverStart(Date.now());
                                  } else {
                                    if (tooltipHoverStart && Date.now() - tooltipHoverStart > 10000) {
                                      unlockEasterEgg("tooltip-reader");
                                      toast("📖 Bookworm Unlocked!", { description: "Still reading? You're thorough!" });
                                    }
                                    setTooltipHoverStart(null);
                                  }
                                }}
                              >
                                <TooltipTrigger asChild>
                                  <Button variant="outline" className="cursor-game">Hover me</Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Add to library</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* NAVIGATION COMPONENTS */}
                    {category === "Navigation" && (
                      <>
                        <div id="breadcrumb" ref={(el) => { componentRefs.current["breadcrumb"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Breadcrumb ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays the path to the current resource using a hierarchy of links.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic breadcrumb">
                            <Breadcrumb>
                              <BreadcrumbList>
                                <BreadcrumbItem>
                                  <BreadcrumbLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleBreadcrumbClick("home");
                                    }}
                                    className="cursor-game"
                                  >
                                    <Home className="h-4 w-4" />
                                  </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                  <BreadcrumbLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleBreadcrumbClick("components");
                                    }}
                                    className="cursor-game"
                                  >
                                    Components
                                  </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                              </BreadcrumbList>
                            </Breadcrumb>
                          </DemoContainer>

                          <DemoContainer title="With Text" description="Breadcrumb with text links">
                            <Breadcrumb>
                              <BreadcrumbList>
                                <BreadcrumbItem>
                                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                  <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                  <BreadcrumbPage>Components</BreadcrumbPage>
                                </BreadcrumbItem>
                              </BreadcrumbList>
                            </Breadcrumb>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* FEEDBACK COMPONENTS */}
                    {category === "Feedback" && (
                      <>
                        <div id="alert" ref={(el) => { componentRefs.current["alert"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Alert ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a callout for user attention.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic alert">
                            <div className="w-full max-w-2xl space-y-4">
                              <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                  You can add components to your app using the CLI.
                                </AlertDescription>
                              </Alert>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Destructive" description="Destructive alert">
                            <div className="w-full max-w-2xl">
                              <Alert
                                variant="destructive"
                                onMouseDown={handleAlertLongPress}
                                onMouseUp={handleAlertLongPressEnd}
                                onMouseLeave={handleAlertLongPressEnd}
                                onTouchStart={handleAlertLongPress}
                                onTouchEnd={handleAlertLongPressEnd}
                                className="cursor-game"
                              >
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                  Your session has expired. Please log in again.
                                </AlertDescription>
                              </Alert>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Info" description="Info alert">
                            <div className="w-full max-w-2xl">
                              <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Information</AlertTitle>
                                <AlertDescription>
                                  This feature will be available soon.
                                </AlertDescription>
                              </Alert>
                            </div>
                          </DemoContainer>
                        </div>

                        <div id="progress" ref={(el) => { componentRefs.current["progress"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Progress ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays an indicator showing the completion progress of a task.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic progress bar">
                            <div className="w-full max-w-md space-y-4">
                              <div>
                                <div className="mb-2 text-sm text-muted-foreground">33%</div>
                                <Progress value={33} />
                              </div>
                              <div>
                                <div className="mb-2 text-sm text-muted-foreground">66%</div>
                                <Progress value={66} />
                              </div>
                              <div
                                onClick={() => {
                                  unlockEasterEgg("progress-complete");
                                  toast("🏆 Achievement Unlocked!", { description: "You made it to 100%!" });
                                }}
                                className="cursor-game"
                              >
                                <div className="mb-2 text-sm text-muted-foreground">100%</div>
                                <Progress value={100} />
                              </div>
                            </div>
                          </DemoContainer>
                        </div>

                        <div id="skeleton" ref={(el) => { componentRefs.current["skeleton"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Skeleton</h2>
                            <p className="text-lg text-muted-foreground">
                              Use to show a placeholder while content is loading.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic skeleton">
                            <div className="w-full max-w-md space-y-4">
                              <Skeleton className="h-12 w-full" />
                              <Skeleton className="h-12 w-full" />
                              <Skeleton className="h-12 w-3/4" />
                            </div>
                          </DemoContainer>

                          <DemoContainer title="Card" description="Skeleton card">
                            <Card className="w-full max-w-md">
                              <CardHeader>
                                <Skeleton className="h-8 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2" />
                              </CardHeader>
                              <CardContent className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                              </CardContent>
                            </Card>
                          </DemoContainer>
                        </div>

                        <div id="spinner" ref={(el) => { componentRefs.current["spinner"] = el; }} className="scroll-mt-24">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Spinner</h2>
                            <p className="text-lg text-muted-foreground">
                              Displays a loading spinner.
                            </p>
                          </div>

                          <DemoContainer title="Sizes" description="Different spinner sizes">
                            <div className="flex gap-8 items-center">
                              <div className="flex flex-col items-center gap-2">
                                <Spinner className="h-4 w-4" />
                                <span className="text-xs text-muted-foreground">Small</span>
                              </div>
                              <div className="flex flex-col items-center gap-2">
                                <Spinner className="h-6 w-6" />
                                <span className="text-xs text-muted-foreground">Medium</span>
                              </div>
                              <div className="flex flex-col items-center gap-2">
                                <Spinner className="h-8 w-8" />
                                <span className="text-xs text-muted-foreground">Large</span>
                              </div>
                            </div>
                          </DemoContainer>
                        </div>
                      </>
                    )}

                    {/* DATA COMPONENTS */}
                    {category === "Data" && (
                      <>
                        <div id="table" ref={(el) => { componentRefs.current["table"] = el; }} className="scroll-mt-24 easter-egg-hint">
                          <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-2">Table ⭐</h2>
                            <p className="text-lg text-muted-foreground">
                              A responsive table component.
                            </p>
                          </div>

                          <DemoContainer title="Default" description="Basic table">
                            <div className="w-full">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow onClick={handleTableRowClick} className="cursor-game">
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                  </TableRow>
                                  <TableRow onClick={handleTableRowClick} className="cursor-game">
                                    <TableCell className="font-medium">INV002</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell>PayPal</TableCell>
                                    <TableCell className="text-right">$150.00</TableCell>
                                  </TableRow>
                                  <TableRow onClick={handleTableRowClick} className="cursor-game">
                                    <TableCell className="font-medium">INV003</TableCell>
                                    <TableCell>Unpaid</TableCell>
                                    <TableCell>Bank Transfer</TableCell>
                                    <TableCell className="text-right">$350.00</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </DemoContainer>

                          <DemoContainer title="With Selection" description="Table with checkboxes">
                            <div className="w-full">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-12">
                                      <Checkbox />
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Email</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      <Checkbox />
                                    </TableCell>
                                    <TableCell className="font-medium">John Doe</TableCell>
                                    <TableCell>
                                      <Badge>Active</Badge>
                                    </TableCell>
                                    <TableCell>john@example.com</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>
                                      <Checkbox />
                                    </TableCell>
                                    <TableCell className="font-medium">Jane Smith</TableCell>
                                    <TableCell>
                                      <Badge variant="secondary">Inactive</Badge>
                                    </TableCell>
                                    <TableCell>jane@example.com</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </DemoContainer>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <ConfettiEffect
        trigger={confettiTrigger}
        colors={confettiColors}
        onComplete={() => setConfettiTrigger(false)}
      />
      <AchievementTracker />

      <style jsx global>{`
        .easter-egg-hint {
          position: relative;
        }

        .easter-egg-hint::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 20px;
          opacity: 0.1;
          pointer-events: none;
        }

        .cursor-game {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🎮</text></svg>") 16 0, auto;
        }

        .rainbow-border {
          animation: rainbow-border 2s linear infinite;
        }

        @keyframes rainbow-border {
          0% { border-color: red; }
          17% { border-color: orange; }
          33% { border-color: yellow; }
          50% { border-color: green; }
          67% { border-color: blue; }
          83% { border-color: indigo; }
          100% { border-color: violet; }
        }

        .disco-bg {
          animation: disco-flash 0.3s linear infinite;
        }

        @keyframes disco-flash {
          0% { background-color: #ff00ff; }
          25% { background-color: #00ffff; }
          50% { background-color: #ffff00; }
          75% { background-color: #ff00ff; }
          100% { background-color: #00ffff; }
        }
      `}</style>
    </div>
  );
}
