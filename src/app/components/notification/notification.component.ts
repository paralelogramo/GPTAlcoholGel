import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { Notification } from 'src/app/objects/notification';
import { ActivatedRoute } from '@angular/router'

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
    this.notificationService.postNotification(this.route.snapshot.params['room']).subscribe((confirm:any) => {
      this.sent = confirm.confirm;
      this.loading = false;
    },
    error =>{
      this.sent = error.ok
    })
  }

  ngOnDestroy(): void {
    
  }
}
