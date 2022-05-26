import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestOrConnectComponent } from './guest-or-connect.component';

describe('GuestOrConnectComponent', () => {
  let component: GuestOrConnectComponent;
  let fixture: ComponentFixture<GuestOrConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestOrConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestOrConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
