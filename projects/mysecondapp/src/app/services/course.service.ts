import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  /**private courses: Course[] = [
      {id: 1, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
      {id: 2, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},
      {id: 3, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: true}, 
      {id: 4, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},   
      {id: 5, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
    ]**/

  private baseUrl = 'http://localhost:3000';  
  constructor(private http: HttpClient) { }

  //get Course by Id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }
  
  //get all courses
  getCourses(): Observable<Course[]>{  
    return this.http.get<Course[]>(`${this.baseUrl}/courses`); 
  }
  //add a course
  addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }


}
