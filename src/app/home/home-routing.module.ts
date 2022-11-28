import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { SubscriptionsComponent } from './subpages';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: '/subscriptions',
            pathMatch: 'full',
          },
          {
            path: 'subscriptions',
            component: SubscriptionsComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: [SubscriptionsComponent],
})
export class HomeRoutingModule {}
