
export const glossaryTerms = [
  { term: "Ask Price", definition: "The lowest price a seller is willing to accept for a security. It's the price at which you can buy." },
  { term: "Bid Price", definition: "The highest price a buyer is willing to pay for a security. It's the price at which you can sell." },
  { term: "Spread", definition: "The difference between the ask and bid price. This is a primary cost of trading." },
  { term: "Candlestick", definition: "A type of price chart that displays the high, low, open, and closing prices of a security for a specific period." },
  { term: "OHLC", definition: "Stands for Open, High, Low, Close. These are the four key data points represented by a candlestick." },
  { term: "Support", definition: "A price level where a downtrend can be expected to pause due to a concentration of demand. Buyers are likely to enter the market, preventing further price decline." },
  { term: "Resistance", definition: "A price level where an uptrend can be expected to pause temporarily, due to a concentration of supply. Sellers are likely to enter the market, preventing further price advance." },
  { term: "Stop Loss", definition: "An order placed with a broker to buy or sell a security once it reaches a certain price. Stop-loss orders are designed to limit an investor's loss on a security position." },
  { term: "Take Profit", definition: "An order that closes your trade once it reaches a certain level of profit. It helps to lock in gains." },
  { term: "R-Multiple", definition: "A way to measure the risk/reward of a trade. 1R is the amount of money you are willing to risk on a trade. A 3R profit means you made three times your initial risk." },
  { term: "Position Size", definition: "The number of units of a security an investor purchases. It's calculated based on account size, risk percentage, and stop loss distance to manage risk." },
  { term: "Liquidity", definition: "The degree to which an asset can be quickly bought or sold in the market without affecting the asset's price. High liquidity means many buyers and sellers." },
  { term: "Volatility", definition: "A statistical measure of the dispersion of returns for a given security or market index. In other words, it refers to the amount of uncertainty or risk about the size of changes in a security's value." },
  { term: "Slippage", definition: "The difference between the expected price of a trade and the price at which the trade is actually executed. Slippage often occurs during periods of higher volatility." },
  { term: "FOMO (Fear Of Missing Out)", definition: "An emotional reaction to price movement, where a trader fears they will miss a potentially profitable opportunity, leading to impulsive and unplanned trades." },
  { term: "Drawdown", definition: "The peak-to-trough decline during a specific period for an investment, trading account, or fund. It is usually quoted as the percentage between the peak and the subsequent trough." },
  { term: "Hedging", definition: "A risk management strategy employed to offset losses in investments by taking an opposite position in a related asset." },
  { term: "Margin", definition: "The money borrowed from a broker to purchase an investment. It is the difference between the total value of an investment and the loan amount." },
  { term: "Arbitrage", definition: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price. It is a trade that profits by exploiting the price differences of identical or similar financial instruments on different markets or in different forms." },
  { term: "Moving Average (MA)", definition: "A stock indicator that is commonly used in technical analysis. The reason for calculating the moving average of a stock is to help smooth out the price data by creating a constantly updated average price." },
  { term: "RSI (Relative Strength Index)", definition: "A momentum oscillator that measures the speed and change of price movements. The RSI oscillates between zero and 100. Traditionally the RSI is considered overbought when above 70 and oversold when below 30." }
];

export const candlestickPatterns = [
    { name: "Bullish Engulfing", type: "Two Candlestick", indication: "Bullish Reversal", description: "A small bearish candle is followed by a large bullish candle that completely 'engulfs' the previous candle's body. It suggests a potential bottom and a shift to buying pressure." },
    { name: "Bearish Engulfing", type: "Two Candlestick", indication: "Bearish Reversal", description: "A small bullish candle is followed by a large bearish candle that completely 'engulfs' the previous candle's body. It suggests a potential top and a shift to selling pressure." },
    { name: "Hammer", type: "Single Candlestick", indication: "Bullish Reversal", description: "A candlestick with a short body, little to no upper wick, and a long lower wick (at least 2x the body). It appears in a downtrend and indicates that buyers stepped in to push prices up from their lows." },
    { name: "Inverted Hammer", type: "Single Candlestick", indication: "Bullish Reversal", description: "Similar to a Hammer but with a long upper wick and short lower wick. It suggests potential buying pressure following a downtrend." },
    { name: "Shooting Star", type: "Single Candlestick", indication: "Bearish Reversal", description: "A candlestick with a short body, little to no lower wick, and a long upper wick (at least 2x the body). It appears in an uptrend and indicates that sellers stepped in to push prices down from their highs." },
    { name: "Hanging Man", type: "Single Candlestick", indication: "Bearish Reversal", description: "Looks identical to a Hammer but occurs at the end of an uptrend. It warns of potential weakness in the uptrend." },
    { name: "Doji", type: "Single Candlestick", indication: "Indecision / Reversal", description: "A candlestick where the open and close prices are virtually equal, resulting in a very small body. It signifies a tug-of-war between buyers and sellers and can signal a potential turning point." },
    { name: "Spinning Top", type: "Single Candlestick", indication: "Indecision", description: "A candlestick with a short body centered between long upper and lower wicks. It indicates indecision in the market and can be a warning of a potential change in direction." },
    { name: "Morning Star", type: "Three Candlestick", indication: "Bullish Reversal", description: "A three-candle pattern in a downtrend: a long bearish candle, followed by a small-bodied candle (or Doji) that gaps down, followed by a long bullish candle that closes within the first candle's body. Signals a strong potential bottom." },
    { name: "Evening Star", type: "Three Candlestick", indication: "Bearish Reversal", description: "The opposite of a Morning Star, occurring in an uptrend. A long bullish candle is followed by a small-bodied candle that gaps up, followed by a long bearish candle. Signals a strong potential top." },
    { name: "Three White Soldiers", type: "Three Candlestick", indication: "Bullish Reversal", description: "Three consecutive long bullish candles, each opening within the previous candle's body and closing at a new high. A strong bullish signal." },
    { name: "Three Black Crows", type: "Three Candlestick", indication: "Bearish Reversal", description: "Three consecutive long bearish candles, each opening within the previous candle's body and closing at a new low. A strong bearish signal." },
    { name: "Piercing Line", type: "Two Candlestick", indication: "Bullish Reversal", description: "In a downtrend, a bearish candle is followed by a bullish candle that opens below the previous low but closes above the midpoint of the previous bearish candle. A potential bottom signal." },
    { name: "Dark Cloud Cover", type: "Two Candlestick", indication: "Bearish Reversal", description: "In an uptrend, a bullish candle is followed by a bearish candle that opens above the previous high but closes below the midpoint of the previous bullish candle. A potential top signal." },
    { name: "Harami", type: "Two Candlestick", indication: "Reversal / Indecision", description: "A large candle is followed by a much smaller candle whose body is contained within the body of the previous candle. A bullish harami appears in a downtrend, a bearish harami in an uptrend. It indicates a decrease in momentum." },
    { name: "Tweezer Bottoms", type: "Two Candlestick", indication: "Bullish Reversal", description: "Two consecutive candlesticks with matching low prices, appearing in a downtrend. It signifies strong support and a potential reversal." },
    { name: "Tweezer Tops", type: "Two Candlestick", indication: "Bearish Reversal", description: "Two consecutive candlesticks with matching high prices, appearing in an uptrend. It signifies strong resistance and a potential reversal." }
];

export const chartPatterns = [
    { name: "Head and Shoulders", type: "Reversal", indication: "Bearish", description: "A baseline with three peaks, the outside two are close in height and the middle is highest. It signals a potential trend reversal from bullish to bearish." },
    { name: "Inverse Head and Shoulders", type: "Reversal", indication: "Bullish", description: "The opposite of a Head and Shoulders. Three troughs with the middle one being the deepest. It signals a potential trend reversal from bearish to bullish." },
    { name: "Double Top", type: "Reversal", indication: "Bearish", description: "The price reaches a high, retraces, and then rises to a similar high again before declining. It looks like the letter 'M' and signals a potential bearish reversal." },
    { name: "Double Bottom", type: "Reversal", indication: "Bullish", description: "The price drops to a low, retraces, and then drops to a similar low again before rising. It looks like the letter 'W' and signals a potential bullish reversal." },
    { name: "Ascending Triangle", type: "Continuation / Bilateral", indication: "Bullish", description: "A pattern with a horizontal resistance line and a rising support trendline. It often breaks out to the upside, continuing a bullish trend." },
    { name: "Descending Triangle", type: "Continuation / Bilateral", indication: "Bearish", description: "A pattern with a horizontal support line and a descending resistance trendline. It often breaks down to the downside, continuing a bearish trend." },
    { name: "Symmetrical Triangle", type: "Continuation / Bilateral", indication: "Neutral", description: "A pattern with two converging trendlines, one descending and one ascending. The price can break out in either direction, so traders wait for confirmation." },
    { name: "Bull Flag", type: "Continuation", indication: "Bullish", description: "A sharp price rise (the flagpole) followed by a slight downward-sloping consolidation (the flag). It typically resolves with another sharp rise." },
    { name: "Bear Flag", type: "Continuation", indication: "Bearish", description: "A sharp price drop (the flagpole) followed by a slight upward-sloping consolidation (the flag). It typically resolves with another sharp drop." },
    { name: "Pennant", type: "Continuation", indication: "Bullish / Bearish", description: "Similar to a flag, but the consolidation phase is a small symmetrical triangle. It follows a sharp move and typically breaks out in the same direction." },
    { name: "Wedge", type: "Reversal / Continuation", indication: "Bullish / Bearish", description: "Two converging trendlines that are both sloped either up or down. A 'rising wedge' is bearish, while a 'falling wedge' is bullish. Can signal either reversal or continuation." },
    { name: "Cup and Handle", type: "Continuation", indication: "Bullish", description: "A 'U' shaped curve (the cup) followed by a slight downward drift (the handle). A breakout from the handle's resistance line signals a continuation of the uptrend." },
    { name: "Rounding Bottom", type: "Reversal", indication: "Bullish", description: "A long-term reversal pattern that represents a gradual shift in market sentiment from bearish to bullish, shaped like a large 'U'." },
    { name: "Channel", type: "Continuation", indication: "Bullish / Bearish", description: "Two parallel trendlines that contain price action. An ascending channel is bullish, a descending channel is bearish, and a horizontal channel is a range." }
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
