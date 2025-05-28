import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Course } from '../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

   const mockCourse: Course = {
    id: 1,
    title: 'Test Course',
    description: 'Test Description',
    price: 100,
    date: '2025-01-01',
    name: '',
    soldOut: false  // 🔑 Ensure this is included if used in template
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse; //Set input before detectChanges
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
