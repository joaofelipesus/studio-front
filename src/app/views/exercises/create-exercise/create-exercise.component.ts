import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MuscularGroup } from '../../../models/muscular_group';
import { MuscularGroupFactory } from '../../../factories/muscular_group_factory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.scss']
})
export class CreateExerciseComponent implements OnInit {

  name: string = "";
  muscularGroupId: string = "";
  muscularGroups: MuscularGroup[] = [];
  headers = this.setupHeaders();
  formErrors: string[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.httpClient.get(`${environment.apiURL}/muscular_groups`, { headers: this.headers }).subscribe(response => {
      this.muscularGroups = response['muscular_groups'].map(muscularGroup => MuscularGroupFactory.build(muscularGroup));
    })
  }

  save(){
    const exercise = {
      name: this.name,
      muscular_group_id: this.muscularGroupId
    }
    this.httpClient.post(`${environment.apiURL}/exercises`, exercise, {headers: this.headers})
      .subscribe(response => {
        const newExerciseId = response["exercise"].id;
        this.router.navigateByUrl(`exercises/${newExerciseId}`);
      },
      error => this.formErrors = error.error["errors"]
    )
  }

  private setupHeaders(){
    const token = localStorage.getItem("authToken");
    return { 'Authorization': `Bearer ${token}`};
  }
}
