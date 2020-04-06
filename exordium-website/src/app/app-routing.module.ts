import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing
import { BlogModule } from './pages/blog/blog.module';
import { CompanyModule } from './pages/company/company.module';
import { MembersModule } from './pages/members/members.module';
import { ErrorModule } from './pages/error/error.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

// Page Components
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes : Routes = [
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
    path: '**',
    redirectTo: 'error/not-found'
  }
]

@NgModule({
  declarations: [],
  imports: [
    BlogModule,
    CompanyModule,
    MembersModule,
    ErrorModule,
    DashboardModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true,
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
