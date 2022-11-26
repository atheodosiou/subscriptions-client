import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SIDEBAR_DATA } from './sidebar.data';
import { SidebarToggle } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarData = SIDEBAR_DATA;
  collapsed = false;
  screenWidth = 0;
  @Output() toggle: EventEmitter<SidebarToggle> =
    new EventEmitter<SidebarToggle>();

  constructor() {}

  ngOnInit() {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.toggle.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidebar() {
    this.collapsed = false;
    this.toggle.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
