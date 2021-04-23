import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCatComponent } from './register-cat.component';

describe('RegisterCatComponent', () => {
  let component: RegisterCatComponent;
  let fixture: ComponentFixture<RegisterCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
