import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/AboutGrid/About";
import { FloatingNav } from "./Components/ui/Navbar";
import { navItems } from "./data/navLinks";
import Projects from "./Components/Projects/Projects";

function page() {
  return (
    <div className="overflow-hidden w-[100vw] scroll-smooth">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default page;
