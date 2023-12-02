import { TestBed } from '@angular/core/testing';

import { TrebuchetService } from './trebuchet.service';

describe('TrebuchetService', () => {
  let service: TrebuchetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrebuchetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return calibration value of 12 for 1abc2', () => {
    const input = '1abc2';
    const result = service.getCalibrationValue(input);
    expect(result).toEqual(12);
  });

  it('should return calibration value of 38 for pqr3stu8vwx', () => {
    const input = 'pqr3stu8vwx';
    const result = service.getCalibrationValue(input);
    expect(result).toEqual(38);
  });

  it('should return calibration value of 15 for a1b2c3d4e5f', () => {
    const input = 'a1b2c3d4e5f';
    const result = service.getCalibrationValue(input);
    expect(result).toEqual(15);
  });

  it('should return calibration value of 77 for treb7uchet', () => {
    const input = 'treb7uchet';
    const result = service.getCalibrationValue(input);
    expect(result).toEqual(77);
  });

  it('should return total for all inputs in puzzle 1', () => {
    const input = '1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet';
    const result = service.puzzle1(input);
    expect(result).toEqual(142);
  });
});
