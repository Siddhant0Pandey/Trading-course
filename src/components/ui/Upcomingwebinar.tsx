import Link from "next/link";
import React from "react";
import { HoverEffect } from "./card-hover-effect";

const projects = [
  {
    title: "Mastering Technical Analysis",
    description:
      "An in-depth webinar covering the key principles of technical analysis, including chart patterns, indicators, and market cycles. Perfect for traders looking to improve their market timing.",
    link: "https://tradingwebinars.com/technical-analysis",
  },
  {
    title: "Introduction to Forex Trading",
    description:
      "Learn the basics of Forex trading, including currency pairs, market hours, and trading strategies. This webinar is ideal for beginners who want to start trading in the global currency markets.",
    link: "https://tradingwebinars.com/forex-introduction",
  },
  {
    title: "Options Trading Strategies",
    description:
      "Discover advanced options trading strategies that can help you leverage market movements. This webinar covers topics like spreads, straddles, and risk management techniques.",
    link: "https://tradingwebinars.com/options-strategies",
  },
  {
    title: "Cryptocurrency Trading for Beginners",
    description:
      "An introductory webinar on cryptocurrency trading, exploring the basics of blockchain technology, different types of cryptocurrencies, and how to trade them effectively.",
    link: "https://tradingwebinars.com/crypto-beginners",
  },
  {
    title: "Risk Management in Trading",
    description:
      "A crucial webinar focusing on risk management techniques, including position sizing, stop-loss strategies, and portfolio diversification to help you manage and mitigate trading risks.",
    link: "https://tradingwebinars.com/risk-management",
  },
  {
    title: "Understanding Market Psychology",
    description:
      "Explore the psychological aspects of trading, including emotional control, trader mindset, and the impact of market sentiment on trading decisions.",
    link: "https://tradingwebinars.com/market-psychology",
  },
];

export default function Upcomingwebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-base text-teal-600 font-semibold trascking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extralbold tracking-tight text-white sm:text-4xl">
            Enhance your Trading Skill
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={projects} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border  text-neutral-700 bg-white hover:bg-gray-199 transition duration-200 border-transparent hover:shadow-slate-500 hover:shadow-md  "
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
