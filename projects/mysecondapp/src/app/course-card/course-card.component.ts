import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
 @Input() course: any ;
}
