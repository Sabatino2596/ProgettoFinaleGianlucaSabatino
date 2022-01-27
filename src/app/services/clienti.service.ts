import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientiData } from '../interfaces/clienti-data';
import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { Comuni } from '../interfaces/comuni';
import { Fattura } from '../classes/fattura';
import { Fatture } from '../interfaces/fatture';
import { Statofattura } from '../classes/statofattura';
import { Province } from '../interfaces/province';


@Injectable({
  providedIn: 'root'
})
export class ClientiService {

//tentantID='fe_0621';
  //bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNSwiZXhwIjoxNjQzOTA1MTI1fQ.okXPBLbUly1c99vo7e6LUfDGFcD708Kx1zd-m5vuSIjvtSomHRlAsIpTPslJgTFQFVA86tHRg3HuDKDg6Pklow';
  //headers= new HttpHeaders();

  constructor(private http:HttpClient) { 
    /*this.headers=this.headers
    .set("Authorization",this.bearerToken)
    .set("X-TENANT-ID", this.tentantID)*/
  }

  getAllClients() {
    //return this.http.get<ClientData>(environment.base +'api/clienti?page=0&size=20&sort=id,ASC',{headers:this.headers})
  //}
  return this.http.get<ClientiData>(environment.Clurl + 'api/clienti?page=0&size=20&sort=id,ASC');
}

getClienteById(id: number) {
  return this.http.get<Clienti>(environment.Clurl + 'api/clienti/' + id);
}

  NuovoUtente(cliente: Clienti) {
  return this.http.post<Clienti>(environment.Clurl + 'api/clienti', cliente)
}

edit(cliente: Clienti) {
  return this.http.put<Clienti>(environment.Clurl + 'api/clienti/' + cliente.id,  cliente)
}

rimuoviUtente(cliente: Clienti) {
  return this.http.delete(environment.Clurl + 'api/clienti/'+ cliente.id)
}
                      //Comuni//
getAllComuni() {
  return this.http.get<Comuni>(environment.Clurl + 'api/comuni?page=0&size=20&sort=id,ASC')
}

getAllProvince() {
  return this.http.get<Province>(environment.Clurl + 'api/province?page=0&size=20&sort=id,ASC')
}

getTipoClient() {
  return this.http.get<string[]>(environment.Clurl + 'api/clienti/tipicliente')
}

getAllFatture() {
  return this.http.get<Fatture>(environment.Clurl + 'api/fatture?page=0&size=20&sort=id,ASC')
}

getFattureById(id: number) {
  return this.http.get<Fattura>(environment.Clurl + 'api/fatture/' + id)
}

editfattura(fattura: Fattura) {
  return this.http.put<Fattura>(environment.Clurl + 'api/fatture/' + fattura.id,  fattura)
}

removeFattura(fattura: Fattura) {
  return this.http.delete(environment.Clurl + 'api/fatture/' + fattura.id)
}

nuovaFattura(fattura: Fattura){
  return this.http.post<Fattura>(environment.Clurl + 'api/fatture' , fattura)
}

getStatoFatturaById(stato: Statofattura) {
  return this.http.get<Statofattura>(environment.Clurl + 'api/statifattura/' + stato.id)
}

NuovoComune(comuni: Comune) {
  return this.http.post<Comune>(environment.Clurl + 'api/comuni', comuni)
}

NuovaProvincia(provincia: Provincia) {
  return this.http.post<Provincia>(environment.Clurl + 'api/province', provincia)
}
}
