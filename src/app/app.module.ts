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
import { CreateComponent } from './views/exercises/create/create.component';
import { PersonalNavbarComponent } from './views/home/personal-navbar/personal-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeNavbarComponent,
    PersonalComponent,
    CreateComponent,
    PersonalNavbarComponent
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
