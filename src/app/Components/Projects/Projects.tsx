projects;
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
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
          Projects That Stand Alone
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
export default Projects;
