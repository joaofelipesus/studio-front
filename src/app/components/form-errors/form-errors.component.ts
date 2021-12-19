import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit {

  @Input()
  errors: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
