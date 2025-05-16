import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-signuporgform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signuporgform.component.html',
  styleUrls: ['./signuporgform.component.css']
})
export class SignuporgformComponent implements OnInit {
  signupForm!: FormGroup;
  submissionError : string = '';
  submissionSuccess : boolean = false;

  courses : Course [] = [];
  employees : Employee [] = [];

  constructor (private fb : FormBuilder , private courseService : CourseService ) {}
    
  ngOnInit(): void {
    this.signupForm = this.fb.group({
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

  }//end of ngOnInit

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get id() {
    return this.signupForm.get('id');
  }

onSubmit() : void {
  if (this.signupForm.invalid) {
    return;
  }

  const newEmployee = {
    name: this.signupForm.value.name,
    email: this.signupForm.value.email,
    id: this.signupForm.value.id
  };
   
  this.courseService.addEmployee(newEmployee).subscribe({
    next: (employee) => {
      console.log('Employee added successfully:', employee);
      this.submissionSuccess = true;
      //this.submissionError = '';
      this.signupForm.reset();
    },error: (err) => {
      console.error('Error adding employee:', err);
      this.submissionError = 'Error adding employee. Please try again.';
      //this.submissionSuccess = false;
    }
  })

}//end of onSubmit
    

}//end of component
