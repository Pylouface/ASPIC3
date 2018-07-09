import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from "@angular/material"
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { IsolementService } from './services/isolement.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { IsolementComponent } from './isolement/isolement.component';

import { NoTestPatient } from './pipes/noTestPatient.pipe';
import { InSearch } from './pipes/inSearch.pipe';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthComponent } from './auth/auth.component';

import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'isolement', canActivate: [AuthGuard], component: IsolementComponent },
  { path: '', canActivate: [AuthGuard], component: IsolementComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    IsolementComponent,
    NoTestPatient,
    InSearch,
    FourOhFourComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgHttpLoaderModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
     {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
      IsolementService,
      AuthService,
      AuthGuard,
      CookieService 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
