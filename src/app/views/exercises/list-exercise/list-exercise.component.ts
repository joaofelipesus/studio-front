import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.scss']
})
export class ListExerciseComponent implements OnInit {

  exercises: Exercise[] = [];
  totalPages: number;
  currentPage: number;

  constructor(private httpClient: HttpClient, private headers: HeaderHandlerService) { }

  ngOnInit(): void {
    this.httpClient.get(`${environment.apiURL}/exercises`, this.headers.call())
      .subscribe(
        response => {
          this.exercises = response['exercises'].map(exercise => ExerciseFactory.build(exercise));
          this.totalPages = response['total_pages'];
          this.currentPage = response['current_page'];
        },
        error => console.log(error)
      )
  }

  nextPage(){
    this.httpClient.get(`${environment.apiURL}/exercises?page=${this.currentPage + 1}`, this.headers.call())
      .subscribe(
        response => {
          this.exercises = response['exercises'].map(exercise => ExerciseFactory.build(exercise));
          this.totalPages = response['total_pages'];
          this.currentPage = Number(response['current_page']);
        },
        error => console.log(error)
      )
  }

  previousPage(){
    this.httpClient.get(`${environment.apiURL}/exercises?page=${this.currentPage - 1}`, this.headers.call())
      .subscribe(
        response => {
          this.exercises = response['exercises'].map(exercise => ExerciseFactory.build(exercise));
          this.totalPages = response['total_pages'];
          this.currentPage = Number(response['current_page']);
        },
        error => console.log(error)
      )
  }

}
