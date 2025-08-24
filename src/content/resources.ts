

export const glossaryTerms = [
  {
    term: "Ask Price",
    definition: "The lowest price a seller is willing to accept for a security. It's the price at which you can buy."
  },
  {
    term: "Bid Price",
    definition: "The highest price a buyer is willing to pay for a security. It's the price at which you can sell."
  },
  {
    term: "Spread",
    definition: "The difference between the ask and bid price. This is a primary cost of trading."
  },
  {
    term: "Candlestick",
    definition: "A type of price chart that displays the high, low, open, and closing prices of a security for a specific period."
  },
  {
    term: "OHLC",
    definition: "Stands for Open, High, Low, Close. These are the four key data points represented by a candlestick."
  },
  {
    term: "Support",
    definition: "A price level where a downtrend can be expected to pause due to a concentration of demand. Buyers are likely to enter the market, preventing further price decline."
  },
  {
    term: "Resistance",
    definition: "A price level where an uptrend can be expected to pause temporarily, due to a concentration of supply. Sellers are likely to enter the market, preventing further price advance."
  },
  {
    term: "Stop Loss",
    definition: "An order placed with a broker to buy or sell a security once it reaches a certain price. Stop-loss orders are designed to limit an investor's loss on a security position."
  },
  {
    term: "Take Profit",
    definition: "An order that closes your trade once it reaches a certain level of profit. It helps to lock in gains."
  },
  {
    term: "R-Multiple",
    definition: "A way to measure the risk/reward of a trade. 1R is the amount of money you are willing to risk on a trade. A 3R profit means you made three times your initial risk."
  },
  {
    term: "Position Size",
    definition: "The number of units of a security an investor purchases. It's calculated based on account size, risk percentage, and stop loss distance to manage risk."
  },
  {
    term: "Liquidity",
    definition: "The degree to which an asset can be quickly bought or sold in the market without affecting the asset's price. High liquidity means many buyers and sellers."
  },
  {
    term: "Volatility",
    definition: "A statistical measure of the dispersion of returns for a given security or market index. In other words, it refers to the amount of uncertainty or risk about the size of changes in a security's value."
  },
  {
    term: "Slippage",
    definition: "The difference between the expected price of a trade and the price at which the trade is actually executed. Slippage often occurs during periods of higher volatility."
  },
  {
    term: "FOMO (Fear Of Missing Out)",
    definition: "An emotional reaction to price movement, where a trader fears they will miss a potentially profitable opportunity, leading to impulsive and unplanned trades."
  },
  {
    term: "Drawdown",
    definition: "The peak-to-trough decline during a specific period for an investment, trading account, or fund. It is usually quoted as the percentage between the peak and the subsequent trough."
  },
  {
    term: "Hedging",
    definition: "A risk management strategy employed to offset losses in investments by taking an opposite position in a related asset."
  },
  {
    term: "Margin",
    definition: "The money borrowed from a broker to purchase an investment. It is the difference between the total value of an investment and the loan amount."
  },
  {
    term: "Arbitrage",
    definition: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price. It is a trade that profits by exploiting the price differences of identical or similar financial instruments on different markets or in different forms."
  },
  {
    term: "Moving Average (MA)",
    definition: "A stock indicator that is commonly used in technical analysis. The reason for calculating the moving average of a stock is to help smooth out the price data by creating a constantly updated average price."
  },
  {
    term: "RSI (Relative Strength Index)",
    definition: "A momentum oscillator that measures the speed and change of price movements. The RSI oscillates between zero and 100. Traditionally the RSI is considered overbought when above 70 and oversold when below 30."
  }
];

export const candlestickPatterns = [
    {
      name: "Bullish Engulfing",
      type: "Two Candlestick",
      indication: "Bullish Reversal",
      description: "A small bearish candle is followed by a large bullish candle that completely 'engulfs' the previous candle's body. It suggests a potential bottom and a shift to buying pressure."
    },
    {
      name: "Bearish Engulfing",
      type: "Two Candlestick",
      indication: "Bearish Reversal",
      description: "A small bullish candle is followed by a large bearish candle that completely 'engulfs' the previous candle's body. It suggests a potential top and a shift to selling pressure."
    },
    {
      name: "Hammer",
      type: "Single Candlestick",
      indication: "Bullish Reversal",
      description: "A candlestick with a short body, little to no upper wick, and a long lower wick (at least 2x the body). It appears in a downtrend and indicates that buyers stepped in to push prices up from their lows."
    },
    {
      name: "Shooting Star",
      type: "Single Candlestick",
      indication: "Bearish Reversal",
      description: "A candlestick with a short body, little to no lower wick, and a long upper wick (at least 2x the body). It appears in an uptrend and indicates that sellers stepped in to push prices down from their highs."
    },
    {
      name: "Doji",
      type: "Single Candlestick",
      indication: "Indecision / Reversal",
      description: "A candlestick where the open and close prices are virtually equal, resulting in a very small body. It signifies a tug-of-war between buyers and sellers and can signal a potential turning point."
    },
    {
      name: "Morning Star",
      type: "Three Candlestick",
      indication: "Bullish Reversal",
      description: "A three-candle pattern in a downtrend: a long bearish candle, followed by a small-bodied candle (or Doji) that gaps down, followed by a long bullish candle that closes within the first candle's body. Signals a strong potential bottom."
    },
    {
      name: "Evening Star",
      type: "Three Candlestick",
      indication: "Bearish Reversal",
      description: "The opposite of a Morning Star, occurring in an uptrend. A long bullish candle is followed by a small-bodied candle that gaps up, followed by a long bearish candle. Signals a strong potential top."
    },
    {
      name: "Tweezer Bottoms",
      type: "Two Candlestick",
      indication: "Bullish Reversal",
      description: "Two consecutive candlesticks with matching low prices, appearing in a downtrend. It signifies strong support and a potential reversal."
    },
    {
      name: "Tweezer Tops",
      type: "Two Candlestick",
      indication: "Bearish Reversal",
      description: "Two consecutive candlesticks with matching high prices, appearing in an uptrend. It signifies strong resistance and a potential reversal."
    }
];

export const preTradeChecklist = [
    "Is this trade aligned with my overall trading plan and strategy?",
    "Have I analyzed the market structure on multiple timeframes (top-down analysis)?",
    "Is there a clear entry signal based on my rules (e.g., candlestick pattern, indicator signal)?",
    "Have I defined my stop loss level before entering? Is it at a logical price level?",
    "Have I defined a realistic take profit target based on key support/resistance levels?",
    "Is the risk-to-reward ratio for this trade acceptable (e.g., >= 1.5R)?",
    "Have I checked for any major economic news or events that could impact this trade?",
    "Have I calculated the correct position size based on my risk rules?",
    "Am I in a calm and focused state of mind, free from FOMO or revenge trading?",
    "Do I accept the risk of this trade and understand that any single trade can be a loser?",
];

export const postTradeReview = [
    "Did I follow my entry rules exactly?",
    "Did I follow my exit rules (stop loss and take profit) without hesitation?",
    "If I deviated from my plan, what was the reason? (Psychological, technical oversight, etc.)",
    "What was the outcome of the trade? (Profit/Loss in both currency and R-multiples)",
    "What did the market do after I exited? Did it continue in my favor or reverse?",
    "What was the maximum favorable excursion (MFE) and maximum adverse excursion (MAE) of the trade?",
    "What can I learn from this trade, regardless of the outcome?",
    "Log the trade details in my journal (screenshot, entry/exit points, rationale, emotions)."
];
