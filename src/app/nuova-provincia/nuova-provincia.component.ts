import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-nuova-provincia',
  templateUrl: './nuova-provincia.component.html',
  styleUrls: ['./nuova-provincia.component.css']
})
export class NuovaProvinciaComponent implements OnInit {

  provincia: Provincia = new Provincia


  constructor(
    private ClientServices: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProvincia() {
    this.ClientServices.NuovaProvincia(this.provincia).subscribe(response => {
      this.provincia = response;
    });
    this.router.navigate(['NuovoComune'])

  }
}
