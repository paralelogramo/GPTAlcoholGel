import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  message: string = "Notificación enviado con éxito";
  messageFail: string = "Error al enviar la notificación";

  sent: boolean = true;

  constructor(
    //private notificationService: NotificationServiceService,
  ) { }

  ngOnInit(): void {
    //this.notificationService.postNotification()
  }

  ngOnDestroy(): void {
    
  }
}
