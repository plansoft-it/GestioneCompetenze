import { Component, OnInit } from '@angular/core';
import { Dipendente } from '../dipendenti-inteface';
import { DIPENDENTI } from '../lista-fittizia';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  dipendenti=DIPENDENTI;
  selectedOption: string;
  printedOption: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectFilter(): void{
     this.selectedOption;

    if (this.selectedOption==="name") {
      this.printedOption="ciao";
    }
  }


}
