import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { Employee } from '../../../models/employee.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeForm!: FormGroup;
  submissionError : string = '';
  submissionSuccess : boolean = false;
    
      courses : Course [] = [];
      employees : Employee [] = [];
  
      constructor (private fb : FormBuilder , private courseService : CourseService ) {}
  
      ngOnInit(): void { 
         
          
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
