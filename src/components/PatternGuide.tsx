
"use client";

import Image from 'next/image';
import type { Pattern } from '@/content/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PatternGuideProps {
  title: string;
  description: string;
  patterns: Pattern[];
}

export function PatternGuide({ title, description, patterns }: PatternGuideProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <div key={pattern.name} className="flex flex-col gap-4 p-4 border rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{pattern.name}</h3>
              <Badge
                className={cn({
                  'bg-green-600/80 text-white': pattern.type === 'Bullish',
                  'bg-red-600/80 text-white': pattern.type === 'Bearish',
                  'bg-muted-foreground/80 text-white': pattern.type === 'Neutral',
                })}
              >
                {pattern.type}
              </Badge>
            </div>
            <div className="relative aspect-video w-full">
               <Image
                src={pattern.image.src}
                alt={pattern.name}
                fill
                className="rounded-md border object-cover"
                data-ai-hint={pattern.image['data-ai-hint']}
              />
            </div>
            <p className="text-sm text-muted-foreground font-body">{pattern.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
