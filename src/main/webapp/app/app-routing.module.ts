import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EmployeeEditor } from './employee-editor/employee-editor.component';

const routes: Routes = [
//  {path: 'edit', component: EmployeeEditor }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
