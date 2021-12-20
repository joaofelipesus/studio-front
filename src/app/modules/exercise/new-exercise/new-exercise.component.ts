import { Component, OnInit } from '@angular/core';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { MuscularGroupService } from 'src/app/services/muscular-group.service';
import { ExerciseService } from 'src/app/modules/exercise/services/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent implements OnInit {

  muscularGroups: Array<MuscularGroup> = [];

  formErrors: Array<String> = [];

  name: string = '';
  muscularGroupId: string = '';

  constructor(private muscularGroupService: MuscularGroupService, private service: ExerciseService,
    private router: Router) { }

  ngOnInit(): void {
    this.muscularGroupService.list()
      .subscribe(response => {
        this.muscularGroups = response['muscular_groups'].map(m => MuscularGroupFactory.build(m));
        },
        error => console.log(error)
      )
  }

  // todo:
  //   - testar se chama o service.create
  //   - testar e2e
  //   - extrair componente form ?
  save() : void {
    const exercise = {
      name: this.name,
      muscular_group_id: this.muscularGroupId
    }

    this.service.create(exercise)
      .subscribe(response => {
        this.router.navigateByUrl(`exercises/${response.exercise.id}`)
      },
      error => {
        if(error.status === 400) {
          this.formErrors = error.error.errors;
        } else {
          console.log(error)
        }
      })
  }

}
