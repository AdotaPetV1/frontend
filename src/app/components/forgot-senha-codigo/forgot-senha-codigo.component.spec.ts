import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotSenhaCodigoComponent } from './forgot-senha-codigo.component';

describe('ForgotSenhaCodigoComponent', () => {
  let component: ForgotSenhaCodigoComponent;
  let fixture: ComponentFixture<ForgotSenhaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotSenhaCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotSenhaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
