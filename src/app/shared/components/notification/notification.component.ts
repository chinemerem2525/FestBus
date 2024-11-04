import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notification) => {
      this.notifications.push(notification);
      setTimeout(() => this.removeNotification(notification), 3000); // Auto-remove after 3 seconds
    });
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(
      (n) => n !== notification
    );
  }

}
