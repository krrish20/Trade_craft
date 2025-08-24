import type { Curriculum } from '@/lib/types';

export const curriculum: Curriculum = [
  {
    id: 'level-1',
    title: 'Foundation',
    description: 'Master the absolute basics of trading and financial markets.',
    lessons: [
      {
        id: 'l1-what-is-trading',
        levelId: 'level-1',
        title: 'What is Trading?',
        time: 10,
        objectives: ['Define trading', 'Identify market participants', 'Understand order types'],
        sections: [
          { type: 'text', tldr: 'Trading is buying and selling assets to profit from price changes.', body: 'In this lesson, we explore the fundamental concepts of trading, who is involved, and the basic actions you can take.' },
          { type: 'image', src: 'https://placehold.co/800x400', alt: 'Market participants diagram', 'data-ai-hint': 'financial market' },
          { type: 'text', body: 'The primary order types are Market, Limit, and Stop orders. Each serves a different purpose in executing your trading strategy.'}
        ],
        quiz: {
          attempts: 3,
          passScore: 70,
          items: [
            { id: 'q1', type: 'mcq', prompt: 'Which order type executes immediately at the current market price?', choices: ['Limit Order', 'Stop Order', 'Market Order'], answer: 2, explain: 'A market order is for traders who want to execute their trade as quickly as possible.' },
            { id: 'q2', type: 'truefalse', prompt: 'Only banks can trade in financial markets.', answer: false, explain: 'Markets are open to retail traders, institutions, and corporations.' }
          ]
        }
      },
      {
        id: 'l1-candles-101',
        levelId: 'level-1',
        title: 'Candlesticks 101',
        time: 12,
        objectives: ['Read OHLC on a candle', 'Identify bullish vs. bearish bodies', 'Recognize long-wick indecision'],
        sections: [
            { type: 'text', tldr: 'Candles show where price opened, closed, and the extremes for a time period.', body: 'A candlestick is a visual representation of price movement. It\'s the cornerstone of technical analysis.' },
            { type: 'image', src: 'https://placehold.co/800x400', alt: 'Labeled candlestick diagram', 'data-ai-hint': 'chart candlestick' },
            { type: 'text', body: 'The body shows the open and close price, while the wicks show the highest and lowest prices reached during that period.'}
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'What does the upper wick represent?', choices: ['Open', 'Close', 'Session high', 'Spread'], answer: 2, explain: 'The upper wick, or shadow, shows the highest price traded during the period.' },
                { id: 'q2', type: 'truefalse', prompt: 'A green (or white) candle means the closing price was higher than the opening price.', answer: true, explain: 'This indicates a bullish price movement for the period.' }
            ]
        }
      },
      {
        id: 'l1-support-resistance',
        levelId: 'level-1',
        title: 'Support and Resistance',
        time: 15,
        objectives: ['Define support and resistance', 'Identify levels on a chart', 'Understand their significance'],
        sections: [
            { type: 'text', tldr: 'Support is a price floor, resistance is a price ceiling.', body: 'Support and resistance are key price levels where the market has previously reversed. They represent zones of supply and demand.' },
            { type: 'image', src: 'https://placehold.co/800x400', alt: 'Chart showing support and resistance levels', 'data-ai-hint': 'price chart' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A price level where selling pressure consistently overcomes buying pressure is called:', choices: ['Support', 'Resistance', 'Trendline'], answer: 1, explain: 'Resistance is where price finds it difficult to break above.' },
            ]
        }
      },
      {
        id: 'l1-trends',
        levelId: 'level-1',
        title: 'Understanding Trends',
        time: 10,
        objectives: ['Define uptrend, downtrend, and range', 'Identify trends using highs and lows'],
        sections: [
            { type: 'text', tldr: 'Markets move in trends: up, down, or sideways.', body: 'An uptrend consists of higher highs and higher lows. A downtrend is lower highs and lower lows. A range is when price moves sideways.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'A series of higher highs and higher lows indicates a downtrend.', answer: false, explain: 'This pattern defines an uptrend.' },
            ]
        }
      },
      {
        id: 'l1-volume',
        levelId: 'level-1',
        title: 'The Role of Volume',
        time: 12,
        objectives: ['Understand what volume represents', 'Analyze volume with price action', 'Identify high and low volume signals'],
        sections: [
            { type: 'text', tldr: 'Volume measures the number of shares traded. High volume can confirm a trend.', body: 'Volume is a crucial indicator that can provide conviction to price movements. A breakout on high volume is more significant than one on low volume.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A strong price move on low volume might suggest:', choices: ['A strong trend', 'A lack of conviction', 'A market holiday'], answer: 1, explain: 'Low volume indicates less participation and may signal a weak or fake move.' },
            ]
        }
      },
      {
        id: 'l1-market-orders',
        levelId: 'level-1',
        title: 'Advanced Order Types',
        time: 15,
        objectives: ['Understand Stop Loss orders', 'Understand Take Profit orders', 'Learn about trailing stops'],
        sections: [
          { type: 'text', tldr: 'Stop Loss limits your losses, Take Profit locks in your gains.', body: 'Beyond basic market and limit orders, Stop Loss and Take Profit orders are essential tools for managing your trades automatically.' },
        ],
        quiz: {
          attempts: 3,
          passScore: 70,
          items: [
            { id: 'q1', type: 'mcq', prompt: 'Which order type is designed to limit your loss on a position?', choices: ['Limit Order', 'Stop Loss Order', 'Market Order'], answer: 1, explain: 'A Stop Loss order automatically closes your position at a predetermined price to prevent further losses.' },
          ]
        }
      },
      {
        id: 'l1-intro-to-indicators',
        levelId: 'level-1',
        title: 'Intro to Technical Indicators',
        time: 15,
        objectives: ['Define technical indicators', 'Understand Moving Averages (MA)', 'Learn about the Relative Strength Index (RSI)'],
        sections: [
          { type: 'text', tldr: 'Indicators are calculations based on price and volume that help analyze the market.', body: 'Technical indicators like Moving Averages help smooth out price data to identify trends, while oscillators like the RSI help identify overbought or oversold conditions.' },
        ],
        quiz: {
          attempts: 3,
          passScore: 70,
          items: [
            { id: 'q1', type: 'mcq', prompt: 'An RSI reading above 70 typically suggests:', choices: ['Oversold conditions', 'A strong uptrend', 'Overbought conditions'], answer: 2, explain: 'High RSI values (typically >70) indicate that a security may be overbought and due for a price correction.' },
          ]
        }
      },
      {
        id: 'l1-chart-patterns-1',
        levelId: 'level-1',
        title: 'Basic Chart Patterns',
        time: 18,
        objectives: ['Identify Head and Shoulders', 'Recognize Double Tops/Bottoms', 'Understand Triangles'],
        sections: [
          { type: 'text', tldr: 'Chart patterns are recurring formations that can signal potential price movements.', body: 'Learning to recognize patterns like Head and Shoulders (reversal), Double Tops (reversal), and Triangles (continuation or reversal) is a core skill in technical analysis.' },
          { type: 'image', src: 'https://placehold.co/800x400', alt: 'Examples of chart patterns', 'data-ai-hint': 'technical analysis' },
        ],
        quiz: {
          attempts: 3,
          passScore: 70,
          items: [
            { id: 'q1', type: 'mcq', prompt: 'A Head and Shoulders pattern is typically a:', choices: ['Continuation pattern', 'Bearish reversal pattern', 'Bullish reversal pattern'], answer: 1, explain: 'The Head and Shoulders pattern signals a potential trend reversal from bullish to bearish.' },
          ]
        }
      },
      {
        id: 'l1-trading-plan',
        levelId: 'level-1',
        title: 'Creating a Trading Plan',
        time: 20,
        objectives: ['Understand the importance of a plan', 'List key components of a trading plan', 'Write a simple plan'],
        sections: [
          { type: 'text', tldr: 'A trading plan is your roadmap to success, defining your rules for every trade.', body: 'Trading without a plan is gambling. Your plan should define what you trade, when you trade, how you enter, and how you exit, both for wins and losses.' },
        ],
        quiz: {
          attempts: 3,
          passScore: 70,
          items: [
            { id: 'q1', type: 'truefalse', prompt: 'You only need a trading plan when you start losing money.', answer: false, explain: 'A trading plan is essential from day one to ensure discipline and consistent decision-making.' },
          ]
        }
      },
       {
        id: 'l1-psychology-intro',
        levelId: 'level-1',
        title: 'Intro to Trading Psychology',
        time: 15,
        objectives: ['Define FOMO and revenge trading', 'Understand the role of discipline', 'Learn about patience'],
        sections: [
            { type: 'text', tldr: 'The biggest enemy in trading is often yourself. Master your emotions.', body: 'Fear, greed, hope, and regret can destroy even the best trading strategies. This lesson introduces the psychological challenges you will face.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'Jumping into a trade because the price is moving fast and you\'re afraid of missing out is called:', choices: ['Discipline', 'FOMO', 'Revenge Trading'], answer: 1, explain: 'FOMO (Fear Of Missing Out) leads to impulsive, unplanned trades.' },
            ]
        }
      },
    ],
    bossQuiz: {
      id: 'b1',
      passScore: 80,
      items: [
        { id: 'bq1', type: 'mcq', prompt: 'A long lower wick on a candle generally suggests...', choices: ['Buying pressure', 'Selling pressure', 'No activity'], answer: 0, explain: 'A long lower wick means price dropped but was pushed back up by buyers, indicating buying pressure.' },
        { id: 'bq2', type: 'mcq', prompt: 'A limit order is used to...', choices: ['Buy or sell at a specific price or better', 'Buy or sell immediately', 'Exit a losing trade'], answer: 0, explain: 'Limit orders give you control over the execution price.' }
      ]
    }
  },
  {
    id: 'level-2',
    title: 'Intermediate',
    description: 'Build a robust strategic framework and dive deeper into analysis.',
    lessons: [
       {
        id: 'l2-risk-management',
        levelId: 'level-2',
        title: 'Position Sizing & R-Multiples',
        time: 15,
        objectives: ['Define risk per trade', 'Calculate position size', 'Understand R-multiples'],
        sections: [
            { type: 'text', tldr: 'Never risk more than a small, fixed percentage of your capital on a single trade.', body: 'Proper position sizing is key to survival. It ensures that a single loss, or even a string of losses, does not wipe out your account.' },
            { type: 'image', src: 'https://placehold.co/800x400', alt: 'Position sizing formula', 'data-ai-hint': 'risk management' },
            { type: 'text', body: 'We use the concept of "R", where 1R is your initial risk amount. This allows you to measure wins and losses in terms of your risk unit.'}
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'If your account is $10,000 and you risk 1% per trade, what is your 1R value?', choices: ['$10', '$100', '$1,000'], answer: 1, explain: '1% of $10,000 is $100. This is the maximum you should be willing to lose on this single trade.' },
                { id: 'q2', type: 'truefalse', prompt: 'A trade that made 3R means you tripled your account.', answer: false, explain: 'A 3R profit means you made 3 times your initial risk amount (e.g., $300 on a $100 risk), not that you tripled your entire account balance.' }
            ]
        }
      },
       {
        id: 'l2-candlestick-patterns',
        levelId: 'level-2',
        title: 'Advanced Candlestick Patterns',
        time: 18,
        objectives: ['Identify Engulfing patterns', 'Recognize Doji variations', 'Learn about Hammers and Shooting Stars'],
        sections: [
            { type: 'text', tldr: 'Candlestick patterns involve one or more candles and can signal reversals or continuation.', body: 'Patterns like the Bullish/Bearish Engulfing, Doji, and Hammer provide powerful, short-term signals about market sentiment.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A Bullish Engulfing pattern suggests:', choices: ['A potential top', 'A potential bottom', 'Indecision'], answer: 1, explain: 'It occurs when a large green candle completely engulfs the previous red candle, signaling a potential reversal to the upside.' },
            ]
        }
      },
      {
        id: 'l2-moving-averages',
        levelId: 'level-2',
        title: 'Mastering Moving Averages',
        time: 20,
        objectives: ['Differentiate SMA and EMA', 'Use MAs for trend direction', 'Identify Golden/Death Crosses'],
        sections: [
            { type: 'text', tldr: 'Moving Averages smooth price to show trend direction. Crossovers can be powerful signals.', body: 'We\'ll explore the difference between Simple and Exponential Moving Averages and how to use them to define dynamic support/resistance and generate trade signals.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'When a short-term moving average crosses above a long-term moving average, it is known as a:', choices: ['Death Cross', 'EMA', 'Golden Cross'], answer: 2, explain: 'A Golden Cross (e.g., 50MA crossing above 200MA) is a classic bullish signal.' },
            ]
        }
      },
      {
        id: 'l2-oscillators',
        levelId: 'level-2',
        title: 'Trading with Oscillators',
        time: 20,
        objectives: ['Master RSI divergence', 'Understand MACD histogram', 'Use Stochastics for entry signals'],
        sections: [
            { type: 'text', tldr: 'Oscillators help identify momentum and overbought/oversold conditions.', body: 'Beyond basic RSI readings, we\'ll dive into divergence, the MACD indicator, and Stochastics to time entries and exits more effectively.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'When price makes a new low but the RSI makes a higher low, it is called:', choices: ['Bearish Divergence', 'Convergence', 'Bullish Divergence'], answer: 2, explain: 'This is bullish divergence, suggesting that downside momentum is fading and a reversal could be near.' },
            ]
        }
      },
      {
        id: 'l2-fibonacci',
        levelId: 'level-2',
        title: 'Fibonacci Retracements',
        time: 15,
        objectives: ['Understand Fibonacci ratios', 'Draw retracement levels correctly', 'Identify key support/resistance zones'],
        sections: [
            { type: 'text', tldr: 'Fibonacci tools help predict where price might pull back to within a trend.', body: 'The Fibonacci sequence is found throughout nature and, for many traders, in financial markets. Key levels like 38.2%, 50%, and 61.8% often act as significant areas of support or resistance.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'The most watched Fibonacci retracement level is often considered to be:', choices: ['23.6%', '50%', '61.8%'], answer: 2, explain: 'The 61.8% "Golden Ratio" is a very significant level for many Fibonacci traders.' },
            ]
        }
      },
      {
        id: 'l2-multiple-timeframes',
        levelId: 'level-2',
        title: 'Multiple Timeframe Analysis',
        time: 18,
        objectives: ['Understand top-down analysis', 'Align short-term signals with long-term trends', 'Avoid "analysis paralysis"'],
        sections: [
            { type: 'text', tldr: 'Analyze the long-term chart for trend, then zoom in for entries.', body: 'Trading only on one timeframe can be misleading. Top-down analysis gives you context and increases the probability of your trades by ensuring you are trading with the dominant market flow.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'It is best practice to find a bearish entry signal on a 5-minute chart when the daily chart is in a strong uptrend.', answer: false, explain: 'This is called counter-trend trading and is very high risk. It\'s better to align your entry timeframe with the higher timeframe trend.' },
            ]
        }
      },
      {
        id: 'l2-journaling',
        levelId: 'level-2',
        title: 'The Trading Journal',
        time: 20,
        objectives: ['Understand the purpose of a journal', 'Track key metrics (R-multiple, win rate)', 'Use your journal to find your edge'],
        sections: [
            { type: 'text', tldr: 'Your journal is the ultimate tool for self-improvement.', body: 'Every professional trader keeps a detailed journal. It\'s not just about logging wins and losses, but about tracking your setups, your psychological state, and reviewing your performance to identify strengths and weaknesses.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'The primary goal of a trading journal is to make you feel bad about your losses.', answer: false, explain: 'The goal is to learn from both wins and losses to objectively improve your trading process.' },
            ]
        }
      },
      {
        id: 'l2-psychology-deep',
        levelId: 'level-2',
        title: 'Psychology: Probability & Patience',
        time: 22,
        objectives: ['Think in probabilities, not certainties', 'Understand that any single trade can lose', 'Develop the patience to wait for your setup'],
        sections: [
            { type: 'text', tldr: 'Trading is a game of probabilities, not a crystal ball. You need an edge, and you need to apply it consistently.', body: 'Even a winning strategy has losing trades. This lesson dives into the mindset required to execute your plan flawlessly over hundreds of trades, accepting losses as a business expense and patiently waiting for high-probability setups.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'If you have a 60% win-rate strategy, you should expect to win the next 6 out of 10 trades in a row.', answer: false, explain: 'Probability doesn\'t work like that in the short term. You could easily have 5, 6, or more losses in a row, even with a winning strategy. The edge plays out over a large sample size.' },
            ]
        }
      },
      {
        id: 'l2-backtesting',
        levelId: 'level-2',
        title: 'Introduction to Backtesting',
        time: 25,
        objectives: ['Define backtesting', 'Understand its importance', 'Learn manual backtesting techniques'],
        sections: [
            { type: 'text', tldr: 'Backtesting is simulating your strategy on historical data to see if it works.', body: 'Would you go into business without a business plan? Backtesting is how you validate your trading plan and build confidence in your edge before risking real money.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'If a strategy was profitable in the past, it is guaranteed to be profitable in the future.', answer: false, explain: 'Past performance is not indicative of future results. However, backtesting provides evidence that a strategy has an edge that is likely to persist.' },
            ]
        }
      },
      {
        id: 'l2-fundamental-analysis-intro',
        levelId: 'level-2',
        title: 'Intro to Fundamental Analysis',
        time: 20,
        objectives: ['Define fundamental analysis', 'Understand key economic indicators', 'Contrast with technical analysis'],
        sections: [
            { type: 'text', tldr: 'Fundamentals look at the "why" behind price moves, based on economic health and company value.', body: 'While we focus on technicals, understanding major fundamental drivers (like interest rate decisions or earnings reports) provides crucial context and helps you avoid trading into high-impact news events.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'Which of the following is an example of fundamental analysis?', choices: ['Identifying a Head and Shoulders pattern', 'Analyzing a company\'s revenue growth', 'Using the RSI indicator'], answer: 1, explain: 'Fundamental analysis is concerned with the intrinsic value of an asset and the economic factors that affect it.' },
            ]
        }
      }
    ],
    bossQuiz: {
      id: 'b2',
      passScore: 80,
      items: [
        { id: 'bq1', type: 'mcq', prompt: 'A Golden Cross is considered a...', choices: ['Bullish Signal', 'Bearish Signal', 'Neutral Signal'], answer: 0, explain: 'A Golden Cross, where a short-term MA crosses above a long-term MA, is a strong bullish signal for many traders.' },
        { id: 'bq2', type: 'truefalse', prompt: 'Top-down analysis involves starting with a long-term chart and moving to a shorter-term chart for execution.', answer: true, explain: 'This method helps align your trades with the dominant market trend, increasing probability.' }
      ]
    }
  },
  {
    id: 'level-3',
    title: 'Advanced',
    description: 'Refine your edge with advanced techniques and professional mindset.',
    lessons: [
       {
        id: 'l3-elliott-wave',
        levelId: 'level-3',
        title: 'Elliott Wave Theory',
        time: 30,
        objectives: ['Understand the 5-3 wave pattern', 'Identify impulse and corrective waves', 'Use waves for market forecasting'],
        sections: [
            { type: 'text', tldr: 'Markets move in repetitive wave patterns, described by Elliott Wave Theory.', body: 'This advanced concept posits that market trends move in five "impulse waves" and correct in three "corrective waves." Mastering this can provide a deep understanding of market structure.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'In a bullish trend, how many impulse waves move upwards?', choices: ['2', '3', '5'], answer: 1, explain: 'Waves 1, 3, and 5 are the impulse waves that move in the direction of the main trend.' },
            ]
        }
      },
       {
        id: 'l3-wyckoff',
        levelId: 'level-3',
        title: 'Wyckoff Method',
        time: 30,
        objectives: ['Understand accumulation and distribution', 'Identify the phases of a Wyckoff cycle', 'Read price and volume for institutional intent'],
        sections: [
            { type: 'text', tldr: 'The Wyckoff Method reveals the intentions of large market operators ("smart money").', body: 'This is a deep-dive into reading the tape, focusing on how institutional players accumulate and distribute positions, leaving clues on the chart through price action and volume.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'The "Spring" in a Wyckoff accumulation schematic is:', choices: ['The final high before a downtrend', 'A shakeout to mislead retail traders', 'The start of a distribution phase'], answer: 1, explain: 'The Spring is a final move down to trip stop losses and create liquidity before the main markup phase begins.' },
            ]
        }
      },
      {
        id: 'l3-order-flow',
        levelId: 'level-3',
        title: 'Order Flow & Market Depth',
        time: 25,
        objectives: ['Read a Depth of Market (DOM) ladder', 'Understand bid/ask dynamics', 'Identify absorption and exhaustion'],
        sections: [
            { type: 'text', tldr: 'Order flow analysis is the art of reading the actual buy and sell orders in real-time.', body: 'Going beyond charts, order flow gives you a microscopic view of the market, allowing you to see where large orders are being placed and executed, offering a significant edge.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'Large market sell orders hitting the bid and the price not moving down is a sign of bearishness.', answer: false, explain: 'This is a sign of absorption, a bullish signal where large passive buyers are absorbing all the selling pressure at a key level.' },
            ]
        }
      },
      {
        id: 'l3-market-correlations',
        levelId: 'level-3',
        title: 'Intermarket Analysis',
        time: 20,
        objectives: ['Understand asset class correlations', 'Use bonds and commodities as leading indicators', 'Build a holistic market view'],
        sections: [
            { type: 'text', tldr: 'No market moves in a vacuum. Learn how asset classes like bonds, stocks, and commodities influence each other.', body: 'Advanced traders watch multiple markets to gain a complete picture. For example, rising bond yields can often signal trouble ahead for the stock market.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A strengthening US Dollar (USD) typically has what effect on gold prices?', choices: ['Positive', 'Negative', 'No effect'], answer: 1, explain: 'Gold is priced in USD, so a stronger dollar makes gold more expensive for foreign buyers, typically leading to lower gold prices (an inverse correlation).' },
            ]
        }
      },
      {
        id: 'l3-sentiment-analysis',
        levelId: 'level-3',
        title: 'Sentiment Analysis',
        time: 18,
        objectives: ['Define market sentiment', 'Use tools like the Put/Call ratio', 'Understand contrarian thinking'],
        sections: [
            { type: 'text', tldr: 'Sentiment analysis gauges the overall mood of the market. Often, it pays to bet against the crowd.', body: 'When market sentiment reaches extremes (extreme fear or extreme greed), it often signals a market turning point. Learning to be a contrarian at these extremes is a professional tactic.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A very high Put/Call ratio suggests that:', choices: ['Traders are extremely bullish', 'The market is calm', 'Traders are extremely bearish (fearful)'], answer: 2, explain: 'A high ratio means many more puts (bets on price going down) are being bought than calls. From a contrarian view, this extreme fear can be a bullish signal.' },
            ]
        }
      },
      {
        id: 'l3-options-basics',
        levelId: 'level-3',
        title: 'Introduction to Options',
        time: 25,
        objectives: ['Define calls and puts', 'Understand strike price and expiration', 'Learn basic option strategies'],
        sections: [
            { type: 'text', tldr: 'Options are versatile tools for speculation, hedging, and income generation.', body: 'This lesson provides a foundational understanding of options contracts, how they are priced, and how you can use them to create strategies with defined risk and high leverage.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'If you are bullish on a stock, you could:', choices: ['Buy a put option', 'Sell a call option', 'Buy a call option'], answer: 2, explain: 'Buying a call option gives you the right, but not the obligation, to buy a stock at a specific price, and it profits if the stock price goes up.' },
            ]
        }
      },
      {
        id: 'l3-automated-trading',
        levelId: 'level-3',
        title: 'Automated Trading Systems',
        time: 30,
        objectives: ['Understand the pros and cons of automation', 'Learn the basics of algorithmic logic', 'Explore platforms for building bots'],
        sections: [
            { type: 'text', tldr: 'Automated trading uses computer programs to execute a trading strategy.', body: 'Algorithmic trading removes human emotion and can execute trades faster than any human. This lesson explores the concepts behind building and testing your own automated strategies.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'An automated strategy completely removes the need for human oversight.', answer: false, explain: 'Automated systems still require monitoring for technical issues, unexpected market conditions, and performance degradation.' },
            ]
        }
      },
      {
        id: 'l3-stats-for-traders',
        levelId: 'level-3',
        title: 'Essential Statistics for Traders',
        time: 25,
        objectives: ['Understand expectancy and standard deviation', 'Analyze your equity curve', 'Learn about Monte Carlo simulations'],
        sections: [
            { type: 'text', tldr: 'Treat trading like a science. Use statistics to rigorously analyze and improve your performance.', body: 'Go beyond win rate and R-multiples. This lesson introduces you to the statistical concepts professionals use to analyze their trading systems, understand their risk of ruin, and manage their drawdown periods.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'A trading system\'s "Expectancy" tells you:', choices: ['How much you will win on the next trade', 'Your average win rate', 'The average amount you can expect to win or lose per trade'], answer: 2, explain: 'Expectancy = (Win Rate * Avg Win Size) - (Loss Rate * Avg Loss Size). A positive expectancy means your system is profitable over the long run.' },
            ]
        }
      },
       {
        id: 'l3-advanced-psychology',
        levelId: 'level-3',
        title: 'Psychology: The Winner\'s Mindset',
        time: 22,
        objectives: ['Understand cognitive biases in trading', 'Develop routines for peak performance', 'Learn to scale up with confidence'],
        sections: [
            { type: 'text', tldr: 'At the highest levels, trading is almost entirely a mental game.', body: 'This lesson covers advanced psychological concepts like confirmation bias, recency bias, and developing the detached, process-oriented mindset necessary for consistent profitability and scaling your trading size.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'mcq', prompt: 'Only looking for information that confirms your existing belief about a trade is an example of:', choices: ['Recency Bias', 'Confirmation Bias', 'Hindsight Bias'], answer: 1, explain: 'Confirmation bias is a dangerous psychological trap that prevents objective analysis.' },
            ]
        }
      },
      {
        id: 'l3-business-of-trading',
        levelId: 'level-3',
        title: 'The Business of Trading',
        time: 20,
        objectives: ['Structure your trading as a business', 'Understand tax implications', 'Create a long-term growth plan'],
        sections: [
            { type: 'text', tldr: 'Serious traders treat their activity as a business, not a hobby.', body: 'This final lesson ties everything together, focusing on the professional aspects of trading, including record-keeping, tax efficiency, and creating a sustainable plan for long-term growth as a professional market operator.' },
        ],
        quiz: {
            attempts: 3,
            passScore: 70,
            items: [
                { id: 'q1', type: 'truefalse', prompt: 'Treating trading as a business means focusing only on the profits, not the process.', answer: false, explain: 'A business owner focuses on refining processes, managing costs (losses), and long-term strategy, not just short-term revenue (profits).' },
            ]
        }
      }
    ],
    bossQuiz: {
      id: 'b3',
      passScore: 80,
      items: [
        { id: 'bq1', type: 'mcq', prompt: 'In Elliott Wave theory, corrective waves move...', choices: ['With the main trend', 'Against the main trend', 'Sideways only'], answer: 1, explain: 'Corrective waves (A, B, C) are counter-trend moves that occur after a 5-wave impulse sequence.' },
        { id: 'bq2', type: 'truefalse', prompt: 'A contrarian trader buys when market sentiment is showing extreme greed.', answer: false, explain: 'A contrarian looks to sell or short when there is extreme greed, and buy when there is extreme fear.' }
      ]
    }
  }
];

export const getLesson = (levelId: string, lessonId: string) => {
  const level = curriculum.find(l => l.id === levelId);
  if (!level) return null;
  const lesson = level.lessons.find(l => l.id === lessonId);
  return lesson || null;
}

export const getLevel = (levelId: string) => {
  return curriculum.find(l => l.id === levelId) || null;
}

export const getQuiz = (levelId: string, lessonId: string) => {
  const lesson = getLesson(levelId, lessonId);
  if (lesson) return lesson.quiz;
  const level = getLevel(levelId);
  if (level && lessonId === 'boss') return level.bossQuiz;
  return null;
}

export const curriculumJSON = JSON.stringify(curriculum.map(level => ({
  id: level.id,
  title: level.title,
  lessons: level.lessons.map(lesson => ({ id: lesson.id, title: lesson.title, time: lesson.time }))
})));
