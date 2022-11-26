import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent, ToolbarComponent } from './components';

const components = [ToolbarComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components, RouterModule],
})
export class SharedModule {}
