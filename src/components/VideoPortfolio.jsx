import React, { useState } from 'react';
import { portfolioVideos } from '../constant/constant';
import { Play, Eye, Clock, User, X } from 'lucide-react';

const VideoPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen  px-5 py-16 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r text-gradient bg-clip-text text-transparent">
          Video Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light">
          Crafting stories through visual excellence
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {portfolioVideos.map((video, index) => (
          <div
            key={video.id}
            className="group bg-[#16213e] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/40 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredId(video.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleVideoClick(video)}
          >
            {/* Thumbnail Container */}
            <div className="relative w-full pt-[56.25%] overflow-hidden bg-black">
              {/* Thumbnail Image */}
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-500/95 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-400 ease-out shadow-lg shadow-purple-500/60 animate-pulse-glow">
                  <Play size={40} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-purple-500/95 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md z-10 animate-slideInLeft">
                {video.category}
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-md z-10 flex items-center gap-1.5">
                <Clock size={14} />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-[#1a2332] group-hover:bg-[#1e2a3a] transition-colors duration-300">
              <h3 className="text-xl md:text-2xl text-white font-bold mb-4 leading-tight">
                {video.title}
              </h3>
              
              {/* Meta Information */}
              <div className="flex flex-wrap gap-5 mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Eye size={16} className="opacity-70" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <User size={16} className="opacity-70" />
                  <span>{video.client}</span>
                </div>
              </div>

              {/* Watch Button */}
              <div className="inline-flex items-center gap-2 text-purple-400 font-semibold text-base pt-2">
                Watch Now
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[1000] animate-fadeIn p-5"
          onClick={closeModal}
        >
          <div 
            className="bg-[#16213e] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 border-0 rounded-full text-white text-2xl cursor-pointer z-10 transition-all duration-300 hover:rotate-90 backdrop-blur-md flex items-center justify-center"
            >
              <X size={24} />
            </button>

            {/* Video Wrapper */}
            <div className="relative w-full pt-[56.25%] rounded-t-2xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Info */}
            <div className="p-8">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                {selectedVideo.title}
              </h2>
              <div className="flex flex-wrap gap-5 text-gray-400 text-base">
                <span className="bg-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full font-semibold">
                  {selectedVideo.category}
                </span>
                <span>Client: {selectedVideo.client}</span>
                <span>{selectedVideo.views} views</span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {selectedVideo.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPortfolio;