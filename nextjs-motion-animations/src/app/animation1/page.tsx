"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Animation1() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });

    return () => controls.stop();
  }, [count]);

  return (
    <div className="font-sans flex items-center justify-center text-center min-h-screen">
        <motion.pre style={text} >{rounded}</motion.pre>
    </div>
  );
}

const text = {
  fontSize: 120
};
