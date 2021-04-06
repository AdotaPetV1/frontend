import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotSenhaEmailComponent } from './forgot-senha-email.component';

describe('ForgotSenhaEmailComponent', () => {
  let component: ForgotSenhaEmailComponent;
  let fixture: ComponentFixture<ForgotSenhaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotSenhaEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotSenhaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
