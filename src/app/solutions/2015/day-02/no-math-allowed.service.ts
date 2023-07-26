import { Injectable } from '@angular/core';
import { ProblemService } from '../../problem.service';

@Injectable({
  providedIn: 'root'
})
export class NoMathAllowedService implements ProblemService {

  /**
   * Calculates the total square feet of wrapping paper needed based on all the box dimensions
   * in the input string
   * @param input The input string of all the box dimensions
   * @returns The total square foot of wrapping paper needed to wrap all the boxes
   */
  puzzle1(input: string): number {
    const lines = input.split('\n');

    return lines.reduce((total, line) => {
      const { length, width, height } = this.parseDimension(line);
      const requiredWrappingPaper = this.calculateRequiredWrappingPaper(length, width, height);
      return total + requiredWrappingPaper;
    }, 0);
  }

  /**Calculates the total feet of ribbon needed based on all the box dimensions
   * in the input string
   * @param input The input string of all the box dimensions
   * @returns The total square foot of ribbon needed to wrap all the boxes
   */
  puzzle2(input: string): number {
    const lines = input.split('\n');

    return lines.reduce((total, line) => {
      const { length, width, height } = this.parseDimension(line);
      const requiredRibbon = this.calculateRequiredRibbon(length, width, height);
      return total + requiredRibbon;
    }, 0);
  }

  /**
   * Calculates the required square feet of wrapping paper for the given box dimensions
   * @param length The length of the box
   * @param width The width of the box
   * @param height The height of the box
   * @returns The required square feet of wrapping paper for the given box dimensions
   */
  calculateRequiredWrappingPaper(length: number, width: number, height: number): number {
    const frontArea = height * length;
    const sideArea = width * height;
    const topArea = length * width;

    const surfaceArea = (2 * frontArea) + (2 * sideArea) + (2 * topArea)
    const smallestSide = Math.min(frontArea, sideArea, topArea);

    return surfaceArea + smallestSide;
  }

  /**
   * Calculates the required square feet of ribbon for the given box dimensions
   * @param length The length of the box
   * @param width The width of the box
   * @param height The height of the box
   * @returns The required square feet of ribbon for the given box dimensions
   */
  calculateRequiredRibbon(length: number, width: number, height: number): number {
    const requiredForBow = length * width * height;
    
    const frontPerimeter = length + length + height + height;
    const sidePerimeter = width + width + height + height;
    const topPerimeter = length + length + width + width;

    const smallestPerimeter = Math.min(frontPerimeter, sidePerimeter, topPerimeter);

    return requiredForBow + smallestPerimeter;
  }

  /**
   * Parses the given string into a Dimension. Throws an error if 
   * @param dimension The string to parse into a Dimension
   * @throws if the dimension string is not in the LxWxH format
   * @returns The Dimension created from the input string
   */
  private parseDimension(dimension: string): Dimension {
    const regex = /(\d+)x(\d+)x(\d+)/;

    const matches = regex.exec(dimension);

    if (!matches) throw new Error(`Invalid notation for ${dimension}`);

    const [_, length, width, height] = matches;
    return { length: parseInt(length), width: parseInt(width), height: parseInt(height) };
  }
}

/**
 * Dimension interface to hold length, width and height
 */
interface Dimension {
  length: number;
  width: number;
  height: number;
}
