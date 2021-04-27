import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDogComponent } from './perfil-dog.component';

describe('PerfilDogComponent', () => {
  let component: PerfilDogComponent;
  let fixture: ComponentFixture<PerfilDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
