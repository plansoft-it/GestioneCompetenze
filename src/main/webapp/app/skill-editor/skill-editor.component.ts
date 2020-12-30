import { Component, Input, OnInit } from '@angular/core';
import { AREAS } from '../mock-area';
import { SKILLS } from '../mock-skill';
import { Area } from '../area';
import { Skill } from '../skill';


@Component({
  selector: 'app-skill-editor',
  templateUrl: './skill-editor.component.html',
  styleUrls: ['./skill-editor.component.css']
})
export class SkillEditorComponent implements OnInit {

  areas = AREAS;
  skills = SKILLS;
  addingSkill=false;
  selectedArea: Area;
  editingAreaName: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedArea = { id: 0, description: 'Seleziona Area'};
  }

  setSelectedArea(areaTarget: number): void {
    for(let area in this.areas) {
      if(this.areas[area].id == areaTarget) {
        this.selectedArea = this.areas[area];
      }
    }
  }

  getAllSkillsArea(areaTarget: Area): Skill[] {
    var tempSkills: Skill[] = [];
    for (let skill in this.skills){
      if(this.skills[skill].idArea == areaTarget.id){
        tempSkills.push(this.skills[skill]);
      }
    }
    return tempSkills;
  }

  deleteArea(areaTarget: Area): void{
    alert("Not Yet Implemented");
  }

  deleteSkill(skillTarget: Skill): void {
    alert("Not Yet Implemented");
  }

}
