import { Component, Input, EventEmitter, Output } from '@angular/core';

import { RadioStation } from '../../models/radio-alarm-clock.interface';

@Component({
  selector: 'radio-stations',
  styleUrls: ['radio-stations.component.scss'],
  template: `
    <div
      class="radio-post"
      [ngClass]="{ 'active': detail.startStop }"
      (click)="onPlaySelect()"
    >
      {{ detail.id + 1 }} - {{ detail.name }}
      <list-animation
        class="my-animation"
        [ngClass]="{ 'active': detail.startStop }">
      </list-animation>
    </div>
  `,
})
export class RadioStationsComponent {
  @Input()
  detail: RadioStation;

  @Output()
  playSelected: EventEmitter<any> = new EventEmitter();

  onPlaySelect() {
    this.playSelected.emit(this.detail);
  }
}
