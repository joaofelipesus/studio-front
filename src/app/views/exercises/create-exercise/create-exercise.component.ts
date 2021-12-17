import { Component, OnInit } from '@angular/core';
import { MuscularGroup } from '../../../models/muscular_group';
import { MuscularGroupFactory } from '../../../factories/muscular_group_factory';
import { Router } from '@angular/router';
import { ExerciseService } from 'src/app/services/exercise.service';
import { MuscularGroupService } from 'src/app/services/muscular-group.service'

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.scss']
})
export class CreateExerciseComponent implements OnInit {

  name: string = "";
  muscularGroupId: string = "";
  muscularGroups: MuscularGroup[] = [];
  formErrors: string[] = [];

  constructor(private router: Router, private service: ExerciseService, private muscularGroupService: MuscularGroupService) {}

  ngOnInit(): void {
    this.muscularGroupService.list()
    .subscribe(response => {
      this.muscularGroups = response['muscular_groups'].map(muscularGroup => MuscularGroupFactory.build(muscularGroup));
    })
  }

  save(){
    const body = {
      name: this.name,
      muscular_group_id: this.muscularGroupId
    }

    this.service.create(body)
      .subscribe(response => {
        const newExerciseId = response["exercise"].id;
        this.router.navigateByUrl(`exercises/${newExerciseId}`);
      },
      error => this.formErrors = error.error["errors"]
    )
  }
}
