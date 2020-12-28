import { Component, OnInit } from '@angular/core';
import { DIPENDENTI } from '../lista-fittizia';
import { COMPETENZE } from '../lista-comp-fittizzia';
import { Dipendente } from '../dipendenti-inteface';
import { Competenze } from '../competences-interface';
import { UserIdService } from '../user-id.service';


@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {

  employees: Dipendente[]; 
  competences: Competenze[];
  checkShowEmployees: boolean = true;
  checkShowCompetences: boolean = false;

  searchedValue: string = "";
  selectedOption: string = "name";

  constructor( private userIdService: UserIdService) { }
  
  
  getEmployees(): void{
    this.userIdService.getEmployees().subscribe(employees => this.employees = employees)  ///Subscribe è per prende l'observable
    //this.employees, ha il valore di employees
    
  
  }

  getCompetences(): void{
    this.userIdService.getCompetences().subscribe(competences => this.competences = competences)  
   
    
  
  }
  
  
  ngOnInit(): void {
    this.getEmployees();
    this.getCompetences();
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
  checkAreaCompetence(option: string, empCompetence, searchedValue: string, index1): boolean {
    empCompetence = COMPETENZE;

    if (option == 'competencesInArea') {

      for (let index = 0; index < empCompetence[index1].competencesForArea.length; index++) {
        if (empCompetence[index1].competencesForArea[index].nameCompetence.toLocaleLowerCase().includes(searchedValue)) { //Sono andato a caso ma funziona
          return true;
        }


      }

    }
    return false;


  }

}
