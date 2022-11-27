import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rounded-icon-button',
  templateUrl: './rounded-icon-button.component.html',
})
export class RoundedIconButtonComponent {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
}
