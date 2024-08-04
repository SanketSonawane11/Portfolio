import React from "react";
import Hero from "./Components/Hero/Hero";
import { FloatingNav } from "./Components/ui/Navbar";
import { RiHome5Fill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
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
      link: "/about",
      icon: (
        <FaUserLarge className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <BiSolidMessageSquareEdit className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className=" overflow-hidden w-[100vw]">
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
}

export default page;
