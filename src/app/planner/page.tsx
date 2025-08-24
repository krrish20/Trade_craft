
import { MainLayout } from '@/components/MainLayout';
import { TradePlannerClient } from '@/components/TradePlannerClient';

export default function PlannerPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
             <div>
                <h1 className="text-3xl font-bold">Trade Planner</h1>
                <p className="text-muted-foreground font-body">Define your high-probability setups. Build the discipline to only trade your edge.</p>
            </div>
            <TradePlannerClient />
        </div>
    </MainLayout>
  );
}
