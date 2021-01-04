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
  selectedArea: Area;
  newAreaName: string;
  newSkillName: string;
  editId: number;
  addingSkill = false;
  addingArea = false;
  editingAreaName = false;
  editingSkillName = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedArea = {id: 0, description: 'Seleziona Area'};
    this.newAreaName = '';
    this.newSkillName = '';
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

  deleteArea(): void{
    if(confirm("Stai per cancellare l'area "+this.selectedArea.description)) {
      let found=false;
      for(let skill in this.skills) {
        if(this.skills[skill].idArea == this.selectedArea.id){
          found=true;
        }
      }
      if(found) {
        alert("Non puoi cancellare un'Area con Competenze associate")
      } else {
        let i=0;
        for(let area in this.areas) {
          i++;
          if(this.areas[area].id == this.selectedArea.id){
            this.areas.splice(i-1, 1);
            this.selectedArea = {id: 0, description: 'Seleziona Area'};
          }
        }
      }
    }
  }

  deleteSkill(skillTarget: Skill): void {
    if(confirm("Stai per cancellare la competenza "+skillTarget.description+" di "+this.selectedArea.description)) {
      let i=0;
      for(let skill in this.skills) {
        i++;
        if(this.skills[skill].id == skillTarget.id){
          this.skills.splice(i-1, 1);
        }
      }
    }
  }

  addNewArea(): void {
    if(this.newAreaName != '') {
      this.areas.push({id: (this.areas.length)+1, description: this.newAreaName});
      this.newAreaName='';
    } else {
      alert("Specifica un nome per la nuova Area");
    }
  }

  addNewSkill(): void {
    if(this.newSkillName != '') {
      this.skills.push({id: (this.skills.length)+1, description: this.newSkillName, idArea: this.selectedArea.id})
      this.newSkillName='';
    } else {
      alert("Specifica un nome per la nuova Competenza");
    }
  }
}