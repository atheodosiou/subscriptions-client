import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        // canActivate:[AuthGuard]
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class HomeRoutingModule {}
