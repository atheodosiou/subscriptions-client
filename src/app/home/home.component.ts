import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SideNavToggle } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title // private authService: AuthService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Home');
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  logout() {
    console.log('Logout');
  }

  goToProfile() {
    console.log('profile');
  }
}
