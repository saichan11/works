import { TestBed } from '@angular/core/testing';

import { BankhttpService } from './bankhttp.service';

describe('BankhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankhttpService = TestBed.get(BankhttpService);
    expect(service).toBeTruthy();
  });
});
