// ─── Navigation Links ───────────────────────────────────────────────────────
const navLinks = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "Clients",
        link: "#clients",
    },
    {
        name: "Works",
        link: "#works",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

// ─── Brand ──────────────────────────────────────────────────────────────────
export const BRAND = {
  name:     "Tejas",
  logoSrc:  "",   // ← pre-set a logo URL here, or leave empty to use initials
  homeHref: "/",
};

// ─── CTA Button ─────────────────────────────────────────────────────────────
export const CTA = {
  label: "Download",
  href:  "/download",
};


// Add to constants.js
// constants.js

// constants.js

export const CLIENTS = [
  {
    id: 1,
    name: "Keerti Purswani",
    initials: "KP",
    platform: "YouTube",
    followers: "362K",
    videos: "435",
    category: "Educational",
    photo: "/clients/Keerti-Purswani.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@KeertiPurswani"
  },
  {
    id: 2,
    name: "Gamer2Maker Nation",
    initials: "G2M",
    platform: "YouTube",
    followers: "16K",
    videos: "389",
    category: "Educational",
    photo: "/clients/G2M.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@G2M_Nation"
  },
  {
    id: 3,
    name: "Ishan Sharma",
    initials: "IS",
    platform: "YouTube",
    followers: "2.13M",
    videos: "1.8k",
    category: "Lifestyle",
    photo: "/clients/Ishan-Sharma.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@IshanSharma7390"
  },
  {
    id: 4,
    name: "Shruti Kapoor",
    initials: "SK",
    platform: "YouTube",
    followers: "42.4K",
    videos: "316",
    category: "Educational",
    photo: "/clients/Shruti-Kapoor.jpg",
    verified: false,
    platformLink: "https://www.youtube.com/@shrutikapoor08"
  },
  {
    id: 5,
    name: "Lynn Tiang",
    initials: "LT",
    platform: "YouTube",
    followers: "1.19K",
    videos: "175",
    category: "Coach",
    photo: "/clients/Lynn-Tiang.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@lynofuro"
  },
  {
    id: 6,
    name: "mvp insight",
    initials: "MVP",
    platform: "YouTube",
    followers: "75.3k",
    videos: "1.2k",
    category: "Trading",
    photo: "/clients/mvp-insight.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@themvp_in"
  },
  {
    id: 7,
    name: "Mrunmai Dahare",
    initials: "MD",
    platform: "YouTube",
    followers: "11k",
    videos: "73",
    category: "Educational",
    photo: "/clients/Mrunmai-Dahare.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@CodeWithMrunmai"
  },
  {
    id: 8,
    name: "The Outlier Podcast",
    initials: "TOP",
    platform: "YouTube",
    followers: "85",
    videos: "3",
    category: "Podcasts",
    photo: "/clients/The-Outlier-Podcast.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@TheOutlierPodcastHQ"
  },
  {
    id: 9,
    name: "3eyedtech",
    initials: "3ET",
    platform: "YouTube",
    followers: "1.95k",
    videos: "18",
    category: "Educational",
    photo: "/clients/3eyedtech.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@Amit-Educosys"
  },
  {
    id: 10,
    name: "Niraj Dugar",
    initials: "ND",
    platform: "YouTube",
    followers: "34.9k",
    videos: "514",
    category: "Finance",
    photo: "/clients/Niraj-Dugar.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@dugarniraj"
  },
  {
    id: 11,
    name: "Felipe Fleming",
    initials: "FF",
    platform: "YouTube",
    followers: "299",
    videos: "52",
    category: "GameDev",
    photo: "/clients/Felipe-Fleming.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@thegamedevguide"
  },
  {
    id: 12,
    name: "Dealfixkaro",
    initials: "DFK",
    platform: "YouTube",
    followers: "139k",
    videos: "462",
    category: "Review",
    photo: "/clients/Dealfixkaro.jpg",
    verified: true,
    platformLink: "https://www.youtube.com/@dealfixkaro"
  }
];

export const PLATFORM_STYLES = {
  YouTube: { 
    gradient: 'from-red-500 to-red-600',
    avatar: 'bg-gradient-to-br from-red-950 to-red-900 text-red-300',
    badge: 'bg-red-500/20 text-red-400 border-red-500/30',
    glow: 'shadow-red-500/20',
    icon: '▶️'
  },
  Instagram: { 
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    avatar: 'bg-gradient-to-br from-purple-950 to-pink-900 text-purple-300',
    badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    glow: 'shadow-purple-500/20',
    icon: '📸'
  },
  TikTok: { 
    gradient: 'from-cyan-400 to-pink-500',
    avatar: 'bg-gradient-to-br from-emerald-950 to-teal-900 text-emerald-300',
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    icon: '🎵'
  },
  Twitch: { 
    gradient: 'from-indigo-500 to-purple-600',
    avatar: 'bg-gradient-to-br from-indigo-950 to-purple-900 text-indigo-300',
    badge: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    glow: 'shadow-indigo-500/20',
    icon: '🎮'
  },
};

export const CLIENTS_SECTION = {
  badge: {
    text: "Trusted by Top Creators",
    icon: "⭐"
  },
  heading: {
    main: "Our Creative Partners",
    highlight: `${CLIENTS.length}+ Amazing Creators`,
    subtitle: "Building success stories together, one video at a time"
  },
  stats: {
    totalCreators: `${CLIENTS.length}+`,
    totalVideos: "5000+",
    totalReach: "500M+"
  }
};
// Portfolio Videos (Updated with more data)
export const portfolioVideos = [
  {
    id: 1,
    title: "GenAI Roadmap | Strategy to study | Tips | Prerequisites | Everything you need to know!",
    videoUrl: "https://www.youtube.com/watch?v=bQIPwkSfGZM",
    embedUrl: "https://www.youtube.com/watch?v=bQIPwkSfGZM",
    thumbnail: "/YoutubeThumb/Kirti-HD.jpg",
    category: "Educational",
    duration: "22:33",
    client: "Keerti Purswani"
  },
  {
    id: 2,
    title: "Ep 1 | Becoming the 10X Designer |@saptarshipr AVP Swiggy | Outlier Podcast",
    videoUrl: "https://www.youtube.com/watch?v=er_Wpxyl4v4",
    embedUrl: "https://www.youtube.com/watch?v=er_Wpxyl4v4",
    thumbnail: "/YoutubeThumb/Outliner.jpg",
    category: "Podcast",
    duration: "1:45:05",
    client: "The Outliner Podcast"
  },
  {
    id: 3,
    title: "The SHOCKING Truth About Indian AAA Games",
    videoUrl: "https://www.youtube.com/watch?v=oqxHM7xOEYE",
    embedUrl: "https://www.youtube.com/watch?v=oqxHM7xOEYE",
    thumbnail: "/YoutubeThumb/G2M.jpg",
    category: "Educational",
    duration: "13:11",
    client: "Gamer2Maker Nation"
  },
  {
    id: 4,
    title: "React Performance Optimizations: How to Fix a Slow App",
    videoUrl: "https://www.youtube.com/watch?v=AZ9i3eoyrnE",
    embedUrl: "https://www.youtube.com/watch?v=AZ9i3eoyrnE",
    thumbnail: "/YoutubeThumb/Shruti.jpg",
    category: "Educational",
    duration: "32:34",
    client: "Shruti Kapoor"
  },
  {
    id: 5,
    title: "Learn GPU Programming from Scratch (CUDA + C++) | Run on AWS for FREE",
    videoUrl: "https://www.youtube.com/watch?v=KuKKOR_k_UM",
    embedUrl: "https://www.youtube.com/watch?v=KuKKOR_k_UM",
    thumbnail: "/YoutubeThumb/3eyedtech.jpg",
    category: "Educational",
    duration: "38:34",
    client: "3eyedtech"
  },
  {
    id: 6,
    title: "RTX 5090 Launch - Pricing, Specs, Benchmarks & Launch Date for India | TheMVP",
    videoUrl: "https://www.youtube.com/watch?v=zJJ1CGpQU4c",
    embedUrl: "https://www.youtube.com/watch?v=zJJ1CGpQU4c",
    thumbnail: "/YoutubeThumb/MVP.jpg",
    category: "Tech",
    duration: "3:58",
    client: "mvp insight"
  },
  {
    id: 7,
    title: "Ranking Worst to Best HDFC Credit Cards (My Honest Review)",
    videoUrl: "https://www.youtube.com/watch?v=1B2AtDtfWdw",
    embedUrl: "https://www.youtube.com/watch?v=1B2AtDtfWdw",
    thumbnail: "/YoutubeThumb/Niraj.jpg",
    category: "Finance",
    duration: "16:14",
    client: "Niraj Dugar"
  },
   {
    id: 8,
    title: "I Became a GAME TESTER and Here's What Happened",
    videoUrl: "https://www.youtube.com/watch?v=beLy6sLO_hU",
    embedUrl: "https://www.youtube.com/watch?v=beLy6sLO_hU",
    thumbnail: "/YoutubeThumb/G2M2.jpg",
    category: "Educational",
    duration: "10:47",
    client: "Gamer2Maker Nation"
  },  {
    id: 9,
    title: "Job Opportunities in 2026! In-Demand Skills to Stay Ahead of the Market!",
    videoUrl: "https://www.youtube.com/watch?v=1IAy3DtXr-4",
    embedUrl: "https://www.youtube.com/watch?v=1IAy3DtXr-4",
    thumbnail: "/YoutubeThumb/Kirti2.jpg",
    category: "Educational",
    duration: "16:02",
    client: "Keerti Purswani"
  },
    {
    id: 10,
    title: "Best 55 Inch TV 2026 ⚡ Best 55 Inch LED & QLED Mini Led Smart TV🔥Best 55 inch 4k tv india",
    videoUrl: "https://www.youtube.com/watch?v=d_nOkdBAcpM",
    embedUrl: "https://www.youtube.com/watch?v=d_nOkdBAcpM",
    thumbnail: "/YoutubeThumb/Dealfix.jpg",
    category: "Tech Review",
    duration: "14:41",
    client: "Dealfixkaro"
  },
    {
    id: 11,
    title: "HDFC UPI RUPAY CREDIT CARD : Benefits & Charges with Full Review",
    videoUrl: "https://www.youtube.com/watch?v=DTzVS1yd-3k",
    embedUrl: "https://www.youtube.com/watch?v=DTzVS1yd-3k",
    thumbnail: "/YoutubeThumb/VR.jpg",
    category: "Tech",
    duration: "5:10",
    client: "VR Wealthcare"
  },
    {
    id: 12,
    title: "Deep Neural Networks From Scratch - End to End Series with C++ Code | Beginner Friendly",
    videoUrl: "https://www.youtube.com/watch?v=57tLrcsdi0A",
    embedUrl: "https://www.youtube.com/watch?v=57tLrcsdi0A",
    thumbnail: "/YoutubeThumb/3eyed2.jpg",
    category: "Educational",
    duration: "6:10",
    client: "3eyedach"
  },

];

// Category Styles
export const CATEGORY_STYLES = {
  Corporate: {
    gradient: "from-blue-500 to-indigo-600",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    glow: "shadow-blue-500/20"
  },
  Advertisement: {
    gradient: "from-purple-500 to-pink-600",
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    glow: "shadow-purple-500/20"
  },
  Event: {
    gradient: "from-orange-500 to-red-600",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    glow: "shadow-orange-500/20"
  },
  "Social Media": {
    gradient: "from-pink-500 to-rose-600",
    badge: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    glow: "shadow-pink-500/20"
  },
  Documentary: {
    gradient: "from-emerald-500 to-teal-600",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    glow: "shadow-emerald-500/20"
  },
  "Music Video": {
    gradient: "from-violet-500 to-purple-600",
    badge: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    glow: "shadow-violet-500/20"
  },
  "Real Estate": {
    gradient: "from-cyan-500 to-blue-600",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    glow: "shadow-cyan-500/20"
  },
  Wedding: {
    gradient: "from-rose-500 to-pink-600",
    badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    glow: "shadow-rose-500/20"
  }
};

// Portfolio Section Config
export const PORTFOLIO_SECTION = {
  badge: {
    text: "Professional Video Editing",
    icon: "🎬"
  },
  heading: {
    main: "Video Portfolio",
    highlight: "Crafting Stories Through Visual Excellence",
    subtitle: "From concept to completion, every frame tells a story"
  },
  stats: {
    totalProjects: "150+",
    happyClients: "80+",
    totalViews: "100M+"
  }
};

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/anshtoast/?hl=en",
        imgPath: "/images/insta.png",
    },
     {
        name: "insta2",
        url: "https://www.instagram.com/ansh_jain.gg/?hl=en",
        imgPath: "/images/insta.png",
    },
    {
        name: "youtube",
        url: "https://www.youtube.com/@it0sh",
        imgPath: "/images/image.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://x.com/Anshjain_OG",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/tejas-jain-419076299/",
        imgPath: "/images/linkedin.png",
    },
];

// constants.js

// ... your existing CLIENTS constants

// Short Videos Data
export const SHORT_VIDEOS = [
  {
    id: 1,
    title: "Most IT teams are not innovating",
    videoUrl: "https://www.instagram.com/reels/DXB171Skog9/", 
    thumbnail: "/shorts/keerti.png",
    views: "5.8k",
    likes: "67",
    platform: "Instagram Reels",
    creator: {
      name: "Keerti Purswani",
      verified: true
    },
    category: "Educational"
  },
  {
    id: 2,
    title: "Indian game Dev Begineers",
    videoUrl: "https://www.instagram.com/reels/DJ9H3_MPxI_/", 
    thumbnail: "/shorts/segal.png",
    views: "108k",
    likes: "8.9K",
    platform: "Instagram Reels",
    creator: {
      name: "Sehgalrahul1",
      verified: true
    },
    category: "Educational"
  },
  {
    id: 3,
    title: "The gate-kept secret in Gamedev",
    videoUrl: "https://www.instagram.com/reels/DVx2oGbjEdW/",
    thumbnail: "/shorts/g2m.png",
    views: "918",
    likes: "46",
    platform: "Instagram Reels",
    creator: {
      name: "thegamedevguide",
      verified: true
    },
    category: "Game Development"
  },
  {
    id: 4,
    title: "Prayer is like calling customer",
    videoUrl: "https://www.instagram.com/p/DQ-746WFTaV/",
    thumbnail: "/shorts/lyno.png",
    views: "3.5M",
    likes: "16k",
    platform: "Instagram Reels",
    creator: {
      name: "Lynofuro",
      verified: true
    },
    category: "Meditation"
  },
  {
    id: 5,
    title: "First episode of Outlier ",
    videoUrl: "https://www.instagram.com/p/DLZMegVJm2o/",
    thumbnail: "/shorts/Outliner1.png",
    views: "4.1k",
    likes: "545",
    platform: "Instagram Reels",
    creator: {
      name: "Outliner.hq",
      verified: true
    },
    category: "Podcast"
  },
  {
    id: 6,
    title: "Phase 3 of paypal clone project",
    videoUrl: "https://www.youtube.com/shorts/DBnF5-YQA5c",
    thumbnail: "https://img.youtube.com/vi/DBnF5-YQA5c/maxresdefault.jpg",
    views: "2.9k",
    likes: "101",
    platform: "YouTube Shorts",
    creator: {
      name: "CodewithMrunmai",
      verified: true
    },
    category: "Educational"
  },
  {
    id: 7,
    title: "I almost quit content creation",
    videoUrl: "https://www.youtube.com/shorts/S2KiRqVbiXk",
    thumbnail: "https://img.youtube.com/vi/S2KiRqVbiXk/maxresdefault.jpg",
    views: "6.3k",
    likes: "117",
    platform: "YouTube Shorts",
    creator: {
      name: "ShrutiKapoor",
      verified: true
    },
    category: "Educational"
  }
];

// Platform Styles for Short Videos
export const SHORT_VIDEO_PLATFORMS = {
  "YouTube Shorts": {
    color: "from-red-500 to-red-600",
    badge: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: "🎬"
  },
  "Instagram Reels": {
    color: "from-purple-500 via-pink-500 to-orange-500",
    badge: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 border-pink-500/30",
    icon: "📸"
  },
  "TikTok": {
    color: "from-cyan-400 to-pink-500",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    icon: "🎵"
  }
};

// Short Videos Section Config
export const SHORT_VIDEOS_SECTION = {
  badge: {
    text: "Short Form Content",
    icon: "⚡"
  },
  heading: {
    main: "Viral Short Videos",
    highlight: "Shorts & Reels",
    subtitle: "Engaging bite-sized content that captures attention in seconds"
  },
};

export { navLinks, socialImgs };
