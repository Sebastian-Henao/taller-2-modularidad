import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatalogoComponent } from './pages/list-catalogo/list-catalogo.component';

const routes: Routes = [{ path: '', component: ListCatalogoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingModule {}
