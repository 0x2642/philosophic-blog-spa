import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ListComponent } from "./list/list.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'article',
        component: ArticleComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
