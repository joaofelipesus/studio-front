import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomePersonalComponent } from './home-personal/home-personal.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, HomePersonalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class HomeModule { }
