import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  cliente!: Clienti;

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
  
  modifica (cliente: Clienti){
    this.router.navigate(['clienti', cliente.id, 'modifica'])
  }
}
