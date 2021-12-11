import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home/home.component';
import { LoginComponent } from './views/home/login/login.component';
import { HomeNavbarComponent } from './views/home/home-navbar/home-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { PersonalComponent } from './views/home/personal/personal.component';
import { PersonalNavbarComponent } from './views/home/personal-navbar/personal-navbar.component';
import { CreateExerciseComponent } from './views/exercises/create-exercise/create-exercise.component';
import { ShowExerciseComponent } from './views/exercises/show-exercise/show-exercise.component';
import { ErrorHandlerComponent } from './views/shared/error-handler/error-handler.component';
import { FormErrorMessagesComponent } from './views/shared/form-error-messages/form-error-messages.component';
import { UpdateExerciseComponent } from './views/exercises/update-exercise/update-exercise.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeNavbarComponent,
    PersonalComponent,
    PersonalNavbarComponent,
    CreateExerciseComponent,
    ShowExerciseComponent,
    ErrorHandlerComponent,
    FormErrorMessagesComponent,
    UpdateExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
