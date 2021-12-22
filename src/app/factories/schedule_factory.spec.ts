import { ScheduleFactory } from './schedule_factory'
import { Schedule } from '../models/schedule';
import { Student } from '../models/student';
import { WorkoutPlan } from '../models/workout_plan';

describe('ScheduleFactory#build', () => {
  const params = {
    "schedule": {
      "id": "2d388a23-ffcd-4783-97ed-1df15ae88a0f",
      "workout_plan_id": "7cad8bac-5b7a-4b88-848b-c84b6855c9dd",
      "start_at": "2021-12-20 10:46:53 -0300",
      "status": "pending",
      "personal_id": "87d9a7c6-9255-451a-9cc0-2b60bb475c53",
      "workout_plan": {
        "id": "7cad8bac-5b7a-4b88-848b-c84b6855c9dd",
        "name": "Shai Utoh",
        "personal_id": "7cc654df-8100-440e-be76-1e1689975436"
      },
      "student": {
        "id": "f17e0974-b279-4866-9d65-f4637326c39c",
        "personal_id": "9c4ccd5a-d510-49e2-bc19-03f26e69ad6a",
        "user": {
          "name": "Bisuke",
          "email": "lore@live.com"
        }
      }
    }
  }


  it('should return a schedule object', () => {
    const schedule : Schedule = ScheduleFactory.build(params);
    expect(schedule.id).toMatch('2d388a23-ffcd-4783-97ed-1df15ae88a0f');
    expect(schedule.workoutPlanId).toMatch('7cad8bac-5b7a-4b88-848b-c84b6855c9dd');
    expect(schedule.startAt).toEqual(new Date("2021-12-20 10:46:53 -0300"))
    expect(schedule.status).toMatch("pending");
    expect(schedule.personalId).toMatch("87d9a7c6-9255-451a-9cc0-2b60bb475c53");
    expect(schedule.student).toBeInstanceOf(Student);
    expect(schedule.workoutPlan).toBeInstanceOf(WorkoutPlan);
  })
})
