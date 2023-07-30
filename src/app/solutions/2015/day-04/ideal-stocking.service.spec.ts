import { TestBed } from '@angular/core/testing';

import { IdealStockingService } from './ideal-stocking.service';

describe('IdealStockingService', () => {
  let service: IdealStockingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdealStockingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 609043 when secret key is abcdef', () => {
    const secretKey = 'abcdef';
    expect(service.puzzle1(secretKey)).toBe(609043);
  });

  it('should be 1048970 when secret key is pqrstuv', () => {
    const secretKey = 'pqrstuv';
    expect(service.puzzle1(secretKey)).toBe(1048970);
  });
});
