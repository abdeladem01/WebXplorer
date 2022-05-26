import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnWorkComponent } from './on-work.component';

describe('OnWorkComponent', () => {
  let component: OnWorkComponent;
  let fixture: ComponentFixture<OnWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
