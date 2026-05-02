import React, { useState } from 'react';
import { CLIENTS, PLATFORM_STYLES, CLIENTS_SECTION } from '../constant/constant';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

const VISIBLE = 4;

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const maxIndex = CLIENTS.length - VISIBLE;

  // Duplicate clients for seamless loop
  // We need enough copies so the content is wider than the viewport
  const doubled = [...CLIENTS, ...CLIENTS];

  const prev = () => setCurrent((i) => Math.max(i - 1, 0));
  const next = () => setCurrent((i) => Math.min(i + 1, maxIndex));

  const handlePlatformClick = (e, platformLink) => {
    e.stopPropagation();
    if (platformLink) {
      window.open(platformLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="clients" className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">

      {/* ── Heading ── */}
      <div className="text-center mb-16 relative z-10 animate-fadeInDown">
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

      {/* ═══════════════════════════════════════════ */}
      {/* ── MARQUEE — This is what gets animated ── */}
      {/* ═══════════════════════════════════════════ */}
      <div
  className="relative overflow-hidden mb-16 py-4
    before:absolute before:left-0 before:top-0 before:bottom-0 before:w-32
    before:bg-gradient-to-r before:from-gray-950 before:via-gray-950/80 before:to-transparent before:z-10
    after:absolute after:right-0 after:top-0 after:bottom-0 after:w-32
    after:bg-gradient-to-l after:from-gray-950 after:via-gray-950/80 after:to-transparent after:z-10"
>
  <div className="group">
    <div className="marquee-container">
      <div className="marquee-track">
        {[...CLIENTS, ...CLIENTS].map((client, i) => {
          const style = PLATFORM_STYLES[client.platform] || {
            avatar: 'bg-gray-800 text-gray-300',
            badge: 'bg-gray-800 text-gray-300',
          };

          return (
            <a
              href={client.platformLink}
              target="_blank"
              rel="noopener noreferrer"
              key={`${client.id}-marquee-${i}`}
              className="group flex items-center gap-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-full pl-2 pr-5 py-2 shrink-0 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-gray-900 ring-gray-700/50 group-hover:ring-gray-500/50 transition-all duration-300 flex-shrink-0">
                {client.photo ? (
                  <>
                    <img
                      src={client.photo}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 ${style.avatar} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </>
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center text-xs font-bold ${style.avatar}`}
                  >
                    {client.initials}
                  </div>
                )}

                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg shadow-green-500/50">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75" />
                </div>

                {client.verified && (
                  <CheckCircle className="absolute -top-1 -right-1 w-4 h-4 text-blue-400 fill-blue-400 bg-gray-900 rounded-full" />
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 flex items-center gap-1 whitespace-nowrap">
                  <TrendingUp className="w-3 h-3" />
                  <span>{client.platform}</span>
                  {client.followers && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span>{client.followers}</span>
                    </>
                  )}
                </span>
              </div>

              {/* Dot + icon */}
              <div className="ml-2 flex items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    style.avatar.split(' ')[1]
                  } animate-pulse`}
                />
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
</div>


      {/* ═══════════════════════════════════ */}
      {/* ── SLIDER SECTION (unchanged) ──  */}
      {/* ═══════════════════════════════════ */}
      <div className="relative z-10">
        {/* Section Header with Nav */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-1">
              Featured Creators
            </h3>
            <p className="text-gray-400 text-sm">
              Meet some of our amazing clients - Click to visit their channels
            </p>
          </div>

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
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none z-10" />

          <div
            className="flex gap-6 transition-transform duration-500 ease-out py-2"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 24px)))`,
            }}
          >
            {CLIENTS.map((client, i) => {
              const style = PLATFORM_STYLES[client.platform] || {
                avatar: 'bg-gray-800 text-gray-300',
                badge: 'bg-gray-800 text-gray-300',
                glow: 'hover:shadow-gray-500/20',
              };

              const isHovered = hoveredCard === i;

              return (
                <div
                  key={client.id}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={(e) =>
                    handlePlatformClick(e, client.platformLink)
                  }
                  className={`
                    group relative
                    bg-gradient-to-br from-white/10 via-white/5 to-transparent
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl p-6
                    flex flex-col items-center text-center gap-4
                    shrink-0 cursor-pointer
                    transition-all duration-500 ease-out
                    hover:scale-105 hover:border-white/30
                    hover:shadow-2xl ${style.glow}
                    ${isHovered ? 'z-20 -translate-y-2' : 'z-10'}
                  `}
                  style={{
                    width: `calc(100% / ${VISIBLE} - 18px)`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>

                  <div className="relative z-10 w-full">
                    <div className="relative mx-auto w-20 h-20 mb-2">
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-offset-4 ring-offset-gray-900 ring-white/10 group-hover:ring-white/30 transition-all duration-500">
                        {client.photo ? (
                          <>
                            <img
                              src={client.photo}
                              alt={client.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                            />
                            <div
                              className={`absolute inset-0 ${style.avatar} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                            />
                          </>
                        ) : (
                          <div
                            className={`w-full h-full flex items-center justify-center text-2xl font-bold ${style.avatar} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                          >
                            {client.initials}
                          </div>
                        )}
                      </div>

                      {client.verified && (
                        <CheckCircle className="absolute -top-1 -right-1 w-6 h-6 text-blue-400 fill-blue-400 bg-gray-900 rounded-full p-0.5 shadow-lg" />
                      )}

                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg shadow-green-500/50">
                        <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75" />
                      </div>
                    </div>

                    <p className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors mb-1">
                      {client.name}
                    </p>

                    {client.category && (
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors mb-2">
                        {client.category}
                      </p>
                    )}

                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full ${style.badge} transition-all duration-300 group-hover:scale-105`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {client.platform}
                    </span>

                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-around text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-center">
                        <div className="font-bold text-gray-200">
                          {client.followers || '250K+'}
                        </div>
                        <div className="text-gray-500">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-200">
                          {client.videos || '100+'}
                        </div>
                        <div className="text-gray-500">Videos</div>
                      </div>
                    </div>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform border border-white/10">
                        <span>Visit Channel</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

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
                ${
                  i === current
                    ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-indigo-500'
                    : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'
                }
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Showing{' '}
            <span className="text-gray-300 font-semibold">
              {current + 1}
            </span>{' '}
            of{' '}
            <span className="text-gray-300 font-semibold">
              {maxIndex + 1}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}