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


  
  checkCompetence(option: string, emp, searchedValue: string, index1): boolean {
    emp = DIPENDENTI;
    
    if (option == 'knownCompetences') {
      
        for (let index = 0; index < emp[index1].competenceUser.length; index++) {
          if (emp[index1].competenceUser[index].nameComp.toLocaleLowerCase().includes(searchedValue)) {
            return true;
          }
         

        }
      
    }
    return false;
  }


  ///DA SISTEMARE 
checkAreaCompetence(arrayArea, searchedValue:string): boolean{
  arrayArea = COMPETENZE;
  for (let index = 0; index < arrayArea.competencesForArea.length; index++) {
    if(arrayArea.competencesForArea[index]==searchedValue){
      return true; 
    }
    
  }
  return false;
}


}
