import { Component, OnInit } from '@angular/core';

// service imports
import { StateLegislatureService } from '../services/state-legislature.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
	bills: any;

	constructor(
	  private legislature: StateLegislatureService,
  	  public user: UserService,
    ) { }

  ngOnInit() {
	  this.bills = this.legislature.bills;
  }
}
