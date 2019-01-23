import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SheetsApiJSONResponse } from '../classes/sheets-api-json-response';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

	constructor(private http: HttpClient) { }

	getSheet(sheetId, page) {
	  let API_URL = 'https://spreadsheets.google.com/feeds/list/'
	  + sheetId + '/' + page +
	  '/public/values?alt=json';

	  return this.http.get(API_URL);
  }
}
