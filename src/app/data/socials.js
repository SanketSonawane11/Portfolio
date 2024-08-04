import { TfiLinkedin } from "react-icons/tfi";
import { RxGithubLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ReactNode } from "react";

// interface links {
//   name: string;
//   link: string;
//   icon: ReactNode;
// }

export const socialLinks= [
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
