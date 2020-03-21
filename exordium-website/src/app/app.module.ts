import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ReCaptcha
import { RecaptchaModule } from 'ng-recaptcha';

// SVG Inline Injector
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

// Main App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Page Components
import { PrimaryHeaderComponent } from './components/header/primary/primary.component';
import { PrimaryFooterComponent } from './components/footer/primary/primary.component';
import { ScrollToTopComponent } from './components/window/scroll-to-top/scroll-to-top.component';

// Error Reporting
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { ForbiddenComponent } from './pages/error/forbidden/forbidden.component';

// Welcome Page
import { WelcomeComponent } from './pages/welcome/welcome.component';

// Pricing Page
import { PricingComponent } from './pages/pricing/pricing.component';

// Company Pages
import { AboutUsComponent } from './pages/company/about-us/about-us.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { OurTeamComponent } from './pages/company/our-team/our-team.component';
import { ReviewsComponent } from './pages/company/reviews/reviews.component';
import { JobsComponent } from './pages/company/jobs/jobs.component';

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
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing'
    }
  },
  {
    path: 'general',
    children: [

    ]
  },
  {
    path: 'resources',
    children: [
      
    ]
  },
  {
    path: 'blog',
    children: [
      
    ]
  },
  {
    path: 'company',
    children: [
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
          title: 'About Us'
        }
      },
      {
        path: 'our-team',
        component: OurTeamComponent,
        data: {
          title: 'Our Team'
        }
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Service Reviews'
        }
      },
      {
        path: 'jobs',
        component: JobsComponent,
        data: {
          title: 'Jobs at Exordium'
        }
      }
    ]
  },
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
  },
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
  },
  {
    path: '**',
    redirectTo: 'error/not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    PrimaryFooterComponent,
    ScrollToTopComponent,
    NotFoundComponent,
    ForbiddenComponent,
    WelcomeComponent,
    ContactComponent,
    SigninComponent,
    RegisterComponent,
    AboutUsComponent,
    OurTeamComponent,
    ReviewsComponent,
    JobsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
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
