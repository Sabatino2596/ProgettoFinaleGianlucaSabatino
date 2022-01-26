import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { DettagliComponent } from '../dettagli/dettagli.component';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  clienti: Clienti [] = []

  constructor(
    private ClientiServices: ClientiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ClientiServices.getAllClients().subscribe(data => {
      this.clienti = data.content;
    });
  }

  dettagli(item: Clienti) {
    this.router.navigate([ 'clienti', item.id, 'dettagli'])
  }

  rimuovi(item: Clienti) {
    this.ClientiServices.rimuoviUtente(item).subscribe(data => {
      this.clienti = this.clienti.filter(ele => ele !== item)
    })
  }

}
