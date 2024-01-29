import { ClassValue, clsx } from "clsx"; // Import the "ClassValue" and "clsx" from the "clsx" library.
import { twMerge } from "tailwind-merge"; // Import the "twMerge" function from the "tailwind-merge" library.

/** cn: classname */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Create a function named "cn" that takes one or more class names and merges them using "twMerge" and "clsx".
}

export function formatDate(input: string): string {
  const date = new Date(input); // Convert the input string to a JavaScript Date object.
  return date.toLocaleDateString("en-US", {
    month: "long", // Format the date to display the full month name.
    day: "numeric", // Format the date to display the numeric day.
    year: "numeric", // Format the date to display the numeric year.
  });
}
