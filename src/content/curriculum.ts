
import type { Curriculum } from '@/lib/types';

export const curriculum: Curriculum = [
  {
    id: 'module-1',
    title: 'Module 1: Foundations of Market Analysis',
    description: 'Establish a solid base of knowledge, from market fundamentals to the psychology of trading.',
    lessons: [
      // 20 lessons for Module 1
      { id: 'm1-l1', levelId: 'module-1', title: 'What is a Market?', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l2', levelId: 'module-1', title: 'Asset Classes: Stocks, Forex, Crypto', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l3', levelId: 'module-1', title: 'Market Participants and Their Roles', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l4', levelId: 'module-1', title: 'Choosing a Broker and Trading Platform', time: 12, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l5', levelId: 'module-1', title: 'Understanding Bid, Ask, and Spread', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l6', levelId: 'module-1', title: 'Anatomy of a Candlestick (OHLC)', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l7', levelId: 'module-1', title: 'Basic Order Types: Market, Limit, Stop', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l8', levelId: 'module-1', title: 'Introduction to Charting', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l9', levelId: 'module-1', title: 'Identifying Trends: Uptrend, Downtrend, Range', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l10', levelId: 'module-1', title: 'Core Concept: Support and Resistance', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l11', levelId: 'module-1', title: 'The Role of Volume in Analysis', time: 12, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l12', levelId: 'module-1', title: 'Introduction to Technical Indicators', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l13', levelId: 'module-1', title: 'What is a Trading Plan and Why You Need One', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l14', levelId: 'module-1', title: 'Psychology 101: The Mind of a Trader', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l15', levelId: 'module-1', title: 'Common Cognitive Biases', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l16', levelId: 'module-1', title: 'Introduction to Risk Management', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l17', levelId: 'module-1', title: 'The Concept of R-Multiples', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l18', levelId: 'module-1', title: 'Timeframes and Their Significance', time: 12, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l19', levelId: 'module-1', title: 'What are Trading Sessions?', time: 10, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm1-l20', levelId: 'module-1', title: 'Setting Up Your Trading Journal', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b1', passScore: 80, items: [] }
  },
  {
    id: 'module-2',
    title: 'Module 2: Core Technical Analysis',
    description: 'Deepen your understanding of chart analysis, indicators, and price action.',
    lessons: [
      // 20 lessons for Module 2
      { id: 'm2-l1', levelId: 'module-2', title: 'Mastering Trendlines', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l2', levelId: 'module-2', title: 'Channels and Parallel Lines', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l3', levelId: 'module-2', title: 'Single Candlestick Patterns', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l4', levelId: 'module-2', title: 'Dual Candlestick Patterns', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l5', levelId: 'module-2', title: 'Triple Candlestick Patterns', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l6', levelId: 'module-2', title: 'Moving Averages: SMA vs EMA', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l7', levelId: 'module-2', title: 'Using MAs as Dynamic S/R', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l8', levelId: 'module-2', title: 'MA Crossovers: Golden/Death Cross', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l9', levelId: 'module-2', title: 'Oscillators: Relative Strength Index (RSI)', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l10', levelId: 'module-2', title: 'Oscillators: MACD', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l11', levelId: 'module-2', title: 'Oscillators: Stochastics', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l12', levelId: 'module-2', title: 'Volume Profile Basics', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l13', levelId: 'module-2', title: 'Reversal Chart Patterns: H&S, Double Tops', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l14', levelId: 'module-2', title: 'Continuation Patterns: Flags, Pennants', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l15', levelId: 'module-2', title: 'Bilateral Patterns: Triangles, Wedges', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l16', levelId: 'module-2', title: 'Introduction to Fibonacci Retracements', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l17', levelId: 'module-2', title: 'Combining Indicators for Confirmation', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l18', levelId: 'module-2', title: 'Top-Down Analysis in Practice', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l19', levelId: 'module-2', title: 'Introduction to Market Structure', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm2-l20', levelId: 'module-2', title: 'Identifying Supply and Demand Zones', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b2', passScore: 80, items: [] }
  },
  {
    id: 'module-3',
    title: 'Module 3: Strategy Development',
    description: 'Learn to build, test, and refine a complete trading strategy from scratch.',
    lessons: [
      // 20 lessons for Module 3
      { id: 'm3-l1', levelId: 'module-3', title: 'What is a Trading Edge?', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l2', levelId: 'module-3', title: 'Components of a Trading System', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l3', levelId: 'module-3', title: 'Trend-Following Strategies', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l4', levelId: 'module-3', title: 'Mean-Reversion Strategies', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l5', levelId: 'module-3', title: 'Range-Trading Strategies', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l6', levelId: 'module-3', title: 'Breakout Strategies', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l7', levelId: 'module-3', title: 'Defining Entry Triggers', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l8', levelId: 'module-3', title: 'Placing Logical Stop Losses', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l9', levelId: 'module-3', title: 'Setting Effective Profit Targets', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l10', levelId: 'module-3', title: 'Trade Management Techniques', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l11', levelId: 'module-3', title: 'Introduction to Backtesting', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l12', levelId: 'module-3', title: 'Manual vs. Automated Backtesting', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l13', levelId: 'module-3', title: 'Avoiding Curve-Fitting', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l14', levelId: 'module-3', title: 'Analyzing Backtesting Results', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l15', levelId: 'module-3', title: 'Paper Trading Your Strategy', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l16', levelId: 'module-3', title: 'Building Your Trading Plan Document', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l17', levelId: 'module-3', title: 'Developing a Pre-Trade Checklist', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l18', levelId: 'module-3', title: 'Creating a Post-Trade Review Process', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l19', levelId: 'module-3', title: 'Adapting to Changing Market Conditions', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm3-l20', levelId: 'module-3', title: 'From Strategy to Execution', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b3', passScore: 80, items: [] }
  },
  {
    id: 'module-4',
    title: 'Module 4: Risk & Mindset',
    description: 'Master the two most critical elements of long-term success: risk management and trading psychology.',
    lessons: [
      // 20 lessons for Module 4
      { id: 'm4-l1', levelId: 'module-4', title: 'Deep Dive into Risk Management', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l2', levelId: 'module-4', title: 'Position Sizing Masterclass', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l3', levelId: 'module-4', title: 'Understanding Risk-to-Reward Ratio', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l4', levelId: 'module-4', title: 'Calculating Expectancy', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l5', levelId: 'module-4', title: 'The Concept of Drawdowns', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l6', levelId: 'module-4', title: 'The Risk of Ruin', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l7', levelId: 'module-4', title: 'Portfolio-Level Risk Management', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l8', levelId: 'module-4', title: 'Psychology: Fear and Greed', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l9', levelId: 'module-4', title: 'Psychology: Hope and Regret', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l10', levelId: 'module-4', title: 'Dealing with FOMO', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l11', levelId: 'module-4', title: 'Avoiding Revenge Trading', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l12', levelId: 'module-4', title: 'The Importance of Discipline', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l13', levelId: 'module-4', title: 'Developing Unwavering Patience', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l14', levelId: 'module-4', title: 'Thinking in Probabilities', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l15', levelId: 'module-4', title: 'Embracing Uncertainty', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l16', levelId: 'module-4', title: 'The Trader\'s Mindset: Process over Outcome', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l17', levelId: 'module-4', title: 'Meditation and Mindfulness for Traders', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l18', levelId: 'module-4', title: 'Handling Losing Streaks', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l19', levelId: 'module-4', title: 'Handling Winning Streaks', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm4-l20', levelId: 'module-4', title: 'Journaling for Psychological Improvement', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b4', passScore: 80, items: [] }
  },
  {
    id: 'module-5',
    title: 'Module 5: Advanced Market Dynamics',
    description: 'Explore sophisticated analytical techniques used by professional traders.',
    lessons: [
      // 20 lessons for Module 5
      { id: 'm5-l1', levelId: 'module-5', title: 'Advanced Market Structure', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l2', levelId: 'module-5', title: 'Confluence of Signals', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l3', levelId: 'module-5', title: 'Fibonacci Extensions and Projections', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l4', levelId: 'module-5', title: 'Advanced RSI: Divergence', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l5', levelId: 'module-5', title: 'Advanced MACD Techniques', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l6', levelId: 'module-5', title: 'Bollinger Bands', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l7', levelId: 'module-5', title: 'Ichimoku Cloud', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l8', levelId: 'module-5', title: 'Introduction to Elliott Wave Theory', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l9', levelId: 'module-5', title: 'Impulse and Corrective Waves', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l10', levelId: 'module-5', title: 'Introduction to Wyckoff Method', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l11', levelId: 'module-5', title: 'Accumulation and Distribution Schematics', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l12', levelId: 'module-5', title: 'Fundamental Analysis: Economic Indicators', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l13', levelId: 'module-5', title: 'Fundamental Analysis: Earnings Reports', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l14', levelId: 'module-5', title: 'Sentiment Analysis: Put/Call Ratio', time: 18, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l15', levelId: 'module-5', title: 'Sentiment Analysis: Contrarian Thinking', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l16', levelId: 'module-5', title: 'Intermarket Analysis: Stocks and Bonds', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l17', levelId: 'module-5', title: 'Intermarket Analysis: Commodities and Currencies', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l18', levelId: 'module-5', title: 'Introduction to Order Flow', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l19', levelId: 'module-5', title: 'Reading the Depth of Market (DOM)', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm5-l20', levelId: 'module-5', title: 'Synthesizing Technical, Fundamental, and Sentiment Analysis', time: 30, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b5', passScore: 80, items: [] }
  },
  {
    id: 'module-6',
    title: 'Module 6: The Professional Trader',
    description: 'Transition from student to practitioner with advanced business and psychological training.',
    lessons: [
      // 20 lessons for Module 6
      { id: 'm6-l1', levelId: 'module-6', title: 'Developing a Daily Routine', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l2', levelId: 'module-6', title: 'Advanced Journaling and Performance Review', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l3', levelId: 'module-6', title: 'Essential Statistics for Traders', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l4', levelId: 'module-6', title: 'Understanding Your Equity Curve', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l5', levelId: 'module-6', title: 'Introduction to Options Trading', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l6', levelId: 'module-6', title: 'Basic Hedging Strategies', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l7', levelId: 'module-6', title: 'The Business Plan for Your Trading', time: 30, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l8', levelId: 'module-6', title: 'Understanding Taxes for Traders', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l9', levelId: 'module-6', title: 'Scaling Your Trading Size', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l10', levelId: 'module-6', title: 'Automated Trading: Pros and Cons', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l11', levelId: 'module-6', title: 'The Logic of Algorithmic Trading', time: 25, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l12', levelId: 'module-6', title: 'Advanced Cognitive Biases', time: 22, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l13', levelId: 'module-6', title: 'Achieving Flow State in Trading', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l14', levelId: 'module-6', title: 'Building Resilience as a Trader', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l15', levelId: 'module-6', title: 'The Concept of "Time in the Market"', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l16', levelId: 'module-6', title: 'Finding a Mentor and Community', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l17', levelId: 'module-6', title: 'Continuous Learning and Adaptation', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l18', levelId: 'module-6', title: 'Ethics and Professional Conduct', time: 15, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l19', levelId: 'module-6', title: 'Your Career as a Trader', time: 20, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } },
      { id: 'm6-l20', levelId: 'module-6', title: 'Capstone: Your Trader Identity', time: 30, objectives: [], sections: [], quiz: { attempts: 3, passScore: 70, items: [] } }
    ],
    bossQuiz: { id: 'b6', passScore: 80, items: [] }
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
  if (lessonId === 'boss') {
    const level = getLevel(levelId);
    return level ? level.bossQuiz : null;
  }
  const lesson = getLesson(levelId, lessonId);
  return lesson ? lesson.quiz : null;
}

export const curriculumJSON = JSON.stringify(curriculum.map(level => ({
  id: level.id,
  title: level.title,
  lessons: level.lessons.map(lesson => ({ id: lesson.id, title: lesson.title, time: lesson.time }))
})));
