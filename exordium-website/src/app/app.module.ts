import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Plugins
import { NgSelectModule } from '@ng-select/ng-select';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { InlineSVGModule } from 'ng-inline-svg';

// Main App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth Services
import { AuthInterceptor } from './service/authconfig.interceptor';

// Components
import { PrimaryHeaderComponent } from './components/header/primary/primary.component';
import { OverlayHeaderComponent } from './components/header/overlay/overlay.component';
import { MainNavbarComponent } from './components/navbar/main/main.component';
import { AboutNavbarComponent } from './components/navbar/about/about.component';
import { PrimaryFooterComponent } from './components/footer/primary/primary.component';
import { ScrollToTopComponent } from './components/window/scroll-to-top/scroll-to-top.component';

// Pages
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { ForbiddenComponent } from './pages/error/forbidden/forbidden.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutUsComponent } from './pages/company/about-us/about-us.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { OurTeamComponent } from './pages/company/our-team/our-team.component';
import { ReviewsComponent } from './pages/company/reviews/reviews.component';
import { JobsComponent } from './pages/company/jobs/jobs.component';
import { SigninComponent } from './pages/members/signin/signin.component';
import { RegisterComponent } from './pages/members/register/register.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,

    PrimaryHeaderComponent,
    OverlayHeaderComponent, 
    MainNavbarComponent,
    AboutNavbarComponent,
    PrimaryFooterComponent,
    ScrollToTopComponent,

    NotFoundComponent,
    ForbiddenComponent,

    WelcomeComponent,
    PricingComponent,

    AboutUsComponent,
    ContactComponent,
    OurTeamComponent,
    ReviewsComponent,
    JobsComponent,

    SigninComponent,
    RegisterComponent,

    BlogComponent, 
    ArticleComponent, 
    
    DashboardComponent, 
    SettingsComponent, 
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    RecaptchaModule, 
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule, 
    InlineSVGModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeB5uIUAAAAAMQWnwCUpUHbdsHO4iV4emdn9KOL'
      } as RecaptchaSettings,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
