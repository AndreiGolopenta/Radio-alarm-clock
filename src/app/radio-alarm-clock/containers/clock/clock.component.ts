import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ClockAlarm, AlarmSet } from '../../models/radio-alarm-clock.interface';

@Component({
  selector: 'alarm-clock',
  styleUrls: ['clock.component.scss'],
  template: `
    <div>
      <p>
        <span class="hours">{{ !setAlarm ? hours : alarmHours }}</span>
        :
        <span class="minutes">{{ !setAlarm ? minutes : alarmMinutes }}</span>
        <span class="seconds">{{ !setAlarm ? seconds : alarmSeconds }}</span>
      </p>
    </div>
    <div>
      <alarm-status
        [alarmStatus]="alarmTime">
      </alarm-status>
    </div>
    <div class="days">
      <show-day></show-day>
    </div>
    <clock-alarm
      [snoozeInfo]="snooze"
      [alarmset]="setAlarm"
      [alarmOnOff]="alarmTime.alarmOnOff"
      (alarmWasSet)="handleAlarm($event)"
      (actionIncrease)="handleIncreaseDecrease($event)"
      (actionDecrease)="handleIncreaseDecrease($event)"
      (getAlarmData)="handleAlarmData($event)"
      (stopAlarm)="handleStopAlarm($event)"
      (snoozeAlarm)="handleSnooze(alarm)"
    >
    </clock-alarm>
    <audio loop="true" #alarm>
      <source src="assets/alarm-sound/alarma1.mp3" />
    </audio>
  `,
})
export class ClockComponent implements OnInit {
  clockInterval: any;
  hours: any;
  minutes: any;
  seconds: any;
  setAlarm: boolean = false;
  alarmHours: string = '00';
  alarmMinutes: string = '00';
  alarmSeconds: string = '00';
  snooze: boolean = false;

  alarmTime: AlarmSet = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    alarmOnOff: false,
  };

  @ViewChild('alarm', { static: false })
  alarm: ElementRef;

  startClock() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    if (
      this.alarmTime.hours == this.hours &&
      this.alarmTime.minutes == this.minutes &&
      this.alarmTime.seconds == this.seconds &&
      this.alarmTime.alarmOnOff == true
    ) {
      // Alarm
      this.alarm.nativeElement.play();
      this.snooze = true;
    }
    date.getSeconds() < 10 ? (this.seconds = '0' + date.getSeconds()) : null;
    date.getMinutes() < 10 ? (this.minutes = '0' + date.getMinutes()) : null;
    date.getHours() < 10 ? (this.hours = '0' + date.getHours()) : null;
  }

  ngOnInit() {
    this.clockInterval = setInterval(() => this.startClock(), 1000);
  }

  handleAlarm(event: boolean) {
    this.setAlarm = event;
  }

  handleIncreaseDecrease(event: ClockAlarm) {
    if (event.name == 'hours') {
      if (event.value < 10) {
        this.alarmHours = `0${event.value.toString()}`;
      } else {
        this.alarmHours = event.value.toString();
      }
    }
    if (event.name == 'minutes') {
      if (event.value < 10) {
        this.alarmMinutes = `0${event.value.toString()}`;
      } else {
        this.alarmMinutes = event.value.toString();
      }
    }
    if (event.name == 'seconds') {
      if (event.value < 10) {
        this.alarmSeconds = `0${event.value.toString()}`;
      } else {
        this.alarmSeconds = event.value.toString();
      }
    }
  }

  handleAlarmData(event: AlarmSet) {
    this.alarmTime = {
      hours: event.hours,
      minutes: event.minutes,
      seconds: event.seconds,
      alarmOnOff: event.alarmOnOff,
    };
    console.log(
      `Alarm time : ${this.alarmTime.hours}:${this.alarmTime.minutes}:${
        this.alarmTime.seconds
      }`
    );
  }

  handleStopAlarm(event: boolean) {
    this.alarmTime.alarmOnOff = event;
    this.alarm.nativeElement.pause();
    this.alarmHours = '00';
    this.alarmMinutes = '00';
    this.alarmSeconds = '00';
    this.snooze = false;
  }

  handleSnooze(alarm: any) {
    alarm.pause();
    this.alarmTime.minutes++;
    this.snooze = false;
  }
}
