import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Pages
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserSessionsComponent } from './user-sessions/user-sessions.component';
import { UserLogsComponent } from './user-logs/user-logs.component';
import { UserConnectionsComponent } from './user-connections/user-connections.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

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
      },
      {
        path: 'sessions',
        component: UserSessionsComponent,
        data: {
          title: 'Sessions'
        }
      },
      {
        path: 'logs',
        component: UserLogsComponent,
        data: {
          title: 'Logs'
        }
      },
      {
        path: 'connections',
        component: UserConnectionsComponent,
        data: {
          title: 'Connections'
        }
      },
      {
        path: 'settings',
        component: UserSettingsComponent,
        data: {
          title: 'Settings'
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
