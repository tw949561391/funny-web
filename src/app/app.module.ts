import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoute} from "./app.route";
import 'hammerjs';
import {MdButtonModule, MdIconModule, MdListModule, MdSidenavModule} from "@angular/material";
import {HttpModule} from "@angular/http";
import {SideNavComponent} from "./sub/side-nav/side-nav.component";
import {FloatBtnsComponent} from "./sub/float-btns/float-btns.component";
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FloatBtnsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoute,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
