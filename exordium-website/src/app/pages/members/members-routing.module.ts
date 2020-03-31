import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'members',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          title: 'Signin'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
