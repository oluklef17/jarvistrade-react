import smtkz from "../images/products/smt-kz.png";
import srm from "../images/products/srm.png";
import rl from "../images/products/rl.png";

const indicators = [
  {
    id: 1,
    name: "SMT + Killzones Combo",
    description: `Introducing the SMT Divergence Indicator, a versatile tool for analyzing market dynamics. It identifies divergences between highs and lows of correlated currency pairs during specific market "killzones". Concepts popularized by the popular trader Michael J. Huddleston (ICT). Customize divergence type, pair correlation, and time settings for trading opportunities during volatile periods.`,
    price: "30.00",
    image: smtkz,
    platform: "MT4",
    demo: "https://youtu.be/AA72my9AzGA?si=Lt4LkRECZtLaji6X",
    link: "https://www.mql5.com/en/market/product/97704",
  },
  {
    id: 2,
    name: "Reaction Levels",
    description:
      "Introducing ICT Reaction Levels: plots key levels from higher timeframes (weekly and monthly). Helps identify vital price levels based on historical reactions. Customize settings, choose high/low fractal mode, and display only active levels. Receive alerts for trading opportunities via MT4 terminal, push notifications, or email. Enhance your trading with historical reactions and timely alerts.",
    price: "30.00",
    image: rl,
    platform: "MT4",
    demo: "https://youtu.be/AA72my9AzGA?si=Lt4LkRECZtLaji6X",
    link: "https://www.mql5.com/en/market/product/102585",
  },
  {
    id: 3,
    name: "Smartzone Reversal Master",
    description:
      "Introducing the SmartZone Reversal Master, a potent indicator for traders. It helps spot trade entry points, using liquidity engineering and high-resolution trend analysis. Ideal for intraday trading, it identifies institutional key levels and real-time buy/sell zones. Notable pairs include EURUSD, GBPUSD, and more. Compatible with various entry methods, it offers customizable settings and alerts. A valuable tool for precise trading decisions.",
    price: "30.00",
    image: srm,
    platform: "MT4",
    demo: "https://youtu.be/AA72my9AzGA?si=Lt4LkRECZtLaji6X",
    link: "https://www.mql5.com/en/market/product/102254",
  },
  // Add more product objects as needed
];

export default indicators;
