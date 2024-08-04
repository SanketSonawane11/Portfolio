import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { GridBackground } from "../ui/Grid-background";

function Hero() {
  return (
    <div>
      <Spotlight className="top-[-10%] left-[15%]" fill="blue" />
      <Spotlight className="top-[-30%] left-[-10%]" fill="white" />
      <GridBackground className="flex flex-col w-[100%] items-center justify-center">
        <div className="text-center w-[30rem] md:min-w-[50rem] lg:min-w-[70rem] flex-col flex items-center gap-8 justify-center">
          <h1 className="text-lg md:text-xl font-light text-white/60">
            Elevating Web Development with Precision and Style
          </h1>
          <h1 className=" text-3xl md:text-6xl flex items-center justify-center">
            Blending technical prowess with design elegance for powerful and
            engaging web experiences
          </h1>
          <div className="text-xl text-white/20">
            Hi! I’m Sanket, a Full-Stack Developer specializing in React and
            Next.js.
          </div>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 text-sm md:text-lg bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              See my work
            </div>
          </button>
        </div>
      </GridBackground>
    </div>
  );
}

export default Hero;
