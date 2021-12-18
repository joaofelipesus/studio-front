import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PersonalAuthenticatedGuard } from 'src/app/guards/personal-authenticated.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personal', component: HomePersonalComponent, canActivate: [PersonalAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
