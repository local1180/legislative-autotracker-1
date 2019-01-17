import { Injectable } from '@angular/core';

// service imports
import { GoogleCivicInfoApiService } from './google-civic-info-api.service';

// class imports
import { Address } from '../classes/address';
import { CivicInfoDivisionsResponse } from "../classes/civic-info-divisions-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
	address: Address;
	slduDivisionCode: number;
	sldlDivisionCode: number;

  constructor(
	  private civicInfoApi: GoogleCivicInfoApiService
  ) { }

  updateAddress(newAddress: Address) {
	  this.address = newAddress;

	  this.civicInfoApi.getUserDistricts(this.addressAsString())
	  .subscribe((response: CivicInfoDivisionsResponse) => {
		  let swap = [];
		  this.sldlDivisionCode = -1;
		  this.slduDivisionCode = -1;

		  // iterate over JSON response object
		  for (let division in response.divisions) {
			  if (division.search("sldl:") > -1) {
				  swap = division.split("sldl:");
				  // cast result as a Number to ease later comparisons
				  this.sldlDivisionCode = Number(swap[1]);
			  } else
			  if (division.search("sldu:") > -1) {
				  swap = division.split("sldu:");
				  // cast result as a Number to ease later comparisons
				  this.slduDivisionCode = Number(swap[1]);
			  }
		  }
	  });
  }

  addressAsString() {
	  return this.address.line1
	  + ", " + this.address.city
	  + ", " + this.address.state
	  + ", " + this.address.zip5;
  }
}
