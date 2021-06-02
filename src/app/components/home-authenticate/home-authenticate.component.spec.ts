import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuthenticateComponent } from './home-authenticate.component';

describe('HomeAuthenticateComponent', () => {
  let component: HomeAuthenticateComponent;
  let fixture: ComponentFixture<HomeAuthenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAuthenticateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
