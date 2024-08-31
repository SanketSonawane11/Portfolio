"use client";

import React, { useEffect } from "react";
import { Spotlight } from "../ui/Spotlight";
import { GridBackground } from "../ui/Grid-background";
import { HeroHighlight, Highlight } from "../ui/Hero-highlight";
import HeroFade from "../ui/gsapFade";
import gsap from "gsap";
import CtaButton from "../CtaButton/Button";
import { FaLocationArrow } from "react-icons/fa";
import { IconPosition } from "../CtaButton/Button";

function Hero() {
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
    <div className="w-[100%] flex items-center justify-center">
      <Spotlight className="top-[-10%] left-[15%]" fill="blue" />
      <Spotlight className="top-[-30%] left-[-10%]" fill="white" />
      <GridBackground className="flex flex-col w-[100%] items-center justify-center">
        <div className="text-center w-[25rem] md:min-w-[40rem] lg:min-w-[85rem] flex-col flex items-center gap-5 justify-center">
          <HeroFade>
            <HeroHighlight className=" text-white/80 text-4xl md:text-5xl lg:text-6xl">
              <HeroTextFade className=" letter text-white/80 text-4xl md:text-5xl lg:text-6xl">
                <h1 className="text-lg mb-5 md:mb-10 md:text-xl font-light text-white/60">
                  {splitText(
                    "Elevating Web Development with Precision and Style"
                  )}
                </h1>
                <p>
                  {splitText("Crafting ")}
                  <Highlight className="text-white">
                    {splitText("Engaging Web Experiences")}
                  </Highlight>{" "}
                  {splitText(" with Expertise in Tech")}
                </p>
                <div className="text-xl mt-8 md:mt-5 text-white/70">
                  Hi! I’m{" "}
                  <Highlight className="name text-white">
                    {splitText("Sanket")}
                  </Highlight>{" "}
                  , a{" "}
                  <Highlight className="text-white">
                    {splitText("Full-Stack Developer")}
                  </Highlight>{" "}
                  specializing in {" "} 
                  <span className="text-white"> React and Next.js.</span>
                </div>
              </HeroTextFade>
            </HeroHighlight>
          </HeroFade>
          <a href="#about">
            <CtaButton
              text="See my work"
              position={IconPosition.Left}
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </GridBackground>
    </div>
  );
}

export default Hero;
