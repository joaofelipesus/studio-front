import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HeaderHandlerService } from 'src/app/services/header-handler.service'
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';

@Component({
  selector: 'app-show-exercise',
  templateUrl: './show-exercise.component.html',
  styleUrls: ['./show-exercise.component.scss']
})
export class ShowExerciseComponent implements OnInit {

  // exerciseId: String;
  // name: String = "";
  // muscularGroupName: String = "";
  exercise: Exercise = new Exercise();

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private headerHandler: HeaderHandlerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exercise.id = params.get("id");
      this.httpClient.get(`${environment.apiURL}/exercises/${this.exercise.id}`, this.headerHandler.call())
        .subscribe(response => {
          // console.log(response)
          // console.log(ExerciseFactory.build(response))
          this.exercise = ExerciseFactory.build(response);
        },
        error => console.log(error)
      )
    })
  }

}
