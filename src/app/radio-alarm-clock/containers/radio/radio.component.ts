import { Component, OnInit } from '@angular/core';

import { RadioStation } from '../../models/radio-alarm-clock.interface';

import { RadioAlarmClockService } from '../../radio-alarm-clock.service';

@Component({
  selector: 'radio-container',
  styleUrls: ['radio.component.scss'],
  template: `
    <audio #selectRadio preload="none">
      <source src="{{ liveRadio }}" />
    </audio>
    <div class="myRadio">
      <div class="logo">
        <radio-logo
          *ngFor="let radio of radioStations"
          [logo]="radio"
          [logoSelect]="id"
        >
        </radio-logo>
      </div>
      <div class="buttons">
        <radio-buttons
          [onenClose]="onOff"
          (play)="handlePlay(selectRadio)"
          (next)="handleNext(selectRadio)"
          (prev)="handlePrev(selectRadio)"
          (volUp)="handleVolumeUp(selectRadio)"
          (volDown)="handleVolumeDown(selectRadio)"
        >
        </radio-buttons>
      </div>
      <div class="station-name">
        <radio-info [name]="radioStations[id].name" [volume]="radioVolume">
        </radio-info>
      </div>
      <div class="stations-list">
       <radio-stations
          *ngFor="let radio of radioStations"
          [detail]="radio"
          (playSelected)="handlePlaySelected($event, selectRadio)"
        >
        </radio-stations>
      </div>
    </div>
  `,
})
export class RadioComponent implements OnInit {
  radioStations: RadioStation[];
  id: number = 0;
  liveRadio: string;
  onOff: boolean = false;
  radioVolume: number = 100;

  constructor(private radioSerice: RadioAlarmClockService) {}

  ngOnInit() {
    this.radioStations = this.radioSerice.getRadioStation();
    this.liveRadio = this.radioStations[this.id].address;
    
  }

  handlePlay(selectRadio: any) { 
    this.onOff == false
      ? (selectRadio.play(), (this.radioStations[this.id].startStop = true))
      : (selectRadio.pause(), (this.radioStations[this.id].startStop = false));
    this.onOff = !this.onOff;
  }

  handleNext(selectRadio: any) {
    if (this.onOff) {
      this.radioStations[this.id].startStop = false;
      this.id == this.radioStations.length - 1 ? (this.id = 0) : this.id++;
      this.liveRadio = this.radioStations[this.id].address;
      this.radioStations[this.id].startStop = true;
      selectRadio.load();
      selectRadio.play();
    }
  }

  handlePrev(selectRadio: any) {
    if (this.onOff) {
      this.radioStations[this.id].startStop = false;
      this.id <= 0 ? (this.id = this.radioStations.length - 1) : this.id--;
      this.liveRadio = this.radioStations[this.id].address;
      this.radioStations[this.id].startStop = true;
      selectRadio.load();
      selectRadio.play();
    }
  }

  handleVolumeUp(selectRadio: any) {
    if (this.radioVolume < 100) {
      selectRadio.volume = (this.radioVolume + 10) / 100;
      this.radioVolume = selectRadio.volume * 100;
    }
  }

  handleVolumeDown(selectRadio: any) {
    if (this.radioVolume > 0) {
      selectRadio.volume = (this.radioVolume - 10) / 100;
      this.radioVolume = selectRadio.volume * 100;
    }
  }

  handlePlaySelected(selectStation: RadioStation, selectRadio: any) {
    for (let radio of this.radioStations) {
      radio.startStop = false;
    }
    this.onOff = true;
    this.radioStations[selectStation.id].startStop = true;
    this.id = selectStation.id;
    this.liveRadio = selectStation.address;
    selectRadio.load();
    selectRadio.play();
  }
}
