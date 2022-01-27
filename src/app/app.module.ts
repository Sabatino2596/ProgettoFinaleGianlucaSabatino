import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { TableUserComponent } from './table-user/table-user.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { ModificaComponent } from './modifica/modifica.component';
import { TableFattureComponent } from './table-fatture/table-fatture.component';
import { DettagliFattureComponent } from './dettagli-fatture/dettagli-fatture.component';
import { ModificafatturaComponent } from './modificafattura/modificafattura.component';
import { NuovafatturaComponent } from './nuovafattura/nuovafattura.component';
import { NuovoComuneComponent } from './nuovo-comune/nuovo-comune.component';
import { NuovaProvinciaComponent } from './nuova-provincia/nuova-provincia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableUserComponent,
    ClienteComponent,
    HomeComponent,
    NuovoUtenteComponent,
    DettagliComponent,
    ModificaComponent,
    TableFattureComponent,
    DettagliFattureComponent,
    ModificafatturaComponent,
    NuovafatturaComponent,
    NuovoComuneComponent,
    NuovaProvinciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [{  provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorInterceptor,
    multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
