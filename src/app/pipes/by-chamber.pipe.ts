import { Pipe, PipeTransform } from '@angular/core';

import { NysLegislator } from "../interfaces/nys-legislator";
@Pipe({
  name: 'byChamber'
})
export class ByChamberPipe implements PipeTransform {

	transform(allLegislators: NysLegislator[], chamber:string): any {
		return allLegislators.filter(legislator => legislator.chamber === chamber);
  }

}
