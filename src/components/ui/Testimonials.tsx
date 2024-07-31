import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Trading isn't just about buying and selling. It's about understanding market psychology, managing risks, and constantly learning. Success comes from discipline and consistency.",
    name: "John Smith",
    title: "Senior Forex Trader",
  },
  {
    quote:
      "In the world of trading, the greatest risk is not taking one. Every trade is a lesson, and every loss is an opportunity to learn and grow.",
    name: "Emma Johnson",
    title: "Equity Analyst",
  },
  {
    quote:
      "The market is like a pendulum. It swings between greed and fear, and the best traders know how to stay balanced.",
    name: "Michael Lee",
    title: "Day Trader",
  },
  {
    quote:
      "Patience is key in trading. The market rewards those who wait for the right opportunity rather than chasing every price movement.",
    name: "Sophia Davis",
    title: "Technical Analyst",
  },
  {
    quote:
      "Success in trading isn't about how much you make on a winning trade. It's about how you manage your losses and protect your capital.",
    name: "James Brown",
    title: "Options Trader",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="dark:bg-black">
          <h2 className="text-center uppercase text-slate-600 font-semibold tracking-tighter lg:text-3xl sm:text-[1rem] ">
            <span className="relative inline-block">
              <span className="relative z-10">
                &quot; Hear From Our Successful Traders &quot;
              </span>
              <span
                className="absolute bottom-[-0.08rem]  left-0 right-0 h-0.5 bg-slate-700 ml-[17rem]"
                style={{ width: "50%" }}
              />
            </span>
          </h2>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="py-8 lg:py-16"
        />
      </div>
    </div>
  );
}
