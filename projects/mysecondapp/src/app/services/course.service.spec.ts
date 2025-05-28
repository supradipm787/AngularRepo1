import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should fetch course by id', () => {
    const mockCourse: Course = {
      id: 1,
      date: '2025-03-01',
      description: 'Learn Angular basics',
      price: 49,
      title: 'Intro to Angular',
      name: ''
    };
   
    service.getCourseById(1).subscribe(course => {
      expect(course).toEqual(mockCourse);
    });  

     // Expect the HTTP GET request
  const req = httpMock.expectOne('http://localhost:3000/courses/1');
  expect(req.request.method).toBe('GET');

  // Flush the mock response
  req.flush(mockCourse);
  
  }); // <-- Add this closing brace for the previous 'it' block

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
