import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';
import { SignuporgformComponent } from './signuporgform/signuporgform.component';
import { AddnewemployeeComponent } from './features/admin/addnewemployee/addnewemployee.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { EmployeelistComponent } from './features/admin/employeelist/employeelist.component';

export const routes: Routes = [

    {path: '', redirectTo: 'courselist', pathMatch: 'full'},
    {path: 'appointmentlist', component: AppointmentListComponent},
    {path: 'courselist', component: CoursesListComponent},
    {path: 'coursedetail', component: CourseDetailComponent},
    {path: 'courses', component: CoursesListComponent},
    {path: 'courses/:id', component: CourseDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'signup', component: SignuporgformComponent},
    {path: 'addEmployees', component: AddnewemployeeComponent}, 
    {path: 'viewEmployees', component: EmployeelistComponent}, 
    
    {path: 'admin', component: DashboardComponent},
    
    

];
