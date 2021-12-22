import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  BASE_URL = `${environment.apiURL}/schedules`

  constructor(private httpClient: HttpClient, private headerService: HeaderHandlerService) { }

  list(page : number = 1) {
    return this.httpClient.get(`${this.BASE_URL}?page=${page}`, this.headerService.setupHeaders());
  }

  find(id : string) {
    return this.httpClient.get(`${this.BASE_URL}/${id}`, this.headerService.setupHeaders());
  }

  create(schedule: Schedule) {
    return this.httpClient.post(this.BASE_URL, this.parseBody(schedule), this.headerService.setupHeaders());
  }

  update(schedule: Schedule) {
    return this.httpClient.put(`${this.BASE_URL}/${schedule.id}`, this.parseBody(schedule), this.headerService.setupHeaders());
  }

  private parseBody(schedule: Schedule) {
    return {
      student_id: schedule.studentId,
      workout_plan_id: schedule.workoutPlanId,
      start_at: schedule.startAt
    }
  }
}
