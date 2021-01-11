import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEditorComponent } from './employee-editor/employee-editor.component';
import { FormsModule } from '@angular/forms';
import { SkillEditorComponent } from './skill-editor/skill-editor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditorComponent,
    SkillEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "edit-employee", component: EmployeeEditorComponent},
      {path: "edit-skill", component: SkillEditorComponent},
      {path: "", redirectTo: "edit-employee", pathMatch: "full"},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
