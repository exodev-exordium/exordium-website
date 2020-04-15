import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from 'src/app/service/auth.guard';

// Pages
import { ModContactComponent } from './mod-contact/mod-contact.component';

import { ModUsersComponent } from './users/mod-users/mod-users.component';
import { ModUsersViewComponent } from './users/mod-users-view/mod-users-view.component';
import { ModUsersEditComponent } from './users/mod-users-edit/mod-users-edit.component';
import { ModUsersDisableComponent } from './users/mod-users-disable/mod-users-disable.component';

const routes: Routes = [
  {
    path: 'moderation',
    data: {
      title: 'Moderation'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'contact',
        component: ModContactComponent,
        data: {
          title: 'Contact Requests'
        }
      },
      {
        path: 'users',
        data: {
          title: ''
        },
        children: [
          {
            path: '',
            component: ModUsersComponent,
            data: {
              title: 'Users'
            }
          },
          {
            path: 'view/:id',
            component: ModUsersViewComponent,
            data: {
              title: 'View User'
            }
          },
          {
            path: 'edit/:id',
            component: ModUsersEditComponent,
            data: {
              title: 'Edit User'
            }
          },
          {
            path: 'disable/:id',
            component: ModUsersDisableComponent,
            data: {
              title: 'Disable User'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModerationRoutingModule { }
