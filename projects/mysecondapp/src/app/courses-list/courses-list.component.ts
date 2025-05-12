import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  title: string = "Courses List";
  courses = [
    {id: 1, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
    {id: 2, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},
    {id: 3, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: true}, 
    {id: 4, name: 'Angular Advanced', price: 5000, description: 'Angular Advanced Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png', onSale: false},   
    {id: 5, name: 'Angular', price:4300, description: 'Angular Course', date:'2023-10-01', soldOut:true, img:'/assets/angularLogo.png' , onSale: true},
  ]
  ngOnInit() : void {
    console.log("Courses List Component Initialized");
  }

}
