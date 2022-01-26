import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { Fatture } from '../interfaces/fatture';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-modificafattura',
  templateUrl: './modificafattura.component.html',
  styleUrls: ['./modificafattura.component.css']
})
export class ModificafatturaComponent implements OnInit {

  fattura!: Fattura

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

  modificafattura(fattura: Fattura) {
  this.ClientServices.editfattura(this.fattura).subscribe(response => this.fattura = response);
    this.router.navigate(['fatture'])
  }
}
