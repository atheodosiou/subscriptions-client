import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  checked: boolean = localStorage.getItem('theme')
    ? localStorage.getItem('theme') === 'dark'
      ? true
      : false
    : false;

  @Input() title: string | undefined;
  @Output() logoutClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() profileClicked: EventEmitter<void> = new EventEmitter<void>();

  toggleTheme(event: any) {
    console.log('Toggle');
    const checked: boolean = event?.target?.checked;
    const body = document.getElementsByTagName('html')[0];
    if (checked) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
