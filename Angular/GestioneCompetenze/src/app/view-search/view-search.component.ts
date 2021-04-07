import { Component, Input, OnInit } from '@angular/core';
import { DIPENDENTI } from '../lista-fittizia';
import { COMPETENZE } from '../lista-comp-fittizia';
import { Dipendente } from '../dipendenti-inteface';
import { Competenze } from '../competences-interface';
import { UserIdService } from '../user-id.service';
import { Area } from '../area-interface';
import { SKILLEMPLOYEE } from '../lista-compDip-fittizia';
import { AREAS } from '../lista-area-fittizia';


@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {

  @Input() employee: Dipendente;


  employees: Dipendente[];
  competences: Competenze[];
  areas: Area[];
  competenceMock = COMPETENZE;
  skillEmpMock= SKILLEMPLOYEE;
  areaMock= AREAS;
  checkShowEmployees: boolean = true;
  checkShowCompetences: boolean = false;

  searchedValue: string = "";
  selectedOption: string = "name";

  constructor(private userIdService: UserIdService) { }

  ngOnInit(): void {
    this.getEmployeesObservable();
    this.getCompetencesObservable();
    this.getAreasObservable();
  }



    
  getAreaSkills(currentArea: Area): Competenze[] {
    var AreaSkills = [];
    let area = currentArea.id;
    for(let comp in this.competenceMock) {
      if(area == this.competenceMock[comp].idArea) {
        AreaSkills.push(this.competenceMock[comp]);
      }
    }

    return AreaSkills;

  }

  getSkills(currentEmp: Dipendente, area?: any ): Competenze[] {
    var EmpSkills = [];
    var tempSkills: number[] = [];
    let areaTarget = area;
    let emp = currentEmp.id;

    for(let skillEmp in this.skillEmpMock) {
      if(emp == this.skillEmpMock[skillEmp].idEmp) {
        tempSkills.push(this.skillEmpMock[skillEmp].idComp);
      }
    }
    for (let skill in tempSkills){
      for (let temp in this.competenceMock) {
        if((tempSkills[skill] == (this.competenceMock[temp].id)) || (tempSkills[skill] == 0)) {
          if(!EmpSkills.includes(this.competenceMock[temp])){
            EmpSkills.push(this.competenceMock[temp]);
          }
        }
      }
    }
    return EmpSkills;
  }

  getAreas(currentEmp: Dipendente): Area[] {
    var tempSkills: number[] = [];
    var skillArea: number[] = [];
    var tempAreas: Area[] = [];

    let idEmp = currentEmp.id;
        
    for(let skillEmp in this.skillEmpMock) {
      if(idEmp == this.skillEmpMock[skillEmp].idEmp) {
        tempSkills.push(parseInt(''+this.skillEmpMock[skillEmp].idComp));
      }
    }
    for(let skill in this.competenceMock) {
      if(tempSkills.includes(this.competenceMock[skill].id)) {
        skillArea.push(this.competenceMock[skill].idArea);
      }
    }
    for(let tempArea in this.areaMock) {
      if(skillArea.includes(this.areaMock[tempArea].id)){
        if(!tempAreas.includes(this.areaMock[tempArea])) {
          tempAreas.push(this.areaMock[tempArea]);
        }
      }
    }
    return tempAreas;
  }



 
  

  

  getEmployeesObservable(): void {
    this.userIdService.getEmployeesObservable().subscribe(employees => this.employees = employees)  ///Subscribe è per prende l'observable
    //this.employees, ha il valore di employees

  }

  getCompetencesObservable(): void {
    this.userIdService.getCompetencesObservable().subscribe(competences => this.competences = competences)
  }

  getAreasObservable(): void {
    this.userIdService.getAreasObservable().subscribe(areas => this.areas = areas) 

  }



  showEmployees(): void {
    this.checkShowEmployees = true;
    this.checkShowCompetences = false;
  }

  showCompetences(): void {
    this.checkShowEmployees = false;
    this.checkShowCompetences = true;
  }


  checkNameSurname(option: string, emp: Dipendente, searchedValue): boolean {
    if (option == 'name' && emp.userName.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())) {
      return true;
    }

    else if (option == 'surname' && emp.userSurname.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())) {
      return true
    }



    return false;
  }


  checkAreaName(option: string, currentArea: Area, searchedValue): boolean {
    if (option == 'name' && currentArea.description.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())) {
      return true;
    }
    return false;
  }

  checkCompetence(option: string, emp: Dipendente, searchedValue: string, index1): boolean {
  
    let skillUser =this.getSkills(emp);

    if (option == 'knownCompetences') {

     // for (let index = 0; index < this.getSkills(emp).length; index++) { //INDEX 1 viene preso dal ciclo nell'HTML
        for (let skill in skillUser) {
        if (skillUser[skill].compName.toLocaleLowerCase().includes(searchedValue)) {
          return true;
        }


      }

    }
    return false;
  }


  ///DA SISTEMARE 
  checkAreaCompetence(option: string, currentArea , searchedValue: string): boolean {
    let areas = AREAS;
    let compArea =this.getAreaSkills(currentArea);
    if (option == 'competencesInArea') {

      for (let index = 0; index < compArea.length; index++) {
        if (compArea[index].compName.toLocaleLowerCase().includes(searchedValue)) { //Sono andato a caso ma funziona
          return true;
        }


      }

    }
    return false;


  }

}
