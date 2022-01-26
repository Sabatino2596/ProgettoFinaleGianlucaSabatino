import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  cliente!: Clienti;
  comuni: Comune [] = [];
  tipoCliente: string [] = [];


  constructor(
    private route: ActivatedRoute,
    private ClientServices: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.ClientServices.getClienteById(data['id']).subscribe(response =>  this.cliente = response);
    });
  }

modifica(cliente: Clienti) {
  this.ClientServices.edit(this.cliente).subscribe(response => this.cliente = response);
  this.router.navigate(['clienti'])
}

}
