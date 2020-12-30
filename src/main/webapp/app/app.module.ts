import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEditorComponent } from './employee-editor/employee-editor.component';
import { FormsModule } from '@angular/forms';
import { SkillEditorComponent } from './skill-editor/skill-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditorComponent,
    SkillEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
