import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ScheduleFactory } from 'src/app/factories/schedule_factory';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.scss']
})
export class ShowScheduleComponent implements OnInit {

  errorMessages: Array<String> = [];
  schedule: Schedule = new Schedule({})

  constructor(private service: ScheduleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.schedule.id = params.get("id");
      this.service.find(this.schedule.id).subscribe(
        response => this.schedule = ScheduleFactory.build(response),
        error => this.handleError(error)
      )
    })
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
