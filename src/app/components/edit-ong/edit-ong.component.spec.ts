import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOngComponent } from './edit-ong.component';

describe('EditOngComponent', () => {
  let component: EditOngComponent;
  let fixture: ComponentFixture<EditOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
