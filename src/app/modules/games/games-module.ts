import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesRoutingModule } from './games-routing-module';
import { GamesComponent } from './games.component';
import { SharedModule } from '../shared/shared-module';
import { TableGamesComponent } from './components/table-games/table-games.component';
import { ListGamesComponent } from './pages/list-games/list-games.component';

/**
 * Módulo funcional independiente para la gestión y presentación de juegos.
 */
@NgModule({
  declarations: [
    GamesComponent,
    TableGamesComponent,
    ListGamesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GamesRoutingModule,
    SharedModule,
  ]
})
export class GamesModule { }
