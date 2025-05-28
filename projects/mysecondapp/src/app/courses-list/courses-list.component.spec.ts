import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;



    const mockCourses: Course[] = [{
      id: 1,
      date: '2025-01-01',
      description: 'Learn Angular basics',
      price: 49,
      title: 'Intro to Angular',
      name: '',
      soldOut: false
    }];

  const courseServiceMock = {
    getCourses: (description?: string | null) => of(mockCourses) //  Mocked. subscribe() response
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListComponent, HttpClientModule],
        providers: [
          { provide: CourseService, useValue: courseServiceMock },  
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null // or return something meaningful
              }
            },
            queryParamMap: of({
              get: () => null // or '1', depending on what the component needs
            })
          }
        }
      ]


    }).compileComponents();
    
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
