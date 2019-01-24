import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from "rxjs"; // asObservable() is a method of Subject; ignore TypeScript warning

import { LocalTargetsFeed, BillFeed } from '../interfaces/google-sheets-json-feed';
import { LocalTargets } from '../interfaces/local-targets';
import { PriorityBill } from '../interfaces/priority-bill';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

	private billListSheetId = '1jyRua64N5tCAaFpuJQRFHr9qC7CQQy1l1g4FE2mkPx0';
	private localDistrictsSheetId = '1wmwlr3E3DUZmpO4fzCiVPlziJkRdZAe6PlPepkf65IY';

	private dataStore: {
		assemblyList: LocalTargets[];
		senateList: LocalTargets[];
		billList: PriorityBill[];
	}

	private _assembly: BehaviorSubject<LocalTargets[]>;
	private _senate: BehaviorSubject<LocalTargets[]>;
	private _billList: BehaviorSubject<PriorityBill[]>;

	public assemblyList: Observable<LocalTargets[]>
	public senateList: Observable<LocalTargets[]>
	public billList: Observable<PriorityBill[]>

	constructor(private http: HttpClient) {
		this.dataStore = {
			assemblyList: [],
			senateList: [],
			billList: []
		}

		this._assembly = <BehaviorSubject<LocalTargets[]>>new BehaviorSubject([]);
		this._senate = <BehaviorSubject<LocalTargets[]>>new BehaviorSubject([]);
		this._billList = <BehaviorSubject<PriorityBill[]>>new BehaviorSubject([]);

		this.assemblyList = this._assembly.asObservable();
		this.senateList = this._senate.asObservable();
		this.billList = this._billList.asObservable();
	}

	loadPriorityBills() {
		this.getSheet(this.billListSheetId, 1).subscribe((res: BillFeed) => {
			this.dataStore.billList = res.feed.entry;
			this._billList.next(Object.assign({}, this.dataStore).billList);
		});
	}

	loadLocalDistrictLists() {
		this.getSheet(this.localDistrictsSheetId, 1).subscribe((res: LocalTargetsFeed) => {
			this.dataStore.assemblyList = res.feed.entry;
			this._assembly.next(Object.assign({}, this.dataStore).assemblyList);
		});
		this.getSheet(this.localDistrictsSheetId, 2).subscribe((res: LocalTargetsFeed) => {
			this.dataStore.senateList = res.feed.entry;
			this._senate.next(Object.assign({}, this.dataStore).senateList);
		});
	}

	private getSheet(sheetId, page) {
	  let API_URL = 'https://spreadsheets.google.com/feeds/list/'
	  + sheetId + '/' + page +
	  '/public/values?alt=json';

	  return this.http.get(API_URL);
  }
}
