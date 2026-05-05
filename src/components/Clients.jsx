import React, { useState, useEffect } from 'react';
import { CLIENTS, PLATFORM_STYLES, CLIENTS_SECTION } from '../constant/constant';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive logic for the slider
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1.2);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, CLIENTS.length - Math.floor(visibleCount));
  const prev = () => setCurrent((i) => Math.max(i - 1, 0));
  const next = () => setCurrent((i) => Math.min(i + 1, maxIndex));

  return (
    <section id="clients" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* ── Enhanced CSS Animations ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        /* Pause marquee on hover */
        .marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Heading ── */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold">
            {CLIENTS_SECTION?.badge?.text || 'Trusted by creators'}
          </p>
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4">
          Worked with{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-gradient bg-clip-text text-transparent">
              Multiple creators
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-sm" />
          </span>{' '}
          worldwide
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
          {CLIENTS_SECTION?.subheading ||
            'Join the growing community of successful content creators who trust our editing expertise'}
        </p>
      </div>

      {/* ── MARQUEE (Clickable & Pause on Hover) ── */}
      <div className="marquee-wrapper relative overflow-hidden mb-20 py-4 group
        before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 md:before:w-40 before:bg-gradient-to-r before:from-gray-950 before:to-transparent before:z-10
        after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 md:after:w-40 after:bg-gradient-to-l after:from-gray-950 after:to-transparent after:z-10">
        
        <div className="animate-marquee gap-4 md:gap-8">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <a
              href={client.platformLink}
              target="_blank"
              rel="noopener noreferrer"
              key={`${client.id}-mq-${i}`}
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 backdrop-blur-sm rounded-full pl-2 pr-5 py-2 transition-all duration-300 group/item"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20 group-hover/item:ring-blue-400 transition-all">
                <img src={client.photo} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover/item:text-white">{client.name}</span>
              <ExternalLink size={12} className="text-gray-500 group-hover/item:text-blue-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* ── SLIDER SECTION ── */}
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Featured Portfolio</h3>
            <p className="text-gray-400 text-sm">Real creators. Real results.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} disabled={current === 0} className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 disabled:opacity-20 transition-colors"><ChevronLeft size={20}/></button>
            <button onClick={next} disabled={current >= maxIndex} className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 disabled:opacity-20 transition-colors"><ChevronRight size={20}/></button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex gap-4 md:gap-6 transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 1.5rem)))` }}
          >
            {CLIENTS.map((client) => {
              const style = PLATFORM_STYLES[client.platform] || { badge: 'bg-gray-800 text-gray-300' };
              return (
                <a
                  key={client.id}
                  href={client.platformLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shrink-0 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
                  style={{ width: `calc(100% / ${visibleCount} - 1.25rem)` }}
                >
                  {/* Subtle Glow Background Effect */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative w-20 h-20 mb-4">
                    <img 
                      src={client.photo} 
                      className="w-full h-full rounded-full object-cover ring-4 ring-white/5 group-hover:ring-blue-500/30 transition-all duration-500 group-hover:scale-110" 
                      alt={client.name} 
                    />
                    {client.verified && (
                      <CheckCircle className="absolute -top-1 -right-1 w-6 h-6 text-blue-400 bg-gray-950 rounded-full p-0.5" />
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{client.name}</h4>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${style.badge}`}>
                    {client.platform}
                  </span>
                  
                  <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
                    <div>
                      <div className="text-sm font-bold text-white">{client.followers || '250K+'}</div>
                      <div className="text-[10px] text-gray-500 uppercase">Followers</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{client.videos || '100+'}</div>
                      <div className="text-[10px] text-gray-500 uppercase">Videos</div>
                    </div>
                  </div>

                  {/* Visit Label - appears on hover */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Visit Channel <ExternalLink size={12} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}