import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fattura: Fattura [] = []


  constructor(
    private ClientiServices: ClientiService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.ClientiServices.getfatturaBycliente(data['id']).subscribe(response => {
        this.fattura = response.content
    console.log(response.content)
      })
    })
  }

}
