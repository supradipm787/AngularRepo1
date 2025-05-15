import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  

  private baseUrl = 'http://localhost:3000';  
  constructor(private http: HttpClient) { }

  //get Course by Id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }
  
  //get all courses without filter
  getCourse(): Observable<Course[]>{  
    return this.http.get<Course[]>(`${this.baseUrl}/courses`); 
  }

  //get all courses with filter
  getCourses(description : string | null): Observable<Course[]>{  
    let url = `${this.baseUrl}/courses`;
    if (description) {
      url += `?description=${description}`;
    }
    return this.http.get<Course[]>(url); 
  }

  //add a course
  addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }


}
