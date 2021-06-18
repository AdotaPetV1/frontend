import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetSelectComponent } from './edit-pet-select.component';

describe('EditPetSelectComponent', () => {
  let component: EditPetSelectComponent;
  let fixture: ComponentFixture<EditPetSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPetSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
