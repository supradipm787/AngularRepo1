import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuporgformComponent } from './signuporgform.component';
import { HttpClientModule } from '@angular/common/http';

describe('SignuporgformComponent', () => {
  let component: SignuporgformComponent;
  let fixture: ComponentFixture<SignuporgformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignuporgformComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignuporgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
