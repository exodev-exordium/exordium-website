import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SVG Inline Injector
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

// Main App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Page Components
import { ScrollToTopComponent } from './components/window/scroll-to-top/scroll-to-top.component';

// Error Reporting
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { ForbiddenComponent } from './pages/error/forbidden/forbidden.component';

// Welcome Page
import { WelcomeComponent } from './pages/welcome/welcome.component';

// Company Pages
import { AboutUsComponent } from './pages/company/about-us/about-us.component';
import { ContactComponent } from './pages/company/contact/contact.component';

// Members Pages
import { SigninComponent } from './pages/members/signin/signin.component';
import { RegisterComponent } from './pages/members/register/register.component';

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
    ScrollToTopComponent,
    NotFoundComponent,
    ForbiddenComponent,
    WelcomeComponent,
    ContactComponent,
    SigninComponent,
    RegisterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    InlineSVGModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true 
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // remove error with the scrollToTop component
})
export class AppModule { }
