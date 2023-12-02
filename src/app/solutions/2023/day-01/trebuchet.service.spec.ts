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

  it('should return calibration+ value of 29 for two1nine', () => {
    const input = 'two1nine';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(29);
  });

  it('should return calibration+ value of 83 for eightwothree', () => {
    const input = 'eightwothree';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(83);
  });

  it('should return calibration+ value of 13 for abcone2threexyz', () => {
    const input = 'abcone2threexyz';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(13);
  });

  it('should return calibration+ value of 24 for xtwone3four', () => {
    const input = 'xtwone3four';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(24);
  });

  it('should return calibration+ value of 42 for 4nineeightseven2', () => {
    const input = '4nineeightseven2';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(42);
  });

  it('should return calibration+ value of 29 for zoneight234', () => {
    const input = 'zoneight234';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(14);
  });

  it('should return calibration+ value of 29 for 7pqrstsixteen', () => {
    const input = '7pqrstsixteen';
    const result = service.getCalibrationValuePlus(input);
    expect(result).toEqual(76);
  });

  it('should return total for all inputs in puzzle 2', () => {
    const input =
      'two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen';
    const result = service.puzzle2(input);
    expect(result).toEqual(281);
  });

  it('should convert ONE to 1', () => {
    const input = 'ONE';
    const result = service.convertWordToNumber(input);
    expect(result).toEqual(1);
  });

  it('should convert two to 2', () => {
    const input = 'two';
    const result = service.convertWordToNumber(input);
    expect(result).toEqual(2);
  });

  it('should convert EiGhT to 8', () => {
    const input = 'EiGhT';
    const result = service.convertWordToNumber(input);
    expect(result).toEqual(8);
  });

  it('should convert nAn to undefined', () => {
    const input = 'nAn';
    const result = service.convertWordToNumber(input);
    expect(result).toEqual(undefined);
  });
});
