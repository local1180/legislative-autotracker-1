import { Pipe, PipeTransform } from '@angular/core';

// class imports
import { NysBill } from '../classes/nys-bill';

@Pipe({
  name: 'billsByChamber',
  pure: false
})
export class BillsByChamberPipe implements PipeTransform {

  transform(allBills: NysBill[], chamber: string): any {
    return allBills.filter(bill => bill.billType.chamber === chamber);
  }

}
