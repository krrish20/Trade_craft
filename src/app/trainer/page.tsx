
import { MainLayout } from '@/components/MainLayout';
import { ScenarioTrainer } from '@/components/ScenarioTrainer';

export default function TrainerPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
             <div>
                <h1 className="text-3xl font-bold">Decision Trainer</h1>
                <p className="text-muted-foreground font-body">Hone your instincts in a risk-free environment. Analyze the scenario and make the call.</p>
            </div>
            <ScenarioTrainer />
        </div>
    </MainLayout>
  );
}
