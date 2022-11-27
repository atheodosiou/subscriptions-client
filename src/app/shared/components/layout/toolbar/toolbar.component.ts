import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() title: string | undefined;
  @Output() logoutClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() profileClicked: EventEmitter<void> = new EventEmitter<void>();
}
