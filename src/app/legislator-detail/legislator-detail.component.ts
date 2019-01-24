import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // route is a method on Location; ignore TypeScript warning

// service imports
import { StateLegislatureService } from '../services/state-legislature.service';

// class imports
import { NysLegislator } from '../interfaces/nys-legislator';

@Component({
  selector: 'app-legislator-detail',
  templateUrl: './legislator-detail.component.html',
  styleUrls: ['./legislator-detail.component.css']
})
export class LegislatorDetailComponent implements OnInit {
	legislator: NysLegislator;

	constructor(
	  public stateLegislature: StateLegislatureService,
	  private route: ActivatedRoute
    ) { }

  ngOnInit() {
	  this.getLegislator();
  }

  getLegislator() {
	  const id: number = +this.route.snapshot.paramMap.get('id'); // why the '+' before this to force/cast to type number?
	  this.stateLegislature.getLegislator(id).subscribe(res => this.legislator = res);
  }
}
