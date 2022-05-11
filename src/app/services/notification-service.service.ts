import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../objects/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  baseUrl = "http://localhost";

  constructor( private clientHttp: HttpClient) { }

  postNotification(notification: Notification){
    console.log(notification)
    return this.clientHttp.post<any>(`${this.baseUrl}/sendNotif.php`,notification)
  }
}
