import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkoutPlanComponent } from './show-workout-plan.component';

describe('ShowWorkoutPlanComponent', () => {
  let component: ShowWorkoutPlanComponent;
  let fixture: ComponentFixture<ShowWorkoutPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkoutPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
