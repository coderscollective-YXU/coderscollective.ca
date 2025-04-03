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

export function formatDate(datetimeString: string) {
  if (!datetimeString) return "No Date";
  const dateObj = new Date(datetimeString);

  if (isNaN(dateObj.getTime())) {
    return "Invalid Date"; // Handle invalid date strings
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObj.toLocaleDateString(undefined, options);
}
