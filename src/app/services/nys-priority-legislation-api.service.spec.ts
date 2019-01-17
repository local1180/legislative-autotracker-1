import { TestBed } from '@angular/core/testing';

import { NysPriorityLegislationApiService } from './nys-priority-legislation-api.service';

describe('NysPriorityLegislationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NysPriorityLegislationApiService = TestBed.get(NysPriorityLegislationApiService);
    expect(service).toBeTruthy();
  });
});
