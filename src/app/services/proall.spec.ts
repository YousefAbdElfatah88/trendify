import { TestBed } from '@angular/core/testing';

import { Proall } from './proall';

describe('Proall', () => {
  let service: Proall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
