import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkoutPlanComponent } from './edit-workout-plan.component';

describe('EditWorkoutPlanComponent', () => {
  let component: EditWorkoutPlanComponent;
  let fixture: ComponentFixture<EditWorkoutPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkoutPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
