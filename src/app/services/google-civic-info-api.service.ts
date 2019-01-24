import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// class imports
import { CivicInfoDivisionsResponse } from '../interfaces/civic-info-divisions-response';

import { keychain } from "src/api-keys";

@Injectable({
  providedIn: 'root'
})
export class GoogleCivicInfoApiService {
	url = 'https://www.googleapis.com/civicinfo/v2/representatives?fields=divisions&key='
			+ keychain.googleCivicInfo +'&address=';

  constructor(private http: HttpClient) { }

  getUserDistricts(addressString: String) {
	  return this.http.get<CivicInfoDivisionsResponse>(this.url + addressString);
  }
}
