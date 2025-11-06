import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { AnimatedGradient } from '@/components/backgrounds/animated-gradient'
import { FloatingShapes } from '@/components/backgrounds/floating-shapes'
import { GlassContainer } from '@/components/backgrounds/glass-container'

export default function Demo2() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            CreativeHub
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/demo1" className="hover:text-primary">Demo 1</Link>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button>Start Creating</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-28 overflow-hidden">
        <AnimatedGradient colors={["from-pink-400", "via-purple-500", "to-indigo-500"]} blur="xl" />
        <FloatingShapes count={12} type="mixed" />

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge variant="outline" className="mb-6 text-base px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-purple-500/50 backdrop-blur-sm animate-pulse">
              ✨ Trusted by 100k+ Creators
            </Badge>

            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Create.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                Collaborate.
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Conquer.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              The all-in-one creative workspace where teams design, share, and bring ideas
              to life faster than ever before.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all">
                Try For Free ✨
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 hover:scale-105 transition-all border-2">
                View Showcase
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <Avatar className="border-4 border-background w-14 h-14 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-500 text-white font-bold">JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-background w-14 h-14 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold">SM</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-background w-14 h-14 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white font-bold">KL</AvatarFallback>
                </Avatar>
                <Avatar className="border-4 border-background w-14 h-14 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">+9</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Join 100,000+ creators
                </p>
                <p className="text-sm text-muted-foreground">
                  Already creating magic
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-3xl"></div>
            <GlassContainer className="relative h-[500px] flex flex-col items-center justify-center p-12" blur="xl">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">🎨</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                  Your Canvas Awaits
                </div>
                <p className="text-muted-foreground text-lg">
                  Where creativity meets innovation
                </p>
              </div>
            </GlassContainer>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Creators Love Us</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto mb-2 text-4xl">⚡</div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Work at the speed of thought with our optimized platform
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto mb-2 text-4xl">🤝</div>
                <CardTitle>Team First</CardTitle>
                <CardDescription>
                  Built for seamless collaboration across your entire team
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto mb-2 text-4xl">🎯</div>
                <CardTitle>Simple Yet Powerful</CardTitle>
                <CardDescription>
                  Intuitive design meets professional-grade features
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-none">
              <CardHeader>
                <div className="mx-auto mb-2 text-4xl">🌐</div>
                <CardTitle>Works Everywhere</CardTitle>
                <CardDescription>
                  Access your projects on any device, anywhere, anytime
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative container mx-auto px-4 py-28 overflow-hidden">
        <FloatingShapes count={8} type="mixed" />

        <div className="text-center mb-20 relative z-10">
          <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 border-0 animate-pulse">
            ✨ Features
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
              to Create Magic
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Professional tools designed for modern creative workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-pink-500/30 hover:border-pink-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/20 dark:to-purple-950/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                    🤖
                  </div>
                  <Badge className="bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/50">New</Badge>
                </div>
                <CardTitle className="text-2xl">AI Design Assistant</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Let AI help you brainstorm, generate variations, and refine your designs
                  with natural language prompts. Transform your ideas into reality instantly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  👥
                </div>
                <CardTitle className="text-2xl">Real-Time Collaboration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  See cursor positions, comments, and edits from your team in real-time.
                  No more version conflicts or miscommunication.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-indigo-500/30 hover:border-indigo-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/20">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  🎨
                </div>
                <CardTitle className="text-2xl">Brand Management</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Create and maintain brand consistency with shared libraries, style guides,
                  and automated brand compliance checks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-blue-500/30 hover:border-blue-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  ⏱️
                </div>
                <CardTitle className="text-2xl">Version History</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Never lose work with automatic versioning. Restore any previous version
                  and see exactly what changed and when.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-cyan-50/50 to-teal-50/50 dark:from-cyan-950/20 dark:to-teal-950/20">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  📝
                </div>
                <CardTitle className="text-2xl">Smart Templates</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Start faster with professionally designed templates for every use case.
                  Customize and make them your own in seconds.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <Card className="relative border-2 border-teal-500/30 hover:border-teal-500 transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-teal-50/50 to-green-50/50 dark:from-teal-950/20 dark:to-green-950/20">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  📤
                </div>
                <CardTitle className="text-2xl">Export Anywhere</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Export in any format you need - PNG, SVG, PDF, and more. Optimized
                  for web, print, and everything in between.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-4">From Idea to Launch in Minutes</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Create Your Project</h3>
                  <p className="text-muted-foreground text-lg">
                    Start from scratch or choose from thousands of templates. Set up your workspace
                    and invite your team in seconds.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Design & Collaborate</h3>
                  <p className="text-muted-foreground text-lg">
                    Use our intuitive tools to bring your vision to life. Work together with your
                    team in real-time with live cursors and instant feedback.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Export & Share</h3>
                  <p className="text-muted-foreground text-lg">
                    Export in any format, share with stakeholders, or publish directly to the web.
                    Your work, delivered perfectly every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <Badge className="mb-4">Platform Preview</Badge>
          <h2 className="text-4xl font-bold mb-4">A Workspace Built for Creators</h2>
        </div>
        <Tabs defaultValue="design" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="design">Design Tools</TabsTrigger>
            <TabsTrigger value="collab">Collaboration</TabsTrigger>
            <TabsTrigger value="assets">Asset Library</TabsTrigger>
            <TabsTrigger value="export">Export Options</TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✏️</div>
                <div className="text-xl font-semibold mb-2">Powerful Design Tools</div>
                <div className="text-muted-foreground">Vector editing, typography, effects & more</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="collab" className="mt-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <div className="text-xl font-semibold mb-2">Real-Time Collaboration</div>
                <div className="text-muted-foreground">Work together seamlessly with your team</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="assets" className="mt-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <div className="text-xl font-semibold mb-2">Comprehensive Asset Library</div>
                <div className="text-muted-foreground">Millions of photos, icons, and templates</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="export" className="mt-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📤</div>
                <div className="text-xl font-semibold mb-2">Export to Anything</div>
                <div className="text-muted-foreground">PNG, SVG, PDF, and more formats</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Integration/Compatibility */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Integrations</Badge>
            <h2 className="text-4xl font-bold mb-4">Fits Seamlessly Into Your Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with all the tools you already love and use every day
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {['Slack', 'Notion', 'Figma', 'Dropbox',
                'Google Drive', 'Trello', 'Asana', 'Zapier',
                'Adobe CC', 'Webflow', 'WordPress', 'GitHub'].map((tool) => (
                <Card key={tool} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardTitle className="text-lg">{tool}</CardTitle>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg">View All Integrations →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="text-4xl font-bold mb-4">Plans That Scale With You</h2>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you need more
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for trying out CreativeHub</CardDescription>
              <div className="text-4xl font-bold mt-6">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6" variant="outline">Get Started</Button>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>3 active projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Basic design tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Community support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>5GB storage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative border-primary border-2 shadow-xl scale-105">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="px-6 py-1">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For professionals and small teams</CardDescription>
              <div className="text-4xl font-bold mt-6">$15<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6">Start Free Trial</Button>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Advanced design tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI design assistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>100GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Version history</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Team</CardTitle>
              <CardDescription>For growing organizations</CardDescription>
              <div className="text-4xl font-bold mt-6">$45<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6" variant="outline">Contact Sales</Button>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Brand management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Advanced permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>1TB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials with Accordion */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">Loved by Creators Worldwide</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Creative Director</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                "CreativeHub has transformed how our team works. The real-time collaboration
                features are incredible, and the AI assistant saves us hours every week."
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold">Michael Kim</div>
                    <div className="text-sm text-muted-foreground">Freelance Designer</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                "As a freelancer, I need tools that are powerful yet simple. CreativeHub
                delivers on both fronts. It's become my go-to for all client projects."
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>EP</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold">Emily Parker</div>
                    <div className="text-sm text-muted-foreground">Marketing Manager</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                "The template library alone is worth the subscription. We can create
                professional marketing materials in minutes instead of hours."
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-28">
        <div className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-700 dark:via-purple-700 dark:to-indigo-700">
          <AnimatedGradient
            colors={["from-pink-500", "via-purple-500", "to-indigo-500"]}
            blur="xl"
          />
          <FloatingShapes count={10} type="mixed" />

          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-indigo-900/40 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20"></div>

          <div className="relative z-10 text-center p-20 text-white">
            <div className="mb-8">
              <span className="text-7xl inline-block animate-bounce">✨</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
              Start Creating
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Something Amazing
              </span>
              <br />
              Today
            </h2>

            <p className="text-2xl md:text-3xl mb-14 opacity-95 max-w-3xl mx-auto drop-shadow-lg font-light">
              Join 100,000+ creators who are already using CreativeHub to bring their ideas to life
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10 max-w-3xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/95 text-foreground border-white/50 h-16 text-xl rounded-2xl backdrop-blur-sm shadow-2xl"
              />
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 h-16 px-12 text-xl font-bold shadow-2xl hover:scale-110 transition-all rounded-2xl"
              >
                Start Free Trial 🚀
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center text-base drop-shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Free forever for personal use</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                CreativeHub
              </div>
              <p className="text-muted-foreground mb-6">
                The all-in-one creative workspace where teams design, share, and bring
                ideas to life faster than ever before.
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline">Twitter</Button>
                <Button size="sm" variant="outline">Instagram</Button>
                <Button size="sm" variant="outline">LinkedIn</Button>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Product</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Features</li>
                <li className="hover:text-foreground cursor-pointer">Pricing</li>
                <li className="hover:text-foreground cursor-pointer">Templates</li>
                <li className="hover:text-foreground cursor-pointer">Integrations</li>
                <li className="hover:text-foreground cursor-pointer">API</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Resources</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Documentation</li>
                <li className="hover:text-foreground cursor-pointer">Tutorials</li>
                <li className="hover:text-foreground cursor-pointer">Blog</li>
                <li className="hover:text-foreground cursor-pointer">Community</li>
                <li className="hover:text-foreground cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">About</li>
                <li className="hover:text-foreground cursor-pointer">Careers</li>
                <li className="hover:text-foreground cursor-pointer">Press Kit</li>
                <li className="hover:text-foreground cursor-pointer">Privacy</li>
                <li className="hover:text-foreground cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 CreativeHub Inc. All rights reserved.</div>
            <div className="flex gap-6">
              <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
              <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
              <span className="hover:text-foreground cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
