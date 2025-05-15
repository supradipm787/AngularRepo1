import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    {path: '', redirectTo: 'courselist', pathMatch: 'full'},
    {path: 'appointmentlist', component: AppointmentListComponent},
    {path: 'courselist', component: CoursesListComponent},
    {path: 'coursedetail', component: CourseDetailComponent},
    {path: 'courses', component: CoursesListComponent},
    {path: 'courses/:id', component: CourseDetailComponent},
    {path: 'about', component: AboutComponent},

];
