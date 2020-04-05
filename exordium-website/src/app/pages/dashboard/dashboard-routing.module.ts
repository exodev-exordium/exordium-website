import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/profile',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
