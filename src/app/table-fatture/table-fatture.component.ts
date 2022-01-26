import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { Fatture } from '../interfaces/fatture';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-table-fatture',
  templateUrl: './table-fatture.component.html',
  styleUrls: ['./table-fatture.component.css']
})
export class TableFattureComponent implements OnInit {

  fattura: Fattura [] = []


  constructor(
    private ClientiServices: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ClientiServices.getAllFatture().subscribe(data => {
      this.fattura = data.content;
    });
  }
  dettagliFatture(fattura: Fattura) {
    this.router.navigate(['fatture', fattura.id, 'dettagliFatture'])
  }

  removeFattura(item: Fattura){
    this.ClientiServices.removeFattura(item).subscribe(data => {
      this.fattura = this.fattura.filter(ele => ele !== item);
    })
  }
}
