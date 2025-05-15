import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  title: string = "Courses List";
  wishList: Course[] = [];
  courses: Course[] = [];
  course!: Course;

  constructor(private courseService : CourseService, private route: ActivatedRoute, private router: Router) { 
    
    console.log("Courses List Component Constructor");
  }

  ngOnInit() : void {
    console.log("Courses List Component Initialized");
    
    // Subscribe to the route parameters to get the course ID
    this.route.queryParamMap.subscribe(params => {
      const description = params.get('description');
      console.log("Description from query params: ", description);
      this.loadCourses(description);
    });
  }

  loadCourses(description: string | null): void { 
    console.log("Load Course: ", description);
    this.courseService.getCourses(description).subscribe({
      next : (data : Course[]) => {
        this.courses = data;
        console.log("Filtered Courses: ", this.courses);
      },
      error : err => {
        console.error("Error fetching courses: ", err);
      }
    });
  }
  
  onWishListAdded(course: any): void {
    console.log("Course added to wishlist on Parent: ", course); 
    this.wishList.push(course); 
  }
  
}


