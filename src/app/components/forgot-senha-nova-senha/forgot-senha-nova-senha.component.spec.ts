import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotSenhaNovaSenhaComponent } from './forgot-senha-nova-senha.component';

describe('ForgotSenhaNovaSenhaComponent', () => {
  let component: ForgotSenhaNovaSenhaComponent;
  let fixture: ComponentFixture<ForgotSenhaNovaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotSenhaNovaSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotSenhaNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
