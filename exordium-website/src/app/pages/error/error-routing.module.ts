import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {
    path: 'error',
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
          title: 'Not Found'
        }
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
        data: {
          title: 'Forbidden'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
