import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// unused routes: look at app.module.ts
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
