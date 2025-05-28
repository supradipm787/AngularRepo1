import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistComponent } from './employeelist.component';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeelistComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
