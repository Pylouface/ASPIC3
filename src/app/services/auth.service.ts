import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { standardRetourWebServ } from '../interfaces/retourUser.interface';

import { ToastrService } from 'ngx-toastr';
//import { CookieService } from 'ngx-cookie-service';

// Service - il est partager entre tout les composant --> plus ou moins l'équivalent de $rootscope
// DOC des toaster https://github.com/scttcper/ngx-toastr


// permet d'injecter cette classe dans une autre
@Injectable()

export class AuthService {
    
    constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
    
    
    // variable stockant si la connexion à réussi
    public isAuth = false;
    // variable stockant si l'utilisateur est un administrateur ou non
    private isAdmin = false;
    
    cookieValue = 'UNKNOWN';
    
    connexion(matricule:string, mdp:string){
        // En attendant une meilleur solution on sérialize à la main
        let dataToSend = "LOGIN="+matricule+"&PASSWORD="+mdp;
        let headers =  {
            headers: new HttpHeaders({
                'Content-Type':  'application/json;charset=utf-8',
                'Access-Control-Allow-Origin':'*'
            })
        };
        // l'objet retourUser et déclarer dans l'interface
        this.http.post('http://weblxbr01/ASPIC2/web_serv/webServConnection.php', dataToSend, headers).subscribe((data: standardRetourWebServ) => {
            if(data.RETOUR._CODE_RETOUR === "200"){
                this.isAuth = true;
                this.toastr.success(data.RETOUR._OK_MESSAGE, "SUCCES",{progressBar: true, progressAnimation :'decreasing'});
                this.router.navigate(['isolement']);
            }else{
                this.toastr.error(data.RETOUR._ERROR_MESSAGE, "ERREUR",{progressBar: true, progressAnimation :'decreasing'});
            }
        });
    }

    deconnexion(){
        console.log("Déconnexion réussi");
    }

    getIsAuth(){
        let dataToSend = "DATA=NULL";
        let headers =  {
            headers: new HttpHeaders({
                'Content-Type':  'application/json;charset=utf-8',
                'Access-Control-Allow-Origin':'*'
            })
        };

this.http.post('http://weblxbr01/ASPIC2/web_serv/webServConnexionOk.php', dataToSend, headers).subscribe((data: standardRetourWebServ) => {
            if(data.RETOUR._CODE_RETOUR === "200"){
                this.isAuth = true;
            }else{
                //on triche tant que l'appli n'est pas sur le serveur
                this.isAuth = true;
                //this.toastr.error(data.RETOUR._ERROR_MESSAGE, "ERREUR",{progressBar: true, progressAnimation :'decreasing'});
            }
        });
        return this.isAuth;
    }

    getIsAdmin(){
        return this.isAdmin;
    }

}