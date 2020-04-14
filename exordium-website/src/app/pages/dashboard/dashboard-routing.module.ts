import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Dashboard
import { DashboardComponent } from './clients/dashboard/dashboard.component';
import { ProfileComponent } from './clients/profile/profile.component';
import { SettingsComponent } from './clients/settings/settings.component';

// Moderation
import { ModContactComponent } from './moderation/mod-contact/mod-contact.component';
import { ModUsersComponent } from './moderation/mod-users/mod-users.component';

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
    path: 'moderation/contact',
    component: ModContactComponent,
    data: {
      title: 'Moderation Contact'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'moderation/users',
    component: ModUsersComponent,
    data: {
      title: 'Moderation Users'
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
