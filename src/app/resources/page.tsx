
"use client";

import { MainLayout } from '@/components/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PatternGuide } from '@/components/PatternGuide';
import { GlossaryGuide } from '@/components/GlossaryGuide';
import { candlestickPatterns, chartPatterns, glossaryTerms } from '@/content/resources';
import { Book, GanttChartSquare, CandlestickChart } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Resource Center</h1>
          <p className="text-muted-foreground font-body">
            Your reference library for trading terms and patterns.
          </p>
        </div>

        <Tabs defaultValue="glossary" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="glossary">
              <Book className="mr-2 h-4 w-4" />
              Glossary
            </TabsTrigger>
            <TabsTrigger value="chart-patterns">
              <GanttChartSquare className="mr-2 h-4 w-4" />
              Chart Patterns
            </TabsTrigger>
            <TabsTrigger value="candlestick-patterns">
              <CandlestickChart className="mr-2 h-4 w-4" />
              Candlestick Patterns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="glossary" className="mt-6">
            <GlossaryGuide terms={glossaryTerms} />
          </TabsContent>
          <TabsContent value="chart-patterns" className="mt-6">
            <PatternGuide title="Chart Pattern Guide" description="Classic formations that suggest potential future price movements." patterns={chartPatterns} />
          </TabsContent>
           <TabsContent value="candlestick-patterns" className="mt-6">
             <PatternGuide title="Candlestick Pattern Guide" description="Individual or groups of candlesticks that can signal reversals or continuations." patterns={candlestickPatterns} />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
