"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export function ChooseUs() {
  const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry experts with years of experience in trading. Our instructors provide practical insights and hands-on guidance to help you succeed in the markets.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <p className="text-lg font-semibold">Expert Instructors</p>
        </div>
      ),
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses cover a wide range of topics, from basic concepts to advanced strategies. Whether you're a beginner or an experienced trader, we have something for everyone.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          <p className="text-lg font-semibold">Comprehensive Curriculum</p>
        </div>
      ),
    },
    {
      title: "Real-World Applications",
      description:
        "Gain practical experience through real-world examples and case studies. Our courses are designed to provide actionable insights that you can apply directly to your trading.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <p className="text-lg font-semibold">Real-World Applications</p>
        </div>
      ),
    },
    {
      title: "Flexible Learning",
      description:
        "Access our courses anytime, anywhere. With online modules and mobile-friendly content, you can learn at your own pace and convenience.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <p className="text-lg text-center font-semibold">Flexible Learning</p>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-14 lg:mt-24  ">
      <StickyScroll content={content} />
    </div>
  );
}
