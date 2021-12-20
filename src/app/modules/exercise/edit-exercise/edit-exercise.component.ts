import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Exercise } from 'src/app/models/exercise';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { ExerciseService } from '../services/exercise.service';
import { MuscularGroupService } from 'src/app/services/muscular-group.service';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.scss']
})
export class EditExerciseComponent implements OnInit {

  exercise: Exercise = new Exercise();
  errorMessages: Array<String> = [];
  muscularGroups: Array<MuscularGroup> = [];

  constructor(private route: ActivatedRoute, private service: ExerciseService, private router: Router,
              private muscularGroupService: MuscularGroupService) { }

  ngOnInit(): void {
    this.muscularGroupService.list()
      .subscribe(response => {
        this.muscularGroups = response['muscular_groups'].map(m => MuscularGroupFactory.build(m));
        },
        error => console.log(error)
      )

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.exercise.id = params.get("id");
      this.service.find(this.exercise.id).subscribe(
        response => this.exercise = ExerciseFactory.build(response),
        error => this.handleError(error)
      )
    })
  }

  save() {
    this.service.update(this.exercise)
      .subscribe(
        response => {
          const updatedExercise = ExerciseFactory.build(response);
          this.router.navigateByUrl(`exercises/${updatedExercise.id}`)
        },
        error => this.handleError(error)
      )
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Exercício não encontrado"];
      else if (error.status === 400)
        this.errorMessages = error.error.errors;
      else
        console.log(error)
    }
  }

}
