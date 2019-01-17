import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//class imports
import { SheetsApiJSONResponse } from '../classes/sheets-api-json-response';

@Injectable({
  providedIn: 'root'
})
export class NysPriorityLegislationApiService {
	SHEET_ID = '1jyRua64N5tCAaFpuJQRFHr9qC7CQQy1l1g4FE2mkPx0';
	API_URL = 'https://spreadsheets.google.com/feeds/list/'
				+ this.SHEET_ID
				+ '/1/public/values?alt=json';

	constructor(private http: HttpClient) { }

    getPriorityList() {
  	  return this.http.get<SheetsApiJSONResponse>(this.API_URL);
    }
}
