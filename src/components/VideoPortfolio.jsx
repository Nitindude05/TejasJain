import React, { useState, useRef } from 'react';
import { portfolioVideos, CATEGORY_STYLES } from '../constant/constant';
import { 
  Play, 
  Clock, 
  User,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const VideoPortfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollContainerRef = useRef(null);

  const openYouTube = (videoUrl) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-20 py-10 sm:py-12 md:py-16">

      {/* ── Header ── */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-gradient bg-clip-text text-transparent">
          Long Form Video 
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-400">
          Crafting stories through visual excellence
        </p>
      </div>

      {/* ── Navigation ── */}
      <div className="max-w-[1800px] mx-auto mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Click any video to watch
          </p>
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center sm:hover:scale-110 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center sm:hover:scale-110 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ── Scroll Container ── */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden pb-6 sm:pb-8 scrollbar-hide"
      >
        {/* Gradients (hidden on small screens) */}
        {/* <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" /> */}

        <div className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">

          {portfolioVideos.map((video, index) => {
            const categoryStyle = CATEGORY_STYLES[video.category] || CATEGORY_STYLES.Corporate;
            const isHovered = hoveredId === video.id;

            return (
              <div
                key={video.id}
                className="group relative flex-shrink-0 cursor-pointer"
                style={{
                  width: '85vw',         // ✅ mobile
                  maxWidth: '500px'      // ✅ desktop cap
                }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openYouTube(video.videoUrl)}
              >
                <div className={`
                  relative h-[220px] sm:h-[260px] md:h-[320px] 
                  rounded-2xl sm:rounded-3xl overflow-hidden
                  border border-white/10
                  transition-all duration-500
                  ${isHovered ? 'sm:scale-105 sm:shadow-2xl border-white/30' : 'shadow-xl'}
                `}>
                  
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={`w-full h-full object-cover transition duration-700 ${isHovered ? 'sm:scale-110' : ''}`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />

                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 md:p-6 flex justify-between">
                    <div className={`px-2 sm:px-3 py-1 rounded-full backdrop-blur border text-xs sm:text-sm ${categoryStyle.badge}`}>
                      {video.category}
                    </div>

                    <div className="px-2 sm:px-3 py-1 rounded-full bg-black/60 border border-white/20 flex items-center gap-1 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      {video.duration}
                    </div>
                  </div>

                  {/* Play button (always visible on mobile) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24
                      rounded-full bg-gradient-to-r ${categoryStyle.gradient}
                      flex items-center justify-center shadow-lg
                      sm:opacity-0 sm:group-hover:opacity-100 transition
                    `}>
                      <Play className="w-6 h-6 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-white font-semibold">{video.client}</span>
                    </p>
                  </div>
                </div>

                {/* Glow (desktop only) */}
                <div className={`
                  hidden sm:block absolute inset-0 rounded-3xl blur-2xl -z-10
                  bg-gradient-to-r ${categoryStyle.gradient}
                  transition-opacity duration-500
                  ${isHovered ? 'opacity-40' : 'opacity-0'}
                `}/>
              </div>
            );
          })}

        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default VideoPortfolio;