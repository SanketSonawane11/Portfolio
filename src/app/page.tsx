import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/AboutGrid/About";
import { FloatingNav } from "./Components/ui/Navbar";
import { navItems } from "./data/navLinks";
import Projects from "./Components/Projects/Projects";
import Greeting from "./Components/Greeting";

function page() {
  return (
    <div className="overflow-hidden bg-black w-[100vw] scroll-smooth">
      {/* <Greeting /> */}
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default page;
