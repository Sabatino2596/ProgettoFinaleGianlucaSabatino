import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Fattura } from '../classes/fattura';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-dettagli-fatture',
  templateUrl: './dettagli-fatture.component.html',
  styleUrls: ['./dettagli-fatture.component.css']
})
export class DettagliFattureComponent implements OnInit {

  fattura!: Fattura
  clienti: Clienti [] = []

  constructor(
    private route: ActivatedRoute,
    private ClientServices: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.ClientServices.getFattureById(data['id']).subscribe(response =>  this.fattura = response);
    });
  }
  modifica (fattura: Fattura){
    this.router.navigate(['fatture', fattura.id, 'modificafattura'])
  }
}
