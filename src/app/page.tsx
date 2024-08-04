import React from "react";
import Hero from "./Components/Hero/Hero";
import { FloatingNav } from "./Components/ui/Navbar";
import { RiHome5Fill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { HiBriefcase } from "react-icons/hi";
import About from "./Components/AboutGrid/About";

function page() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <RiHome5Fill className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <FaUserLarge className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <HiBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <BiSolidMessageSquareEdit className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className=" overflow-hidden w-[100vw]">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
    </div>
  );
}

export default page;
