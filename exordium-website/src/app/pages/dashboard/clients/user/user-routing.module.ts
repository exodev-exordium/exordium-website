import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Pages
import { UserOverviewComponent } from './user-overview/user-overview.component';


const routes: Routes = [
  {
    path: 'dashboard/user',
    data: {
      title: 'User'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserOverviewComponent,
        data: {
          title: 'Overview'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
