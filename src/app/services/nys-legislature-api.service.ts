import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// service imports
import { SheetsService } from './sheets.service';

// class imports
import { PriorityBill } from '../interfaces/priority-bill';
import { NysLegislatorResponse } from '../interfaces/nys-legislator-response';
import { NysLegislator } from '../interfaces/nys-legislator';
import { NysBillResponse } from '../interfaces/nys-bill-response';
import { NysBill } from '../interfaces/nys-bill';

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
	  private sheets: SheetsService,
  ) { }

	getLegislators(sessionYear: number): Observable<NysLegislator[]> {
		return this.http.get<NysLegislatorResponse>(
		  this.API_BASE_URL + "members/"
		  + sessionYear + "?full=true&limit=500&key="
		  + this.API_KEY
	  ).pipe(map((res: NysLegislatorResponse) => res.result.items))
	}

	getBills() {
		this.sheets.loadPriorityBills();
		return this.sheets.billList.pipe(
			map((res: PriorityBill[]) => {
				res.forEach((bill: PriorityBill) => {
					this.loadAssemblyBill(bill).subscribe((res: NysBill) => this.bills.push(res));
					this.loadSenateBill(bill).subscribe((res: NysBill) => this.bills.push(res));
				});
				return this.bills;
			})
		);
	}

	private loadAssemblyBill(priorityBill: PriorityBill): Observable<NysBill> {
		return this.http.get(
			this.API_BASE_URL + "bills/"
			+ priorityBill.gsx$sessionyear.$t + "/"
			+ priorityBill.gsx$assemblynum.$t
			+ "?key=" + this.API_KEY
		).pipe(
			map((res: NysBillResponse) => res.result)
		);
	}
	private loadSenateBill(priorityBill: PriorityBill): Observable<NysBill> {
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
