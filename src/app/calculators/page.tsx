
import { MainLayout } from '@/components/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PositionSizeCalculator } from '@/components/PositionSizeCalculator';
import { ExpectancyCalculator } from '@/components/ExpectancyCalculator';
import { RiskOfRuinCalculator } from '@/components/RiskOfRuinCalculator';
import { Calculator } from 'lucide-react';

export default function CalculatorsPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">Trading Calculators</h1>
            </div>
            <p className="text-muted-foreground font-body">Essential tools for risk management and trade planning.</p>

            <Tabs defaultValue="position-size" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                    <TabsTrigger value="position-size">
                        <Calculator className="mr-2 h-4 w-4" />
                        Position Size
                    </TabsTrigger>
                    <TabsTrigger value="expectancy">
                        <Calculator className="mr-2 h-4 w-4" />
                        Expectancy
                    </TabsTrigger>
                     <TabsTrigger value="risk-of-ruin">
                        <Calculator className="mr-2 h-4 w-4" />
                        Risk of Ruin
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="position-size" className="mt-6">
                    <PositionSizeCalculator />
                </TabsContent>
                <TabsContent value="expectancy" className="mt-6">
                    <ExpectancyCalculator />
                </TabsContent>
                <TabsContent value="risk-of-ruin" className="mt-6">
                    <RiskOfRuinCalculator />
                </TabsContent>
            </Tabs>
        </div>
    </MainLayout>
  );
}
