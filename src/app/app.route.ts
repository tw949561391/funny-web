import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './route/home/home.module#HomeModule'},
  {path: 'jokes', loadChildren: './route/jokes/jokes.module#JokesModule'},
  {path: 'game-lol', loadChildren: './route/game-lol/game-lol.module#GameLolModule'},
  {path: 'top-news', loadChildren: './route/top-news/top-news.module#TopNewsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoute {
}
