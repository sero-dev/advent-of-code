import { Injectable } from '@angular/core';
import { ProblemService } from '../../problem.service';

@Injectable({
  providedIn: 'root',
})
export class TrebuchetService implements ProblemService {
  puzzle1(input: string): number {
    const lines = input.split('\n').filter((line) => line.trim().length !== 0);
    return lines.reduce(
      (total, line) => total + this.getCalibrationValue(line),
      0
    );
  }

  puzzle2(input: string) {
    return '';
  }

  getCalibrationValue(line: string): number {
    const matches = line.match(/(\d)/g);

    if (!matches) {
      throw new Error(
        `Input string '${line}' does not contain a numeric character`
      );
    }

    return Number(`${matches[0]}${matches[matches.length - 1]}`);
  }
}
