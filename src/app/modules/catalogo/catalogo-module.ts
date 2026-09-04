import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule, SharedModule, CatalogoRoutingModule],
})
export class CatalogoModule {}
