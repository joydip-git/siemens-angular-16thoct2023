import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemplateDrivenComponent } from './login-template-driven.component';

describe('LoginTemplateDrivenComponent', () => {
  let component: LoginTemplateDrivenComponent;
  let fixture: ComponentFixture<LoginTemplateDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTemplateDrivenComponent]
    });
    fixture = TestBed.createComponent(LoginTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
