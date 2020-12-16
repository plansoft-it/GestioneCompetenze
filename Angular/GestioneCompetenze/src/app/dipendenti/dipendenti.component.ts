import { Component, OnInit } from '@angular/core';
import { Dipendente } from '../dipendenti-inteface';
import { DIPENDENTI } from '../lista-fittizia';


@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit {
  
  dipendenti=DIPENDENTI;
  

  constructor() { }

  ngOnInit(): void {

  }

}
