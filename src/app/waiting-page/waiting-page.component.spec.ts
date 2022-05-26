import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingPageComponent } from './waiting-page.component';

describe('WaitingPageComponent', () => {
  let component: WaitingPageComponent;
  let fixture: ComponentFixture<WaitingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
