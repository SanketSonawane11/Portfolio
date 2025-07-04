import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradient-animation";
import { GridGlobe } from "../AboutGlobe/GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import CtaButton, { IconPosition } from "../CtaButton/Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8  max-w-[90%] mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sanketsonawanework@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-none pr-3 border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,130,1) 100%)",
      }}
    >
      <div className={`${id === 6} && flex items-center justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition-all duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-white max-w-[70%] text-xs md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 right-15 z-10">
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 pr-[20px] w-fit absolute -right-3 lg:-right-2 overflow-x-auto scrollbar-hidden">
              <div className="flex flex-col gap-5 lg:gap-6 lg:mt-10 h-fit">
                {[
                  "TailwindCss",
                  "Typescript",
                  "SwiftUi",
                  "Next.Js",
                  "Recoil",
                  "GSAP",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132ec7]"
                  >
                    {skill}
                  </span>
                ))}
                <span className="py-6 lg:mb-5 px-3 rounded-lg text-center bg-[#151831]" />
              </div>
              <div className="flex flex-col gap-5 lg:gap-6 lg:mt-4 h-fit">
                <span className="py-6 px-3 rounded-lg text-center bg-[#151831]" />
                {["MongoDb", "Express.js", "APIs", "Supabase", "Postman API", "Vercel"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132ec7]"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidyMid slice",
                    },
                  }}
                />
              </div>
              <CtaButton
                text={copied ? "Email Copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                onClick={handleCopy}
                position={IconPosition.Right}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
