"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { candlestickPatterns, chartPatterns, glossaryTerms } from '@/content/resources';
import { BookMarked, CandlestickChart, Shapes } from 'lucide-react';


export default function ResourcesPage() {
  return (
    <div className="space-y-4">
        <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Resources</h1>
        </div>
        <p className="text-muted-foreground font-body">Your toolbox for success. Find definitions, checklists, and patterns here.</p>

        <Tabs defaultValue="glossary" className="w-full">
            <TabsList className="grid w-full grid-cols-1 h-auto sm:grid-cols-3 md:h-10">
                <TabsTrigger value="glossary">
                    <BookMarked className="mr-2 h-4 w-4" />
                    Glossary
                </TabsTrigger>
                <TabsTrigger value="candlesticks">
                    <CandlestickChart className="mr-2 h-4 w-4" />
                    Candlestick Patterns
                </TabsTrigger>
                <TabsTrigger value="charts">
                    <Shapes className="mr-2 h-4 w-4" />
                    Chart Patterns
                </TabsTrigger>
            </TabsList>
            <TabsContent value="glossary" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Trading Glossary</CardTitle>
                        <CardDescription>Key terms to know on your trading journey.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {glossaryTerms.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="font-semibold text-left">{item.term}</AccordionTrigger>
                                    <AccordionContent className="font-body text-base">
                                        {item.definition}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="candlesticks" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Candlestick Patterns</CardTitle>
                        <CardDescription>A quick reference for common candlestick patterns.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {candlestickPatterns.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="font-semibold text-left">{item.name}</AccordionTrigger>
                                    <AccordionContent className="font-body text-base space-y-2">
                                        <p><span className="font-semibold">Type:</span> {item.type}</p>
                                        <p><span className="font-semibold">Indication:</span> {item.indication}</p>
                                        <p>{item.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="charts" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Chart Patterns</CardTitle>
                        <CardDescription>Common formations that can signal trading opportunities.</CardDescription>
                    </Header>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {chartPatterns.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="font-semibold text-left">{item.name}</AccordionTrigger>
                                    <AccordionContent className="font-body text-base space-y-2">
                                        <p><span className="font-semibold">Type:</span> {item.type}</p>
                                        <p><span className="font-semibold">Indication:</span> {item.indication}</p>
                                        <p>{item.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </TabsContent>

        </Tabs>
    </div>
  );
}
