import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BodyComponent,
  RoundedIconButtonComponent,
  SidebarComponent,
  ToggleComponent,
  ToolbarComponent,
} from './components';

const components = [
  ToolbarComponent,
  SidebarComponent,
  BodyComponent,
  RoundedIconButtonComponent,
  ToggleComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components, RouterModule],
})
export class SharedModule {}
