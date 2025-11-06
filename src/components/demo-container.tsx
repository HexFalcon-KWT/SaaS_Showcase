"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DemoContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoContainer({ title, description, children }: DemoContainerProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex items-center justify-center min-h-[200px]">
        {children}
      </CardContent>
    </Card>
  );
}
