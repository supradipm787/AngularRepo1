import { Component } from '@angular/core';
import { CourseService } from '../services/course.service'; // Adjust the path as needed
import { Course } from '../models/course.model';
import { CurrencyPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgStyle,CurrencyPipe ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course: Course | null = null; 
  
  constructor(private courseService : CourseService) { 
   }

  loadCourseById(id : number) : void{  
      this.courseService.getCourseById(id).subscribe({
        next : (data : Course) => {
          console.log("Course with ID 1: ", data);
          this.course = data;
        },
        error : err => {
          console.error("Error fetching course by ID: ", err);
        }
      });
   }

}
