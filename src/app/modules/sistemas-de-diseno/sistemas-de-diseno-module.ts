import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDeDisenoRoutingModule } from './sistemas-de-diseno-routing-module';
import { TableSistemasDeDisenoComponent } from './components/table-sistemas-de-diseno.component/table-sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno/list-sistemas-de-diseno.component';

/** Módulo que agrupa la navegación y componentes de sistemas de diseño. */
@NgModule({
  declarations: [
    TableSistemasDeDisenoComponent,
    ListSistemasDeDisenoComponent
  ],
  imports: [
    CommonModule,
    SistemasDeDisenoRoutingModule
  ]
})
export class SistemasDeDisenoModule { }
