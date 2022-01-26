import { Clienti } from "../classes/clienti";

export interface ClientiData {
    content: Array<Clienti>;
    pageable: Object;
    last: Boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size: number;
    sort: Object;
    first: Boolean;
    empty: Boolean
}
