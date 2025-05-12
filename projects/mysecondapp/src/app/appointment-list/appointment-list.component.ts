import { Component } from '@angular/core';
import {Appointment} from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
//import { CoursesListComponent } from '../courses-list/courses-list.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  standalone: true,
  imports: [CommonModule,FormsModule]
})

export class AppointmentListComponent { 
  appointmentTitle : string = "";
  appointmentName : string = "";
  selectedDate : string = "";
  datePipe: DatePipe = new DatePipe('en-US');

 appointments : Appointment[] = []

addAppointment(){
 // alert ("Hello");
 console.log("Clicked");
 //console.log('Appointment Date:', this.appointmentDate);
  if (this.appointmentTitle.trim().length && this.appointmentName.trim().length) {
     let newAppointmnet : Appointment ={
       id : Math.floor(Math.random() * 1000),
       title: this.appointmentTitle,
       name: this.appointmentName,
      
       date: new Date(this.selectedDate),
       //this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd') as Date,       
     }
     this.appointments.push (newAppointmnet)
     this.appointmentTitle="";
     this.appointmentName="";
     this.selectedDate= ""; 
     
  }
   

 }



}


