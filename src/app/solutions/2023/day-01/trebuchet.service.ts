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

  puzzle2(input: string): number {
    const lines = input.split('\n').filter((line) => line.trim().length !== 0);
    return lines.reduce(
      (total, line) => total + this.getCalibrationValuePlus(line),
      0
    );
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

  getCalibrationValuePlus(line: string): number {
    const matches = line.match(
      /(one|two|three|four|five|six|seven|eight|nine|\d)/g
    );

    if (!matches) {
      throw new Error(
        `Input string '${line}' does not contain a numeric character`
      );
    }

    const firstMatch = matches[0];
    const lastMatch = matches[matches.length - 1];

    const firstNumber = this.convertWordToNumber(firstMatch) ?? firstMatch;
    const lastNumber = this.convertWordToNumber(lastMatch) ?? lastMatch;

    return Number(`${firstNumber}${lastNumber}`);
  }

  convertWordToNumber(input: string): number | undefined {
    return NumberMap[input.toLowerCase()];
  }
}

const NumberMap: { [key in string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
