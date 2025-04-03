import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const splitAndStyleCodeAndAi = (text: string) => {
  if (!text) return [];

  const words = text.split(" ");

  const styledWords = words.map(word => {
    const loweredWord = word.toLowerCase();
    return {
      text: word,
      isStyled: loweredWord === "code" || loweredWord === "ai"
    }
  })

  return styledWords;
};
