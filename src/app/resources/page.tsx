
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProgress } from '@/context/ProgressContext';
import { candlestickPatterns, chartPatterns, glossaryTerms, postTradeReview, preTradeChecklist } from '@/content/resources';
import { useToast } from '@/hooks/use-toast';
import { BookMarked, CandlestickChart, ListChecks, Shapes, Sparkles } from 'lucide-react';


function DailyChecklist() {
  const { progress, updateDailyChecklist } = useProgress();
  const { toast } = useToast();

  if (!progress) return null;

  const today = new Date().toISOString().split('T')[0];
  const todaysChecklist = progress.dailyChecklists?.[today] || [];

  const handleCheck = (item: string) => {
    updateDailyChecklist(item);
  };
  
  const handleCompleteDay = () => {
    toast({
      title: "Checklist Logged!",
      description: `You've solidified your discipline for ${today}. Keep it up!`,
    });
  };

  const isLogButtonEnabled = todaysChecklist.length > 0;

  return (
    <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Pre-Trade Checklist</CardTitle>
                    <CardDescription>Run through this list before every trade.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {preTradeChecklist.map((item, index) => (
                        <div key={`pre-${index}`} className="flex items-start space-x-3">
                            <Checkbox id={`pre-${index}`} className="mt-1" onCheckedChange={() => handleCheck(item)} checked={todaysChecklist.includes(item)} />
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
                        <div key={`post-${index}`} className="flex items-start space-x-3">
                             <Checkbox id={`post-${index}`} className="mt-1" onCheckedChange={() => handleCheck(item)} checked={todaysChecklist.includes(item)} />
                            <Label htmlFor={`post-${index}`} className="font-normal font-body text-base cursor-pointer">
                                {item}
                            </Label>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
         <div className="flex justify-center">
            <Button onClick={handleCompleteDay} disabled={!isLogButtonEnabled}>
                <Sparkles className="mr-2 h-4 w-4" />
                Log Today's Discipline
            </Button>
        </div>
    </div>
  );
}


export default function ResourcesPage() {
  return (
    <div className="space-y-4">
        <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Resources</h1>
        </div>
        <p className="text-muted-foreground font-body">Your toolbox for success. Find definitions, checklists, and patterns here.</p>

        <Tabs defaultValue="checklists" className="w-full">
            <TabsList className="grid w-full grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-4 md:h-10">
                <TabsTrigger value="checklists">
                    <ListChecks className="mr-2 h-4 w-4" />
                    Discipline Tracker
                </TabsTrigger>
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
            <TabsContent value="checklists" className="mt-6">
                <DailyChecklist />
            </TabsContent>
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
