import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesComponent} from "./jokes.component";
import {RouterModule} from "@angular/router";
import {MaterialModule, MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule} from "@angular/material";
import {ServiceModule} from "../../service/service.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ServiceModule,
    RouterModule.forChild([
      {
        path: '', component: JokesComponent, children: [
        {path: ':type', loadChildren: './jokes-all/jokes-all.module#JokesAllModule'}
      ]
      }
    ])
  ],
  declarations: [JokesComponent]
})
export class JokesModule {
}

