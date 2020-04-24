import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DarkHeaderComponent } from './components/header/dark-header/dark-header.component';
import { LightHeaderComponent } from './components/header/light-header/light-header.component';
import { NavMainComponent } from './components/navbar/nav-main/nav-main.component';
import { NavAboutComponent } from './components/navbar/nav-about/nav-about.component';
import { NavDashboardComponent } from './components/navbar/nav-dashboard/nav-dashboard.component';
import { NavButtonsComponent } from './components/navbar/nav-buttons/nav-buttons.component';
import { TransparentHeaderComponent } from './components/header/transparent-header/transparent-header.component';
import { PrimaryFooterComponent } from './components/footer/primary/primary.component';
import { ScrollToTopComponent } from './components/window/scroll-to-top/scroll-to-top.component';
import { UserCoverComponent } from './components/user/user-cover/user-cover.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';

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

// Dashboard
import { DashboardComponent } from './pages/dashboard/clients/dashboard/dashboard.component';

// User
import { UserOverviewComponent } from './pages/dashboard/clients/user/user-overview/user-overview.component';
import { UserSessionsComponent } from './pages/dashboard/clients/user/user-sessions/user-sessions.component';
import { UserLogsComponent } from './pages/dashboard/clients/user/user-logs/user-logs.component';
import { UserConnectionsComponent } from './pages/dashboard/clients/user/user-connections/user-connections.component';
import { UserSettingsComponent } from './pages/dashboard/clients/user/user-settings/user-settings.component';
import { UserSecurityComponent } from './pages/dashboard/clients/user/user-security/user-security.component';

// Moderation
import { ModContactComponent } from './pages/dashboard/moderation/mod-contact/mod-contact.component';
import { ModUsersComponent } from './pages/dashboard/moderation/users/mod-users/mod-users.component';
import { ModUsersViewComponent } from './pages/dashboard/moderation/users/mod-users-view/mod-users-view.component';
import { ModUsersEditComponent } from './pages/dashboard/moderation/users/mod-users-edit/mod-users-edit.component';
import { ModUsersDisableComponent } from './pages/dashboard/moderation/users/mod-users-disable/mod-users-disable.component';

@NgModule({
  declarations: [
    AppComponent,

    DarkHeaderComponent,
    LightHeaderComponent,
    TransparentHeaderComponent,
    NavMainComponent,
    NavButtonsComponent,
    NavAboutComponent,
    NavDashboardComponent,
    PrimaryFooterComponent,
    ScrollToTopComponent,
    UserCoverComponent,
    UserSidebarComponent,

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

    UserOverviewComponent,
    UserSessionsComponent,
    UserLogsComponent,
    UserConnectionsComponent,
    UserSettingsComponent,
    UserSecurityComponent,

    ModContactComponent,
    ModUsersComponent,
    ModUsersViewComponent,
    ModUsersEditComponent,
    ModUsersDisableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
