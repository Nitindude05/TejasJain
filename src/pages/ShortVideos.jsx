import React, { useState, useRef } from 'react';
import { SHORT_VIDEOS, SHORT_VIDEO_PLATFORMS, SHORT_VIDEOS_SECTION } from '../constant/constant';
import { 
  Play, 
  Heart, 
  Eye, 
  Share2, 
  Bookmark, 
  Clock,
  TrendingUp,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Flame,
  ExternalLink
} from 'lucide-react';

export default function ShortVideos() {
  const [hoveredId, setHoveredId] = useState(null);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());
  const scrollContainerRef = useRef(null);

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarkedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="works" className="py-20 px-6 max-w-[2000px] mx-auto relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/20 rounded-full backdrop-blur-sm">
          <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="text-sm uppercase tracking-[0.3em] text-gray-300 font-semibold">
            {SHORT_VIDEOS_SECTION.badge.text}
          </span>
          <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
          {SHORT_VIDEOS_SECTION.heading.main}
        </h2>
        
        <div className="relative inline-block mb-6">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {SHORT_VIDEOS_SECTION.heading.highlight}
          </h3>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-sm" />
        </div>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
          {SHORT_VIDEOS_SECTION.heading.subtitle}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-pink-400" />
            Trending Now
          </h3>
          <p className="text-gray-400 text-sm mt-1">Click any video to watch on platform</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent z-10 pointer-events-none" />

        {/* Videos Grid */}
        <div className="flex gap-6 px-4">
          {SHORT_VIDEOS.map((video, index) => {
            const platformStyle = SHORT_VIDEO_PLATFORMS[video.platform] || SHORT_VIDEO_PLATFORMS["YouTube Shorts"];
            const isLiked = likedVideos.has(video.id);
            const isBookmarked = bookmarkedVideos.has(video.id);
            const isHovered = hoveredId === video.id;

            return (
              <div
                key={video.id}
                className="group relative flex-shrink-0 w-[280px] snap-start cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                {/* Main Card */}
                <div className={`
                  relative w-full aspect-[9/16] rounded-3xl overflow-hidden
                  border border-white/10
                  transition-all duration-500 ease-out
                  ${isHovered ? 'scale-105 shadow-2xl shadow-pink-500/20 border-white/30' : 'shadow-xl shadow-black/50'}
                `}>
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />

                  {/* Top Info Bar */}
                  <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between z-20">
                    {/* Platform Badge */}
                    <div className={`px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-1.5 ${platformStyle.badge}`}>
                      <span className="text-xs">{platformStyle.icon}</span>
                      <span className="text-xs font-semibold">{video.platform}</span>
                    </div>

                    {/* External Link Icon */}
                    <div className={`
                      transition-all duration-300
                      ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                    `}>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${platformStyle.color} flex items-center justify-center shadow-2xl animate-pulse`}>
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    {/* Creator Info */}
                    <div className="flex items-center gap-3 mb-3">
                      {/* <div className="relative">
                        <img
                          src={video.creator.photo}
                          alt={video.creator.name}
                          className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
                        />
                        {video.creator.verified && (
                          <CheckCircle className="absolute -bottom-1 -right-1 w-4 h-4 text-blue-400 fill-blue-400 bg-gray-900 rounded-full" />
                        )}
                      </div> */}
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">
                          {video.creator.name}
                        </p>
                        <p className="text-gray-400 text-xs">{video.category}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold text-base mb-3 line-clamp-2 leading-tight">
                      {video.title}
                    </h4>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-semibold text-white">{video.views}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Heart className={`w-4 h-4 ${isLiked ? 'text-pink-500 fill-pink-500' : 'text-gray-400'}`} />
                        <span className="text-xs font-semibold text-white">{video.likes}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`
                      flex items-center gap-2
                      transition-all duration-500 transform
                      ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                      {/* <button
                        onClick={(e) => toggleLike(video.id, e)}
                        className={`
                          flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm
                          transition-all duration-300
                          ${isLiked 
                            ? `bg-gradient-to-r ${platformStyle.color} text-white shadow-lg` 
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                          }
                        `}
                      >
                        <Heart className={`w-4 h-4 inline mr-1 ${isLiked ? 'fill-white' : ''}`} />
                        {isLiked ? 'Liked' : 'Like'}
                      </button> */}
                      
                      {/* <button
                        onClick={(e) => toggleBookmark(video.id, e)}
                        className={`
                          p-2.5 rounded-xl
                          transition-all duration-300
                          ${isBookmarked 
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/50' 
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                          }
                        `}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white' : ''}`} />
                      </button> */}
                      
                      {/* <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Share functionality
                        }}
                        className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                      </button> */}
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-16 right-4 z-20">
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                      #{video.category}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-r ${platformStyle.color} opacity-0 blur-2xl -z-10
                  transition-opacity duration-500
                  ${isHovered ? 'opacity-30' : 'opacity-0'}
                `} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Count */}
      {/* <div className="text-center mt-12 relative z-10">
        <p className="text-gray-400 text-sm">
          Showcasing <span className="text-white font-bold">{SHORT_VIDEOS.length}</span> trending short videos
        </p>
      </div> */}

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}