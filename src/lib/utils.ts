import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Configuration options for staggered rotation
 */
interface RotationOptions {
  maxRotation?: number;
  alternating?: boolean;
}

/**
* Generates a rotation value for an element based on its index
* Similar to the staggered rotation effect seen in testimonial cards
* 
* @param {number} index - The index of the element
* @param {RotationOptions} options - Configuration options for the rotation
* @returns {number} The rotation value in degrees
*/
export function getStaggeredRotation(index: number, options: RotationOptions = {}): number {
  const {
      maxRotation = 3,
      alternating = true
  } = options;

  const seed: number = Math.sin(index * 9999) * 10000;
  const randomValue: number = (seed - Math.floor(seed)) * maxRotation;
  
  if (!alternating) {
      // Return random rotation between -maxRotation and +maxRotation
      return (randomValue * 2) - maxRotation;
  }
  
  // Alternate between positive and negative rotation based on index
  const direction: number = index % 2 === 0 ? -1 : 1;
  return randomValue * direction;
}