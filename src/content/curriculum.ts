
import type { Curriculum } from '@/lib/types';

export const curriculum: Curriculum = [
  {
    id: 'module-1',
    title: 'Module 1: Foundations of Market Analysis',
    description: 'Establish a solid base of knowledge, from market fundamentals to the psychology of trading.',
    lessons: [
      { 
        id: 'm1-l1', 
        levelId: 'module-1', 
        title: 'What is a Market?', 
        time: 10, 
        objectives: [
          "Define what a financial market is.",
          "Understand the purpose and function of markets.",
          "Differentiate between primary and secondary markets."
        ], 
        sections: [
          {
            type: 'text',
            tldr: "A market is where buyers and sellers meet to exchange goods, services, or financial instruments. Financial markets facilitate the trading of assets like stocks and currencies.",
            body: "At its core, a market is any place that brings together buyers and sellers. In the financial world, markets are where participants trade financial securities (like stocks), commodities (like gold), and other fungible items at prices determined by supply and demand. These markets are the backbone of a modern economy, allowing capital to flow to where it's needed most, enabling companies to raise money for growth, and giving individuals opportunities to invest and grow their wealth. There are primary markets, where new securities are issued for the first time (like an IPO), and secondary markets (like the New York Stock Exchange), where investors trade those securities among themselves."
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'Abstract representation of a bustling financial market with charts and graphs.',
            'data-ai-hint': 'financial market'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l2', 
        levelId: 'module-1', 
        title: 'Asset Classes: Stocks, Forex, Crypto', 
        time: 15, 
        objectives: [
          "Identify three major asset classes.",
          "Describe the basic characteristics of stocks (equities).",
          "Describe the basic characteristics of Forex (foreign exchange).",
          "Describe the basic characteristics of cryptocurrencies."
        ], 
        sections: [
          {
            type: 'text',
            tldr: "Asset classes are groups of similar financial instruments. Major ones include stocks (ownership in a company), Forex (trading national currencies), and cryptocurrencies (digital assets).",
            body: "An asset class is a category of investments with similar characteristics. Understanding them helps you diversify. \n1. **Stocks (Equities):** When you buy a stock, you're buying a small piece of ownership in a public company (like Apple or Amazon). You hope the company does well, increasing the value of your share. \n2. **Forex (Foreign Exchange):** This is the market for trading national currencies against each other (e.g., buying Euros with US Dollars). It's the largest, most liquid market in the world, driven by global economics, interest rates, and geopolitics. \n3. **Cryptocurrencies:** These are digital or virtual tokens that use cryptography for security. Bitcoin and Ethereum are famous examples. They are decentralized and operate on a technology called blockchain. This asset class is known for its high volatility and technological innovation."
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'Icons representing stocks, forex currency pairs, and cryptocurrency coins.',
            'data-ai-hint': 'investment icons'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l3', 
        levelId: 'module-1', 
        title: 'Market Participants and Their Roles', 
        time: 10, 
        objectives: [
          "Differentiate between retail and institutional traders.",
          "Understand the role of a broker.",
          "Learn about market makers and their function."
        ], 
        sections: [
           {
            type: 'text',
            tldr: "Markets are made up of different players. Retail traders are individuals like you. Institutional traders are large firms like banks. Brokers execute trades for you, and market makers provide liquidity.",
            body: "The market is a diverse ecosystem. **Retail Traders** are individual investors who buy and sell securities for their personal accounts. **Institutional Traders** are large entities that trade on a massive scale, such as banks, hedge funds, and pension funds. Their actions can significantly move the market. **Brokers** are intermediaries that execute trade orders on behalf of their clients (both retail and institutional). **Market Makers** are a special type of institutional trader who provides liquidity by being willing to both buy and sell a particular asset, profiting from the bid-ask spread."
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'Diagram showing the relationship between retail traders, brokers, and the larger market.',
            'data-ai-hint': 'market structure'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l4', 
        levelId: 'module-1', 
        title: 'Choosing a Broker and Trading Platform', 
        time: 12, 
        objectives: [
          "List key factors to consider when choosing a broker.",
          "Understand the purpose of a trading platform.",
          "Recognize the importance of regulation and security."
        ], 
        sections: [
          {
            type: 'text',
            tldr: "Your broker gives you access to the markets. When choosing one, consider its fees, regulation, available assets, and the quality of its trading platform (the software you use to trade).",
            body: "Choosing the right broker is a critical first step. You need a broker to execute your trades. Key factors to consider include: \n1. **Regulation:** Is the broker licensed by a reputable financial authority (like the SEC in the US)? This is crucial for the safety of your funds. \n2. **Fees & Commissions:** How does the broker make money? Understand their fee structure, including spreads, commissions per trade, and overnight fees. \n3. **Trading Platform:** This is the software you'll use to analyze charts and place orders. Is it user-friendly, stable, and does it have the tools you need? \n4. **Asset Selection:** Does the broker offer the markets you want to trade (e.g., specific stocks, crypto, or forex pairs)? \n5. **Customer Support:** How can you get help when you need it?"
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'Screenshot of a generic, clean trading platform interface.',
            'data-ai-hint': 'trading platform'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l5', 
        levelId: 'module-1', 
        title: 'Understanding Bid, Ask, and Spread', 
        time: 10, 
        objectives: [
          "Define 'Bid' price.",
          "Define 'Ask' price.",
          "Explain what the 'Spread' is and why it's a cost."
        ], 
        sections: [
          {
            type: 'text',
            tldr: "The Bid is the highest price a buyer will pay. The Ask is the lowest price a seller will accept. The Spread is the small difference between these two prices, and it's how brokers often make money.",
            body: "Every tradable asset has two prices at any given moment: the Bid and the Ask. \n- **Bid Price:** The price at which you can SELL the asset. It represents the highest price a buyer in the market is willing to pay. \n- **Ask Price:** The price at which you can BUY the asset. It represents the lowest price a seller in the market is willing to accept. \nThe Ask price is always slightly higher than the Bid price. The difference between them is called the **Spread**. This spread is a fundamental cost of trading. When you buy at the ask and immediately sell at the bid, you incur a small loss equal to the spread. This is one of the primary ways brokers generate revenue."
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'Diagram clearly showing the Bid price, the Ask price, and the Spread in between.',
            'data-ai-hint': 'bid ask spread'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l6', 
        levelId: 'module-1', 
        title: 'Anatomy of a Candlestick (OHLC)', 
        time: 15, 
        objectives: [
          "Identify the four data points of a candlestick (OHLC).",
          "Differentiate between a bullish and a bearish candlestick.",
          "Understand what the 'body' and 'wicks' represent."
        ], 
        sections: [
          {
            type: 'text',
            tldr: "A candlestick chart is a popular way to view price. Each candle shows the Open, High, Low, and Close (OHLC) prices for a time period. The main body shows the open/close range, and wicks show the highs/lows.",
            body: "Candlesticks are the language of the market. Each candle tells a story about the battle between buyers and sellers over a specific time period (e.g., one day). It has four key components: \n- **Open:** The price at the beginning of the period. \n- **High:** The highest price reached during the period. \n- **Low:** The lowest price reached during the period. \n- **Close:** The price at the end of the period. \nThe thick part of the candle is the **Body**, which represents the range between the open and close. The thin lines sticking out are the **Wicks** (or shadows), which represent the highest and lowest prices reached. If the close is above the open, it's a bullish (up) candle, often colored green or white. If the close is below the open, it's a bearish (down) candle, often colored red or black."
          },
          {
            type: 'image',
            src: 'https://placehold.co/800x400.png',
            alt: 'A large, clear diagram showing the parts of a bullish and bearish candlestick: open, high, low, close, body, and wicks.',
            'data-ai-hint': 'candlestick chart'
          }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l7', 
        levelId: 'module-1', 
        title: 'Basic Order Types: Market, Limit, Stop', 
        time: 15, 
        objectives: [
            "Explain how a 'Market' order works.",
            "Explain how a 'Limit' order works.",
            "Explain how a 'Stop' order works."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Orders are how you tell your broker to trade. A Market order buys/sells immediately at the current price. A Limit order buys/sells at a specific price or better. A Stop order is triggered only when a certain price is reached, often used to limit losses.",
                body: "You interact with the market by placing orders. The three most basic types are: \n1. **Market Order:** An instruction to buy or sell immediately at the best available current price. You get into the trade fast, but you might not get the exact price you saw due to market movement (this is called slippage). \n2. **Limit Order:** An instruction to buy or sell at a specific price or better. A buy limit is set below the current price, and a sell limit is set above. Your order will only fill if the market reaches your price, so there's no guarantee of execution. \n3. **Stop Order:** An instruction that becomes a market order once a specific price (the 'stop price') is reached. A 'Stop-Loss' is used to exit a losing trade automatically to prevent further losses. A 'Stop-Entry' can be used to enter a trade once a trend shows momentum by breaking a certain level."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A chart with examples of where Market, Limit, and Stop orders would be placed.',
                'data-ai-hint': 'trade order types'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l8', 
        levelId: 'module-1', 
        title: 'Introduction to Charting', 
        time: 10, 
        objectives: [
            "Understand the purpose of a price chart.",
            "Identify the X-axis (time) and Y-axis (price).",
            "Recognize different chart types (Line, Bar, Candlestick)."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "A chart is a visual representation of an asset's price over time. Price is on the vertical Y-axis, and time is on the horizontal X-axis. Candlestick charts are most popular because they show the most information.",
                body: "Charting is the foundation of technical analysis. A price chart is simply a graph that plots the price movement of an asset over a period of time. The vertical axis (Y-axis) represents the price scale, and the horizontal axis (X-axis) represents the time scale. By analyzing historical price data, traders try to identify patterns and trends to predict future movements. \nWhile there are several chart types, three are most common: \n- **Line Chart:** A simple chart that connects the closing prices over a time period. Good for seeing the big picture trend. \n- **Bar Chart:** Shows the open, high, low, and close (OHLC) for each period, but in a less visual way than candlesticks. \n- **Candlestick Chart:** Also shows the OHLC, but the 'body' of the candle makes it easy to see the relationship between the open and close, providing a powerful at-a-glance view of price action."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'Side-by-side comparison of a Line, Bar, and Candlestick chart showing the same price data.',
                'data-ai-hint': 'chart types'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l9', 
        levelId: 'module-1', 
        title: 'Identifying Trends: Uptrend, Downtrend, Range', 
        time: 15, 
        objectives: [
            "Define an 'Uptrend'.",
            "Define a 'Downtrend'.",
            "Define a 'Ranging' market."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Markets move in three ways: up, down, or sideways. An uptrend consists of higher highs and higher lows. A downtrend is lower highs and lower lows. A range is when the price bounces between a consistent high and low.",
                body: "The cornerstone of technical analysis is identifying the prevailing trend. 'The trend is your friend' is a classic trading maxim. \n- **Uptrend:** A market is in an uptrend when the price is making a consistent series of 'higher highs' (each peak is higher than the last) and 'higher lows' (each trough is higher than the last). This indicates that buyers are in control. \n- **Downtrend:** A market is in a downtrend when it's making 'lower highs' (each peak is lower than the last) and 'lower lows' (each trough is lower than the last). This shows that sellers are in control. \n- **Range (or Sideways Market):** A market is ranging when price is trading horizontally, bouncing between a definable level of support (the floor) and resistance (the ceiling). This indicates a period of indecision or consolidation."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'Three mini-charts clearly illustrating an uptrend, a downtrend, and a ranging market.',
                'data-ai-hint': 'market trends'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l10', 
        levelId: 'module-1', 
        title: 'Core Concept: Support and Resistance', 
        time: 18, 
        objectives: [
            "Define Support as a price 'floor'.",
            "Define Resistance as a price 'ceiling'.",
            "Understand why these levels form and their significance."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Support is a price level where buying pressure tends to be strong enough to prevent the price from falling further. Resistance is a level where selling pressure is strong enough to stop the price from rising higher. These are key zones for making trading decisions.",
                body: "Support and Resistance are two of the most fundamental concepts in trading. \n- **Support:** Think of support as a price floor. It's a level or zone on the chart where a downtrend is likely to pause or reverse because demand (buying interest) is concentrated there. When price approaches a support level, traders expect buyers to step in and push the price back up. \n- **Resistance:** Resistance is the opposite; it's a price ceiling. It's a level where an uptrend is likely to pause or reverse due to a concentration of supply (selling interest). As price nears a resistance level, sellers are expected to take control and push the price down. These levels are created by the collective memory and psychology of market participants and are critical for identifying potential entry and exit points."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A chart with horizontal lines clearly drawn at key Support and Resistance levels, with price reacting to them.',
                'data-ai-hint': 'support resistance'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l11', 
        levelId: 'module-1', 
        title: 'The Role of Volume in Analysis', 
        time: 12, 
        objectives: [
            "Define trading volume.",
            "Understand how volume confirms trends.",
            "Recognize how volume can signal trend weakness."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Volume is the total number of shares or contracts traded in a period. High volume confirms the strength of a price move. Low volume during a trend can signal that it's running out of steam.",
                body: "Volume measures the amount of trading activity in an asset for a given period. It's typically displayed as a histogram at the bottom of your chart. Volume is a crucial secondary indicator because it reveals the conviction behind a price move. \n- **Confirmation:** In a healthy uptrend, volume should ideally increase as prices rise and decrease as prices pull back. This shows strong buying interest. In a downtrend, volume should increase as prices fall. This confirms the selling pressure. \n- **Divergence/Weakness:** If price makes a new high but on very low volume, it can be a warning sign that the trend lacks conviction and might be ready to reverse. Similarly, a breakout from a pattern on low volume is less likely to be successful. Volume tells you how much 'fuel' is behind the market's move."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A price chart with a volume histogram at the bottom, highlighting how volume increases on strong trend moves.',
                'data-ai-hint': 'volume analysis'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l12', 
        levelId: 'module-1', 
        title: 'Introduction to Technical Indicators', 
        time: 10, 
        objectives: [
            "Explain what a technical indicator is.",
            "Differentiate between leading and lagging indicators.",
            "Understand that indicators are tools, not crystal balls."
        ], 
        sections: [
             {
                type: 'text',
                tldr: "Indicators are mathematical calculations based on price and/or volume, which are plotted on a chart to help you analyze the market. They are tools to supplement your analysis, not to be followed blindly.",
                body: "Technical indicators are the tools of a chartist. They are calculations based on historical price, volume, or open interest data. They are not magic; they simply present the same price data in a different, often more digestible, format. \nThere are two main categories: \n- **Lagging Indicators:** These indicators follow the price action and are used to confirm a trend that has already started. Moving Averages are a prime example. They are great for trend-following systems. \n- **Leading Indicators (Oscillators):** These indicators are designed to anticipate future price movements. They often measure momentum and can signal overbought or oversold conditions. The Relative Strength Index (RSI) is a classic example. \nIt's crucial to remember that no indicator is perfect. They are best used in combination with price action analysis, not as standalone decision-making tools."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A chart showing a Moving Average (lagging) on the price and an RSI indicator (leading) in a separate pane below.',
                'data-ai-hint': 'technical indicators'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l13', 
        levelId: 'module-1', 
        title: 'What is a Trading Plan and Why You Need One', 
        time: 20, 
        objectives: [
            "Define a trading plan.",
            "List the essential components of a trading plan.",
            "Explain why trading without a plan is a form of gambling."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "A trading plan is your personal rulebook for trading. It defines what, when, and how you will trade. Trading without one is like navigating without a map—it exposes you to emotional decisions and inconsistency.",
                body: "A trading plan is a comprehensive, written set of rules that governs every aspect of your trading. It is your business plan. It removes guesswork and emotion from your decision-making process, forcing you to be objective and consistent. Trading without a plan is gambling, because you are making decisions on the fly based on fear and greed. \nKey components of a trading plan include: \n- **Your Trading Goals:** What do you want to achieve? \n- **Markets to Trade:** Which assets will you focus on? \n- **Strategy:** What are your exact rules for entry and exit? \n- **Risk Management:** How much will you risk per trade? What is your maximum drawdown? \n- **Position Sizing:** How will you calculate your trade size? \n- **Trade Management:** How will you manage a trade once you're in it? \n- **Record Keeping:** How will you document your trades for review?"
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'An illustration of a checklist or a structured document representing a trading plan.',
                'data-ai-hint': 'trading plan'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l14', 
        levelId: 'module-1', 
        title: 'Psychology 101: The Mind of a Trader', 
        time: 15, 
        objectives: [
            "Acknowledge that trading is a mental game.",
            "Identify the two primary emotions in trading: fear and greed.",
            "Understand the importance of discipline and patience."
        ], 
        sections: [
             {
                type: 'text',
                tldr: "Success in trading is 80% psychology and 20% strategy. Mastering your emotions, especially fear and greed, is more important than finding a 'perfect' system. Discipline and patience are your greatest assets.",
                body: "Many new traders focus entirely on finding the perfect strategy, but soon discover that the real challenge is internal. Trading is one of the most psychologically demanding professions. The market will constantly test your discipline, patience, and emotional control. The two dominant emotions you will face are: \n- **Fear:** Fear of losing money, fear of missing out (FOMO), fear of being wrong. Fear can cause you to hesitate, exit winning trades too early, or avoid taking valid setups. \n- **Greed:** Greed makes you over-leverage, hold onto a winning trade for too long hoping for more (only to see it reverse), or jump into unplanned trades. \nSuccessful trading requires you to develop a mindset of disciplined execution. You must act like a casino owner, not a gambler, by consistently executing your plan (your 'edge') over and over, knowing that individual outcomes are random but your edge will play out over time."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A silhouette of a head with a calm side and a chaotic side, representing trading psychology.',
                'data-ai-hint': 'trader psychology'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l15', 
        levelId: 'module-1', 
        title: 'Common Cognitive Biases', 
        time: 15, 
        objectives: [
            "Define 'Confirmation Bias'.",
            "Define 'Recency Bias'.",
            "Define 'Loss Aversion'."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Our brains have built-in shortcuts that are terrible for trading. Biases like only seeking info that confirms our beliefs (Confirmation Bias) or feeling losses more painfully than gains (Loss Aversion) lead to bad decisions. Awareness is the first step to overcoming them.",
                body: "Cognitive biases are mental shortcuts our brains use to make quick judgments. While useful in daily life, they can be disastrous in trading. Here are a few key ones: \n- **Confirmation Bias:** The tendency to search for, interpret, and recall information in a way that confirms your pre-existing beliefs. If you are bullish on a stock, you'll unconsciously seek out news and patterns that support your view and ignore anything that contradicts it. \n- **Recency Bias:** Giving too much weight to recent events. If you've just had three losing trades, you might be too scared to take the next valid signal. If you've just had a big win, you might become overconfident and take on too much risk. \n- **Loss Aversion:** The tendency for people to feel the pain of a loss about twice as intensely as the pleasure of an equivalent gain. This is why traders often cut their winners short (to lock in a small pleasure) but let their losers run (to avoid the pain of realizing a loss)."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A brain with several icons representing different cognitive biases.',
                'data-ai-hint': 'cognitive bias'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l16', 
        levelId: 'module-1', 
        title: 'Introduction to Risk Management', 
        time: 15, 
        objectives: [
            "Define risk management.",
            "Understand the #1 rule: protect your capital.",
            "Explain the role of the stop-loss order in risk management."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Risk management isn't about avoiding losses; it's about ensuring that no single loss, or series of losses, can take you out of the game. Your primary job as a trader is to be a risk manager, not a profit seeker.",
                body: "This is the most important topic for any aspiring trader. Risk management is the process of identifying, analyzing, and mitigating the uncertainty in your trading. Your trading capital is your lifeblood; without it, you can't trade. Therefore, your first and most important job is to protect it at all costs. Profit comes second. \nThe cornerstone of risk management is the **stop-loss order**. Before you ever enter a trade, you must know the exact point at which your trade idea is proven wrong. This is your stop-loss level. By placing a stop-loss order, you pre-define your maximum acceptable loss for that trade. This non-negotiable rule prevents a small, manageable loss from turning into a catastrophic one."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A shield protecting a stack of coins, symbolizing capital preservation.',
                'data-ai-hint': 'risk management'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l17', 
        levelId: 'module-1', 
        title: 'The Concept of R-Multiples', 
        time: 10, 
        objectives: [
            "Define 'R' as your initial risk.",
            "Calculate the R-multiple of a potential trade.",
            "Explain how using R-multiples helps in objective analysis."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "R-multiples frame trades in terms of risk units. '1R' is the amount you risk on a trade. A trade that makes 3 times the risk is a '+3R' winner. This system helps you objectively compare trades and measure performance, regardless of dollar amounts.",
                body: "The concept of R-multiples, popularized by Dr. Van Tharp, is a powerful tool for standardizing risk and reward. 'R' simply stands for your initial **Risk** on a single trade. \nFor example, if you buy a stock at $100 and place your stop-loss at $98, your risk per share is $2. This $2 is your '1R'. \nNow, let's say your profit target is at $106. The potential profit is $6 ($106 - $100). To find the R-multiple of your potential reward, you divide the potential profit by the risk: $6 / $2 = 3. So, this trade has a potential reward of 3R. \nThinking in terms of R allows you to assess the quality of any trade setup quickly. A 3R trade is a good opportunity, while a 0.5R trade is not, because the potential reward doesn't justify the risk. It also helps in objectively reviewing your journal: 'Last month I had a +5R win and a -1R loss' is more meaningful than saying you won $500 and lost $100, as it's directly tied to risk."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A diagram showing a trade entry, a stop loss (1R), and multiple take profit levels (1R, 2R, 3R).',
                'data-ai-hint': 'risk reward'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l18', 
        levelId: 'module-1', 
        title: 'Timeframes and Their Significance', 
        time: 12, 
        objectives: [
            "Differentiate between high, medium, and low timeframes.",
            "Understand how different timeframes are used (e.g., trend, setup, entry).",
            "Recognize that price action is fractal."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "Timeframes on a chart range from seconds to months. Higher timeframes (daily, weekly) show the main trend. Lower timeframes (1-hour, 15-minute) are used to find specific entry and exit points within that trend. The same patterns appear on all timeframes.",
                body: "A chart timeframe refers to the period that each candle or bar represents. Choosing the right timeframes to analyze is key to staying aligned with the market. Traders often use multiple timeframes in their analysis: \n- **Higher Timeframe (e.g., Weekly, Daily):** Used to determine the primary, long-term trend and identify major support and resistance zones. This is your 'strategic' map. \n- **Intermediate Timeframe (e.g., 4-Hour, 1-Hour):** Used to identify the more immediate trend and look for potential trade setups (like pullbacks or pattern formations) that are in alignment with the higher timeframe trend. This is your 'tactical' map. \n- **Lower Timeframe (e.g., 15-Minute, 5-Minute):** Used to pinpoint the exact entry for a trade and for fine-tuning stop-loss placement. This is for 'execution'. \nA key concept is that price is 'fractal'—the same patterns and structures appear across all timeframes, from the 1-minute chart to the monthly chart."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'An illustration showing three nested charts of different timeframes (Daily, 4-Hour, 15-Minute) for the same asset.',
                'data-ai-hint': 'multiple timeframes'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l19', 
        levelId: 'module-1', 
        title: 'What are Trading Sessions?', 
        time: 10, 
        objectives: [
            "Identify the three major global trading sessions (Tokyo, London, New York).",
            "Understand that market volatility changes during different sessions.",
            "Recognize the importance of session overlaps."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "The 24-hour global market is broken into three main sessions: Tokyo (Asian), London (European), and New York (North American). Volatility is usually highest when two sessions overlap, especially the London/New York overlap.",
                body: "While markets like Forex and Crypto trade 24 hours a day during the week, the activity isn't consistent. It ebbs and flows based on which major financial center is open for business. The three main sessions are: \n- **Tokyo Session (Asian Session):** The first to open. Tends to be the quietest of the three, often characterized by consolidation after the big moves of the previous New York session. \n- **London Session (European Session):** London is the world's largest foreign exchange center, and this session brings a huge amount of liquidity and volatility into the market. Major trends for the day often begin here. \n- **New York Session (North American Session):** Another session of very high liquidity and volatility, especially as it overlaps with London. Major economic news from the US is released during this time. \nThe most active time to trade is typically the **London/New York overlap** (approximately 8 AM to 12 PM EST), as participants from the two largest financial centers are active simultaneously."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'A timeline graphic showing the 24-hour day with the Tokyo, London, and New York sessions and their overlaps.',
                'data-ai-hint': 'trading sessions'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      },
      { 
        id: 'm1-l20', 
        levelId: 'module-1', 
        title: 'Setting Up Your Trading Journal', 
        time: 15, 
        objectives: [
            "Understand the purpose of a trading journal.",
            "List the key data points to record for each trade.",
            "Explain how a journal helps you identify strengths and weaknesses."
        ], 
        sections: [
            {
                type: 'text',
                tldr: "A trading journal is a detailed log of all your trades. It's your most powerful tool for improvement. By recording your entries, exits, reasons, and emotions, you can find what works and what doesn't, and hold yourself accountable to your plan.",
                body: "If you are serious about trading, a journal is not optional. It is the primary tool for performance review and professional development. A journal is where you meticulously record everything about your trades. It turns your trading from a series of random events into a database of actions and outcomes that you can analyze. \nWhat should you record for every trade? \n- **Date and Time** \n- **Asset Traded** \n- **Setup/Strategy Used:** Why did you take this trade? \n- **Entry and Exit Prices** \n- **Stop-Loss Price** \n- **Position Size** \n- **Outcome (in R-multiple and dollars)** \n- **A Screenshot of the Chart** \n- **Your Emotional State:** Were you calm, anxious, greedy? \nBy consistently reviewing your journal (e.g., every weekend), you will discover your most common mistakes, what your best trade setups look like, and whether you are truly following your plan. It's the ultimate accountability tool."
            },
            {
                type: 'image',
                src: 'https://placehold.co/800x400.png',
                alt: 'An image of a clean, organized spreadsheet or notebook representing a trading journal.',
                'data-ai-hint': 'trading journal'
            }
        ], 
        quiz: { attempts: 3, passScore: 70, items: [] } 
      }
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
