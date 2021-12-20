import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';
import { Exercise } from 'src/app/models/exercise';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { ExerciseService } from '../services/exercise.service';
import { MuscularGroupService } from '../services/muscular-group.service';

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  styleUrls: ['./update-exercise.component.scss']
})
export class UpdateExerciseComponent implements OnInit {

  exercise: Exercise = new Exercise();
  errorMessages: Array<String> = [];
  muscularGroups: Array<MuscularGroup> = [];

  constructor(private route: ActivatedRoute, private service: ExerciseService,
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

  save() {}

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Exercício não encontrado"]
      else
        console.log(error)
    }
  }

}
