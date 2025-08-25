
"use client";

import { useProgress } from '@/context/ProgressContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { Flame, CalendarCheck } from 'lucide-react';
import { eachDayOfInterval, format, startOfWeek, endOfWeek, subDays } from 'date-fns';

export function ConsistencyChart() {
  const { progress } = useProgress();
  if (!progress) return null;

  const checklists = progress.dailyChecklists || {};
  const today = new Date();
  
  const calculateStreaks = () => {
    const dates = Object.keys(checklists).filter(d => checklists[d]?.length > 0).sort((a,b) => new Date(b).getTime() - new Date(a).getTime());
    if (dates.length === 0) return { current: 0, longest: 0 };
    
    let longestStreak = 0;
    let currentStreak = 0;
    
    let streak = 0;
    let lastDate: Date | null = null;
    
    for (let i = 0; i < dates.length; i++) {
        const date = new Date(dates[i]);
        if (lastDate) {
            const diff = (lastDate.getTime() - date.getTime()) / (1000 * 3600 * 24);
            if (diff === 1) {
                streak++;
            } else {
                longestStreak = Math.max(longestStreak, streak);
                streak = 1;
            }
        } else {
            streak = 1;
        }
        lastDate = date;
    }
    longestStreak = Math.max(longestStreak, streak);

    // Check current streak
    const mostRecentDate = new Date(dates[0]);
    const diffFromToday = (today.getTime() - mostRecentDate.getTime()) / (1000 * 3600 * 24);
    if (diffFromToday <= 1) {
       currentStreak = streak;
    }

    return { current: currentStreak, longest: longestStreak };
  }

  const { current, longest } = calculateStreaks();
  
  // Generate days for the chart
  const days = eachDayOfInterval({
    start: subDays(startOfWeek(today, { weekStartsOn: 1 }), 0), // Start from Monday
    end: endOfWeek(today, { weekStartsOn: 1 }),
  });

  const daysInLastNWeeks = eachDayOfInterval({
    start: startOfWeek(subDays(today, 8 * 7), { weekStartsOn: 1 }),
    end: endOfWeek(today, { weekStartsOn: 1 }),
  });


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <CalendarCheck />
            Discipline & Consistency
        </CardTitle>
        <CardDescription>Your daily checklist activity for the last 9 weeks. Stay consistent to build winning habits.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-4">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Flame className="text-orange-500" />
                    <div>
                        <p className="font-bold text-2xl">{current}</p>
                        <p className="text-xs text-muted-foreground">Current Streak</p>
                    </div>
                </div>
                 <div className="flex items-center gap-2">
                    <Award className="text-yellow-500" />
                    <div>
                        <p className="font-bold text-2xl">{longest}</p>
                        <p className="text-xs text-muted-foreground">Longest Streak</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="bg-muted w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/20 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/40 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary/70 w-3 h-3 rounded-sm"></div>
                <div className="bg-primary w-3 h-3 rounded-sm"></div>
                <span>More</span>
            </div>
        </div>
         <TooltipProvider>
            <div className="grid grid-cols-7 sm:grid-cols-9 lg:grid-cols-12 grid-rows-7 gap-1">
              {daysInLastNWeeks.map((day) => {
                const dayStr = format(day, 'yyyy-MM-dd');
                const count = checklists[dayStr]?.length || 0;
                let colorClass = 'bg-muted';
                if (count > 0) colorClass = 'bg-primary/20';
                if (count > 3) colorClass = 'bg-primary/40';
                if (count > 6) colorClass = 'bg-primary/70';
                if (count > 9) colorClass = 'bg-primary';

                return (
                  <Tooltip key={dayStr}>
                    <TooltipTrigger asChild>
                      <div className={cn("h-4 w-4 sm:h-5 sm:w-5 rounded-sm", colorClass)}></div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{count} items on {format(day, 'MMM d, yyyy')}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}

// Dummy Award icon if not imported
const Award = ({className}: {className?: string}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"/></svg>;
