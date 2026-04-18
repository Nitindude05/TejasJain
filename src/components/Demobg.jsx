import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { GridPattern } from "../grid/BackgroundBoxesDemo";
import Clients from "./Clients";
import VideoPortfolio from "./VideoPortfolio";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-black">

      {/* Background */}
      <GridPattern
        width={60}
        height={60}
        className="fill-gray-700/10 stroke-gray-480/20 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="pt-4">
          <Navbar />
        </div>
        <Hero />
        <Clients />
        <VideoPortfolio />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;