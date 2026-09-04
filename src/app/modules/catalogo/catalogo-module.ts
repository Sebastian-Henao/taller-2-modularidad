import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { CatalogoRoutingModule } from './catalogo-routing-module';
import { CatalogoComponent } from './catalogo.component';
import { TableCatalogoComponent } from './components/table-catalogo/table-catalogo.component';
import { ListCatalogoComponent } from './pages/list-catalogo/list-catalogo.component';

@NgModule({
  declarations: [
    CatalogoComponent,
    ListCatalogoComponent,
    TableCatalogoComponent,
  ],
  imports: [CommonModule, SharedModule, CatalogoRoutingModule],
})
export class CatalogoModule {}
