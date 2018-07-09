import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

import { IsolementService } from '../services/isolement.service';

// permet de récup des objets moment lors de l'envoie des dates
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Spinkit } from 'ng-http-loader';
import * as _moment from 'moment';


@Component({
  selector: 'app-isolement',
  templateUrl: './isolement.component.html',
  styleUrls: ['./isolement.component.css'],
    providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class IsolementComponent implements OnInit {
    
    // déblaration de variable spécifique au composant
    private date_deb: string;
    private date_fin: string;
    
    
    // permet d'initialiser la checkbox
    patientTest = false;

    
  // on injecte le service isolement
  constructor(private IsolementService : IsolementService) { }
    

  ngOnInit() {
  }
    /*________________________________________________________________________________________________________*/
    // Fonction appelé lors de la soumission du formulaire (Date de début | Date de fin)
    onSubmit(form: NgForm) {
        // Sur le submit du formulaire on récup les dates à envoyer
        const send_date_deb = form.value['date_deb'];
        const send_date_fin = form.value['date_fin'];
        // on appel la fonction du service afin de récupérer les isolements
        this.IsolementService.getIsolements(send_date_deb, send_date_fin);
    }
    
    /*________________________________________________________________________________________________________*/
    // Fonction lié au csv retournant un espace au lieu de null si la vlauer en paramétre est null ou undefined
    isNotNull(myValue){
        if(!!myValue){
            return myValue;
        }else{
            return " ";
        }
    };
    
    
    /*________________________________________________________________________________________________________*/
    // Fonction retournant le csv
    toCSV(){
        let csv = "NOM;PRESNOM;IPP;IEP;DATE_NAISSANCE;SEXE;SEBUT_SEJOUR;FIN_SEJOUR;DEBUT_ISOLEMENT;FIN_ISOLEMENT;DUREE;PRESCRIPTEUR;UF;RENOUVELLEMENT;CHAMBRE_STANDARD;PATIENT_INFORME;FAMILLE_PREVENU;MODE_HOSPI;INDICATIONS;MESURES PREVENTIVES;CIRCONSTANCES;MEDECIN_PRESCRIPTEUR_SORTIE;OBSERVATION_SORTIE; \n";
        for (let iso of this.IsolementService.listeIsolements) {
            csv += this.isNotNull(iso._NOM) +";";    
            csv += this.isNotNull(iso._PRENOM) +";";
            csv += this.isNotNull(iso._IPP) +";";
            csv += this.isNotNull(iso._IEP) +";";
            csv += this.isNotNull(iso._DATE_NAISSANCE) +";";
            csv += this.isNotNull(iso._SEXE) +";";
            csv += this.isNotNull(iso._DEBUT_SEJ) +";";
            csv += this.isNotNull(iso._FIN_SEJ) +";";
            csv += this.isNotNull(iso._DEBUT_ISOLEMENT) +";";
            csv += this.isNotNull(iso._FIN_ISOLEMENT) +";";
            csv += ";"; //DUREE
            csv += this.isNotNull(iso._PRESCRIPTEUR) +";";
            csv += this.isNotNull(iso._UF) +";";
            //csv += "MES RENOUVELLEMENTS";
           /* for (var j = 0; j < IsolementService.listeIsolements[i]._RENOUVELLEMENTS.length; j++) {
                csv += isNotNull(IsolementService.listeIsolements[i]._RENOUVELLEMENTS[j]._DATE_RENOUVELLEMENT) +" par " + isNotNull(IsolementService.listeIsolements[i]._RENOUVELLEMENTS[j]._PRESCRIPTEUR_RENOUVELLEMENT) +" | ";
            }*/
            csv += this.isNotNull(iso._CHAMBRE_STANDARD) +";";
            csv += this.isNotNull(iso._PATIENT_INFORME_MODALITE) +";";
            csv += this.isNotNull(iso._FAMILLE_PREVENU) +";";
            csv += this.isNotNull(iso._MODE_HOSPI) +";";
            csv += this.isNotNull(iso._INDICATIONS) +";";
            csv += this.isNotNull(iso._MESURES_PREVENTIVES) +";";
            csv += this.isNotNull(iso._CIRCONSTANCES) +";";
            csv += this.isNotNull(iso._MED_PRESCRI_SORTIE) +";";
            csv += this.isNotNull(iso._OBSERVATIONS_SORTIE) +";";
            csv += "\n";
        }

        var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        var csvURL = window.URL.createObjectURL(csvData);
        var tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'RegistreIsolement'+'DATEBIDON' + '--' +'DATEBIDON'+'.csv');
        tempLink.click();
    }
}
