import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
  }

  // NOTE: extract to service!
  login(){
    const user = new User(this.email, this.password);
    this.loginService.call(user);
  }
}
