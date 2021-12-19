import { Component, OnInit } from '@angular/core';
import { MuscularGroupFactory } from 'src/app/factories/muscular_group_factory';
import { MuscularGroup } from 'src/app/models/muscular_group';
import { MuscularGroupService } from 'src/app/services/muscular-group.service';
import { ExerciseService } from 'src/app/modules/exercise/services/exercise.service';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent implements OnInit {

  muscularGrous: Array<MuscularGroup> = [];

  name: string = '';
  muscularGroupId: string = '';

  constructor(private muscularGroupService: MuscularGroupService, private service: ExerciseService) { }

  ngOnInit(): void {
    this.muscularGroupService.list()
      .subscribe(response => {
        this.muscularGrous = response['muscular_groups'].map(m => MuscularGroupFactory.build(m));
        },
        error => console.log(error)
      )
  }

  // todo:
  //   - testar componente de mensagens de erro!
  //   - salvar exercicio
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
        console.log(response)
      },
      error => {
        console.log(error)
      })
  }

}
