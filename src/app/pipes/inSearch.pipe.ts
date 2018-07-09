import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'inSearch'
})

//Contrairement à angular.JS il ne passe pas ici pour chaque itération, mias il passe une seule fois

@Injectable()
export class InSearch implements PipeTransform {
    // dans transform on passe les paramétres, ici l'array d'entrée et le paramétre recherché
    transform(value: Array<any>, toSearchString:string = ""): Array<any>{
        // on déclare en type script les variables à utilisé
        let searchFind:boolean = false;
        let returnArray = [];
        // pour évite de rappeler la fonction à chaque fois on modifie ici searchString
        toSearchString = toSearchString.toUpperCase();
        // pour chaque valeur du talbeua (la fonction est générique elle marche peu importe le type de tableau et d'objet)
        value.forEach(function(iso){
            // on va chercher chaque propriétés
            for (let propriete in iso){
                // si la propriété n'est pas null et est de type string (pour l'instant pas de recherche sur des type date ou tableau)
                if(iso[propriete] !== null && typeof(iso[propriete])=="string"){
                    // alors on convertie la propriété de l'objet en uppercase et on le compare à la recherche en uppercase
                    if(iso[propriete].toUpperCase().indexOf(toSearchString) !== -1){
                        // si on trouve alors on passe searchFind à true
                        searchFind = true;
                        // si on à trouvé inutile d'aller plus loin, on stop la 2ème boucle ici
                        break;
                    }
                }
            }
            // si searchFind == true, alors la recherche à trouvé
            if(searchFind){
                // dans ce cas on ajoute l'objet en cours au tableau de retour
                returnArray.push(iso);
            }
            // on reset searchFind
            searchFind = false;
        });
        // on retrourne le tableau de retour
        return returnArray;
    }
}