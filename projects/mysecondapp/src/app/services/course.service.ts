import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
      {id: 1, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
      {id: 2, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},
      {id: 3, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: true}, 
      {id: 4, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},   
      {id: 5, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
    ]

  constructor() { }

  getCourses(): Course[] {  
    return this.courses; 
  }
}
