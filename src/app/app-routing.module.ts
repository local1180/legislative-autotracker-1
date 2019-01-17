import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom component imports
import { LegislatorsComponent } from './legislators/legislators.component';
import { BillsComponent } from './bills/bills.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/legislators', pathMatch: 'full' },
	{ path: 'legislators', component: LegislatorsComponent },
	{ path: 'legislator-detail/:id', component: LegislatorDetailComponent },
	{ path: 'bills', component: BillsComponent },
	{ path: 'bill-detail/:id', component: BillDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
