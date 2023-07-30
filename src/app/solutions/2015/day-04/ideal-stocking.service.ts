import { Injectable } from '@angular/core';
import { ProblemService } from '../../problem.service';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class IdealStockingService implements ProblemService {

  puzzle1(input: string): number {
    const key = input + 5; 
    const savedValue = localStorage.getItem(key);

    if (savedValue) return +savedValue;

    const value = this.findHashWithLeadingZeros(input, 5);
    localStorage.setItem(key, value.toString());

    return value;
  }

  puzzle2(input: string): number {
    const key = input + 6; 
    const savedValue = localStorage.getItem(key);

    if (savedValue) return +savedValue;

    const value = this.findHashWithLeadingZeros(input, 6);
    localStorage.setItem(key, value.toString());

    return value;
  }

  private findHashWithLeadingZeros(input: string, zerosCount: number) {
    if (zerosCount <= 0 || zerosCount > 16) {
      throw new Error('The number of leading zeros must be between 1 and 16');
    }

    for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
      const hash = MD5(input + i).toString();
      if (hash.startsWith('0'.repeat(zerosCount))) return i;
    }

    throw new Error(`Hash that starts with ${zerosCount}`)
  }
}
