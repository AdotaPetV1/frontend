import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCatComponent } from './perfil-cat.component';

describe('PerfilCatComponent', () => {
  let component: PerfilCatComponent;
  let fixture: ComponentFixture<PerfilCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
