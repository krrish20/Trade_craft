
"use client";

import type { ChecklistItem } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useProgress } from '@/context/ProgressContext';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import React from 'react';

interface ChecklistGuideProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  listKey: 'preTrade' | 'postTrade';
  onDeleteItem: (id: string, listKey: 'preTrade' | 'postTrade') => void;
  children?: React.ReactNode;
}

export function ChecklistGuide({ title, description, items, listKey, onDeleteItem, children }: ChecklistGuideProps) {
  const { progress, updateDailyChecklist } = useProgress();
  const today = new Date().toISOString().split('T')[0];
  const todaysItems = progress?.dailyChecklists?.[today] || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Checkbox
                id={`${listKey}-${item.id}`}
                checked={todaysItems.includes(item.id)}
                onCheckedChange={() => updateDailyChecklist(item.id)}
              />
              <Label htmlFor={`${listKey}-${item.id}`} className="text-sm font-normal leading-snug cursor-pointer">
                {item.label}
              </Label>
            </div>
            {!item.isDefault && (
              <Button variant="ghost" size="icon" onClick={() => onDeleteItem(item.id, listKey)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            )}
          </div>
        ))}
        {children && <div className="pt-4 border-t">{children}</div>}
      </CardContent>
    </Card>
  );
}
