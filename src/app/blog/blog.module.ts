import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "app/shared/shared.module";

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [BlogComponent, HomeComponent, ListComponent, ArticleComponent, AboutComponent]
})
export class BlogModule { }
