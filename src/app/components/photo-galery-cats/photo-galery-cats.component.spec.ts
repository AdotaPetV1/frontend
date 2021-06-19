import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGaleryCatsComponent } from './photo-galery-cats.component';

describe('PhotoGaleryCatsComponent', () => {
  let component: PhotoGaleryCatsComponent;
  let fixture: ComponentFixture<PhotoGaleryCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGaleryCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGaleryCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
