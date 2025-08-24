
import { MainLayout } from '@/components/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { glossaryTerms, preTradeChecklist, postTradeReview, candlestickPatterns, chartPatterns } from '@/content/resources';
import { BookMarked, ListChecks, CandlestickChart, Shapes } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">Resources</h1>
            </div>
            <p className="text-muted-foreground font-body">Your toolbox for success. Find definitions, checklists, and patterns here.</p>

            <Tabs defaultValue="glossary" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4">
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
                    <TabsTrigger value="checklists">
                        <ListChecks className="mr-2 h-4 w-4" />
                        Checklists
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
                        </CardHeader>
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
                <TabsContent value="checklists" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Pre-Trade Checklist</CardTitle>
                                <CardDescription>Run through this list before every trade.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {preTradeChecklist.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Checkbox id={`pre-${index}`} className="mt-1" />
                                        <Label htmlFor={`pre-${index}`} className="font-normal font-body text-base cursor-pointer">
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Post-Trade Review</CardTitle>
                                <CardDescription>Analyze your performance after every trade.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {postTradeReview.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Checkbox id={`post-${index}`} className="mt-1"/>
                                        <Label htmlFor={`post-${index}`} className="font-normal font-body text-base cursor-pointer">
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </MainLayout>
  );
}
