import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailComponent } from './course-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailComponent, HttpClientModule],

      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1' // or mock an ID or any route param
              }
            },
            // If your component subscribes to paramMap:
            paramMap: of({
              get: (key: string) => '1'
            })
          }
        }
      ]
    
    }).compileComponents();
    
    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
