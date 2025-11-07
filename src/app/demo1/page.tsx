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
import { GridPattern } from '@/components/backgrounds/grid-pattern'

export default function Demo1() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">DataInsight Pro</div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 text-center overflow-hidden">
        <AnimatedGradient colors={["from-blue-500", "via-cyan-500", "to-teal-500"]} />
        <GridPattern className="text-blue-500 dark:text-blue-400" opacity={0.15} />
        <FloatingShapes count={6} type="mixed" />

        <div className="relative z-10">
          <Badge className="mb-6 text-base px-4 py-2 bg-blue-500/20 border-blue-500/50 animate-pulse">
            New: AI-Powered Analytics
          </Badge>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 max-w-5xl mx-auto leading-tight bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Transform Your Data Into Actionable Insights
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            DataInsight Pro helps businesses make data-driven decisions with real-time analytics,
            predictive modeling, and automated reporting.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-all">
              Watch Demo
            </Button>
          </div>
          <div className="flex gap-12 justify-center text-base flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 py-20 overflow-hidden">
        <GridPattern className="text-blue-400" opacity={0.08} size="sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-6xl font-extrabold bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                10x
              </div>
              <div className="text-lg font-semibold">Faster Data Processing</div>
              <div className="text-sm text-muted-foreground mt-1">Lightning-fast analytics</div>
            </div>
            <div className="group">
              <div className="text-6xl font-extrabold bg-gradient-to-br from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-lg font-semibold">Accuracy Rate</div>
              <div className="text-sm text-muted-foreground mt-1">Precision you can trust</div>
            </div>
            <div className="group">
              <div className="text-6xl font-extrabold bg-gradient-to-br from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                50k+
              </div>
              <div className="text-lg font-semibold">Happy Customers</div>
              <div className="text-sm text-muted-foreground mt-1">Trusted worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative container mx-auto px-4 py-24 overflow-hidden">
        <FloatingShapes count={5} type="circle" />

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to analyze, visualize, and act on your data
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-blue-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                📊
              </div>
              <CardTitle className="text-xl">Real-Time Dashboards</CardTitle>
              <CardDescription className="text-base">
                Monitor your metrics with live updating dashboards and custom visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50">Popular</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-purple-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                🤖
              </div>
              <CardTitle className="text-xl">Predictive Analytics</CardTitle>
              <CardDescription className="text-base">
                Leverage AI to forecast trends and make proactive business decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/50">AI-Powered</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-green-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                📄
              </div>
              <CardTitle className="text-xl">Automated Reports</CardTitle>
              <CardDescription className="text-base">
                Schedule and send custom reports to stakeholders automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/50">Time-Saver</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-orange-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                🔒
              </div>
              <CardTitle className="text-xl">Data Security</CardTitle>
              <CardDescription className="text-base">
                Enterprise-grade encryption and compliance with SOC 2 and GDPR
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/50">Enterprise</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-cyan-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                👥
              </div>
              <CardTitle className="text-xl">Team Collaboration</CardTitle>
              <CardDescription className="text-base">
                Share insights, create annotations, and collaborate in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/50">Collaborative</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-teal-500/50">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                🔌
              </div>
              <CardTitle className="text-xl">Custom Integrations</CardTitle>
              <CardDescription className="text-base">
                Connect with 500+ data sources through our robust API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/50">Flexible</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">1</AvatarFallback>
              </Avatar>
              <h3 className="font-bold mb-2">Connect Your Data</h3>
              <p className="text-sm text-muted-foreground">
                Link your databases, spreadsheets, or use our API to import data
              </p>
            </div>
            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">2</AvatarFallback>
              </Avatar>
              <h3 className="font-bold mb-2">Analyze & Visualize</h3>
              <p className="text-sm text-muted-foreground">
                Use our drag-and-drop interface to create stunning visualizations
              </p>
            </div>
            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">3</AvatarFallback>
              </Avatar>
              <h3 className="font-bold mb-2">Share Insights</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate with your team and automate reporting workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted-foreground">Explore different views of our platform</p>
        </div>
        <Tabs defaultValue="dashboard" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Dashboards</CardTitle>
                <CardDescription>
                  Create custom dashboards with drag-and-drop widgets
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 bg-muted/30 rounded flex items-center justify-center">
                <div className="text-muted-foreground">Dashboard Screenshot Preview</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Deep dive into your data with powerful analytics tools
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 bg-muted/30 rounded flex items-center justify-center">
                <div className="text-muted-foreground">Analytics Screenshot Preview</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Reporting</CardTitle>
                <CardDescription>
                  Schedule and send reports to stakeholders automatically
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 bg-muted/30 rounded flex items-center justify-center">
                <div className="text-muted-foreground">Reports Screenshot Preview</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Integration/Compatibility */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrates With Your Stack</h2>
            <p className="text-muted-foreground">Connect with 500+ popular tools and services</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {['PostgreSQL', 'MySQL', 'MongoDB', 'Salesforce', 'Stripe', 'Shopify',
              'Google Analytics', 'HubSpot', 'Slack', 'AWS', 'Azure', 'GCP'].map((tool) => (
              <div key={tool} className="bg-background rounded-lg p-4 text-center">
                <div className="font-medium text-sm">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>For small teams getting started</CardDescription>
              <div className="text-3xl font-bold mt-4">$29<span className="text-base font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-4">Start Free Trial</Button>
              <ul className="space-y-2 text-sm">
                <li>✓ Up to 5 users</li>
                <li>✓ 10 dashboards</li>
                <li>✓ Basic integrations</li>
                <li>✓ Email support</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary shadow-lg">
            <CardHeader>
              <Badge className="w-fit mb-2">Most Popular</Badge>
              <CardTitle>Professional</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="text-3xl font-bold mt-4">$99<span className="text-base font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-4">Start Free Trial</Button>
              <ul className="space-y-2 text-sm">
                <li>✓ Up to 25 users</li>
                <li>✓ Unlimited dashboards</li>
                <li>✓ All integrations</li>
                <li>✓ Priority support</li>
                <li>✓ Custom reports</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="text-3xl font-bold mt-4">Custom</div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-4" variant="outline">Contact Sales</Button>
              <ul className="space-y-2 text-sm">
                <li>✓ Unlimited users</li>
                <li>✓ Advanced security</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantee</li>
                <li>✓ Custom training</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the free trial work?</AccordionTrigger>
              <AccordionContent>
                Start with a 14-day free trial of any plan. No credit card required.
                You can cancel anytime during the trial period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I change plans later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can upgrade or downgrade your plan at any time.
                Changes take effect immediately and we'll prorate the charges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                We use enterprise-grade encryption and are SOC 2 and GDPR compliant.
                Your data is stored securely and never shared with third parties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-700 dark:via-cyan-700 dark:to-teal-700">
          <AnimatedGradient colors={["from-blue-600", "via-cyan-600", "to-teal-600"]} blur="lg" />
          <FloatingShapes count={4} type="circle" />

          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/40 to-teal-900/40 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20"></div>

          <div className="relative z-10 text-center p-16 text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto drop-shadow">
              Join 50,000+ companies already using DataInsight Pro to make better decisions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="max-w-md bg-white/90 text-foreground border-white/50 h-14 text-lg backdrop-blur-sm"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 h-14 px-10 text-lg font-semibold shadow-xl hover:scale-105 transition-all">
                Get Started Free
              </Button>
            </div>

            <p className="text-base opacity-90 drop-shadow">
              Start your 14-day free trial today. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">DataInsight Pro</div>
              <p className="text-sm text-muted-foreground">
                Transform your data into actionable insights with AI-powered analytics.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4">Product</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4">Legal</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>© 2025 DataInsight Pro. All rights reserved.</div>
            <div className="flex gap-4">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
