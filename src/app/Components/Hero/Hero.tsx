"use client";

import React, { useEffect } from "react";
import { Spotlight } from "../ui/Spotlight";
import { GridBackground } from "../ui/Grid-background";
import { HeroHighlight, Highlight } from "../ui/Hero-highlight";
import HeroFade from "../ui/gsapFade";
import { TextGenerateEffect } from "../ui/Text-generate-effect";
import gsap from "gsap";

function Hero() {
  const word = "Crafting Engaging Web Experiences with Expertise in Tech";

  const HeroTextFade = ({
    className,
    children,
  }: {
    className: string;
    children: any;
  }) => {
    useEffect(() => {
      const elements = document.querySelectorAll(".letter");
      gsap.fromTo(
        elements,
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.05 }
      );
    }, []);

    return <div className={className}>{children}</div>;
  };

  const splitText = (text: string) =>
    text.split(" ").map((letter, index) => (
      <span key={index} className="letter">
        {letter}{" "}
      </span>
    ));

  return (
    <div>
      <Spotlight className="top-[-10%] left-[15%]" fill="blue" />
      <Spotlight className="top-[-30%] left-[-10%]" fill="white" />
      <GridBackground className="flex flex-col w-[100%] items-center justify-center">
        <div className="text-center w-[32rem] md:min-w-[50rem] lg:min-w-[85rem] flex-col flex items-center gap-5 justify-center">
          <HeroFade>
            <HeroHighlight className=" text-white/80 text-4xl md:text-5xl lg:text-6xl">
              <HeroTextFade className="text-white/80 text-4xl md:text-5xl lg:text-6xl">
                <h1 className="text-lg mb-5 md:mb-10 md:text-xl font-light text-white/60">
                  {splitText(
                    "Elevating Web Development with Precision and Style"
                  )}
                </h1>
                <p>
                  {splitText("Crafting ")}
                  <Highlight className="text-black dark:text-white">
                    {splitText("Engaging Web Experiences")}
                  </Highlight>{" "}
                  {splitText(" with Expertise in Tech")}
                </p>
                <div className="text-xl mt-8 md:mt-5 text-white/70">
                  Hi! I’m Sanket, a{" "}
                  <Highlight className="text-black dark:text-white">
                    {splitText("Full-Stack Developer")}
                  </Highlight>{" "}
                  specializing in React and Next.js.
                </div>
              </HeroTextFade>
            </HeroHighlight>
            <button className="p-[3px] relative active:">
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
