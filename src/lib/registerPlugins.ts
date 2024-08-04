// gsapAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUpAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    }
  );
};
