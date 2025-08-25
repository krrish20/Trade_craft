import { MainLayout } from '@/components/MainLayout';
import { NewsClient } from '@/components/NewsClient';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Market News & Sentiment</h1>
          </div>
          <p className="text-muted-foreground font-body">
            Stay ahead of the market with the latest news and analysis.
          </p>
        </div>
        <NewsClient />
      </div>
    </MainLayout>
  );
}
