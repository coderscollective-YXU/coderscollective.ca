"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  color: string;
  character: string;
};

const starCharacters = ["✦", "✧", "✨", "⋆", "⭐︎", "★"];
const starColors = ["text-yellow-300", "text-yellow-200", "text-amber-300", "text-indigo-300", "text-violet-300"];

export const MagicStars = ({
  className,
  numberOfStars = 10,
  containerHeight = 60,
  containerWidth = 120,
}: {
  className?: string;
  numberOfStars?: number;
  containerHeight?: number;
  containerWidth?: number;
}) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stars.length < numberOfStars) {
        const newStar: Star = {
          id: Date.now(),
          x: Math.random() * containerWidth,
          y: Math.random() * containerHeight,
          size: Math.random() * 18 + 12, // Random size between 4-12px
          duration: Math.random() * 1.5 + 0.5, // Random duration between 0.5-2s
          color: starColors[Math.floor(Math.random() * starColors.length)],
          character: starCharacters[Math.floor(Math.random() * starCharacters.length)]
        };
        
        setStars((prevStars) => [...prevStars, newStar]);

        // Remove the star after its animation
        setTimeout(() => {
          setStars((prevStars) => 
            prevStars.filter((star) => star.id !== newStar.id)
          );
        }, newStar.duration * 1000);
      }
    }, 200 + Math.random() * 300); // Randomized interval for more natural appearance

    return () => clearInterval(interval);
  }, [stars, numberOfStars, containerWidth, containerHeight]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      style={{ width: containerWidth, height: containerHeight }}
    >
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, Math.random() * 45 - 22.5], // Random rotation between -22.5 and 22.5 degrees
              y: [0, Math.random() * -10], // Random upward float
            }}
            transition={{
              duration: star.duration,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${star.x}px`,
              top: `${star.y}px`,
              fontSize: `${star.size}px`,
            }}
            className={cn("filter drop-shadow-md", star.color)}
          >
            {star.character}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}; 