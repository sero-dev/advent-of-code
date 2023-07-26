import { TestBed } from '@angular/core/testing';

import { NoMathAllowedService } from './no-math-allowed.service';

describe('NoMathAllowedService', () => {
  let service: NoMathAllowedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoMathAllowedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 58 square feet of wrapping paper for a 2x3x4 box', () => {
    const length = 2;
    const width = 3;
    const height = 4;

    const requiredSquareFeet = service.calculateRequiredWrappingPaper(length, width, height);
    expect(requiredSquareFeet).toBe(58)
  })

  it('should return 43 square feet of wrapping paper for a 1x1x10 box', () => {
    const length = 1;
    const width = 1;
    const height = 10;

    const requiredSquareFeet = service.calculateRequiredWrappingPaper(length, width, height);
    expect(requiredSquareFeet).toBe(43)
  })

  it('should return 34 feet of ribbon for a 2x3x4 box', () => {
    const length = 2;
    const width = 3;
    const height = 4;

    const requiredSquareFeet = service.calculateRequiredRibbon(length, width, height);
    expect(requiredSquareFeet).toBe(34)
  })

  it('should return 14 feet of ribbon for a 1x1x10 box', () => {
    const length = 1;
    const width = 1;
    const height = 10;

    const requiredSquareFeet = service.calculateRequiredRibbon(length, width, height);
    expect(requiredSquareFeet).toBe(14)
  })
});
