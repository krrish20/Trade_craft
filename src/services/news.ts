
'use server';

import type { NewsArticle } from '@/lib/types';

const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchMarketNews(tickers?: string[], topics?: string[]): Promise<NewsArticle[]> {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  if (!API_KEY) {
    throw new Error('Alpha Vantage API key is not configured.');
  }

  const params = new URLSearchParams({
    function: 'NEWS_SENTIMENT',
    apikey: API_KEY,
    sort: 'LATEST',
    limit: '50',
  });

  if (tickers && tickers.length > 0) {
    params.append('tickers', tickers.join(','));
  }
  if (topics && topics.length > 0) {
    params.append('topics', topics.join(','));
  } else {
    // Default to broader topics if none are specified
    params.append('topics', 'financial_markets,economy_macro,technology,finance');
  }

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Alpha Vantage API Error:', errorText);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.Information) {
        console.warn('Alpha Vantage API Info:', data.Information);
        // This could be a rate limit message, return empty array to avoid crashing if there's no feed.
        if (!data.feed) return [];
    }

    if (!data.feed) {
      console.error('Unexpected API response structure:', data);
      return [];
    }

    return data.feed.map((article: any) => ({
      title: article.title,
      url: article.url,
      summary: article.summary,
      imageUrl: article.banner_image,
      source: article.source,
      timePublished: article.time_published,
      authors: article.authors,
      topics: article.topics.map((t: any) => t.topic),
      overallSentimentLabel: article.overall_sentiment_label,
      tickerSentiment: article.ticker_sentiment.map((ts: any) => ({
        ticker: ts.ticker,
        relevanceScore: parseFloat(ts.relevance_score),
        sentimentScore: parseFloat(ts.ticker_sentiment_score),
        sentimentLabel: ts.ticker_sentiment_label,
      })),
    }));
  } catch (error) {
    console.error('Failed to fetch market news:', error);
    throw new Error('Could not fetch news from Alpha Vantage.');
  }
}
