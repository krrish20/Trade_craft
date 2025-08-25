
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { fetchMarketNews } from '@/services/news';
import type { NewsArticle, TickerSentiment } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const getSentimentColor = (label: TickerSentiment['sentimentLabel']) => {
  switch (label) {
    case 'Bullish':
    case 'Somewhat-Bullish':
      return 'bg-green-600/80 text-white';
    case 'Bearish':
    case 'Somewhat-Bearish':
      return 'bg-red-600/80 text-white';
    default:
      return 'bg-muted-foreground/80 text-white';
  }
};

function NewsCard({ article }: { article: NewsArticle }) {
  const timeAgo = formatDistanceToNow(new Date(
      `${article.timePublished.slice(0, 4)}-${article.timePublished.slice(4, 6)}-${article.timePublished.slice(6, 8)}T${article.timePublished.slice(9, 11)}:${article.timePublished.slice(11, 13)}:${article.timePublished.slice(13, 15)}Z`
  ), { addSuffix: true });

  return (
    <Card className="flex flex-col overflow-hidden">
      {article.imageUrl && (
        <div className="relative h-48 w-full">
            <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <Badge className="absolute top-2 right-2">{article.source}</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">
          <Link href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground font-body">{article.summary}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex flex-wrap gap-2">
            {article.tickerSentiment.filter(t => t.relevanceScore > 0.1).slice(0, 5).map(sentiment => (
                <Badge key={sentiment.ticker} className={cn("text-xs", getSentimentColor(sentiment.sentimentLabel))}>
                    {sentiment.ticker}: {sentiment.sentimentLabel}
                </Badge>
            ))}
        </div>
        <p className="text-xs text-muted-foreground">{timeAgo}</p>
      </CardFooter>
    </Card>
  );
}


export function NewsClient() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const articles = await fetchMarketNews();
        setNews(articles);
      } catch (e: any) {
        setError(e.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    loadNews();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i}>
            <Skeleton className="h-48 w-full" />
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </CardContent>
             <CardFooter>
                 <Skeleton className="h-8 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Failed to Load News</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  
  if (news.length === 0) {
      return (
         <Card className="text-center p-8">
            <CardContent className="flex flex-col items-center gap-4">
                <Newspaper className="h-12 w-12 text-muted-foreground" />
                <h3 className="text-xl font-semibold">No News Articles Found</h3>
                <p className="text-muted-foreground">This may be due to API rate limiting or a temporary issue. Please try again later.</p>
            </CardContent>
         </Card>
      )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {news.map((article, index) => (
        <NewsCard key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  );
}
