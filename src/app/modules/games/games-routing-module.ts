import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGamesComponent } from './pages/list-games/list-games.component';

/**
 * Definición de rutas internas del módulo de juegos.
 */
const routes: Routes = [
  {
    path: 'list-games',
    component: ListGamesComponent,
  },
  {
    path: '**',
    redirectTo: 'list-games'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
