import { Component, OnInit } from '@angular/core';
import { DIPENDENTI } from '../lista-fittizia';
import { COMPETENZE } from '../lista-comp-fittizzia';
import { Dipendente } from '../dipendenti-inteface';
import { Competenze } from '../competences-interface';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {

  employees = DIPENDENTI;
  competences = COMPETENZE;
  checkShowEmployees: boolean = false;
  checkShowCompetences: boolean = false;

  searchedValue: string = "";
  selectedOption: string = "name";

  constructor() { }

  ngOnInit(): void {
  }

  showEmployees(): void {
    this.checkShowEmployees = true;
    this.checkShowCompetences = false;
  }

  showCompetences(): void {
    this.checkShowEmployees = false;
    this.checkShowCompetences = true;
  }


  ///DA SISTEMARE CHECKCOMPETENCE
  checkCompetence(option: string, emp, searchedValue: string): boolean {
    emp = DIPENDENTI;
    
    if (option == 'knownCompetences') {
      for (let index1 = 0; index1 < emp.length; index1++) {
        for (let index = 0; index < emp[index1].competenceUser.length; index++) {
          if (emp[index1].competenceUser[index].nameComp.toLocaleLowerCase().includes(searchedValue)) {
            return true;
          };
          return false;

        }
      }
    }
    return false;
  }

}
