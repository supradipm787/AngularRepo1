import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service'; // Adjust the path as needed
import { Course } from '../models/course.model';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgStyle,CurrencyPipe ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null; 
  
  constructor(private courseService : CourseService, private route: ActivatedRoute) { 
    console.log("Course Detail Component Constructor");
   }
  //added this method for router 
  ngOnInit() : void {
       this.route.paramMap.subscribe(params => {
        const idStr = params.get('id');
        if (idStr) {
        // Convert the string ID to a number  
        const id = +idStr;
        this.loadCourseById(id);
        }

       })
  }
  //added this method to fetch course by ID
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
