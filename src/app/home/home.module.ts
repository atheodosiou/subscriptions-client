import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations:[HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AuthModule, SharedModule],
  exports: [SharedModule],
})
export class HomeModule {}
