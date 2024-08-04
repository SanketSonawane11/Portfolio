import { TfiLinkedin } from "react-icons/tfi";
import { RxGithubLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RiHome5Fill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { HiBriefcase } from "react-icons/hi";

export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/sanket-sonawane11",
    icon: <TfiLinkedin />,
  },
  {
    name: "GitHub",
    link: "https://github.com/SanketSonawane11",
    icon: <RxGithubLogo />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sanketsonawane11",
    icon: <AiFillInstagram />,
  },
  {
    name: "X",
    link: "https://x.com/Sanket_S11",
    icon: <BsTwitterX />,
  },
];


export const navItems = [
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