import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSenhaComponent } from './register-senha.component';

describe('RegisterSenhaComponent', () => {
  let component: RegisterSenhaComponent;
  let fixture: ComponentFixture<RegisterSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
