import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.scss']
})
export class UpdateExerciseComponent implements OnInit {

  exercise: Exercise = new Exercise();
  errorMessage: string;
  formErrors: string[] = [];
  muscularGroups: MuscularGroup[] = [];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
              private headerHandler: HeaderHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get(`${environment.apiURL}/muscular_groups`, this.headerHandler.call()).subscribe(response => {
      this.muscularGroups = response['muscular_groups'].map(muscularGroup => MuscularGroupFactory.build(muscularGroup));

      this.route.paramMap.subscribe((params: ParamMap) => {
        this.exercise.id = params.get("id");
        this.httpClient.get(`${environment.apiURL}/exercises/${this.exercise.id}`, this.headerHandler.call())
          .subscribe(
            response => {
              this.exercise = ExerciseFactory.build(response)
              console.log(this.exercise)
            },
            error => this.errorMessage = ErrorHandlerService.call(error.status, "Exercício")
          )
      });
    })
  }

  save(){
    const body = {
      name: this.exercise.name,
      muscular_group_id: this.exercise.muscular_group_id
    }

    this.httpClient.put(`${environment.apiURL}/exercises/${this.exercise.id}`, body, this.headerHandler.call())
      .subscribe(
        _response => this.router.navigateByUrl(`exercises/${this.exercise.id}`),
        error => this.formErrors = error.error["errors"]
      )
  }

}
