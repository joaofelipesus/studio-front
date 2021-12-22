import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkoutPlanComponent } from './new-workout-plan.component';

describe('NewWorkoutPlanComponent', () => {
  let component: NewWorkoutPlanComponent;
  let fixture: ComponentFixture<NewWorkoutPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkoutPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
