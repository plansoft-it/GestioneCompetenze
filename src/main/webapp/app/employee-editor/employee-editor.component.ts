import { Component, Input, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employee';
import { AREAS } from '../mock-area';
import { SKILLS } from '../mock-skill';
import { SKILLEMPS } from '../mock-skillEmp';
import { Area } from '../area';
import { Skill } from '../skill';
import { Employee } from '../employee';
import { Level } from '../level';
import { LEVELS } from '../mock-level';

@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.css']
})
export class EmployeeEditorComponent implements OnInit {

  @Input() employee: Employee;

  employees = EMPLOYEES;
  areas = AREAS;
  skills = SKILLS;
  skillEmps = SKILLEMPS;
  levels = LEVELS;
  tempSkills: number[];
  editEmp=false;
  addingSkill=false;
  selectedArea: any;
  selectedSkill: any;

  constructor() { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = 1;
    /*
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
    */
    this.employee = this.employees[id-1];
  }

  getAreas(event: any): Area[] {
    this.tempSkills = [];
    var tempAreas = [];
    var i=0;
    let emp = event;
    for(let skillEmp in this.skillEmps) {
      if(emp == this.skillEmps[skillEmp].idEmp) {
        this.tempSkills[i]=this.skillEmps[skillEmp].idSkill;
        i++;
      }
    }
    let skillArea: number[];
    skillArea = [];
    i=0;
    for(let skill in this.skills) {
      if(this.tempSkills.includes(this.skills[skill].id)) {
        skillArea[i]=this.skills[skill].idArea;
        i++;
      }
    }
    i=0;
    for(let tempArea in this.areas) {
      if(skillArea.includes(this.areas[tempArea].id)){
        if(true) {
          tempAreas[i]=this.areas[tempArea];
          i++;
        }
      }
    }
    return tempAreas;
  }

  getSkills(area: any, employee: number): Skill[] {
    var EmpSkills = [];
    this.tempSkills = [];
    let areaTarget = area;
    let emp = employee;
    for(let skillEmp in this.skillEmps) {
      if(emp == this.skillEmps[skillEmp].idEmp) {
        this.tempSkills.push(this.skillEmps[skillEmp].idSkill);
      }
    }
    for (let skill in this.tempSkills){
      for (let temp in this.skills) {
        if((this.tempSkills[skill] == (this.skills[temp].id) && this.skills[temp].idArea == areaTarget) || (this.tempSkills[skill] == 0)) {
          if(!EmpSkills.includes(this.skills[temp])){
            EmpSkills.push(this.skills[temp]);
          }
        }
      }
    }
    return EmpSkills;
  }

  deleteSkill(employee: number, skill: Skill): void {
    if(confirm("Stai per cancellare la competenza "+skill.description+" a "+this.employee.name)){
      var i=0;
      for(let skillEmp in this.skillEmps) {
        i++;
        if(this.skillEmps[skillEmp].idEmp == employee && this.skillEmps[skillEmp].idSkill == skill.id){
          this.skillEmps.splice(i-1, 1);
        }
      }
    }
  }

  modifyLevel(modification: string, skillId: number, employee: number): void {
    if(modification == "+"){
      for(let skillEmp in this.skillEmps) {
        if(this.skillEmps[skillEmp].idEmp == employee && this.skillEmps[skillEmp].idSkill == skillId){
          if(this.skillEmps[skillEmp].idLevel < 3)
            this.skillEmps[skillEmp].idLevel++;
          else
            alert("Il livello è già al massimo");
        }
      }
    }else{
      for(let skillEmp in this.skillEmps) {
        if(this.skillEmps[skillEmp].idEmp == employee && this.skillEmps[skillEmp].idSkill == skillId){
          if(this.skillEmps[skillEmp].idLevel > 1)
            this.skillEmps[skillEmp].idLevel--;
          else
            alert("Il livello è già al minimo");
        }
      }
    }
  }

  getLevel(employee: number, skill: number): Level {
    var idlevel
    var level

    for(let skillEmp in this.skillEmps){
      if(employee == this.skillEmps[skillEmp].idEmp){
        if(skill == this.skillEmps[skillEmp].idSkill){
          idlevel = this.skillEmps[skillEmp].idLevel;
        }
      }
    }

    for(let i in this.levels){
      if(idlevel == this.levels[i].id){
        level = this.levels[i];
      }
    }
    return level;
  }
  
  addSkill(event: any): void {
    alert("Skill " + event + " added");
  }

  addSkillToEmployee(employee: any, skillId: any): void {
    this.skillEmps.push({idEmp: employee, idSkill: skillId, idLevel: 1});
  }

  getAllSkillsArea(event: any): Skill[] {
    var skillsArea: Skill[] = [];
    for(let skill in this.skills) {
      if(this.skills[skill].idArea == event) {
        skillsArea.push(this.skills[skill]);
      }
    }
    return skillsArea;
  }

  getAvailableSkillsEmployeeForArea(employee: any, area: any): Skill[] {
    var skillsArea: Skill[] = [];
    var temp: number[] = [];
    for(let skillEmp in this.skillEmps){
      if(this.skillEmps[skillEmp].idEmp == employee) {
        temp.push(this.skillEmps[skillEmp].idSkill)
      }
    }
    for(let skill in this.skills) {
      if(this.skills[skill].idArea == area && !(temp.includes(this.skills[skill].id))) {
        skillsArea.push(this.skills[skill]);
      }
    }
    return skillsArea;
    }
}

//!this.tempAreas.id == this.areas[tempArea].id