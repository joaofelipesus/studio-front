import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { PaginatorService } from 'src/app/services/paginator.service';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleFactory } from 'src/app/factories/schedule_factory';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.scss']
})
export class ListScheduleComponent implements OnInit {

  exercises : Array<Schedule> = [];
  tableMetadata: any = {
    currentPage: 1,
    totalPages: 1,
    elements: []
  };

  constructor(private service: ScheduleService) { }

  ngOnInit(): void {
    this.updateTableContent(1);
  }

  nextPage(){
    this.updateTableContent(this.tableMetadata.currentPage + 1);
  }

  previousPage() {
    this.updateTableContent(this.tableMetadata.currentPage - 1);
  }

  private updateTableContent(page) {
    this.service.list(page)
      .subscribe(
        response => this.tableMetadata = PaginatorService.call(response, ScheduleFactory, 'schedules'),
        error => console.log(error)
      )
  }

}
