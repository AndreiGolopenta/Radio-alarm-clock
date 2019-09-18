import { Component, Input } from '@angular/core';

@Component({
  selector: 'radio-info',
  styleUrls: ['radio-info.component.scss'],
  template: `
    <h3>
      {{ name }}
    </h3>
    <div>
      {{ volume }} %
    </div>
  `,
})
export class RadioInfoComponent {

  @Input()
  name: string;

  @Input()
  volume: number;
}
