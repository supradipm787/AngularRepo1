import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';


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
  
  constructor(private courseService : CourseService) { 
    
    console.log("Courses List Component Constructor");
  }

  ngOnInit() : void {
    console.log("Courses List Component Initialized");
    this.courses = this.courseService.getCourses();
  }
  
  onWishListAdded(course: any): void {
    console.log("Course added to wishlist on Parent: ", course);
    this.wishList.push(course); 
  }
  
}


