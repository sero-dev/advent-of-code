import { Injectable } from '@angular/core';
import { ProblemService } from '../../problem.service';

@Injectable({
  providedIn: 'root'
})
export class NotQuiteLispService implements ProblemService {  

  /**
   * Calculates the floor that Santa should be on based on the input. 
   * A '(' character will to go up one floor
   * A ')' character will to go down one floor
   * @param input The input string with the floor directions
   * @returns The floor santa should be on
   */
  puzzle1(input: string): any {
    let floor = 0;
    
    for (const char of input) {
      if (char === '(') floor++;  
      else if (char === ')') floor--;  
    }

    return floor;
  }
  
  /**
   * Returns the position of the first character that sends Santa to the basement
   * @param input The input string with the floor directions
   * @returns The position of the first character that sends Santa to the basement
   */
  puzzle2(input: string): any {
    let floor = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '(') floor++;  
      else if (input[i] === ')') floor--;

      if (floor < 0) return i + 1;
    }

    return -1;
  }
}
