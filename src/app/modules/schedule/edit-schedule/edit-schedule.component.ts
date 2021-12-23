import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ScheduleFactory } from 'src/app/factories/schedule_factory';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss']
})
export class EditScheduleComponent implements OnInit {

  errorMessages: Array<String> = [];
  schedule: Schedule = new Schedule({})

  constructor(private service: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.schedule.id = params.get("id");
      this.service.find(this.schedule.id).subscribe(
        response => {
          this.schedule = ScheduleFactory.build(response)
          console.log(this.schedule.startAt)
        },
        error => this.handleError(error)
      )
    })
  }

  save() {
    this.service.update(this.schedule).subscribe(
      _response => this.router.navigateByUrl(`/schedules/${this.schedule.id}`),
      error => this.handleError(error)
    )
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Horário não encontrado"]
      else
        console.log(error)
    }
  }

}
