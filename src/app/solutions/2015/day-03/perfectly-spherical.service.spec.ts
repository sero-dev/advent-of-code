import { TestBed } from '@angular/core/testing';

import { PerfectlySphericalService } from './perfectly-spherical.service';

describe('PerfectlySphericalService', () => {
  let service: PerfectlySphericalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfectlySphericalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 for > for puzzle 1', () => {
    const input = '>';
    expect(service.puzzle1(input)).toBe(2);
  })

  it('should return 4 for ^>v< for puzzle 1', () => {
    const input = '^>v<';
    expect(service.puzzle1(input)).toBe(4);
  })

  it('should return 2 for ^v^v^v^v^v for puzzle 1', () => {
    const input = '^v^v^v^v^v';
    expect(service.puzzle1(input)).toBe(2);
  })

  it('should return 3 for ^v for puzzle 2', () => {
    const input = '^v';
    expect(service.puzzle2(input)).toBe(3);
  })

  it('should return 3 for ^>v< for puzzle 2', () => {
    const input = '^>v<';
    expect(service.puzzle2(input)).toBe(3);
  })

  it('should return 11 for ^v^v^v^v^v for puzzle 2', () => {
    const input = '^v^v^v^v^v';
    expect(service.puzzle2(input)).toBe(11);
  })
});
