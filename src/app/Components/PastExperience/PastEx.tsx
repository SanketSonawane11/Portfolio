import { workExperience } from "@/app/data/WorkEx";
import React from "react";
import { Button } from "../ui/MovingBorder";

function PastEx() {
  return (
    <div className="w-full h-fit flex items-center justify-center flex-col overflow-hidden">
      <div className="w-[80%] h-full pt-20 rounded-3xl">
        <h2 className="max-w-10xl pl-4 flex gap-3 items-center justify-start mx-auto text-3xl md:text-5xl font-bold text-neutral-200 font-sans">
          My
          <span className="text-purple-400 w-fit underline underline-offset-4">
            {" "}
            Work Experience
          </span>
        </h2>
      </div>
      <div className="w-[80%] h-full py-10 rounded-3xl grid lg:grid-cols-4 grid-cols-1 gap-5">
        {workExperience.map((e) => (
          <Button
            key={e.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={e.thumbnail}
                alt={e.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {e.title}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {e.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PastEx;
