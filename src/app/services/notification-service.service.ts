import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from '../objects/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  //baseUrl = "http://localhost";

  constructor( private clientHttp: HttpClient) { }

  postNotification(cdf: string, ctf: string, id:number){
    let headers = new HttpHeaders({ "content-type": 'application/x-www-form-urlencoded' });
    headers.append('Access-Control-Allow-Origin', "*");
    let body = new URLSearchParams();
    body.set('cdf',cdf);
    body.set('ctf', ctf);
    body.set('id', ''+id);
    return this.clientHttp.post<any>(`http://alcoholgel.sytes.net:3000/sendNotification`,body.toString(), {headers: headers})
  }

  getIdRoom(room: string){
    let headers = new HttpHeaders({ "content-type": 'application/x-www-form-urlencoded' });
    headers.append('Access-Control-Allow-Origin', "*");
    let body = new URLSearchParams();
    body.set('room',room);
    return this.clientHttp.post<number>(`http://alcoholgel.sytes.net:3000/getIdRoom`,body.toString(), {headers: headers})
  }
}
