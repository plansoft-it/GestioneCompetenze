import { DIPENDENTI } from './lista-fittizia';
import { COMPETENZE } from './lista-comp-fittizzia';
import { Dipendente } from './dipendenti-inteface';
import { Competenze } from './competences-interface';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  constructor() { }

  getEmployees(): Observable<Dipendente[]> { //Ritorna un Observables con l'array dei dipendenti
    return of(DIPENDENTI);
  }

  getEmployee(id: number): Observable<Dipendente> {
    
    return of(DIPENDENTI.find(employee => employee.id == id));
  }

}
