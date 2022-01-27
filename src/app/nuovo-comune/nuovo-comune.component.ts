import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-nuovo-comune',
  templateUrl: './nuovo-comune.component.html',
  styleUrls: ['./nuovo-comune.component.css']
})
export class NuovoComuneComponent implements OnInit {

  comuni: Comune = new Comune();
  provincia: Provincia [] = [];

  constructor(
    private ClientServices: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ClientServices.getAllProvince().subscribe(data => {
      this.provincia = data.content;
    })
  }

  addComune() {
    this.ClientServices.NuovoComune(this.comuni).subscribe(response => {
      this.comuni = response;
    });
    this.router.navigate(['clienti'])
  }
}
