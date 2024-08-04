'use client'

import React, { useEffect, useRef } from "react";
import { fadeUpAnimation } from "../../../lib/registerPlugins";

const HeroFade: React.FC<{ className?: string; children: any }> = ({
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeUpAnimation(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default HeroFade;
