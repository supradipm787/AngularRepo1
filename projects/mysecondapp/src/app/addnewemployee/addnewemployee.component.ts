import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Course } from '../models/course.model';
import { Employee } from '../models/employee.model';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addnewemployee',
  standalone: true,
  imports: [],
  templateUrl: './addnewemployee.component.html',
  styleUrl: './addnewemployee.component.css'
})
export class AddnewemployeeComponent {
    employeeForm!: FormGroup;
    submissionError : string = '';
    submissionSuccess : boolean = false;
  
    courses : Course [] = [];
    employees : Employee [] = [];

    constructor (private fb : FormBuilder , private courseService : CourseService ) {}

    ngOnInit(): void {

        /**this.employeeForm = this.fb.group({
            name: [''],
            email: [''],
            id : ['']
            
          }); **/
        
        //get all employees without filter
        this.courseService.getEmployees().subscribe({
          next : (data : Employee[]) => {
          this.employees = data;
          console.log("Employees: ", this.employees);
          },
          error : (err) => {
          console.error("Error fetching employees: ", err);
          }
        });

    }//end of ngOnInit



}
