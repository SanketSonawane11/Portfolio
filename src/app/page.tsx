import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/AboutGrid/About";
import { FloatingNav } from "./Components/ui/Navbar";
import { navItems } from "./data/navLinks";
import Projects from "./Components/Projects/Projects";
import PastEx from "./Components/PastExperience/PastEx";
import { Products } from "./Components/Products/Products";

function page() {
  return (
    <div className="overflow-hidden bg-black w-[100vw] scroll-smooth">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Products/>
      <Projects />
      <PastEx />
    </div>
  );
}

export default page;
