import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { ClientiData } from '../interfaces/clienti-data';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {

  cliente: Clienti = new Clienti ();
  tipoCliente: string [] = [];
  comuni: Comune [] = [];

  constructor(
    private ClientServices: ClientiService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.ClientServices.getTipoClient().subscribe(data=> {
      this.tipoCliente = data;
    })
    this.ClientServices.getAllComuni().subscribe(data => {
      this.comuni = data.content;
    })
  }
  add(){
    this.ClientServices.NuovoUtente(this.cliente).subscribe(response => {
      this.cliente = response;
    this.router.navigate(['clienti'])
    });
  }
}
