import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ClockAlarm } from '../../models/radio-alarm-clock.interface';

@Component({
  selector: 'clock-alarm',
  styleUrls: ['clock-alarm.component.scss'],
  template: `
    <div>
      <div class="set-alarm">
        <i class="material-icons" (click)="setAlarm()">
          {{ !alarmOnOff ? '&#xe193;' : '&#xe857;' }}
        </i>
      </div>
      <i
        class="material-icons plus"
        [ngClass]="{
          hours: alarmData[0].setted,
          minutes: alarmData[1].setted,
          seconds: alarmData[2].setted
        }"
        >&#xe5c7;</i
      >
      <i
        class="material-icons minus"
        [ngClass]="{
          hours: alarmData[0].setted,
          minutes: alarmData[1].setted,
          seconds: alarmData[2].setted
        }"
        >&#xe5c5;</i
      >
      <div class="snooze">
        <i
          class="material-icons"
          (click)="snoozeActive()"
          *ngIf="snoozeInfo"
        >
          &#xe046;
        </i>
      </div>
    </div>
  `,
})
export class ClockAlarmComponent implements OnInit {
  select: number = 0;
  contor: number = 0;
  alarmIsOn: boolean = false;

  alarmData: ClockAlarm[] = [
    {
      id: 0,
      name: 'hours',
      value: 0,
      setted: false,
    },
    {
      id: 1,
      name: 'minutes',
      value: 0,
      setted: false,
    },
    {
      id: 2,
      name: 'seconds',
      value: 0,
      setted: false,
    },
  ];

  @Input()
  snoozeInfo: boolean;

  @Input()
  alarmset: boolean;

  @Input()
  alarmOnOff: boolean;

  @Output()
  alarmWasSet: EventEmitter<any> = new EventEmitter();

  @Output()
  actionIncrease: EventEmitter<any> = new EventEmitter();

  @Output()
  actionDecrease: EventEmitter<any> = new EventEmitter();

  @Output()
  getAlarmData: EventEmitter<any> = new EventEmitter();

  @Output()
  stopAlarm: EventEmitter<any> = new EventEmitter();

  @Output()
  snoozeAlarm: EventEmitter<any> = new EventEmitter();

  snoozeActive() {
    this.snoozeAlarm.emit();
  }

  setAlarm() {
    this.alarmset = true;
    if (this.select == 0) {
      this.alarmData[this.select].setted = true;
      this.select++;
      this.alarmWasSet.emit(this.alarmset);
    } else if (this.select == 1) {
      this.alarmData[this.select - 1].setted = false;
      this.alarmData[this.select].setted = true;
      this.select++;
      this.contor = 0;
      this.alarmWasSet.emit(this.alarmset);
    } else if (this.select == 2) {
      this.alarmData[this.select - 1].setted = false;
      this.alarmData[this.select].setted = true;
      this.select++;
      this.contor = 0;
      this.alarmWasSet.emit(this.alarmset);
    } else if (this.select == 3) {
      this.alarmset = false;
      this.alarmData[this.select - 1].setted = false;
      this.select++;
      this.alarmIsOn = true;
      this.getAlarmData.emit({
        hours: this.alarmData[0].value,
        minutes: this.alarmData[1].value,
        seconds: this.alarmData[2].value,
        alarmOnOff: this.alarmIsOn,
      });
      this.alarmWasSet.emit(this.alarmset);
    } else if (this.select == 4) {
      this.alarmset = false;
      this.select = 0;
      this.alarmIsOn = false;
      this.stopAlarm.emit(this.alarmIsOn);
      this.alarmWasSet.emit(this.alarmset);
    }
  }

  increase() {
    if (this.alarmData[0].setted) {
      this.contor < 23 ? this.contor++ : (this.contor = 0);
      this.alarmData[0].value = this.contor;
      this.actionIncrease.emit(this.alarmData[0]);
    }
    if (this.alarmData[1].setted) {
      this.contor < 59 ? this.contor++ : (this.contor = 0);
      this.alarmData[1].value = this.contor;
      this.actionIncrease.emit(this.alarmData[1]);
    }
    if (this.alarmData[2].setted) {
      this.contor < 59 ? this.contor++ : (this.contor = 0);
      this.alarmData[2].value = this.contor;
      this.actionIncrease.emit(this.alarmData[2]);
    }
  }

  decrease() {
    if (this.alarmData[0].setted) {
      this.contor > 0 ? this.contor-- : (this.contor = 23);
      this.alarmData[0].value = this.contor;
      this.actionDecrease.emit(this.alarmData[0]);
    }
    if (this.alarmData[1].setted) {
      this.contor > 0 ? this.contor-- : (this.contor = 59);
      this.alarmData[1].value = this.contor;
      this.actionDecrease.emit(this.alarmData[1]);
    }
    if (this.alarmData[2].setted) {
      this.contor > 0 ? this.contor-- : (this.contor = 59);
      this.alarmData[2].value = this.contor;
      this.actionDecrease.emit(this.alarmData[2]);
    }
  }

  ngOnInit() {
    document.onkeydown = event => {
      event.keyCode == 38
        ? this.increase()
        : event.keyCode == 40
        ? this.decrease()
        : null;
    };
  }
}
