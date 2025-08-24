
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
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'head shoulders pattern' }
    },
    { 
        name: 'Inverse Head and Shoulders', 
        type: 'Bullish', 
        description: 'A reversal pattern signaling the end of a downtrend. It\'s the inverted version of the Head and Shoulders pattern.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'inverse head shoulders' }
    },
    { 
        name: 'Double Top', 
        type: 'Bearish', 
        description: 'A reversal pattern where the price makes two consecutive peaks at roughly the same level, signaling a potential move lower.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'double top pattern' }
    },
    { 
        name: 'Double Bottom', 
        type: 'Bullish', 
        description: 'A reversal pattern with two consecutive troughs at roughly the same level, indicating a potential move higher.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'double bottom pattern' }
    },
    { 
        name: 'Ascending Triangle', 
        type: 'Bullish', 
        description: 'A continuation pattern with a horizontal resistance level and a rising trendline of support. Often breaks to the upside.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'ascending triangle chart' }
    },
    { 
        name: 'Descending Triangle', 
        type: 'Bearish', 
        description: 'A continuation pattern with a horizontal support level and a falling trendline of resistance. Often breaks to the downside.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'descending triangle chart' }
    },
    { 
        name: 'Bull Flag', 
        type: 'Bullish', 
        description: 'A continuation pattern that occurs after a strong uptrend. It consists of a flagpole (the initial sharp move up) and a flag (a period of consolidation).',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'bull flag chart' }
    },
    { 
        name: 'Bear Flag', 
        type: 'Bearish', 
        description: 'A continuation pattern after a strong downtrend, consisting of a flagpole (the initial sharp move down) and a flag (a brief upward consolidation).',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'bear flag chart' }
    },
];

export const candlestickPatterns: Pattern[] = [
    { 
        name: 'Hammer', 
        type: 'Bullish', 
        description: 'A single candle pattern with a short body, little to no upper wick, and a long lower wick. Appears in a downtrend and signals a potential reversal.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'hammer candlestick' }
    },
    { 
        name: 'Shooting Star', 
        type: 'Bearish', 
        description: 'A single candle pattern with a short body, a long upper wick, and little to no lower wick. Appears in an uptrend and signals a potential reversal.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'shooting star candlestick' }
    },
    { 
        name: 'Bullish Engulfing', 
        type: 'Bullish', 
        description: 'A two-candle pattern where a small bearish candle is followed by a larger bullish candle that completely engulfs the previous one. Signals strong buying pressure.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'bullish engulfing pattern' }
    },
    { 
        name: 'Bearish Engulfing', 
        type: 'Bearish', 
        description: 'A two-candle pattern where a small bullish candle is followed by a larger bearish candle that completely engulfs the previous one. Signals strong selling pressure.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'bearish engulfing pattern' }
    },
    { 
        name: 'Doji', 
        type: 'Neutral', 
        description: 'A candle with a very small or non-existent body, where the open and close prices are nearly identical. Represents indecision in the market.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'doji candlestick' }
    },
    { 
        name: 'Morning Star', 
        type: 'Bullish', 
        description: 'A three-candle bottom reversal pattern, consisting of a large bearish candle, a small indecisive candle, and a large bullish candle.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'morning star pattern' }
    },
    { 
        name: 'Evening Star', 
        type: 'Bearish', 
        description: 'A three-candle top reversal pattern, consisting of a large bullish candle, a small indecisive candle, and a large bearish candle.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'evening star pattern' }
    },
     { 
        name: 'Tweezer Bottoms', 
        type: 'Bullish', 
        description: 'A two-candle reversal pattern where two consecutive candles have matching lows. Indicates that support is holding.',
        image: { src: 'https://placehold.co/600x400.png', 'data-ai-hint': 'tweezer bottom candlestick' }
    },
];
