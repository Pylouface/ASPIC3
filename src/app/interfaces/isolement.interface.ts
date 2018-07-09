 // Pour générer les interface à partir d'un json http://json2ts.com/
      export interface RENOUVELLEMENT {
        _PERSON_ID?: any;
        _ACTIVITY_ID: string;
        _UF: string;
        _PRESCRIPTEUR_RENOUVELLEMENT: string;
        _ISOLEMENT_CH_STANDARD?: any;
        _ISOLEMENT_COMMENTAIRE?: any;
        _MODIF_MESURE_SOIN_DT_TM: string;
        _MOTIF_MAINTIEN?: any;
        _DATE_RENOUVELLEMENT: string;
    }

    export interface ISOLEMENT {
        _PERSON_ID: string;
        _ACTIVITY_ID: string;
        _ACTIVITY_ID_FIN: string;
        _NOM: string;
        _PRENOM: string;
        _IPP: string;
        _IEP: string;
        _DATE_NAISSANCE: string;
        _SEXE: string;
        _DEBUT_SEJ: string;
        _FIN_SEJ: string;
        _PRESCRIPTEUR: string;
        _DEBUT_ISOLEMENT: string;
        _FIN_ISOLEMENT: string;
        _UF: string;
        _CHAMBRE_STANDARD: string;
        _RAISON_CHAMBRE_STANDARD: string;
        _PATIENT_INFORME_MODALITE: string;
        _FAMILLE_PREVENU: string;
        _MODE_HOSPI: string;
        _INDICATIONS: string;
        _MESURES_PREVENTIVES: string;
        _CIRCONSTANCES?: any;
        _MED_PRESCRI_SORTIE: string;
        _OBSERVATIONS_SORTIE?: any;
        _RENOUVELLEMENTS: RENOUVELLEMENT[];
    }

    export interface isolementInterface {
        ISOLEMENTS: ISOLEMENT[];
    }
