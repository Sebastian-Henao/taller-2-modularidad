import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Definición de rutas internas del módulo de juegos.
 */
const routes: Routes = [
  {
    path: 'list-games',
    loadComponent: undefined, // Se conectará al crear ListGamesComponent
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
