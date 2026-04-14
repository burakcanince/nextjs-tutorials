"use client";

import { motion } from "motion/react";

export default function Animation3() {
    return (
        <div className="font-sans flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 min-h-screen bg-zinc-900 p-8">
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        backgroundColor: "#85fbd0",
                        color: "#000"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-32 h-32 bg-zinc-800 text-white flex items-center justify-center rounded-xl shadow-lg cursor-pointer"
                >
                    CARD {i + 1}
                </motion.div>
            ))}
        </div>
    );
}
