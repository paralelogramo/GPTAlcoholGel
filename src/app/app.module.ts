import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { Error404Component } from './components/error404/error404.component';
import { NotificationServiceService } from './services/notification-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationHomeComponent } from './components/notification-home/notification-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    Error404Component,
    NotificationHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    NotificationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
