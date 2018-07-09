import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

import { IsolementService } from './services/isolement.service';

// permet de récup des objets moment lors de l'envoie des dates
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Spinkit } from 'ng-http-loader';
import * as _moment from 'moment';

// dans le provideur on injecte les variable local de moment et de mat-datepicker
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // pour l'animation de chargement 
    public spinkit = Spinkit;
    
    
    /*________________________________________________________________________________________________________*/
    // Constructeur du composent, on injecte ici le service isolement
    constructor(private IsolementService : IsolementService) { }
    
    /*________________________________________________________________________________________________________*/
    // Fonction appelé au chargement du composant
    OnInit(){
    
    }

}
