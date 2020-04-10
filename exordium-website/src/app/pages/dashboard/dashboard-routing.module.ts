import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Components
import { DashboardComponent } from './clients/dashboard/dashboard.component';
import { ProfileComponent } from './clients/profile/profile.component';
import { SettingsComponent } from './clients/settings/settings.component';

import { ModContactComponent } from './moderation/mod-contact/mod-contact.component';

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
  },
  {
    path: 'dashboard/moderation/contact',
    component: ModContactComponent,
    data: {
      title: 'Moderation Contact'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
