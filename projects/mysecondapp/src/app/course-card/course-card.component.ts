import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
 @Input() course: any ;
 @Output() wishListAdded = new EventEmitter<any>();
 

  constructor(private router : Router) {  }
  onAddToWishList(): void {
    console.log("Course added to wishlist on Child: ", this.course);  
    this.wishListAdded.emit(this.course);
    
  }
  gotoDetails(courseId : number): void {
    console.log("Go to Details");
    this.router.navigate(['/courses', courseId]);
  }
}
