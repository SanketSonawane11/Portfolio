import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { GridBackground } from "../ui/Grid-background";
import { HeroHighlight, Highlight } from "../ui/Hero-highlight";
import HeroFade from "../ui/gsapFade";

function Hero() {
  return (
    <div>
      <Spotlight className="top-[-10%] left-[15%]" fill="blue" />
      <Spotlight className="top-[-30%] left-[-10%]" fill="white" />
      <GridBackground className="flex flex-col w-[100%] items-center justify-center">
        <div className="text-center w-[32rem] md:min-w-[50rem] lg:min-w-[85rem] flex-col flex items-center gap-8 justify-center">
          <HeroFade>
            <HeroHighlight className=" text-white/80 text-4xl md:text-5xl lg:text-6xl">
              <h1 className="text-lg mb-5 md:mb-10 md:text-xl font-light text-white/60">
                Elevating Web Development with Precision and Style
              </h1>
              Crafting{" "}
              <Highlight className="text-black dark:text-white">
                Engaging Web Experiences
              </Highlight>{" "}
              with with Expertise in Tech
              <div className="text-xl mt-8 md:mt-5 text-white/70">
                Hi! I’m Sanket, a <Highlight>Full-Stack Developer</Highlight>{" "}
                specializing in React and Next.js.
              </div>
            </HeroHighlight>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 text-sm md:text-lg bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                See my work
              </div>
            </button>
          </HeroFade>
        </div>
      </GridBackground>
    </div>
  );
}

export default Hero;
