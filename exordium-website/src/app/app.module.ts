import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './members/signin/signin.component';
import { RegisterComponent } from './members/register/register.component';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'members/signin',
    component: SigninComponent
  },
  {
    path: 'members/register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
