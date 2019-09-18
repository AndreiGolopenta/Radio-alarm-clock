import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RadioAlarmClockModule } from './radio-alarm-clock/radio-alarm-clock.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RadioAlarmClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
