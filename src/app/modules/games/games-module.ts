import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesRoutingModule } from './games-routing-module';
import { GamesComponent } from './games.component';
import { SharedModule } from '../shared/shared-module';

/**
 * Módulo funcional independiente para la gestión y presentación de juegos.
 */
@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GamesRoutingModule,
    SharedModule,
  ]
})
export class GamesModule { }
