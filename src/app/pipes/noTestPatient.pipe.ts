import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'noTestPatient'
})

@Injectable()
export class NoTestPatient implements PipeTransform {
transform(value: Array<any>, isActive:boolean =true): Array<any>{
        // Si le filtre et actif on retourne par les patients de test
        if(!isActive){
            // Filter retourne une array contenant les element qui remplisse la condition (le iso ici et une instance d'un des objets de value)
            return value.filter(iso => iso._NOM.toUpperCase().indexOf("TEST") == -1);
        }else{
            return value;
        }
    }
}