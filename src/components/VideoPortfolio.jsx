import React, { useState, useRef } from 'react';
import { portfolioVideos, CATEGORY_STYLES } from '../constant/constant';
import { 
  Play, 
  Eye, 
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
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen px-5 py-16 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-gradient bg-clip-text text-transparent">
          Video Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light">
          Crafting stories through visual excellence
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-[1800px] mx-auto mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-400 text-sm mt-1">Click any video to watch on YouTube</p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm text-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm text-gray-300 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Videos */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 px-4">
          {portfolioVideos.map((video, index) => {
            const categoryStyle = CATEGORY_STYLES[video.category] || CATEGORY_STYLES.Corporate;
            const isHovered = hoveredId === video.id;

            return (
              <div
                key={video.id}
                className="group relative flex-shrink-0 w-[500px] cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openYouTube(video.videoUrl)}
              >
                <div className={`
                  relative h-[320px] rounded-3xl overflow-hidden
                  border border-white/10
                  transition-all duration-500 ease-out
                  ${isHovered ? `scale-105 shadow-2xl ${categoryStyle.glow} border-white/30` : 'shadow-xl shadow-black/50'}
                `}>
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />

                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 right-0 p-6 flex items-start justify-between z-20">
                    {/* Category Badge */}
                    <div className={`px-4 py-2 rounded-full backdrop-blur-md border ${categoryStyle.badge}`}>
                      <span className="text-sm font-bold">{video.category}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">{video.duration}</span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className={`
                      w-24 h-24 rounded-full 
                      bg-gradient-to-r ${categoryStyle.gradient} 
                      flex items-center justify-center 
                      shadow-2xl animate-pulse
                      transition-transform duration-300
                      group-hover:scale-110
                    `}>
                      <Play className="w-12 h-12 text-white fill-white ml-2" />
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className={`
                    absolute top-6 right-6
                    transition-all duration-500
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                  `}>
                    <div className="w-10 h-10 rounded-full bg-red-500/90 backdrop-blur-md flex items-center justify-center shadow-lg shadow-red-500/50">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h4 className="text-white font-black text-xl mb-3 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {video.title}
                    </h4>

                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Client: <span className="text-white font-semibold">{video.client}</span>
                    </p>

                    <div className="flex items-center gap-6 mb-4">
                      {/* <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-bold text-white">{video.views}</span>
                      </div> */}
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-bold text-white">{video.duration}</span>
                      </div>
                    </div>

                    {/* Watch on YouTube Button */}
                    {/* <div className={`
                      transition-all duration-500 transform
                      ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                      <div className={`
                        inline-flex items-center gap-2 
                        px-6 py-3 rounded-xl 
                        bg-gradient-to-r from-red-500 to-red-600
                        text-white font-bold text-sm
                        shadow-lg shadow-red-500/50
                        hover:from-red-600 hover:to-red-700
                        transition-all duration-300
                      `}>
                        <Play className="w-5 h-5 fill-white" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-r ${categoryStyle.gradient} opacity-0 blur-2xl -z-10
                  transition-opacity duration-500
                  ${isHovered ? 'opacity-40' : 'opacity-0'}
                `} />
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
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