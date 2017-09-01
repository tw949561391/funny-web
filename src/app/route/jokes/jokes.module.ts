import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesComponent} from "./jokes.component";
import {RouterModule} from "@angular/router";
import {MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule} from "@angular/material";
import {ServiceModule} from "../../service/service.module";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    ServiceModule,
    RouterModule.forChild([
      {
        path: '', component: JokesComponent, children: [
        {path: '', redirectTo: '0;title=全部', pathMatch: 'full'},
        {path: ':type', loadChildren: './jokes-all/jokes-all.module#JokesAllModule'}
      ]
      }
    ])
  ],
  declarations: [JokesComponent]
})
export class JokesModule {
}

