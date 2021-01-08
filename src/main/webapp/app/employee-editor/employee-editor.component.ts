import { Component, Input, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employee';
import { AREAS } from '../mock-area';
import { SKILLS } from '../mock-skill';
import { SKILLEMPS } from '../mock-skillEmp';
import { LEVELS } from '../mock-level';
import { Employee } from '../employee';
import { Area } from '../area';
import { Skill } from '../skill';
import { Level } from '../level';

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
  editEmp=false;
  addingSkill=false;
  selectedArea;
  selectedSkill;

  constructor() { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    /*
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
    */
    const id = 1;  //temporaneo
    this.employee = this.employees[id-1];
  }

  getAreas(): Area[] {
    var tempSkills: number[] = [];
    var skillArea: number[] = [];
    var tempAreas: Area[] = [];
    let idEmp = this.employee.id;
    for(let skillEmp in this.skillEmps) {
      if(idEmp == this.skillEmps[skillEmp].idEmp) {
        tempSkills.push(parseInt(''+this.skillEmps[skillEmp].idSkill));
      }
    }
    for(let skill in this.skills) {
      if(tempSkills.includes(this.skills[skill].id)) {
        skillArea.push(this.skills[skill].idArea);
      }
    }
    for(let tempArea in this.areas) {
      if(skillArea.includes(this.areas[tempArea].id)){
        if(!tempAreas.includes(this.areas[tempArea])) {
          tempAreas.push(this.areas[tempArea]);
        }
      }
    }
    return tempAreas;
  }

  getSkills(area: any): Skill[] {
    var EmpSkills = [];
    var tempSkills: number[] = [];
    let areaTarget = area;
    let emp = this.employee.id;
    for(let skillEmp in this.skillEmps) {
      if(emp == this.skillEmps[skillEmp].idEmp) {
        tempSkills.push(this.skillEmps[skillEmp].idSkill);
      }
    }
    for (let skill in tempSkills){
      for (let temp in this.skills) {
        if((tempSkills[skill] == (this.skills[temp].id) && this.skills[temp].idArea == areaTarget) || (tempSkills[skill] == 0)) {
          if(!EmpSkills.includes(this.skills[temp])){
            EmpSkills.push(this.skills[temp]);
          }
        }
      }
    }
    return EmpSkills;
  }

  deleteSkill(skill: Skill): void {
    if(confirm("Stai per cancellare la competenza "+skill.description+" a "+this.employee.name)){
      var i=0;
      for(let skillEmp in this.skillEmps) {
        i++;
        if(this.skillEmps[skillEmp].idEmp == this.employee.id && this.skillEmps[skillEmp].idSkill == skill.id){
          this.skillEmps.splice(i-1, 1);
        }
      }
    }
  }

  modifyLevel(modification: string, skillId: number): void {
    if(modification == "+"){
      for(let skillEmp in this.skillEmps) {
        if(this.skillEmps[skillEmp].idEmp == this.employee.id && this.skillEmps[skillEmp].idSkill == skillId){
          if(this.skillEmps[skillEmp].idLevel < 3)
            this.skillEmps[skillEmp].idLevel++;
          else
            alert("Il livello è già al massimo");
        }
      }
    }else{
      for(let skillEmp in this.skillEmps) {
        if(this.skillEmps[skillEmp].idEmp == this.employee.id && this.skillEmps[skillEmp].idSkill == skillId){
          if(this.skillEmps[skillEmp].idLevel > 1)
            this.skillEmps[skillEmp].idLevel--;
          else
            alert("Il livello è già al minimo");
        }
      }
    }
  }

  getLevel(skill: number): Level {
    var idlevel
    var level

    for(let skillEmp in this.skillEmps){
      if(this.employee.id == this.skillEmps[skillEmp].idEmp){
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

  addSkillToEmployee(skillId: number): void {
    this.skillEmps.push({idEmp: this.employee.id, idSkill: skillId, idLevel: 1});
    this.selectedArea = null;
    this.selectedSkill = null;
  }

  getAllSkillsArea(idArea: number): Skill[] {
    var skillsArea: Skill[] = [];
    for(let skill in this.skills) {
      if(this.skills[skill].idArea == idArea) {
        skillsArea.push(this.skills[skill]);
      }
    }
    return skillsArea;
  }

  getAvailableSkillsEmployeeForArea(area: any): Skill[] {
    var skillsArea: Skill[] = [];
    var temp: number[] = [];
    for(let skillEmp in this.skillEmps){
      if(this.skillEmps[skillEmp].idEmp == this.employee.id) {
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