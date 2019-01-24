import { Component, OnInit } from '@angular/core';
import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-local-district-targets',
  templateUrl: './local-district-targets.component.html',
  styleUrls: ['./local-district-targets.component.css']
})
export class LocalDistrictTargetsComponent implements OnInit {
	assemblyTargets: any;
	senateTargets: any;

  constructor(
	  private sheets: SheetsService
  ) { }

  ngOnInit() {
	  this.sheets.loadLocalDistrictLists();

	  this.assemblyTargets = this.sheets.assemblyList;
	  this.senateTargets = this.sheets.senateList;
  }

}
