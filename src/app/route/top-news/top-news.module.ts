import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNewsComponent} from "./top-news.component";
import {RouterModule} from "@angular/router";
import {MaterialModule, MdCardModule} from "@angular/material";
import {NewsAllComponent} from './news-all/news-all.component';
import {ServiceModule} from "../../service/service.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ServiceModule,
    RouterModule.forChild([{
      path: '',
      component: TopNewsComponent,
      children: [
        {path: 'list/:type', component: NewsAllComponent}
      ]
    }])
  ],
  declarations: [TopNewsComponent, NewsAllComponent]
})
export class TopNewsModule {


}
