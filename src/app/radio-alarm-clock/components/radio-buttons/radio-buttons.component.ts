import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'radio-buttons',
  styleUrls: ['radio-buttons.component.scss'],
  template: `
    <div class="vol-down">
      <i class="material-icons" (click)="onVolumeDown()">
        &#xe04d;
      </i>
    </div>
    <div class="prev">
      <i class="material-icons" (click)="onPrev()">
        &#xe045;
      </i>
    </div>
    <div class="play-stop">
      <i class="material-icons" (click)="onPlay()">
        {{ onenClose ? '&#xe036;' : '&#xe039;' }}
      </i>
    </div>
    <div class="next">
      <i class="material-icons" (click)="onNext()">
        &#xe044;
      </i>
    </div>
    <div class="vol-up">
      <i class="material-icons" (click)="onVolumeUp()">
        &#xe050;
      </i>
    </div>
  `,
})
export class RadioButtonsComponent {
  @Input()
  onenClose: boolean;

  @Output()
  play: EventEmitter<any> = new EventEmitter();

  @Output()
  next: EventEmitter<any> = new EventEmitter();

  @Output()
  prev: EventEmitter<any> = new EventEmitter();

  @Output()
  volUp: EventEmitter<any> = new EventEmitter();

  @Output()
  volDown: EventEmitter<any> = new EventEmitter();

  onPlay() {
    this.play.emit();
  }

  onNext() {
    this.next.emit();
  }

  onPrev() {
    this.prev.emit();
  }

  onVolumeUp() {
    this.volUp.emit();
  }

  onVolumeDown() {
    this.volDown.emit();
  }
}

