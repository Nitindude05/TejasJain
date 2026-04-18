// ─── Navigation Links ───────────────────────────────────────────────────────
const navLinks = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "Services",
        link: "#services",
    },
    {
        name: "Contact",
        link: "#contact",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
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



// constants.js
export const portfolioVideos = [
  {
    id: 1,
    title: "Corporate Brand Video",
    videoUrl: "https://youtu.be/2gcoIepGMy0?si=6AhNyeE20XU79-kz ",
    thumbnail: "https://images.unsplash.com/photo-1773332598451-8a0a59941912?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Corporate",
    duration: "2:45",
    views: "1.2M",
    client: "Tech Corp"
  },
  {
    id: 2,
    title: "Product Advertisement",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "Advertisement",
    duration: "1:30",
    views: "850K",
    client: "Brand XYZ"
  },
  {
    id: 3,
    title: "Event Highlight Reel",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "Event",
    duration: "3:20",
    views: "2.1M",
    client: "Event Co"
  },
  {
    id: 4,
    title: "Social Media Campaign",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "Social Media",
    duration: "0:45",
    views: "3.5M",
    client: "Digital Agency"
  },
  {
    id: 5,
    title: "Documentary Short",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "Documentary",
    duration: "5:15",
    views: "650K",
    client: "Media House"
  },
  {
    id: 6,
    title: "Music Video Production",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "Music Video",
    duration: "4:00",
    views: "5.2M",
    client: "Independent Artist"
  }
];


export const CLIENTS = [
  {
    id: 1,
    name: "Alex Rivera",
    initials: "AR",
    platform: "YouTube",
    followers: "2.5M",
    videos: "350",
    category: "Gaming",
    photo: "https://images.unsplash.com/photo-1773332598451-8a0a59941912?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add photo URLs
  },
  {
    id: 2,
    name: "Sarah Chen",
    initials: "SC",
    platform: "Instagram",
    followers: "1.8M",
    videos: "520",
    category: "Lifestyle",
    photo: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Mike Johnson",
    initials: "MJ",
    platform: "TikTok",
    followers: "5.2M",
    videos: "890",
    category: "Comedy",
    photo: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 4,
    name: "Emma Davis",
    initials: "ED",
    platform: "Twitch",
    followers: "780K",
    videos: "1200",
    category: "Streaming",
    photo: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 5,
    name: "Carlos Martinez",
    initials: "CM",
    platform: "YouTube",
    followers: "3.1M",
    videos: "425",
    category: "Tech Reviews",
    photo: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    name: "Lily Wang",
    initials: "LW",
    platform: "Instagram",
    followers: "2.3M",
    videos: "680",
    category: "Fashion",
    photo: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 7,
    name: "James Brown",
    initials: "JB",
    platform: "TikTok",
    followers: "4.7M",
    videos: "950",
    category: "Dance",
    photo: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 8,
    name: "Sophie Taylor",
    initials: "ST",
    platform: "YouTube",
    followers: "1.9M",
    videos: "310",
    category: "Cooking",
    photo: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 9,
    name: "Ryan Lee",
    initials: "RL",
    platform: "Twitch",
    followers: "1.2M",
    videos: "1500",
    category: "Gaming",
    photo: "https://i.pravatar.cc/150?img=52"
  },
  {
    id: 10,
    name: "Mia Anderson",
    initials: "MA",
    platform: "Instagram",
    followers: "3.5M",
    videos: "720",
    category: "Travel",
    photo: "https://i.pravatar.cc/150?img=20"
  }
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export { navLinks, socialImgs };
