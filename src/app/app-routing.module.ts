import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { ModificaComponent } from './modifica/modifica.component';
import { ModificafatturaComponent } from './modificafattura/modificafattura.component';
import { NuovaProvinciaComponent } from './nuova-provincia/nuova-provincia.component';
import { NuovafatturaComponent } from './nuovafattura/nuovafattura.component';
import { NuovoComuneComponent } from './nuovo-comune/nuovo-comune.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { TableUserComponent } from './table-user/table-user.component';

const routes: Routes = [
  {path: 'clienti', component: TableUserComponent},
  {path: 'nuovo', component: NuovoUtenteComponent},
  {path: 'clienti/:id/dettagli', component: DettagliComponent},
  {path: 'clienti/:id/modifica', component: ModificaComponent},
  {path: 'clienti/:id/clienti', component: TableUserComponent},
  {path: 'fatture', component: TableFattureComponent},
  {path: 'fatture/:id/dettagliFatture', component: DettagliFattureComponent},
  {path: 'fatture/:id/modificafattura', component: ModificafatturaComponent},
  {path: 'fatture/:id/fatture', component: TableFattureComponent},
  {path: 'fatture/:id/nuovafattura', component: NuovafatturaComponent},
  {path: 'NuovoComune', component: NuovoComuneComponent},
  {path: 'NuovaProvincia', component: NuovaProvinciaComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
