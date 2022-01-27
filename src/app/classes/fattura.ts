import { Clienti } from "./clienti";
import { Statofattura } from "./statofattura";

export class Fattura {
    id?:number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: Statofattura;
    cliente!: Clienti;

    constructor() {
        this.stato = new Statofattura();
        this.cliente = new Clienti();
    }
}

