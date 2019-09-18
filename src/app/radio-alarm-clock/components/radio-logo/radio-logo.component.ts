import { Component, Input } from '@angular/core';

import { RadioStation } from '../../models/radio-alarm-clock.interface';
 
@Component({
  selector: 'radio-logo',
  styleUrls: ['radio-logo.component.scss'],
  template: `
    <div *ngIf="logo.id === logoSelect">
      <img src="{{ logo.logo }}">
    </div>
  `,
})
export class RadioLogoComponent {

  @Input()
  logo: RadioStation;

  @Input()
  logoSelect: number;
}
