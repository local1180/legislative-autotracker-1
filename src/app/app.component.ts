import { Component } from '@angular/core';

// service imports
import { StateLegislatureService } from './services/state-legislature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NY Legislation Auto Tracker';

  constructor(
	  private legislature: StateLegislatureService,
  ){}

  ngOnInit() {
	  this.legislature.loadBills();
	  this.legislature.loadLegislators();
  };
}
