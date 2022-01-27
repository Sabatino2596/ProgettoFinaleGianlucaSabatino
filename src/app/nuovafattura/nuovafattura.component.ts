import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-nuovafattura',
  templateUrl: './nuovafattura.component.html',
  styleUrls: ['./nuovafattura.component.css']
})
export class NuovafatturaComponent implements OnInit {

  fattura: Fattura = new Fattura ();

  constructor(
    private ClientServices: ClientiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
    this.fattura.cliente.id = data ['id'];
    });
  }

  addFattura(){
    this.fattura.data= "2019-07-31T16:09:43.763+00:00";
    this.fattura.stato.id= 2;
    this.fattura.stato.nome ="NON PAGATO"
    this.ClientServices.nuovaFattura(this.fattura).subscribe();
      this.router.navigate(['fatture'])
  }
}
