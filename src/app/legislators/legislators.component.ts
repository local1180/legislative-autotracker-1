import { Component, OnInit } from '@angular/core';

// service imports
import { StateLegislatureService } from '../services/state-legislature.service';
import { UserService } from '../services/user.service';

// class imports

@Component({
  selector: 'app-legislators',
  templateUrl: './legislators.component.html',
  styleUrls: ['./legislators.component.css']
})
export class LegislatorsComponent implements OnInit {
    legislators: any;

  constructor(
	  private stateLegislature: StateLegislatureService,
	  public user: UserService,
  ) { }

  ngOnInit() {
	  this.legislators = this.stateLegislature.legislators;
  }

}
