export class Isolement {
  constructor(
    public _ACTIVITY_ID: string,
    public _ACTIVITY_ID_FIN:string,
    public _CHAMBRE_STANDARD: string,
    public _CIRCONSTANCES:string,
    public _DATE_NAISSANCE: string,
    public _DEBUT_ISOLEMENT: string,
    public _DEBUT_SEJ: string,
    public _FAMILLE_PREVENU: string,
    public _FIN_ISOLEMENT: string,
    public _FIN_SEJ: string,
    public _IEP: string,
    public _INDICATIONS: string,
    public _IPP: string,
    public _MED_PRESCRI_SORTIE:string,
    public _MESURES_PREVENTIVES: string,
    public _MODE_HOSPI: string,
    public _NOM: string,
    public _OBSERVATIONS_SORTIE: string,
    public _PATIENT_INFORME_MODALITE: string,
    public _PERSON_ID: string,
    public _PRENOM: string,
    public _PRESCRIPTEUR: string,
    public _RAISON_CHAMBRE_STANDARD: string,
    public _SEXE: string,
    public _UF: string,

    public _RENOUVELLEMENT?: string[]
  ) {}
}