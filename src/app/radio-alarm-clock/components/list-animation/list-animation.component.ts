import { Component } from '@angular/core';

@Component({
  selector: 'list-animation',
  styleUrls: ['list-animation.component.scss'],
  template: `
    <div class="my-animation">
      <span class="animation"></span>
      <span class="animation two"></span>
      <span class="animation three"></span>
      <span class="animation four"></span>
      <span class="animation five"></span>
      <span class="animation six"></span>
    </div>
  `,
})
export class ListAnimationComponent {}
