import { Component, Input } from '@angular/core';
import { AlarmSet } from '../../models/radio-alarm-clock.interface';

@Component({
  selector: 'alarm-status',
  styleUrls: ['alarm-status.component.scss'],
  template: `
    <div>
      {{
        alarmStatus.alarmOnOff
          ? (alarmStatus.hours < 10
              ? '0' + alarmStatus.hours
              : alarmStatus.hours) +
            ' : ' +
            (alarmStatus.minutes < 10
              ? '0' + alarmStatus.minutes
              : alarmStatus.minutes) +
            ' : ' +
            (alarmStatus.seconds < 10
              ? '0' + alarmStatus.seconds
              : alarmStatus.seconds)
          : 'Alarm is unset'
      }}
    </div>
  `,
})
export class AlarmStatusComponent {
  @Input()
  alarmStatus: AlarmSet;
}
