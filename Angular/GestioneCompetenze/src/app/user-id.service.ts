import { DIPENDENTI } from './lista-fittizia';
import { COMPETENZE } from './lista-comp-fittizia';
import { Dipendente } from './dipendenti-inteface';
import { Competenze } from './competences-interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AREAS } from './lista-area-fittizia';
import { Area } from './area-interface';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  constructor() { }

  getEmployeesObservable(): Observable<Dipendente[]> { //Ritorna un Observables con l'array dei dipendenti
    return of(DIPENDENTI);
  }

  getEmployeeObservable(id: number): Observable<Dipendente> {

    return of(DIPENDENTI.find(employee => employee.id == id));
  }

  getCompetencesObservable(): Observable<Competenze[]> { //Ritorna un Observables con l'array dei dipendenti
    return of(COMPETENZE);
  }

  getCompetenceObservable(id: number): Observable<Competenze> { // DA CAMBIARE

    return of(COMPETENZE.find(area => area.id == id));
  }

  getAreasObservable(): Observable<Area[]> {

    return of(AREAS);
  }


  getAreaObservable(id: number): Observable<Area> {

    return of(AREAS.find(area => area.id == id));
  }


}
