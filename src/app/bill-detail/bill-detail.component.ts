import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// service imports
import { StateLegislatureService } from '../services/state-legislature.service';

// class imports
import { NysBill } from '../classes/nys-bill';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
	bill: NysBill;

	constructor(
	  public stateLegislature: StateLegislatureService,
	  private route: ActivatedRoute,
    ) { }

  ngOnInit() {
	  this.getBill();
  }

  getBill() {
	  const id: string = this.route.snapshot.paramMap.get('id');
	  this.stateLegislature.getBill(id).subscribe(res => {
		  console.warn(3,res);
		  this.bill = res;
	  });
  }
}
