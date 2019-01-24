import { Pipe, PipeTransform } from '@angular/core';

// class imports
import { NysLegislator } from '../interfaces/nys-legislator';

@Pipe({
  name: 'byDistrict'
})
export class ByDistrictPipe implements PipeTransform {

	transform(allLegislators: NysLegislator[], district:number): any {
		return allLegislators.filter(legislator => legislator.districtCode === district);
  }

}
