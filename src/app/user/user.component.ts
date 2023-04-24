import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  steps: number = 5000;
  caloriesBurned: number = 350;
  heartRate: number = 75;
  recentActivities: any[] = [
    { name: 'Running', duration: 30 },
    { name: 'Cycling', duration: 45 },
    { name: 'Swimming', duration: 20 },
    { name: 'Yoga', duration: 60 }
  ];
}
