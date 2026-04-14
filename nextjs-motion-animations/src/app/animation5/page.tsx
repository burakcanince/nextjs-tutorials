"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const initialItems = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
];

export default function Animation5() {
  const [items, setItems] = useState(initialItems);

  const removeFirst = () => {
    setItems((prev) => prev.slice(1));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Animated List with AnimatePresence</h1>
      <button
        onClick={removeFirst}
        className="mb-6 px-4 py-2 bg-blue-500 rounded text-sm cursor-pointer"
      >
        Remove First Item
      </button>
      <ul className="space-y-4 w-full max-w-md">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-zinc-800 p-4 rounded-lg shadow-md"
              layout
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
