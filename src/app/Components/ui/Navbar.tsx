"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiLineVerticalBold } from "react-icons/pi";
import { socialLinks } from "@/app/data/navLinks";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-3xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-6  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 hover:scale-105 rounded-lg duration-150 ease-out transition-all hover:font-semibold"
            )}
          >
            <span className="block active:bg-gradient-to-r active:from-blue-500 active:to-purple-500 active:bg-clip-text active:text-transparent transition-all ease-out duration-200 sm:hidden">
              {navItem.icon}
            </span>
            <span className="hidden hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all ease-out duration-200 sm:block text-lg mx-5">
              {navItem.name}
            </span>
          </Link>
        ))}

        <PiLineVerticalBold className="text-white" />

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((i) => (
            <a
              key={i.name}
              href={i.link}
              target="_blank"
              className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300 hover:scale-105 duration-150 ease-out transition-all hover:font-semibold"
            >
              <span className="block active:bg-gradient-to-r active:from-blue-500 active:to-purple-500 active:bg-clip-text active:text-transparent transition-all ease-out duration-200 sm:hidden">
                {i.icon}
              </span>
              <span className="hidden hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all ease-out duration-200 sm:block text-lg">
                {i.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
