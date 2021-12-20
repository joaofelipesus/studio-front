import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-show-exercise',
  templateUrl: './show-exercise.component.html',
  styleUrls: ['./show-exercise.component.scss']
})
export class ShowExerciseComponent implements OnInit {

  exercise: Exercise = new Exercise();
  errorMessages : Array<String> = []

  constructor(private service: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exercise.id = params.get("id");
      this.service.find(this.exercise.id).subscribe(
        response => this.exercise = ExerciseFactory.build(response),
        error => {
          if (error.status === 404)
            this.errorMessages = ["Exercício não encontrado"]
          else
            console.log(error)
        }
        )
    })
  }

}
