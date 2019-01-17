import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// service imports
import { NysPriorityLegislationApiService } from './nys-priority-legislation-api.service';

// class imports
import { SheetsApiJSONResponse } from '../classes/sheets-api-json-response';
import { PriorityBill } from '../classes/priority-bill';
import { NysLegislatorResponse } from '../classes/nys-legislator-response';
import { NysLegislator } from '../classes/nys-legislator';
import { NysBillResponse } from '../classes/nys-bill-response';
import { NysBill } from '../classes/nys-bill';

import { keychain } from "src/api-keys";

@Injectable({
  providedIn: 'root'
})
export class NysLegislatureApiService {
	public bills: NysBill[] = []; // store of all bill details, senate & assembly versions

	API_BASE_URL = "https://legislation.nysenate.gov/api/3/";
	API_KEY = keychain.nysOpenLeg;

  constructor(
	  private http: HttpClient,
	  private priorityLegislation: NysPriorityLegislationApiService,
  ) { }

	getLegislators(sessionYear: number): Observable<NysLegislator[]> {
		return this.http.get<NysLegislatorResponse>(
		  this.API_BASE_URL + "members/"
		  + sessionYear + "?full=true&limit=500&key="
		  + this.API_KEY
	  ).pipe(map((res: NysLegislatorResponse) => res.result.items))
	}

	getBills() {

	  return this.priorityLegislation.getPriorityList()
	  .pipe(
		  map((apiResponse: SheetsApiJSONResponse) => {
		    apiResponse.feed.entry
		    .forEach((priorityBill: PriorityBill) => {

			  // get assembly bills
			  this.loadAssemblyBills(priorityBill)
			  .subscribe((apiResponse: NysBill) => {
				  this.bills.push(apiResponse);
			  });

			  // get senate bills
			  this.loadSenateBills(priorityBill)
			  .subscribe((apiResponse: NysBill) => {
				  this.bills.push(apiResponse);
			  });
			});
			return (this.bills); // TODO: this is where the deep-linking issue is originating
		  })
	  );
	}

	private loadAssemblyBills(priorityBill: PriorityBill): Observable<NysBill> {
		return this.http.get(
			this.API_BASE_URL + "bills/"
			+ priorityBill.gsx$sessionyear.$t + "/"
			+ priorityBill.gsx$assemblynum.$t
			+ "?key=" + this.API_KEY
		).pipe(
			map((res: NysBillResponse) => res.result)
		);
	}
	private loadSenateBills(priorityBill: PriorityBill): Observable<NysBill> {
		return this.http.get(
			this.API_BASE_URL + "bills/"
			+ priorityBill.gsx$sessionyear.$t + "/"
			+ priorityBill.gsx$senatenum.$t
			+ "?key=" + this.API_KEY
		).pipe(
			map((res: NysBillResponse) => res.result)
		);
	}
}
