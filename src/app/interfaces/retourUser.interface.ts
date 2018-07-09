 // Pour générer les interface à partir d'un json http://json2ts.com/
 export interface RETOUR {
    _CODE_RETOUR: string;
    _RETURN_JSON?: any;
    _ERROR_MESSAGE: string;
    _OK_MESSAGE?: any;
    _STATUT: string;
}

export interface standardRetourWebServ {
    RETOUR: RETOUR;
}