// native
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule,
		 MatSelectModule,
		 MatRadioModule,
		 MatCardModule } from '@angular/material';

// app
import { AppComponent } from './app.component';
import { LegislatorsComponent } from './legislators/legislators.component';
import { BillsComponent } from './bills/bills.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatAddressFormComponent } from './mat-address-form/mat-address-form.component';
import { LocalDistrictTargetsComponent } from './local-district-targets/local-district-targets.component';

import { ByChamberPipe } from './pipes/by-chamber.pipe';
import { ByDistrictPipe } from './pipes/by-district.pipe';
import { BillsByChamberPipe } from './pipes/bills-by-chamber.pipe';
import { IsSponsorPipe } from './pipes/is-sponsor.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [

	// app components
    AppComponent,
    LegislatorsComponent,
	LegislatorDetailComponent,
	BillsComponent,
	BillDetailComponent,
	NavbarComponent,

	// pipes
    ByChamberPipe,
	IsSponsorPipe,
    ByDistrictPipe,
	BillsByChamberPipe,
	MatAddressFormComponent,
	LocalDistrictTargetsComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,

	AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,

	// firebase
	AngularFireModule.initializeApp(environment.firebase, 'NY Legislation Auto Tracker'), // imports firebase/app needed for everything
	AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features

	// material
	MatCardModule,
	MatListModule,
	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatSelectModule,
	MatToolbarModule,
	MatExpansionModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
