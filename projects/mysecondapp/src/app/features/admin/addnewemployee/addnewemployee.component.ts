import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { Employee } from '../../../models/employee.model';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addnewemployee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],  
  templateUrl: './addnewemployee.component.html',
  styleUrl: './addnewemployee.component.css'
})
export class AddnewemployeeComponent {
    employeeForm!: FormGroup;
    submissionError : string = '';
    submissionSuccess : boolean = false;
    
      courses : Course [] = [];
      employees : Employee [] = [];
      currentTimestamp: number = 0;
      constructor (private fb : FormBuilder , private courseService : CourseService ) {}
        
      ngOnInit(): void {
        this.employeeForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
          id : ['', [Validators.required, Validators.minLength(1)]],
          
        });
        //const desc = 'data';
        this.courseService.getCourse().subscribe({
        next : (data : Course[]) => {
          this.courses = data;
          console.log("Courses: ", this.courses);
        },
        error : (err) => {
          console.error("Error fetching courses: ", err);
        }
      });
    
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

      this.currentTimestamp = Date.now();
    
      }//end of ngOnInit
    
      get name() {
        return this.employeeForm.get('name');
      }
      get email() {
        return this.employeeForm.get('email');
      }
      get id() {
        return this.employeeForm.get('id');
      }
    
    onSubmit() : void {
      if (this.employeeForm.invalid) {
        return;
      }
    
      const newEmployee = {
        name: this.employeeForm.value.name,
        email: this.employeeForm.value.email,
        id: this.employeeForm.value.id
      };
       
      this.courseService.addEmployee(newEmployee).subscribe({
        next: (employee) => {
          console.log('Employee added successfully:', employee);
          this.submissionSuccess = true;
          //this.submissionError = '';
          this.employeeForm.reset();
        },error: (err) => {
          console.error('Error adding employee:', err);
          this.submissionError = 'Error adding employee. Please try again.';
          //this.submissionSuccess = false;
        }
      })
    
    }//end of onSubmit
        
    


}
