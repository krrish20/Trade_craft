
import type { Scenario } from '@/lib/types';

export const scenarios: Scenario[] = [
  {
    id: 'scn-1',
    title: 'Breakout or Fakeout?',
    setup: "A major stock index has been in a clear uptrend for several weeks. It's now consolidating in a tight, horizontal range just below a key all-time high. Volume has been diminishing during the consolidation.",
    image: {
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=400&auto=format&fit=crop',
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
        src: 'https://images.unsplash.com/photo-1640286599599-4a243538411a?q=80&w=800&h=400&auto=format&fit=crop',
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
        src: 'https://images.unsplash.com/photo-1628216834553-8b78a48740f3?q=80&w=800&h=400&auto=format&fit=crop',
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
  },
  {
    id: 'scn-4',
    title: 'Range-Bound Trading',
    setup: "A stock has been trading sideways for a month between a clear support level at $50 and resistance at $60. The price has just touched the $50 support level for the third time and formed a small bullish hammer candle.",
    image: {
      src: 'https://images.unsplash.com/photo-1678248434193-f497914e4024?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart of a stock trading in a horizontal range.',
      'data-ai-hint': 'ranging market chart'
    },
    decisionPoint: 'What is the most logical action to take?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct: Buy the Support.',
        explanation: 'In a range-bound market, the strategy is to buy at support and sell at resistance. The price rejecting the support level for the third time, confirmed by a bullish hammer, is a high-probability signal to go long, targeting the resistance at $60. The stop-loss would go just below the low of the hammer.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Do Not Short Support.',
        explanation: 'Shorting at a well-defined support level is a low-probability trade. You are betting that a level that has held multiple times will suddenly break, without any confirmation of that break.',
      },
      wait: {
        isCorrect: false,
        title: 'Slightly Too Cautious: Entry is Clear.',
        explanation: 'While waiting can sometimes be prudent, the combination of a strong, respected support level and a classic bullish reversal candle provides a clear signal. Waiting for more confirmation might mean a worse entry price, reducing your potential risk/reward ratio.',
      },
    },
  },
  {
    id: 'scn-5',
    title: 'The Failed Breakdown',
    setup: "In a larger uptrend, a commodity has pulled back and is now testing a key support level. The price briefly dips below the support level for a few hours, tricking breakout sellers into going short.",
    image: {
      src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a price dipping below support and then quickly reclaiming it.',
      'data-ai-hint': 'failed breakdown pattern'
    },
    decisionPoint: 'The price then closes back above the support level with a strong, high-volume bullish candle. What do you do?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Excellent Analysis: Enter Long.',
        explanation: 'This is a classic "failed breakdown" or "support reclaim" pattern. The dip below support trapped short sellers. The strong move back above the level shows that buyers have aggressively taken control. This is a very powerful long signal, as the trapped shorts will need to buy back their positions, adding fuel to the upward move.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: You Are Now Trapped.',
        explanation: 'Shorting after the price has reclaimed the support level means you are now on the wrong side of the market. The failed breakdown is a bullish signal, not a bearish one. Holding a short here would be a losing proposition.',
      },
      wait: {
        isCorrect: false,
        title: 'Missed Opportunity: The Signal Was Given.',
        explanation: 'The combination of the failed move and the strong bullish reclaim candle is the entry signal. Waiting for further confirmation at this point means you are likely to get a much worse entry price, as these moves can be very fast and powerful.',
      },
    },
  },
  {
    id: 'scn-6',
    title: 'News Event Spike',
    setup: 'An unexpected positive news announcement causes a stock to gap up 10% at the market open, on massive volume. It is now trading far above any recent price levels.',
    image: {
      src: 'https://images.unsplash.com/photo-1640286599599-4a243538411a?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a large price gap upwards on a news event.',
      'data-ai-hint': 'news gap up chart'
    },
    decisionPoint: 'The initial frenzy seems to be settling, and the price is moving sideways. What should you do?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Risky Move: Chasing the Gap.',
        explanation: "Buying after a huge gap up is known as chasing. While the news is positive, the risk/reward is very poor. You have no logical place to put a stop-loss, and the stock could easily pull back to fill some of the gap, leading to a large loss. It's an emotional FOMO trade.",
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Do Not Fight the News.',
        explanation: 'Shorting a stock that has gapped up on legitimate, strong positive news is fighting a tidal wave. The underlying reason for the move is bullish, and trying to short it is a very low-probability strategy that can lead to massive losses.',
      },
      wait: {
        isCorrect: true,
        title: 'Professional Decision: Wait and Observe.',
        explanation: 'The best move is to wait. Let the initial volatility die down. A professional trader will wait for a new, low-risk pattern to form, such as a flag or a pullback to a new support level. Let the market show its hand before you commit capital. The initial event is over; now you wait for a proper setup.',
      },
    },
  },
  {
    id: 'scn-7',
    title: 'Volume Climax Reversal',
    setup: 'After a long, sustained downtrend, a stock suddenly experiences a day of massive, capitulatory volume. The price drops sharply in the morning on this huge volume but then reverses and closes near the high of the day, forming a bullish hammer candle.',
    image: {
      src: 'https://images.unsplash.com/photo-1628216834553-8b78a48740f3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a capitulation volume spike at the bottom of a downtrend.',
      'data-ai-hint': 'volume climax bottom'
    },
    decisionPoint: 'What does this price and volume action suggest?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct Analysis: Look for a Long Entry.',
        explanation: 'This is a classic volume climax or "selling climax" bottom. The massive volume indicates that all the weak hands have been forced out of their positions. The reversal shows that large buyers stepped in to absorb all the selling. This often marks the bottom of a move. The next step is to enter long, perhaps on the next candle, with a stop below the low of the climax day.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: The Selling is Exhausted.',
        explanation: 'While the volume was high selling volume initially, the reversal and close near the highs show that the sellers have been overwhelmed by buyers. Shorting now means you are entering just as the selling pressure has likely exhausted itself.',
      },
      wait: {
        isCorrect: false,
        title: 'Slightly Too Cautious: The Signal is Strong.',
        explanation: 'This is one of the strongest reversal signals in technical analysis. While waiting for a higher low to form on the next day can be a safer confirmation, the climax candle itself is a very powerful signal to act on.',
      },
    },
  },
  {
    id: 'scn-8',
    title: 'Support and Resistance Flip',
    setup: 'A cryptocurrency has been in a downtrend and was held down by a strong resistance level at $100. After several attempts, it finally breaks out above $100 with conviction and rallies to $120.',
    image: {
      src: 'https://images.unsplash.com/photo-1678248434193-f497914e4024?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a resistance level being broken and then retested as support.',
      'data-ai-hint': 'resistance support flip'
    },
    decisionPoint: 'The price now pulls back and retests the old resistance level of $100, which should now act as support. It touches $100 and bounces. What do you do?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Excellent Analysis: Enter Long.',
        explanation: 'This is a textbook "resistance becomes support" setup (also called a polarity flip). The successful retest of the old resistance as new support is a very high-probability entry point to join the new uptrend. A stop-loss would be placed just below the $100 level.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: The Trend Has Flipped.',
        explanation: 'The market structure has shifted from bearish to bullish with the breakout above $100. Shorting at what is now a key support level is trading against the new, emerging trend and a high-probability setup.',
      },
      wait: {
        isCorrect: false,
        title: 'Missed Opportunity: This is the Entry.',
        explanation: 'The pullback to and bounce from the previous resistance level *is* the confirmation you should be waiting for. This is the optimal, low-risk entry point. Waiting for more could mean chasing the price higher later on.',
      },
    },
  },
  {
    id: 'scn-9',
    title: 'Bearish Divergence on RSI',
    setup: 'A stock is in an uptrend. It makes a new price high at $200. The RSI indicator also makes a high. The stock then pulls back and rallies again to make a *higher* price high at $210.',
    image: {
      src: 'https://images.unsplash.com/photo-1639755243236-5838531758f3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart with price making a higher high while the RSI indicator makes a lower high.',
      'data-ai-hint': 'rsi bearish divergence'
    },
    decisionPoint: 'However, as the stock makes a new price high at $210, the RSI indicator makes a *lower* high. What does this "bearish divergence" signal?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Incorrect: Ignoring a Warning Sign.',
        explanation: 'Going long here means you are ignoring a classic warning sign. The bearish divergence indicates that the momentum behind the uptrend is weakening. While it is not a direct sell signal by itself, it tells you that the trend may be nearing exhaustion and buying at the top is risky.',
      },
      short: {
        isCorrect: true,
        title: 'Correct Analysis: Prepare for a Short.',
        explanation: 'Bearish divergence is a powerful leading indicator of a potential trend reversal or significant pullback. The smart move is to look for a short entry, perhaps triggered by a break of the recent trendline or a bearish candle pattern. The divergence itself is the setup; you just need a trigger to enter.',
      },
      wait: {
        isCorrect: true,
        title: 'Correct Analysis: Wait for Confirmation.',
        explanation: 'This is also a perfectly valid professional approach. The divergence is a warning, not a sell signal. Waiting for price confirmation, like a break of a key support level or a lower low, before shorting is a prudent way to avoid jumping the gun. This reduces the risk of the divergence failing.',
      },
    },
  },
  {
    id: 'scn-10',
    title: 'The Gap Fill',
    setup: 'Due to overnight news, a stock gapped down from a close of $150 to an open of $140. It sold off a little more to $138, then started to find buyers.',
    image: {
      src: 'https://images.unsplash.com/photo-1640286599599-4a243538411a?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a price gap down and then starting to reverse.',
      'data-ai-hint': 'price gap fill'
    },
    decisionPoint: 'The stock rallies strongly and closes the session at $145. What is the likely target for this upward move?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct Analysis: Target the Gap Fill.',
        explanation: "Gaps in the chart often act like a vacuum, pulling price back to 'fill' them. Since the stock has shown strong buying pressure after the initial sell-off, the most logical technical target is the bottom of the gap at $150. A trader could be long, targeting this level.",
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Fighting the Momentum.',
        explanation: 'The strong rally off the lows shows that buyers are in control for now. Shorting into this strength before the gap is filled is a low-probability trade. The path of least resistance is currently upwards towards the gap.',
      },
      wait: {
        isCorrect: false,
        title: 'Analysis Required: There is a clear target.',
        explanation: 'While waiting is a valid action, the question asks for the likely target. Technical analysis suggests the gap fill at $150 is the most probable objective for the current price move. Recognizing this target is a key part of the analysis.',
      },
    },
  },
  {
    id: 'scn-11',
    title: 'The Low-Volume Breakout',
    setup: 'A cryptocurrency has formed a perfect ascending triangle pattern over several days, a typically bullish pattern. The resistance is at $2.00.',
    image: {
      src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart of an ascending triangle breaking out on low volume.',
      'data-ai-hint': 'low volume breakout'
    },
    decisionPoint: 'The price finally breaks above the $2.00 resistance, but the volume on the breakout candle is significantly lower than the average volume of the previous days. What should you be cautious of?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Risky Entry: Be Wary of Low Volume.',
        explanation: 'Breakouts need high volume to be considered legitimate. High volume shows conviction from buyers. A low-volume breakout suggests a lack of participation and commitment, significantly increasing the chances that this is a "fakeout" and the price will fall back into the pattern.',
      },
      short: {
        isCorrect: false,
        title: 'Too Early: Don\'t Anticipate Failure.',
        explanation: 'While the low volume is a red flag, you should not immediately short the breakout. A move can sometimes start on low volume and pick up steam. The correct approach is not to trust the long side, but not to fight it either until there is confirmation of failure.',
      },
      wait: {
        isCorrect: true,
        title: 'Correct Decision: Wait for Confirmation.',
        explanation: 'The low volume is a major warning sign. The professional move is to wait. Either wait for volume to come in and confirm the breakout, or wait for the price to fall back below the breakout level to confirm the failure, which might then offer a shorting opportunity.',
      },
    },
  },
  {
    id: 'scn-12',
    title: 'The EMA Crossover Signal',
    setup: 'On the daily chart, the 50-period EMA for a stock has just crossed above the 200-period EMA. This event is known as a "Golden Cross".',
    image: {
      src: 'https://images.unsplash.com/photo-1628216834553-8b78a48740f3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a 50 EMA crossing above a 200 EMA (Golden Cross).',
      'data-ai-hint': 'golden cross chart'
    },
    decisionPoint: 'The price itself is trading slightly above both moving averages. How should you interpret this signal?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct Interpretation: Look for Long Setups.',
        explanation: 'A Golden Cross is a long-term bullish signal indicating a potential major trend change from bearish to bullish. While it is a lagging indicator (it happens after the price has already started to rise), it confirms that the momentum has shifted. You should now be actively looking for low-risk long entry opportunities, such as pullbacks to the moving averages.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Fighting a Major Signal.',
        explanation: 'Shorting after a Golden Cross has occurred is trading directly against a powerful, long-term bullish confirmation signal. This is a very low-probability approach. The underlying momentum is now considered bullish.',
      },
      wait: {
        isCorrect: true,
        title: 'Also Correct: Wait for a Setup.',
        explanation: 'This is a perfectly valid approach. The Golden Cross is a confirmation of a new bullish environment, not an immediate entry signal. The professional trader would see this, accept the bullish bias, and then patiently wait for a high-probability, low-risk setup (like a pullback) to actually enter a trade.',
      },
    },
  },
  {
    id: 'scn-13',
    title: 'Inside a Choppy Range',
    setup: 'For the past two weeks, a forex pair has been trading in a very choppy, unpredictable sideways range. There is no clear support or resistance, just erratic price swings.',
    image: {
      src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a very messy and choppy price range.',
      'data-ai-hint': 'choppy market range'
    },
    decisionPoint: 'The price is currently in the middle of this messy range. What is the professional course of action?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Incorrect: Gambling in the Chop.',
        explanation: 'Entering a trade in the middle of a messy, undefined range is gambling. There are no clear levels to define your risk, and the price action is random. This is a recipe for being "chopped up" by small, meaningless moves.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Gambling in the Chop.',
        explanation: 'Just like going long, shorting in the middle of this range is a coin flip. There is no definable edge or high-probability setup. You are trading in what traders call "noise".',
      },
      wait: {
        isCorrect: true,
        title: 'Professional Decision: Stay on the Sidelines.',
        explanation: 'The highest probability action is to do nothing. A key skill of a professional trader is recognizing when market conditions are not suitable for their strategy. In a messy, choppy market, the best trade is no trade. Wait for the price to break out of the range and establish a clear trend before considering an entry.',
      },
    },
  },
  {
    id: 'scn-14',
    title: 'The Double Top Reversal',
    setup: 'After a strong uptrend, a stock rallies to a high of $300 and pulls back. It then rallies again but fails to break $300, stalling at $299 before turning lower. This forms a "Double Top" pattern.',
    image: {
      src: 'https://images.unsplash.com/photo-1678248434193-f497914e4024?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a double top bearish reversal pattern.',
      'data-ai-hint': 'double top pattern'
    },
    decisionPoint: 'The price then breaks below the "neckline" (the support level of the pullback between the two tops). What does this signal?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Incorrect: The Uptrend is Over.',
        explanation: 'A Double Top is a classic bearish reversal pattern. Buying after the neckline has been broken is trading against a strong signal that the trend has shifted from bullish to bearish.',
      },
      short: {
        isCorrect: true,
        title: 'Correct Analysis: Enter Short.',
        explanation: 'The break of the neckline is the confirmation of the Double Top pattern and the signal to enter a short position. The stop-loss would be placed above the neckline or the highs of the pattern, and the target is often a measured move down equal to the height of the pattern.',
      },
      wait: {
        isCorrect: false,
        title: 'Missed Opportunity: The Signal is Now.',
        explanation: 'Waiting after the neckline has broken means you are missing the primary entry signal for this classic reversal pattern. The break of the neckline is the confirmation that sellers have taken control.',
      },
    },
  },
  {
    id: 'scn-15',
    title: 'The Undefined Setup',
    setup: 'You open your charts and see a stock you follow has moved up a bit. It is not near any major support or resistance level. It is not overbought or oversold. No clear chart pattern has formed.',
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart with ambiguous price action in the middle of nowhere.',
      'data-ai-hint': 'ambiguous price chart'
    },
    decisionPoint: 'You feel like you should be trading. What do you do?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Incorrect: Trading Without an Edge.',
        explanation: 'This is trading out of boredom, not because a valid setup from your trading plan has appeared. There is no quantifiable reason to go long here. It is an impulsive decision.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Trading Without an Edge.',
        explanation: 'Just like going long, there is no logical reason to short here. The price is not at resistance, and there is no bearish pattern. This would be a random gamble.',
      },
      wait: {
        isCorrect: true,
        title: 'Professional Decision: No Setup, No Trade.',
        explanation: 'This is the most important skill a trader can learn. If none of the predefined, high-probability setups from your trading plan are present, you do not trade. Your job is to wait patiently for your edge to appear. Trading for the sake of trading is the quickest way to lose capital.',
      },
    },
  },
  {
    id: 'scn-16',
    title: 'Ignoring Higher Timeframe Trend',
    setup: 'The weekly chart of a forex pair is in a powerful, clear uptrend. However, on the 15-minute chart, a small head and shoulders pattern (a bearish reversal pattern) has formed.',
    image: {
      src: 'https://images.unsplash.com/photo-1639755243236-5838531758f3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'A small bearish pattern on a lower timeframe within a larger uptrend.',
      'data-ai-hint': 'timeframe conflict chart'
    },
    decisionPoint: 'You are considering shorting the break of the 15-minute head and shoulders neckline. What is the major risk here?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Analysis Required: Long is better, but not yet.',
        explanation: 'While being long aligns with the higher timeframe trend, there is currently a small bearish pattern forming. The correct move is not to immediately go long, but to wait for this small bearish pattern to fail.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: Fighting the Primary Trend.',
        explanation: 'This is a "counter-trend" trade. While it can sometimes work for a small scalp, you are shorting against the primary buying pressure shown on the weekly chart. These setups have a much lower probability of success and can reverse on you very quickly. The higher timeframe trend is a much more powerful force.',
      },
      wait: {
        isCorrect: true,
        title: 'Correct Decision: Wait for Alignment.',
        explanation: 'The professional approach is to wait for the lower timeframe to come back into alignment with the higher timeframe. You should ignore the small bearish pattern and instead wait for a bullish setup to form on the 15-minute chart, which would allow you to enter long in the direction of the powerful weekly trend.',
      },
    },
  },
  {
    id: 'scn-17',
    title: 'The Parabolic Short Squeeze',
    setup: 'A heavily shorted stock starts to rise. As it moves up, short sellers are forced to buy back their shares to cover their positions. This buying pressure causes the price to accelerate upwards, forcing more shorts to cover.',
    image: {
      src: 'https://images.unsplash.com/photo-1628216834553-8b78a48740f3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'A chart showing a parabolic move upwards driven by a short squeeze.',
      'data-ai-hint': 'short squeeze chart'
    },
    decisionPoint: 'The result is a parabolic, almost vertical move upwards on massive volume. What should you absolutely not do?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Too Late: Chasing the Squeeze.',
        explanation: 'While the move is up, entering long at the peak of a parabolic short squeeze is extremely risky. These moves are volatile and can reverse just as quickly as they started. You would be buying at the point of maximum risk.',
      },
      short: {
        isCorrect: false,
        title: 'Disastrous Move: Shorting a Squeeze.',
        explanation: 'This is one of the most dangerous things a trader can do. Shorting into a short squeeze is like trying to stop a freight train with a bicycle. The buying pressure is immense and irrational, and you can lose more than your initial capital very quickly. Never short a squeeze.',
      },
      wait: {
        isCorrect: true,
        title: 'Correct Decision: Do Not Participate.',
        explanation: 'A short squeeze is a chaotic, unpredictable event. It is not a high-probability setup for either a long or a short entry. The professional trader recognizes this as a dangerous environment and stays out completely, preserving their capital for when a clear, logical setup appears.',
      },
    },
  },
  {
    id: 'scn-18',
    title: 'The Liquidity Grab',
    setup: 'A stock is in an uptrend and has formed a clear swing low (support) at $80. Many traders have placed their stop-loss orders just below this level.',
    image: {
      src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing price briefly dipping below a key low to trigger stops.',
      'data-ai-hint': 'liquidity grab stop hunt'
    },
    decisionPoint: 'The price quickly drops to $79.50, triggering all the stops, and then immediately reverses with force, closing back above $80. What was the purpose of this move?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct Analysis: Enter Long.',
        explanation: 'This was a "liquidity grab" or "stop hunt". Large institutions drove the price down to trigger the sell-stop orders, providing them with the liquidity needed to fill their large buy orders at a better price. The immediate reversal is a very strong signal that the trend is about to resume upwards. This is a high-probability long entry.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: You Fell for the Trap.',
        explanation: 'Shorting on the break of $80 means you provided the liquidity for the large buyers. The immediate and forceful rejection of the lower prices shows that the downward move was a trap, not a genuine breakdown.',
      },
      wait: {
        isCorrect: false,
        title: 'Missed Opportunity: The Signal Was the Reclaim.',
        explanation: 'The signal is the entire sequence of events: the hunt below the low and the powerful reclaim of the level. Waiting for more confirmation means you will miss the explosive move that often follows a liquidity grab.',
      },
    },
  },
  {
    id: 'scn-19',
    title: 'The Doji of Indecision',
    setup: 'After a very strong, multi-day uptrend, the latest daily candle is a Doji. A Doji is a candle with a very small body, meaning the open and close price were almost the same.',
    image: {
      src: 'https://images.unsplash.com/photo-1684369175838-34828a135467?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'A chart showing a doji candlestick at the top of an uptrend.',
      'data-ai-hint': 'doji candlestick uptrend'
    },
    decisionPoint: 'This Doji appears at a new high. What does this candle signify?',
    outcomes: {
      long: {
        isCorrect: false,
        title: 'Risky: Ignoring the Warning.',
        explanation: 'A Doji after a strong trend signifies a pause and indecision. The balance between buyers and sellers is now equal. Continuing to buy here is risky, as the buying momentum that drove the trend has clearly stalled.',
      },
      short: {
        isCorrect: false,
        title: 'Too Early: Indecision is not Confirmation.',
        explanation: 'While the Doji is a warning sign for the bulls, it is not an outright sell signal. It signals indecision, which could lead to a reversal, but it could also lead to a brief pause before the trend continues. Shorting requires more confirmation.',
      },
      wait: {
        isCorrect: true,
        title: 'Correct Decision: Wait for the Next Move.',
        explanation: 'The Doji signals indecision. The professional move is to wait and see how the market resolves this indecision. A break below the Doji\'s low could trigger a short entry, while a break above its high could signal a continuation. Acting on the Doji itself is premature; you must wait for the next candle to confirm the market\'s direction.',
      },
    },
  },
  {
    id: 'scn-20',
    title: 'The Break and Retest',
    setup: 'A currency pair has been in a downtrend, defined by a clear descending trendline. The price has just broken out *above* this trendline with a strong bullish candle.',
    image: {
      src: 'https://images.unsplash.com/photo-1678248434193-f497914e4024?q=80&w=800&h=400&auto=format&fit=crop',
      alt: 'Chart showing a breakout of a trendline and a subsequent retest.',
      'data-ai-hint': 'break retest trendline'
    },
    decisionPoint: 'You missed the initial breakout. The price is now pulling back to retest the top of the broken trendline. What is this an opportunity for?',
    outcomes: {
      long: {
        isCorrect: true,
        title: 'Correct Analysis: A Second Chance Entry.',
        explanation: 'This is a classic "break and retest" setup. The initial breakout signals a potential trend change. The pullback to retest the broken trendline (which may now act as support) provides a lower-risk, higher-probability entry than chasing the initial breakout candle. This is the entry point patient traders wait for.',
      },
      short: {
        isCorrect: false,
        title: 'Incorrect: The Trend Has Shifted.',
        explanation: 'The breakout above the descending trendline is a clear signal that the bearish momentum has ended and buyers are taking control. Shorting at the retest is fighting this new emerging uptrend.',
      },
      wait: {
        isCorrect: false,
        title: 'Missed Opportunity: This IS the Setup.',
        explanation: 'While you missed the initial break, the retest IS the setup you should be looking for. It offers a more defined risk level (a stop below the trendline) and a better entry price. Waiting longer will likely mean you miss the move entirely.',
      },
    },
  }
];
