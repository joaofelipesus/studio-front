import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListScheduleComponent } from './modules/shcedule/list-schedule/list-schedule.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
