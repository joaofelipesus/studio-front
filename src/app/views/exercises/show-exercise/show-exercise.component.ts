import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-show-exercise',
  templateUrl: './show-exercise.component.html',
  styleUrls: ['./show-exercise.component.scss']
})
export class ShowExerciseComponent implements OnInit {

  errorMessage: String = "";
  exercise: Exercise = new Exercise();

  constructor(private route: ActivatedRoute, private service: ExerciseService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exercise.id = params.get("id");
      this.service.get(this.exercise.id)
        .subscribe(
          response => this.exercise = ExerciseFactory.build(response),
          error => this.errorMessage = ErrorHandlerService.call(error.status, "Exercício")
        )
    });
  }

}
