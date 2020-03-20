import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Error Reporting
import { NotFoundComponent } from './error/not-found/not-found.component';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';

// Welcome Page
import { WelcomeComponent } from './welcome/welcome.component';

// Company Pages
import { AboutUsComponent } from './company/about-us/about-us.component';
import { ContactComponent } from './company/contact/contact.component';

// Members Pages
import { SigninComponent } from './members/signin/signin.component';
import { RegisterComponent } from './members/register/register.component';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
    data: {
      title: 'Exordium'
    }
  },
  {
    path: 'error/not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
  {
    path: 'error/forbidden',
    component: ForbiddenComponent,
    data: {
      title: 'Forbidden'
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'company/about-us',
    component: AboutUsComponent,
    data: {
      title: 'About Us'
    }
  },
  {
    path: 'company/contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  },
  {
    path: 'members/signin',
    component: SigninComponent,
    data: {
      title: 'Signin'
    }
  },
  {
    path: 'members/register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: '**',
    redirectTo: 'error/not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    SigninComponent,
    RegisterComponent,
    AboutUsComponent,
    NotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
