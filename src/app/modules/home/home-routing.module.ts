import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personal', component: HomePersonalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
