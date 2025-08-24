
"use client";

import { ChecklistGuide } from '@/components/ChecklistGuide';
import { preTradeChecklist, postTradeChecklist } from '@/content/resources';

export function ChecklistPageClient() {
    return (
        <div className="space-y-4">
            <div>
            <h1 className="text-3xl font-bold">Daily Checklists</h1>
            <p className="text-muted-foreground font-body">
                Your daily ritual for disciplined trading. Complete before and after your session.
            </p>
            </div>
            <ChecklistGuide preTrade={preTradeChecklist} postTrade={postTradeChecklist} />
        </div>
    );
}
