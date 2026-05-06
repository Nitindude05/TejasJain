import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-6 sm:pb-8 text-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 rounded-full text-gradient border border-green-500/25 bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        Now in beta · Free to join
      </div>

      {/* Heading */}
      <h1 className="font-bold leading-[1.08] text-white tracking-tight max-w-xs sm:max-w-2xl md:max-w-4xl text-[clamp(2rem,7vw,5.5rem)]">
        Hi, I am{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-gradient">Tejas</span>
          .
        
            
        </span>{" "}
        Professional Video Editor
      </h1>

      {/* Description */}
      <p className="mt-5 sm:mt-7 text-gray-400 leading-relaxed max-w-2xl px-4 text-[clamp(0.9rem,2vw,1.15rem)]">
       I’m a professional video editor with 4+ years of experience.
Through high-quality editing, storytelling, and engaging visuals, I’ve helped generate millions of views across multiple platforms.
        <br />
       
      </p>

      {/* Buttons */}
      <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full max-w-xs xs:max-w-none">

        {/* Primary */}
        <Button
          text="Download"
          className="md:w-80 md:h-16 w-60 h-12 text-gray-400"
          id="counter"
        />

        {/* Secondary */}
        {/* <a
          href="/download"
          className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gray-700 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover:scale-[1.03] bg-transparent hover:bg-green-500/5 w-full xs:w-auto"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
          </svg>
          For Free
        </a> */}

      </div>

    </section>
  );
};

export default Hero;