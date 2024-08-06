import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/AboutGrid/About";
import { FloatingNav } from "./Components/ui/Navbar";
import { navItems } from "./data/navLinks";

function page() {
  return (
    <div className="overflow-hidden w-[100vw]">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
    </div>
  );
}

export default page;
