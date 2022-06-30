import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notification-home',
  templateUrl: './notification-home.component.html',
  styleUrls: ['./notification-home.component.css']
})
export class NotificationHomeComponent implements OnInit {

  type: string = 'A';

  form = new FormGroup({
    type: new FormControl('Alcohol Gel'),
    comment: new FormControl(''),
  });

  constructor(
    private notificationService: NotificationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendNotification(){
    const room = this.route.snapshot.params['room'];
    const action = this.form.get('type')?.value;
    const comment = this.form.get('comment')?.value;
    this.notificationService.postNotification(room, action, comment).subscribe((resp: any) => {
      if(resp.confirm){
        this.router.navigateByUrl('success')
      }
      else[
      ]
    })
  }

  setAlcoholGel(){
    this.form.get('type')?.setValue("Alcohol Gel", { emitEvent: false })
    this.type = 'A'
  }

  setRepair(){
    this.form.get('type')?.setValue("Reparación", { emitEvent: false })
    this.type = 'R'
  }

}
