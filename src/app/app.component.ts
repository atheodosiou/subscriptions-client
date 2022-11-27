import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    const body = document.getElementsByTagName('html')[0];
    if (theme) {
      switch (theme) {
        case 'dark': {
          body.classList.add('dark');
          break;
        }
        case 'light': {
          body.classList.remove('dark');
          break;
        }
        default:
          return;
      }
    }
  }
}
