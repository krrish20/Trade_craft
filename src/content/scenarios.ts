
import type { Scenario } from '@/lib/types';

export const scenarios: Scenario[] = [
  {
    id: 'scn-1',
    title: 'Breakout or Fakeout?',
    setup: "A major stock index has been in a clear uptrend for several weeks. It's now consolidating in a tight, horizontal range just below a key all-time high. Volume has been diminishing during the consolidation.",
    image: {
        src: 'https://placehold.co/800x400.png',
        alt: 'Chart showing a price consolidating in a tight range below a major resistance level.',
        'data-ai-hint': 'breakout consolidation chart'
    },
    decisionPoint: "The price now has a strong green candle that closes above the resistance level. What do you do?",
    outcomes: {
      long: {
        isCorrect: true,
        title: "Good Call: Enter Long.",
        explanation: "This is a classic breakout pattern. The consolidation after a strong trend allows buyers to gather strength. The close above resistance, especially if accompanied by an increase in volume, is a strong signal to enter long. Your target would be based on a measured move of the previous range, and your stop would be placed back inside the range."
      },
      short: {
        isCorrect: false,
        title: "Incorrect Analysis: Avoid Shorting.",
        explanation: "Shorting directly into a breakout of a primary uptrend is a very low-probability trade. While breakouts can fail ('fakeouts'), shorting requires confirmation of that failure (e.g., a strong candle back below the resistance level), not anticipation. Fighting the primary trend is a dangerous game."
      },
      wait: {
        isCorrect: false,
        title: "Too Cautious: Missed Opportunity.",
        explanation: "While waiting for a retest of the breakout level is a valid and safe strategy, it's not always necessary and you risk missing the entire move. A strong close above the level on good volume is often enough confirmation to act. This was a high-probability entry."
      }
    }
  },
  {
    id: 'scn-2',
    title: 'Downtrend Pullback',
    setup: "A currency pair is in a clear downtrend on the daily chart, making lower lows and lower highs. Price has just pulled back to a key resistance level which also lines up with the 50-period EMA (Exponential Moving Average).",
    image: {
        src: 'https://placehold.co/800x400.png',
        alt: 'Chart showing a downtrend with a pullback to a resistance level and a moving average.',
        'data-ai-hint': 'downtrend pullback resistance'
    },
    decisionPoint: "A bearish engulfing candle pattern forms right at this resistance level. What is your move?",
    outcomes: {
      long: {
        isCorrect: false,
        title: "Incorrect Analysis: Do Not Go Long.",
        explanation: "Going long here means you are directly fighting the established downtrend and trading into a confluence of resistance (horizontal level + moving average). A bearish engulfing candle is a strong signal of rejection from this level. This is a low-probability trade."
      },
      short: {
        isCorrect: true,
        title: "Excellent Analysis: Enter Short.",
        explanation: "This is a high-probability 'trend continuation' setup. You have multiple factors aligning: 1) The primary trend is down. 2) Price is at a key resistance zone. 3) A strong bearish reversal candle pattern has formed. This confluence provides a clear signal to enter short, with a stop placed just above the high of the engulfing candle."
      },
      wait: {
        isCorrect: false,
        title: "Too Cautious: Missed Entry.",
        explanation: "While patience is a virtue, the signal here is very clear. The confluence of trend, level, and a strong candlestick pattern provides a compelling reason to enter the trade. Waiting for further confirmation might mean missing the best entry point as the price could move down quickly."
      }
    }
  },
  {
    id: 'scn-3',
    title: 'The Overextended Stock',
    setup: "A popular tech stock has been on a parabolic run, gaining over 50% in three weeks with almost no pullback. It is now far above its 20 and 50-period moving averages. The RSI indicator on the daily chart has been above 85 for five consecutive days.",
    image: {
        src: 'https://placehold.co/800x400.png',
        alt: 'A chart showing a parabolic uptrend with an overbought RSI indicator.',
        'data-ai-hint': 'parabolic uptrend overbought'
    },
    decisionPoint: "The news around the stock is euphoric and everyone on social media is talking about it. What do you do?",
    outcomes: {
      long: {
        isCorrect: false,
        title: "Incorrect Analysis: FOMO Trap.",
        explanation: "This is a classic FOMO (Fear Of Missing Out) trap. While the trend is up, the price is extremely overextended and the risk/reward for a new long position is terrible. The probability of a sharp, painful pullback is very high. Buying at the peak of euphoria is often where inexperienced traders lose the most money."
      },
      short: {
        isCorrect: false,
        title: "Risky Move: Don't short a freight train.",
        explanation: "While the stock is overbought, trying to pick the exact top of a parabolic move is extremely dangerous. The saying 'a market can stay irrational longer than you can stay solvent' applies here. A strong trend can become even stronger before it reverses. Shorting requires a clear sign of a trend break, not just an overbought condition."
      },
      wait: {
        isCorrect: true,
        title: "Professional Decision: Stay Out.",
        explanation: "The correct move is to do nothing. A professional trader recognizes when the risk/reward is not in their favor. There is no high-probability setup here. Buying is too risky due to the extension, and shorting is too risky due to the strong momentum. The best trade is no trade, waiting for the price to pull back to a key support level or form a clear reversal pattern."
      }
    }
  }
];
