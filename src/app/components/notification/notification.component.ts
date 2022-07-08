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

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }
}
