"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';

const heroItems = [
  { letter: "T", word: "Trust" },
  { letter: "R", word: "Responsibility" },
  { letter: "I", word: "Integrity" },
  { letter: "K", word: "Knowledge" },
  { letter: "A", word: "Alliance (Friendly Association)" },
];

const financialItems = [
  { letter: "F", word: "Finance", id: 1 },
  { letter: "I", word: "Investment", id: 2 },
  { letter: "N", word: "Networking", id: 3 },
  { letter: "A", word: "Assets", id: 4 },
  { letter: "N", word: "Negotiation", id: 5 },
  { letter: "C", word: "Capital", id: 6 },
  { letter: "I", word: "Insurance", id: 7 },
  { letter: "A", word: "Accounting", id: 8 },
  { letter: "L", word: "Liquidity", id: 9 },
  { letter: "S", word: "Savings", id: 10 },
];

export default function HeroSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex flex-col items-start justify-start bg-background text-foreground py-4 md:px-24">
        {heroItems.map((item, index) => (
          <div
            key={item.letter}
            className="relative flex items-center w-full cursor-pointer py-1 md:py-3"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-8 h-8 flex items-center justify-center border border-muted-foreground text-l rounded-xl font-bold md:w-12 md:h-12 md:text-2xl lg:w-14 lg:h-14 lg:text-3xl transition-all">
              {item.letter}
            </div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: hovered === index ? "80%" : 0,
                opacity: hovered === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-16 md:left16 lg:left-20 top-2 h-6 md:h-12 lg:h-14 bg-primary text-background font-bold flex items-center px-4 md:px-6 lg:px-8 rounded-r-lg shadow-lg overflow-hidden whitespace-nowrap transition-all"
            >
              {item.word}
            </motion.div>
          </div>
        ))}
        <div className="flex space-x-0 md:space-x-2 rounded-xl lg:pl-16 py-4 md:py-0 lg:py-0">
          {financialItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-start rounded-xl pr-1"
            >
              <div className="w-8 h-8 flex items-center  rounded-xl justify-center border border-muted-foreground text-l font-bold md:w-12 md:h-12 md:text-2xl lg:w-14 lg:h-14 lg:text-3xl">
                {item.letter}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center items-start flex py-8">
        <Image src="/hero.webp" alt="hero image" width={400} height={400}/>
      </div>
    </div>
  );
}
