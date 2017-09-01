import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNewsComponent} from "./top-news.component";
import {RouterModule} from "@angular/router";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([{
      path: '',
      component: TopNewsComponent
    }])
  ],
  declarations: [TopNewsComponent]
})
export class TopNewsModule {
}
