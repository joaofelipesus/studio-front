import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  @Input()
  errorMessage: String;

  constructor() {}

  ngOnInit(): void {}

}
