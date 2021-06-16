import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetSelectComponent } from './register-pet-select.component';

describe('RegisterPetSelectComponent', () => {
  let component: RegisterPetSelectComponent;
  let fixture: ComponentFixture<RegisterPetSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPetSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
