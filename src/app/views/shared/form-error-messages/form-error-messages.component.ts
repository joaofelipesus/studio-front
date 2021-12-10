import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss']
})
export class FormErrorMessagesComponent implements OnInit {

  @Input()
  formErrors: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
