import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from "rxjs"; // asObservable() is a method of Subject; ignore TypeScript warning

import { LocalTargets } from '../interfaces/local-targets';
import { LocalTargetsFeed } from '../interfaces/google-sheets-json-feed';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

	// private billListSheetId = '1jyRua64N5tCAaFpuJQRFHr9qC7CQQy1l1g4FE2mkPx0';
	private localDistrictsSheetId = '1wmwlr3E3DUZmpO4fzCiVPlziJkRdZAe6PlPepkf65IY';

	private dataStore: {
		assemblyList: LocalTargets[];
		senateList: LocalTargets[];
	}

	private _assembly: BehaviorSubject<LocalTargets[]>;
	private _senate: BehaviorSubject<LocalTargets[]>;

	public assemblyList: Observable<LocalTargets[]>
	public senateList: Observable<LocalTargets[]>

	constructor(private http: HttpClient) {
		this.dataStore = {
			assemblyList: [],
			senateList: []
		}

		this._assembly = <BehaviorSubject<LocalTargets[]>>new BehaviorSubject([]);
		this._senate = <BehaviorSubject<LocalTargets[]>>new BehaviorSubject([]);

		this.assemblyList = this._assembly.asObservable();
		this.senateList = this._senate.asObservable();
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
