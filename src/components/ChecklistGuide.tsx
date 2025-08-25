
"use client";

import type { ChecklistItem } from '@/content/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useProgress } from '@/context/ProgressContext';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface ChecklistGuideProps {
  preTrade: ChecklistItem[];
  postTrade: ChecklistItem[];
}

export function ChecklistGuide({ preTrade, postTrade }: ChecklistGuideProps) {
  const { progress, updateDailyChecklist } = useProgress();
  const today = new Date().toISOString().split('T')[0];
  const todaysItems = progress?.dailyChecklists?.[today] || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Pre-Trade Checklist</CardTitle>
                <CardDescription>Your mental warm-up. Ensure every trade is well-planned.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {preTrade.map(item => (
                    <div key={item.id} className="flex items-center space-x-3">
                        <Checkbox 
                            id={item.id} 
                            checked={todaysItems.includes(item.id)}
                            onCheckedChange={() => updateDailyChecklist(item.id)}
                        />
                        <Label htmlFor={item.id} className="text-sm font-normal leading-snug cursor-pointer">
                            {item.label}
                        </Label>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Post-Trade Checklist</CardTitle>
                <CardDescription>Your mental cool-down. Learn from every outcome.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {postTrade.map(item => (
                    <div key={item.id} className="flex items-center space-x-3">
                        <Checkbox 
                            id={item.id} 
                            checked={todaysItems.includes(item.id)}
                            onCheckedChange={() => updateDailyChecklist(item.id)}
                        />
                        <Label htmlFor={item.id} className="text-sm font-normal leading-snug cursor-pointer">
                            {item.label}
                        </Label>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
  );
}
