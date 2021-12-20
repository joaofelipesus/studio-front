import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';
import { ExerciseService } from 'src/app/services/exercise.service';
import { MuscularGroupService } from 'src/app/services/muscular-group.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private service: ExerciseService,
              private muscularGroupService: MuscularGroupService) { }

  ngOnInit(): void {
    this.muscularGroupService.list()
      .subscribe(response => {
        this.muscularGroups = response['muscular_groups'].map(muscularGroup => MuscularGroupFactory.build(muscularGroup));

        this.route.paramMap.subscribe((params: ParamMap) => {
          this.exercise.id = params.get("id");
          this.service.get(this.exercise.id)
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
      muscular_group_id: this.exercise.muscularGroupId
    }

    this.service.update(this.exercise.id, body)
      .subscribe(
        _response => this.router.navigateByUrl(`exercises/${this.exercise.id}`),
        error => this.formErrors = error.error["errors"]
      )
  }

}
