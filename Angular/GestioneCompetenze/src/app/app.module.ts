import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { RicercaComponent } from './ricerca/ricerca.component';

import { FormsModule } from '@angular/forms'; //per il select



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DipendentiComponent,
    RicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
