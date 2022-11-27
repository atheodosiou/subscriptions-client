import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BodyComponent,
  SidebarComponent,
  ToolbarComponent,
} from './components';

const components = [ToolbarComponent, SidebarComponent, BodyComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components, RouterModule],
})
export class SharedModule {}
