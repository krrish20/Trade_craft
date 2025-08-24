
"use client";

import { useProgress } from '@/context/ProgressContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ChecklistProps {
  title: string;
  description: string;
  items: string[];
}

export function Checklist({ title, description, items }: ChecklistProps) {
  const { progress, updateDailyChecklist } = useProgress();
  const today = new Date().toISOString().split('T')[0];
  const checkedItems = progress?.dailyChecklists?.[today] || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 rounded-md border p-4 transition-colors hover:bg-muted/50">
            <Checkbox
              id={`${title}-item-${index}`}
              checked={checkedItems.includes(item)}
              onCheckedChange={() => updateDailyChecklist(item)}
            />
            <Label htmlFor={`${title}-item-${index}`} className="flex-1 cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {item}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
