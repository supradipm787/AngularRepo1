import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

export const routes: Routes = [

    //{path: '', component: AppComponent},
    {path: 'appointmentlist', component: AppointmentListComponent},
    {path: 'courselist', component: CoursesListComponent},


];
