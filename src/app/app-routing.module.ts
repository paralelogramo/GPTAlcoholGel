import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { NotificationHomeComponent } from './components/notification-home/notification-home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'success', component: NotificationComponent },
  { path: 'notification/:room', component: NotificationHomeComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', redirectTo: '/login'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
