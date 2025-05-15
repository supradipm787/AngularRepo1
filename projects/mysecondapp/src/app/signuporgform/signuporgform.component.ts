import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-signuporgform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signuporgform.component.html',
  styleUrls: ['./signuporgform.component.css']
})
export class SignuporgformComponent implements OnInit {
  signupForm!: FormGroup;
  courses : Course [] = [];
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


}
