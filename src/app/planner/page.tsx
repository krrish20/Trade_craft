
import { MainLayout } from '@/components/MainLayout';
import { TradePlannerClient } from '@/components/TradePlannerClient';

export default function PlannerPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
             <div>
                <h1 className="text-3xl font-bold">Trade Planner & Checklists</h1>
                <p className="text-muted-foreground font-body">Define your edge, build discipline, and execute flawlessly.</p>
            </div>
            <TradePlannerClient />
        </div>
    </MainLayout>
  );
}
