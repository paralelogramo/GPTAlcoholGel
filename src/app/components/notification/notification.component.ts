import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { Notification } from 'src/app/objects/notification';
import { ActivatedRoute } from '@angular/router'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  sent: boolean = true;
  loading: boolean = true;

  constructor(
    private notificationService: NotificationServiceService,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let room = this.route.snapshot.params['room'];
    let currentDate = new Date();
    let currentDateFormat = formatDate(currentDate, 'dd/MM/yyyy', 'en-US');
    let currentTime = new Date();
    let currentTimeFormat = formatDate(currentTime, 'hh:mm:ss', 'en-US');

    this.notificationService.getIdRoom(room).subscribe((id) => {
      this.notificationService.postNotification(currentDateFormat, currentTimeFormat, Object.values(id)[0]).subscribe((confirm:any) => {
        console.log(confirm.confirm)
      })
    })
  }

  ngOnDestroy(): void {
    
  }
}
