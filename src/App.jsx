import React from "react";
import Demobg from "./components/Demobg";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900">
      
      {/* Background (always first) */}
      <Demobg />

      {/* Foreground UI */}
      {/* <div className="relative z-10">
        <Navbar />
        <Hero />
      </div> */}

    </div>
  );
}

export default App;