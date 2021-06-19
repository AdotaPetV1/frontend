import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGaleryDogsComponent } from './photo-galery-dogs.component';

describe('PhotoGaleryDogsComponent', () => {
  let component: PhotoGaleryDogsComponent;
  let fixture: ComponentFixture<PhotoGaleryDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGaleryDogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGaleryDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
