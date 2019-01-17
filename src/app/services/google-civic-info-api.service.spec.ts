import { TestBed } from '@angular/core/testing';

import { GoogleCivicInfoApiService } from './google-civic-info-api.service';

describe('GoogleCivicInfoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleCivicInfoApiService = TestBed.get(GoogleCivicInfoApiService);
    expect(service).toBeTruthy();
  });
});
