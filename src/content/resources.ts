
export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Pattern {
  name: string;
  type: 'Bullish' | 'Bearish' | 'Neutral';
  description: string;
  image: {
    src: string;
    'data-ai-hint': string;
  };
}

export interface ChecklistItem {
    id: string;
    label: string;
    isDefault: boolean;
}

export const defaultPreTradeChecklist: ChecklistItem[] = [
    { id: 'market-context', label: 'Have I assessed the overall market context and higher timeframe trend?', isDefault: true },
    { id: 'plan-exists', label: 'Does this trade align with a predefined setup in my trading plan?', isDefault: true },
    { id: 'risk-defined', label: 'Have I defined my exact entry, stop-loss, and target levels?', isDefault: true },
    { id: 'risk-reward', label: 'Is the potential reward/risk ratio acceptable (e.g., >= 2R)?', isDefault: true },
    { id: 'position-sized', label: 'Have I calculated the correct position size based on my risk?', isDefault: true },
    { id: 'emotional-state', label: 'Am I calm, focused, and free from FOMO or revenge trading impulses?', isDefault: true },
    { id: 'news-checked', label: 'Have I checked for any major economic news releases that could impact my trade?', isDefault: true },
    { id: 'environment-check', label: 'Is my trading environment free from distractions?', isDefault: true }
];

export const defaultPostTradeChecklist: ChecklistItem[] = [
    { id: 'followed-plan', label: 'Did I follow my trading plan exactly for entry, stop, and exit?', isDefault: true },
    { id: 'journaled-trade', label: 'Have I recorded the trade in my journal with all required data?', isDefault: true },
    { id: 'screenshot-taken', label: 'Did I take a screenshot of the chart for later review?', isDefault: true },
    { id: 'result-accepted', label: 'Have I accepted the outcome (win or loss) without emotion?', isDefault: true },
    { id: 'lesson-learned', label: 'What is the one key lesson from this trade?', isDefault: true },
    { id: 'process-evaluation', label: 'Regardless of outcome, how well did I execute my process?', isDefault: true },
    { id: 'weekly-review-prep', label: 'Is this trade tagged for discussion in my weekly performance review?', isDefault: true }
];


export const glossaryTerms: GlossaryTerm[] = [
    { term: 'Ask Price', definition: 'The lowest price a seller is willing to accept for an asset. It\'s the price you pay when you buy.' },
    { term: 'Bear Market', definition: 'A market condition where prices are falling, and pessimism is widespread.' },
    { term: 'Bid Price', definition: 'The highest price a buyer is willing to pay for an asset. It\'s the price you receive when you sell.' },
    { term: 'Breakout', definition: 'When the price moves above a resistance level or below a support level with increased volume.' },
    { term: 'Bull Market', definition: 'A market condition where prices are rising, and optimism is widespread.' },
    { term: 'Candlestick', definition: 'A type of chart that displays the high, low, open, and closing prices of a security for a specific period.' },
    { term: 'Downtrend', definition: 'A series of lower highs and lower lows in price action.' },
    { term: 'EMA (Exponential Moving Average)', definition: 'A type of moving average that places a greater weight and significance on the most recent data points.' },
    { term: 'FOMO (Fear Of Missing Out)', definition: 'An emotional impulse to get into a trade after a significant price move has already occurred, for fear of missing out on more gains.' },
    { term: 'Liquidity', definition: 'The degree to which an asset can be quickly bought or sold in the market without affecting the asset\'s price.' },
    { term: 'R-Multiple', definition: 'A system of defining potential profit and loss in terms of risk units. 1R is the initial amount risked on a trade.' },
    { term: 'Range', definition: 'A period of sideways price action between a consistent support and resistance level.' },
    { term: 'Resistance', definition: 'A price level where selling pressure is historically strong enough to prevent the price from rising further. A "ceiling".' },
    { term: 'SMA (Simple Moving Average)', definition: 'A type of moving average calculated by adding the recent closing prices and then dividing that by the number of time periods in the calculation average.' },
    { term: 'Spread', definition: 'The difference between the bid and the ask price of an asset.' },
    { term: 'Stop-Loss Order', definition: 'An order placed with a broker to sell a security when it reaches a certain price, designed to limit a trader\'s loss.' },
    { term: 'Support', definition: 'A price level where buying pressure is historically strong enough to prevent the price from falling further. A "floor".' },
    { term: 'Uptrend', definition: 'A series of higher highs and higher lows in price action.' },
    { term: 'Volume', definition: 'The number of shares or contracts traded in a security or an entire market during a given period of time.' },
];

export const chartPatterns: Pattern[] = [
    { 
        name: 'Head and Shoulders', 
        type: 'Bearish', 
        description: 'A reversal pattern that signals the end of an uptrend. It consists of a left shoulder, a higher peak (the head), and a right shoulder.',
        image: { src: 'https://images.unsplash.com/photo-1621452298282-359546a14364?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'head shoulders pattern' }
    },
    { 
        name: 'Inverse Head and Shoulders', 
        type: 'Bullish', 
        description: 'A reversal pattern signaling the end of a downtrend. It\'s the inverted version of the Head and Shoulders pattern.',
        image: { src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'inverse head shoulders' }
    },
    { 
        name: 'Double Top', 
        type: 'Bearish', 
        description: 'A reversal pattern where the price makes two consecutive peaks at roughly the same level, signaling a potential move lower.',
        image: { src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'double top pattern' }
    },
    { 
        name: 'Double Bottom', 
        type: 'Bullish', 
        description: 'A reversal pattern with two consecutive troughs at roughly the same level, indicating a potential move higher.',
        image: { src: 'https://images.unsplash.com/photo-1640286599599-4a243538411a?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'double bottom pattern' }
    },
    { 
        name: 'Ascending Triangle', 
        type: 'Bullish', 
        description: 'A continuation pattern with a horizontal resistance level and a rising trendline of support. Often breaks to the upside.',
        image: { src: 'https://images.unsplash.com/photo-1628216834553-8b78a48740f3?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'ascending triangle chart' }
    },
    { 
        name: 'Descending Triangle', 
        type: 'Bearish', 
        description: 'A continuation pattern with a horizontal support level and a falling trendline of resistance. Often breaks to the downside.',
        image: { src: 'https://images.unsplash.com/photo-1678248434193-f497914e4024?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'descending triangle chart' }
    },
    { 
        name: 'Bull Flag', 
        type: 'Bullish', 
        description: 'A continuation pattern that occurs after a strong uptrend. It consists of a flagpole (the initial sharp move up) and a flag (a period of consolidation).',
        image: { src: 'https://images.unsplash.com/photo-1599658880122-ba28f6b98935?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'bull flag chart' }
    },
    { 
        name: 'Bear Flag', 
        type: 'Bearish', 
        description: 'A continuation pattern after a strong downtrend, consisting of a flagpole (the initial sharp move down) and a brief upward consolidation).',
        image: { src: 'https://images.unsplash.com/photo-1639755243236-5838531758f3?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'bear flag chart' }
    },
];

export const candlestickPatterns: Pattern[] = [
    { 
        name: 'Hammer', 
        type: 'Bullish', 
        description: 'A single candle pattern with a short body, little to no upper wick, and a long lower wick. Appears in a downtrend and signals a potential reversal.',
        image: { src: 'https://images.unsplash.com/photo-1549492423-400259a5cd31?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'hammer candlestick' }
    },
    { 
        name: 'Shooting Star', 
        type: 'Bearish', 
        description: 'A single candle pattern with a short body, a long upper wick, and little to no lower wick. Appears in an uptrend and signals a potential reversal.',
        image: { src: 'https://images.unsplash.com/photo-1586953208448-b95a14da4492?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'shooting star candlestick' }
    },
    { 
        name: 'Bullish Engulfing', 
        type: 'Bullish', 
        description: 'A two-candle pattern where a small bearish candle is followed by a larger bullish candle that completely engulfs the previous one. Signals strong buying pressure.',
        image: { src: 'https://images.unsplash.com/photo-1684369175838-34828a135467?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'bullish engulfing pattern' }
    },
    { 
        name: 'Bearish Engulfing', 
        type: 'Bearish', 
        description: 'A two-candle pattern where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous one. Signals strong selling pressure.',
        image: { src: 'https://images.unsplash.com/photo-1509233732431-5054bee37a93?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'bearish engulfing pattern' }
    },
    { 
        name: 'Doji', 
        type: 'Neutral', 
        description: 'A candle with a very small or non-existent body, where the open and close prices are nearly identical. Represents indecision in the market.',
        image: { src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'doji candlestick' }
    },
    { 
        name: 'Morning Star', 
        type: 'Bullish', 
        description: 'A three-candle bottom reversal pattern, consisting of a large bearish candle, a small indecisive candle, and a large bullish candle.',
        image: { src: 'https://images.unsplash.com/photo-1554672485-6a59121a4f4e?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'morning star pattern' }
    },
    { 
        name: 'Evening Star', 
        type: 'Bearish', 
        description: 'A three-candle top reversal pattern, consisting of a large bullish candle, a small indecisive candle, and a large bearish candle.',
        image: { src: 'https://images.unsplash.com/photo-1664335905803-3439e76a6d25?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'evening star pattern' }
    },
     { 
        name: 'Tweezer Bottoms', 
        type: 'Bullish', 
        description: 'A two-candle reversal pattern where two consecutive candles have matching lows. Indicates that support is holding.',
        image: { src: 'https://images.unsplash.com/photo-1542626991-a23188554655?q=80&w=600&h=400&auto=format&fit=crop', 'data-ai-hint': 'tweezer bottom candlestick' }
    },
];
