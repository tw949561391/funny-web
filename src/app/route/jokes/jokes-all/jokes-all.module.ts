import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {JokesAllComponent} from "./jokes-all.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{
      path: '',
      component: JokesAllComponent
    }])
  ],
  declarations: [JokesAllComponent]
})
export class JokesAllModule {
}
