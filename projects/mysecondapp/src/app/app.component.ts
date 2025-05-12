import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mysecondapp';
  message = 'Hello World!';
}
