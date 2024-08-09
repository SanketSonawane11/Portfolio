import { cn } from "@/lib/utils";
import React from "react";

export enum IconPosition {
  Left = "Left",
  Right = "Right",
}
interface CtaButtonProps {
  text: string;
  className?: string;
  position: IconPosition;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  className,
  position,
  onClick,
  icon = null,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "inline-flex gap-3 h-fit animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      )}
    >
      {position === IconPosition.Left && icon}
      {text}
      {position === IconPosition.Right && icon}
    </button>

    // <button
    //   onClick={onClick}
    //   className="p-[3px] w-fit h-fit relative active:scale-95 transition-all ease-out duration-150"
    // >
    //   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
    //   <div className="px-8 py-2 text-sm md:text-md lg:text-lg bg-black rounded-2xl relative group duration-200 text-white hover:bg-transparent active:bg-black flex items-center justify-center gap-2 transition-all ease-out lg:hover:text-[1rem]">
    //     {position === IconPosition.Left && icon}
    //     {text}
    //     {position === IconPosition.Right && icon}
    //   </div>
    // </button>
  );
};

export default CtaButton;

// ----------------------------------------Old Button ---------------------------------------
