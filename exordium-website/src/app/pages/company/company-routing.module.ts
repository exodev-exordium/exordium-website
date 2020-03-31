import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
