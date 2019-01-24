import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs"; // asObservable() is a method of Subject; ignore TypeScript warning
import { map } from 'rxjs/operators';

//service imports
import { NysLegislatureApiService } from './nys-legislature-api.service';

// class imports
import { NysLegislator } from '../interfaces/nys-legislator';
import { NysBill } from '../interfaces/nys-bill';

@Injectable({
  providedIn: 'root'
})
export class StateLegislatureService {

	private _legislators: BehaviorSubject<NysLegislator[]>;
	private _bills: BehaviorSubject<NysBill[]>;

	legislators: Observable<NysLegislator[]>;
	bills: Observable<NysBill[]>;

	private dataStore: {
		legislators: NysLegislator[];
		bills: NysBill[];
	}

  constructor( private nysApi: NysLegislatureApiService ) {
	  this.dataStore = {
		  legislators: [],
		  bills: []
	  }

	  this._bills = <BehaviorSubject<NysBill[]>>new BehaviorSubject([]);
	  this._legislators = <BehaviorSubject<NysLegislator[]>>new BehaviorSubject([]);

	  this.legislators = this._legislators.asObservable();
	  this.bills = this._bills.asObservable();
  }

  loadLegislators() {
	  this.nysApi.getLegislators(2019).subscribe(res => {
		  this.dataStore.legislators = res;
		  this._legislators.next(Object.assign({}, this.dataStore).legislators);
	  });
  }

  public getLegislator(id: number) {
	  return this.legislators.pipe(
		  map(allLegislators => allLegislators.find(member => member.memberId === id))
	  );
  }

  loadBills() {
	  this.nysApi.getBills().subscribe(res => {
		  this.dataStore.bills = res;
		  this._bills.next(Object.assign({}, this.dataStore).bills);
	  });
  }

    public getBill(id: string) {
  	  return this.bills.pipe(
  		  map(allBills => allBills.find(bill => bill.basePrintNo === id))
  	  );
    }
}
