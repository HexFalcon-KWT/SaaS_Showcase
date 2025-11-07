"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DemoContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoContainer({ title, description, children }: DemoContainerProps) {
  return (
    <Card className="mb-4 md:mb-8">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        {description && <CardDescription className="text-sm">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex items-center justify-center min-h-[150px] md:min-h-[200px] p-4 md:p-6">
        {children}
      </CardContent>
    </Card>
  );
}
