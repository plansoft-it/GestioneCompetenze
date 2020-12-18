import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { FormsModule } from '@angular/forms';//per il select
import { ViewSearchComponent } from './view-search/view-search.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DipendentiComponent,
    RicercaComponent,
    ViewSearchComponent
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
