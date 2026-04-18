import React, { useState } from 'react';
import { CLIENTS } from '../constant/constant';
import { ChevronLeft, ChevronRight, Play, Star, TrendingUp } from 'lucide-react';

const platformStyles = {
  YouTube: { 
    avatar: 'bg-gradient-to-br from-red-950 to-red-900 text-red-300 shadow-lg shadow-red-900/50',
    badge: 'bg-red-950/80 text-red-300 border border-red-800/50',
    glow: 'hover:shadow-red-500/20'
  },
  Instagram: { 
    avatar: 'bg-gradient-to-br from-purple-950 to-pink-900 text-purple-300 shadow-lg shadow-purple-900/50',
    badge: 'bg-purple-950/80 text-purple-300 border border-purple-800/50',
    glow: 'hover:shadow-purple-500/20'
  },
  TikTok: { 
    avatar: 'bg-gradient-to-br from-emerald-950 to-teal-900 text-emerald-300 shadow-lg shadow-emerald-900/50',
    badge: 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50',
    glow: 'hover:shadow-emerald-500/20'
  },
  Twitch: { 
    avatar: 'bg-gradient-to-br from-indigo-950 to-purple-900 text-indigo-300 shadow-lg shadow-indigo-900/50',
    badge: 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/50',
    glow: 'hover:shadow-indigo-500/20'
  },
};

const VISIBLE = 4;

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const maxIndex = CLIENTS.length - VISIBLE;
  const doubled = [...CLIENTS, ...CLIENTS];

  const prev = () => setCurrent(i => Math.max(i - 1, 0));
  const next = () => setCurrent(i => Math.min(i + 1, maxIndex));

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10 animate-fadeInDown">
        <div className="inline-flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold">
            Trusted by creators
          </p>
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4">
          Worked with{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r text-gradient bg-clip-text text-transparent">
              {CLIENTS.length}+ creators
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-sm" />
          </span>
          {' '}worldwide
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
          Join the growing community of successful content creators who trust our editing expertise
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden mb-16 py-4
        before:absolute before:left-0 before:top-0 before:bottom-0 before:w-32 before:bg-gradient-to-r before:from-gray-950 before:via-gray-950/80 before:to-transparent before:z-10
        after:absolute after:right-0 after:top-0 after:bottom-0 after:w-32 after:bg-gradient-to-l after:from-gray-950 after:via-gray-950/80 after:to-transparent after:z-10">
        
        <div className="flex gap-4 w-max animate-marquee hover:pause">
          {doubled.map((c, i) => {
            const style = platformStyles[c.platform] || { 
              avatar: 'bg-gray-800 text-gray-300',
              badge: 'bg-gray-800 text-gray-300'
            };
            return (
              <div 
                key={i} 
                className="group flex items-center gap-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-full px-5 py-2.5 shrink-0 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${style.avatar} group-hover:scale-110 transition-transform duration-300`}>
                  {c.initials}
                </div>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {c.name}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {c.platform}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative z-10">
        
        {/* Section Header with Nav */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-1">Featured Creators</h3>
            <p className="text-gray-400 text-sm">Meet some of our amazing clients</p>
          </div>
          
          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="group w-12 h-12 rounded-full border border-gray-700 bg-gray-900/80 backdrop-blur-sm text-gray-300 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="group w-12 h-12 rounded-full border border-gray-700 bg-gray-900/80 backdrop-blur-sm text-gray-300 flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden relative rounded-2xl">
          
          {/* Ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none z-10" />

          <div
            className="flex gap-6 transition-transform duration-500 ease-out py-2"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 24px)))` }}
          >
            {CLIENTS.map((c, i) => {
              const style = platformStyles[c.platform] || {
                avatar: 'bg-gray-800 text-gray-300',
                badge: 'bg-gray-800 text-gray-300',
                glow: 'hover:shadow-gray-500/20'
              };

              const isHovered = hoveredCard === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    group relative
                    bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                    backdrop-blur-xl 
                    border border-white/10 
                    rounded-2xl p-6 
                    flex flex-col items-center text-center gap-4
                    shrink-0
                    cursor-pointer
                    transition-all duration-500 ease-out
                    hover:scale-105 
                    hover:border-white/30
                    hover:shadow-2xl ${style.glow}
                    ${isHovered ? 'z-20 -translate-y-2' : 'z-10'}
                  `}
                  style={{ 
                    width: `calc(100% / ${VISIBLE} - 18px)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 w-full">
                    {/* Avatar with play icon overlay */}
                    <div className="relative mx-auto w-20 h-20 mb-2">
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl font-bold ${style.avatar} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {c.initials}
                      </div>
                      
                      {/* Play icon overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>

                    {/* Name */}
                    <p className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors mb-1">
                      {c.name}
                    </p>
                    
                    {/* Platform Badge */}
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full ${style.badge} transition-all duration-300 group-hover:scale-105`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {c.platform}
                    </span>

                    {/* Stats (you can add these to your CLIENTS data) */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-around text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-center">
                        <div className="font-bold text-gray-200">250K+</div>
                        <div className="text-gray-500">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-200">100+</div>
                        <div className="text-gray-500">Videos</div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                transition-all duration-300 rounded-full
                ${i === current 
                  ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-indigo-500' 
                  : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
                }
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Showing <span className="text-gray-300 font-semibold">{current + 1}</span> of <span className="text-gray-300 font-semibold">{maxIndex + 1}</span>
          </p>
        </div>
      </div>

    </section>
  );
}