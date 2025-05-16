import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddnewemployeeComponent } from './addnewemployee/addnewemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {
  path: '', component:DashboardComponent,
  children: [
    {path: 'addnewemployee', component: AddnewemployeeComponent},
    {path: 'employeeList', component: EmployeelistComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
