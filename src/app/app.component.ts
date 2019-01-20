import { Component } from '@angular/core';

// service imports
import { StateLegislatureService } from './services/state-legislature.service';
import { SheetsService } from './services/sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NY Legislation Auto Tracker';

  constructor(
	  private legislature: StateLegislatureService,
	  private sheetsService: SheetsService
  ){}

  ngOnInit() {
	  this.legislature.loadBills();
	  this.legislature.loadLegislators();
	  this.sheetsService.getSheet("1wmwlr3E3DUZmpO4fzCiVPlziJkRdZAe6PlPepkf65IY", 2)
	    .subscribe(res => console.warn(res));
  };
}
