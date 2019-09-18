import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-day',
  styleUrls: ['day.component.scss'],
  template: `
    <div>
      <p *ngFor="let day of days; let i = index">
        <span [ngClass]="{ active: i === currentDay }">
          {{ day }}
        </span>
      </p>
    </div>
  `,
})
export class DayComponent implements OnInit {
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDay: number;

  ngOnInit() {
    let date = new Date();
    this.currentDay = date.getDay();
  }
}
