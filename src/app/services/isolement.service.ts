import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import * as _moment from 'moment';

import { isolementInterface } from '../interfaces/isolement.interface';
import { ISOLEMENT } from '../interfaces/isolement.interface';

// Service - il est partager entre tout les composant --> plus ou moins l'équivalent de $rootscope

// permet d'injecter cette classe dans une autre
@Injectable()
export class IsolementService {
    //IsolementSubject = new Subject<any[]>();

    constructor(private http: HttpClient) { }
    
    public listeIsolements: ISOLEMENT[] =[];
    
    // _______________________________________________________________________________________________________________________
    // Fonction appelant le webservice de récuparation des isolements
    getIsolements(mydate1:moment, mydate2:moment){

        // En attendant une meilleur solution on sérialize à la main
        let dateToSend = "DATE1="+mydate1.format("DD")+"%2F"+mydate1.format("MM")+"%2F"+mydate1.format("YYYY")+"&DATE2="+mydate2.format("DD")+"%2F"+mydate2.format("MM")+"%2F"+mydate2.format("YYYY");
        // donne quelque chose du genre : "DATE1=31%2F01%2F2018&DATE2=14%2F06%2F2018"

        let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
        this.http.post('http://weblxbr01/ASPIC2/web_serv/webServGetIsolement.php', dateToSend, headers).subscribe((data: isolementInterface) => {
            console.log(data);
            this.listeIsolements = data.ISOLEMENTS;

        });
    }

    getAllIsolements(){
        return this.listeIsolements;
    }
}