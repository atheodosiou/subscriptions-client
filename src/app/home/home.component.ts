import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) // private authService: AuthService
  {}

  ngOnInit() {
    this.titleService.setTitle('Home');
  }

  goToProfile() {
    console.log('User Profile');
  }

  logout() {
    // this.authService.logout();
  }
}
