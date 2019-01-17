import { Pipe, PipeTransform } from '@angular/core';
import { NysBill } from '../classes/nys-bill';
import { NysLegislator } from '../classes/nys-legislator';

@Pipe({
  name: 'isSponsor'
})
export class IsSponsorPipe implements PipeTransform {

  transform(allBills: NysBill[], legislator: NysLegislator, sponsorship: boolean): any {
	  // TODO:  find a better way to do this instead of calling the pipe twice
	  let sponsored = allBills.filter((bill: NysBill) => bill.amendments.items[bill.activeVersion].coSponsors.items.find((cosponsor: NysLegislator) => cosponsor.memberId === legislator.memberId));
	  let notSponsored = allBills.filter(element => {
			  return sponsored.indexOf(element) === -1;
		  });
	  if (sponsorship) return sponsored;
	  else return notSponsored;
  }
}
