import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent {
  stepsCount: number = 0;
  totalSteps: number = 0;
  goalSteps: number = 10000;
  sleepHours: number = 0;
  avgSleepHours: number = 0;
  recommendedSleepHours: number = 8;

  updateData() {
    // Update the data properties with new values
    this.stepsCount = Math.floor(Math.random() * 10000);
    this.totalSteps += this.stepsCount;
    this.sleepHours = Math.floor(Math.random() * 10);
    this.avgSleepHours = Math.floor(Math.random() * 10);
  }

}
