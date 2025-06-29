import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Image from "next/image";
import { projects } from "@/app/data/Projects";

function Projects() {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section
      id="projects"
      className="w-full h-fit flex items-center justify-center flex-col overflow-hidden"
    >
      <div className="w-[80%] h-full py-20 rounded-3xl">
        <h2 className="max-w-10xl pl-4 flex gap-3 items-center justify-start mx-auto text-3xl md:text-5xl font-bold text-neutral-200 font-sans">
          Projects that
          <span className="text-purple-400 w-fit underline underline-offset-4"> Stand Alone</span>
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
export default Projects;
