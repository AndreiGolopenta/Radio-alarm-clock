import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { RadioComponent } from './containers/radio/radio.component';
import { ClockComponent } from './containers/clock/clock.component';

// components
import { RadioInfoComponent } from './components/radio-info/radio-info.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { RadioStationsComponent } from './components/radio-stations/radio-stations.component';
import { RadioLogoComponent } from './components/radio-logo/radio-logo.component';
import { DayComponent } from './components/day/day.component';
import { ClockAlarmComponent } from './components/clock-alarm/clock-alarm.component';
import { ListAnimationComponent } from './components/list-animation/list-animation.component';
import { AlarmStatusComponent } from './components/alarm-status/alarm-status.component';

// service
import { RadioAlarmClockService } from './radio-alarm-clock.service';

@NgModule({
  declarations: [
    RadioComponent, 
    RadioInfoComponent, 
    RadioButtonsComponent,
    RadioStationsComponent,
    RadioLogoComponent,
    ClockComponent,
    DayComponent,
    ClockAlarmComponent,
    ListAnimationComponent,
    AlarmStatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RadioComponent,
    ClockComponent
  ],
  providers: [
    RadioAlarmClockService
  ],
})
export class RadioAlarmClockModule {}
