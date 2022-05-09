import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../objects/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  baseUrl = "Url del localhost del pino";

  constructor( private clientHttp: HttpClient) { }

  postNotification(notification: Notification){
    return this.clientHttp.post<any>(`${this.baseUrl}`,notification)
  }
}
