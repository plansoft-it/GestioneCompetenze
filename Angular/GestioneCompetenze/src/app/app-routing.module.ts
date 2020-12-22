import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ViewSearchComponent } from './view-search/view-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dipendenti', component: DipendentiComponent },
  { path: 'ricerca', component: RicercaComponent },
  { path: 'view-search', component: ViewSearchComponent },
  { path: 'employees/:id', component: DipendentiComponent }, //COMPONENT DA CAMBIARE, SOLO UNA PROVA QUESTO
  { path: 'areas/:id', component: DashboardComponent },//COMPONENT DA CAMBIARE, SOLO UNA PROVA QUESTO
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
