"use client";

import Link from "next/link";
import React from "react";
import courseData from "@/data/trading_course.json";
import { BackgroundGradient } from "./background-gradient";

interface TradingCourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: TradingCourse) => course.isFeatured
  );

  return (
    <div className="text-white">
      <div className="mt-4 text-center py-2">
        <h1 className="uppercase font-semibold text-teal-700 tracking-wider">
          Featured Courses
        </h1>
        <p className="mt-6 leading-8 text-3xl sm:text-4xl tracking-tighter">
          Learn with the best
        </p>
      </div>
      <div className="lg:mt-[5rem] mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {featuredCourses.map((course: TradingCourse) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col bg-whtie rounded-[23px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm lg:pb-6 lg:pt-4 sm:p-0 md:p-4">
                <div className="p-8 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 lg:mb-4 dark:text-neutral-200 font-semibold ">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow p-4">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-black lg:mt-8 sm:mt-6 rounded-md bg-white px-4 py-2 border-2 border-slate-700 hover:bg-zinc-800 hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center sm:mt-12 mt-20">
        <Link
          href="/courses"
          className="p-4 bg-black border-[1px] border-gray-500 hover:bg-slate-900 duration-300 "
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}
