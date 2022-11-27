import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  @Input()  checked: boolean = false;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
}
