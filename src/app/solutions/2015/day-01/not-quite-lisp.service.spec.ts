import { TestBed } from '@angular/core/testing';

import { NotQuiteLispService } from './not-quite-lisp.service';

describe('NotQuiteLispService', () => {
  let service: NotQuiteLispService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotQuiteLispService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return floor 0 for (()) in puzzle1', () => {
    const input = '(())';
    const result = service.puzzle1(input);
    expect(result).toEqual(0);
  });

  it('should return floor 0 for ()() in puzzle1', () => {
    const input = '()()';
    const result = service.puzzle1(input);
    expect(result).toEqual(0);
  });

  it('should return floor 3 for ((( in puzzle1', () => {
    const input = '((( ';
    const result = service.puzzle1(input);
    expect(result).toEqual(3);
  });

  it('should return floor 3 for (()(()( in puzzle1', () => {
    const input = '(()(()(';
    const result = service.puzzle1(input);
    expect(result).toEqual(3);
  });

  it('should return floor -1 for ()) in puzzle1', () => {
    const input = '())';
    const result = service.puzzle1(input);
    expect(result).toEqual(-1);
  });

  it('should return floor -1 for ))( in puzzle1', () => {
    const input = '))( ';
    const result = service.puzzle1(input);
    expect(result).toEqual(-1);
  });

  it('should return floor -3 for ))) in puzzle1', () => {
    const input = '))) ';
    const result = service.puzzle1(input);
    expect(result).toEqual(-3);
  });

  it('should return floor -3 for )())()) in puzzle1', () => {
    const input = ')())())';
    const result = service.puzzle1(input);
    expect(result).toEqual(-3);
  });

  it('should return position 1 for ) in puzzle2', () => {
    const input = ')';
    const result = service.puzzle2(input);
    expect(result).toEqual(1);
  });

  it('should return position 5 for ()()) in puzzle2', () => {
    const input = '()())';
    const result = service.puzzle2(input);
    expect(result).toEqual(5);
  });
});
