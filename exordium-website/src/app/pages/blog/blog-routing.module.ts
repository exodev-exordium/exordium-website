import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

// Components
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Blog'
    },
  },
  {
    path: 'blog/:id',
    component: ArticleComponent,
    data: {
      title: 'Article'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
