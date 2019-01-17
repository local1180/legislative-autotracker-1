import { TestBed } from '@angular/core/testing';

import { NysLegislatureApiService } from './nys-legislature-api.service';

describe('NysLegislatureApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NysLegislatureApiService = TestBed.get(NysLegislatureApiService);
    expect(service).toBeTruthy();
  });
});
