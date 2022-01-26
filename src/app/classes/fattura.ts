import { Clienti } from "./clienti";
import { Statofattura } from "./statofattura";

export class Fattura {
    id!:number;
    data!: number;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: Statofattura;//tipizzare stato classe
    cliente!: Clienti
}

