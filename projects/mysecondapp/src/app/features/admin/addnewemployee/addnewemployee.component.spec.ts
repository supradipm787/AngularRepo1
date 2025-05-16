import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewemployeeComponent } from './addnewemployee.component';

describe('AddnewemployeeComponent', () => {
  let component: AddnewemployeeComponent;
  let fixture: ComponentFixture<AddnewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
