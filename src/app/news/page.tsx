
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

// This is mock data. In a real app, this would come from an API.
const mockNews = [
  { id: 1, title: "Fed Holds Interest Rates Steady, Cites 'Modest' Economic Growth", source: "Reuters", time: "2h ago", image: 'https://placehold.co/150x100', 'data-ai-hint': 'government building' },
  { id: 2, title: "Tech Stocks Rally as Chipmaker Earnings Beat Expectations", source: "Bloomberg", time: "4h ago", image: 'https://placehold.co/150x100', 'data-ai-hint': 'circuit board' },
  { id: 3, title: "Crude Oil Prices Slip on Unexpected Build in Inventories", source: "Wall Street Journal", time: "5h ago", image: 'https://placehold.co/150x100', 'data-ai-hint': 'oil pump' },
  { id: 4, title: "SEC Approves New Rules for Cryptocurrency Custody", source: "CoinDesk", time: "8h ago", image: 'https://placehold.co/150x100', 'data-ai-hint': 'digital currency' },
];

export default function NewsPage() {
  return (
    <MainLayout>
        <div className="space-y-4">
            <div>
                <h1 className="text-3xl font-bold">Market News</h1>
                <p className="text-muted-foreground font-body">Stay informed on the latest market-moving events.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {mockNews.map((item) => (
                    <Card key={item.id} className="flex flex-col sm:flex-row items-start gap-4 p-4 hover:bg-muted/50 transition-colors">
                        <Image 
                            src={item.image} 
                            alt={item.title}
                            width={150} 
                            height={100} 
                            className="rounded-md object-cover"
                            data-ai-hint={item['data-ai-hint']}
                        />
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{item.source} • {item.time}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </MainLayout>
  );
}
