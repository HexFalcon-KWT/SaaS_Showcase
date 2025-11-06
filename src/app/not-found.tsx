import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Card className="w-full max-w-md shadow-2xl border-2">
        <CardContent className="pt-12 pb-8 px-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <SearchX className="h-24 w-24 text-muted-foreground/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-foreground">404</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Lost? Try exploring our{" "}
              <Link href="/components" className="text-primary hover:underline font-medium">
                component showcase
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
