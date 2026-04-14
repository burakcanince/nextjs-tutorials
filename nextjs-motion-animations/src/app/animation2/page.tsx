"use client";

import { motion } from "motion/react";

export default function Animation2() {
  return (
    <div className="font-sans flex flex-col items-center justify-center gap-6 min-h-screen p-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-zinc-700 text-white text-sm p-3 rounded"
          >
            ITEM {i + 1}
          </motion.div>
        ))}
    </div>
  );
}
