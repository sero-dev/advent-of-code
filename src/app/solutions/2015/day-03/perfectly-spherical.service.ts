import { Injectable } from '@angular/core';
import { ProblemService } from '../../problem.service';

@Injectable({
  providedIn: 'root'
})
export class PerfectlySphericalService implements ProblemService {

  puzzle1(input: string) {
    const houses = new Set<string>(['0:0']);
    
    let row = 0;
    let column = 0;

    for (const char  of input) {
      switch(char) {
        case '>': column++; break;
        case 'v': row++; break;
        case '<': column--; break;
        case '^': row--; break;
        default: 
          throw new Error(`Bad character in string ${char}`)
      }

      houses.add(`${row}:${column}`);
    }

    return houses.size;
  }

  puzzle2(input: string) {
    const houses = new Set<string>(['0:0']);
    
    let santaPosition = {x: 0, y: 0};
    let robotPosition = {x: 0, y: 0};
    let santaTurn = true;

    for (const char  of input) {
      const position = santaTurn ? santaPosition : robotPosition
      switch(char) {
        case '>': position.x++; break;
        case 'v': position.y++; break;
        case '<': position.x--; break;
        case '^': position.y--; break;
        default: 
          throw new Error(`Bad character in string ${char}`)
      }

      houses.add(`${position.x}:${position.y}`);
      santaTurn = !santaTurn;
    }

    return houses.size;
  }
}
