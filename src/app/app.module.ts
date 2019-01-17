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
import { ByChamberPipe } from './pipes/by-chamber.pipe';
import { ByDistrictPipe } from './pipes/by-district.pipe';
import { BillsComponent } from './bills/bills.component';
import { BillsByChamberPipe } from './pipes/bills-by-chamber.pipe';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { IsSponsorPipe } from './pipes/is-sponsor.pipe';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAddressFormComponent } from './mat-address-form/mat-address-form.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
