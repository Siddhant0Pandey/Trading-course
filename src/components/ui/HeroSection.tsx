import Link from "next/link";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] flex flex-col items-center justify-center relative overflow-hidden md:py-0 py-12 mx-auto">
      <div className="p-4 relative z-10 w-full text-center ">
        <h1 className="mt-24 md:mt-6 text-4xl md:text-7xl font-bold bg-clip-text  text-green-700">
          Master the art of Trading
        </h1>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-16"
          particleColor="#FFFFFF"
        />
        <p className="mt-4 font-normal text-base md:text-lg text-white max-w-lg mx-auto">
          This site showcases a UI designed to explore and demonstrate the
          capabilities of the Next.js framework, integrated with the Accernity
          UI animation library. It serves as a practical project to gain
          hands-on experience with modern web development technologies and
          create engaging user interfaces.
        </p>
        <div className="mt-8">
          <Link href="/courses">
            {" "}
            <button className="inline-flex h-12 animate-shimmer items-center mt-4 justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              More on Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
