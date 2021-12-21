import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';
import { WorkoutPlan } from 'src/app/models/workout_plan';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {

  private BASE_URL = `${environment.apiURL}/workout_plans`

  constructor(private httpClient: HttpClient, private headerService: HeaderHandlerService) { }

  list(page : number = 1) {
    return this.httpClient.get(`${this.BASE_URL}?page=${page}`, this.headerService.setupHeaders())
  }

  find(id: string) {
    return this.httpClient.get(`${this.BASE_URL}/${id}`, this.headerService.setupHeaders());
  }

  create(workoutPlan: WorkoutPlan) {
    return this.httpClient.post(this.BASE_URL, this.parseBody(workoutPlan), this.headerService.setupHeaders());
  }

  update(workoutPlan: WorkoutPlan) {
    return this.httpClient.put(`${this.BASE_URL}/${workoutPlan.id}`, this.parseBody(workoutPlan), this.headerService.setupHeaders());
  }

  private parseBody(workoutPlan: WorkoutPlan) {
    return {
      name: workoutPlan.name
    }
  }

}
