"use client";

import { motion } from "motion/react";

const items = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript"
];

export default function Animation4() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Animated List</h1>
      <ul className="space-y-4 w-full max-w-md">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bg-zinc-800 p-4 rounded-lg shadow-md"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
