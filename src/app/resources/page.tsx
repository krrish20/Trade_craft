
"use client";

import { MainLayout } from '@/components/MainLayout';
import { Checklist } from '@/components/Checklist';
import { preTradeChecklist, postTradeChecklist } from '@/content/resources';

export default function ResourcesPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Trading Checklists</h1>
          <p className="text-muted-foreground font-body">
            Use these checklists daily to build discipline and ensure you're following your plan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Checklist 
                title="Pre-Trade Checklist"
                description="Verify every item before entering a new position."
                items={preTradeChecklist}
            />
            <Checklist 
                title="Post-Trade Checklist"
                description="Complete this after closing a position to reinforce good habits."
                items={postTradeChecklist}
            />
        </div>
      </div>
    </MainLayout>
  );
}
