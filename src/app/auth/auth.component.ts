import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  /*________________________________________________________________________________________________________*/
  // Si au chargement du component l'utilisateur est déjà authentifier, on redirige vers isolement
    ngOnInit() {
        if(this.authService.getIsAuth()){
            this.router.navigate(['isolement']);
        }
    }
    
    
    /*________________________________________________________________________________________________________*/
    // Fonction appelé lors de la soumission du formulaire (Date de début | Date de fin)
    onSubmit(form: NgForm) {
        // Sur le submit du formulaire on récup les dates à envoyer
        const send_matricule = form.value['matricule'];
        const send_mdp = form.value['mdp'];
        this.authService.connexion(send_matricule, send_mdp);
    }
    

}
