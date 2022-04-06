import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGamesComponent } from './number-games.component';

describe('NumberGamesComponent', () => {
  let component: NumberGamesComponent;
  let fixture: ComponentFixture<NumberGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
