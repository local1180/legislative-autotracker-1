import { TestBed } from '@angular/core/testing';

import { StateLegislatureService } from './state-legislature.service';

describe('StateLegislatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateLegislatureService = TestBed.get(StateLegislatureService);
    expect(service).toBeTruthy();
  });
});
