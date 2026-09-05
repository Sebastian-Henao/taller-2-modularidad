import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatalogoComponent } from './pages/list-catalogo/list-catalogo.component';

/** Rutas internas disponibles para el módulo de catálogo. */
const routes: Routes = [{ path: '', component: ListCatalogoComponent }];

/** Configura las rutas hijas del módulo de catálogo. */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingModule {}
