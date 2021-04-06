import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSenhaOngComponent } from './register-senha-ong.component';

describe('RegisterSenhaOngComponent', () => {
  let component: RegisterSenhaOngComponent;
  let fixture: ComponentFixture<RegisterSenhaOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSenhaOngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSenhaOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
