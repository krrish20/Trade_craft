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
      }
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
    title: 'Risk, Psychology, Discipline',
    description: 'The mental and strategic framework that separates pros from amateurs.',
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
      }
    ],
    bossQuiz: {
      id: 'b2',
      passScore: 80,
      items: []
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
