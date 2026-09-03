import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno/list-sistemas-de-diseno.component';

const routes: Routes = [
  {
    path: 'list-sistemas-de-diseno',
    component: ListSistemasDeDisenoComponent
  },
  {
    path: '**',
    redirectTo: 'list-sistemas-de-diseno'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasDeDisenoRoutingModule { }
