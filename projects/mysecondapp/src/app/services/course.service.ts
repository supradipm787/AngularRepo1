import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  

  private baseUrl = 'http://localhost:3000';  
  constructor(private http: HttpClient) { }

  //add Employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, employee);
  }

  //get Course by Id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }
  
  //get all courses without filter
  getCourse(): Observable<Course[]>{  
    return this.http.get<Course[]>(`${this.baseUrl}/courses`); 
  }

  //get all employees without filter
  getEmployees(): Observable<Employee[]>{  
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`); 
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
