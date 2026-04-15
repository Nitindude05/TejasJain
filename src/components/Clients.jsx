import React from "react";
import { useState } from 'react';


import { CLIENTS } from '../constant/constant';

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const platformStyles = {
  YouTube:   { avatar: 'bg-red-950 text-red-300',    badge: 'bg-red-950 text-red-300' },
  Instagram: { avatar: 'bg-purple-950 text-purple-300', badge: 'bg-purple-950 text-purple-300' },
  TikTok:    { avatar: 'bg-emerald-950 text-emerald-300', badge: 'bg-emerald-950 text-emerald-300' },
  Twitch:    { avatar: 'bg-indigo-950 text-indigo-300', badge: 'bg-indigo-950 text-indigo-300' },
};

const VISIBLE = 4;

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const maxIndex = CLIENTS.length - VISIBLE;
  const doubled = [...CLIENTS, ...CLIENTS];

  const prev = () => setCurrent(i => Math.max(i - 1, 0));
  const next = () => setCurrent(i => Math.min(i + 1, maxIndex));

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-x uppercase tracking-widest text-gray-500 mb-2">
          Trusted by creators
        </p>
        <h2 className="text-5xl font-medium text-gray-100">
          Worked with <span className="text-gray-500">{CLIENTS.length}+ creators</span> worldwide
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden mb-10
        before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-gray-950 before:to-transparent before:z-10
        after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-gray-950 after:to-transparent after:z-10">
        
        <div className="flex gap-4 w-max animate-marquee">
          {doubled.map((c, i) => {
            const style = platformStyles[c.platform] || { avatar: 'bg-gray-800 text-gray-300' };
            return (
              <div key={i} className="flex items-center gap-2.5 bg-gray-900 border border-gray-800 rounded-full px-4 py-1.5 shrink-0">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${style.avatar}`}>
                  {c.initials}
                </div>
                <span className="text-sm text-gray-200">{c.name}</span>
                <span className="text-xs text-gray-500">· {c.platform}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider */}
      <div>
        {/* Nav buttons */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-gray-300 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-gray-300 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        {/* Cards */}
        <div className="overflow-hidden relative">
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 4px)))` }}
          >
            {CLIENTS.map((c, i) => {
              const style = platformStyles[c.platform] || {
                avatar: 'bg-gray-800 text-gray-300',
                badge: 'bg-gray-800 text-gray-300'
              };

              return (
                <div
                  key={i}
                  className="
                    bg-white/5 backdrop-blur-md 
                    border border-white/10 
                    rounded-2xl p-5 
                    flex flex-col items-center text-center gap-2.5 
                    shrink-0

                    transition-all duration-300 ease-in-out
                    hover:scale-105 
                    hover:border-white/20
                    hover:ring-2 hover:ring-gray-400/30
                    hover:shadow-lg hover:shadow-black/20
                  "
                  style={{ width: `calc(100% / ${VISIBLE} - 12px)` }}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium ${style.avatar}`}>
                    {c.initials}
                  </div>
                  <p className="text-sm font-medium text-gray-100">{c.name}</p>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${style.badge}`}>
                    {c.platform}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-gray-400' : 'bg-gray-700'}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}