import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModuleMarvelRivalsComponent } from './pages/list-module-marvel-rivals/list-module-marvel-rivals.component';

const routes: Routes = [
  {
    path: 'list-marvel-rivals',
    component: ListModuleMarvelRivalsComponent
  },
  {
    path: '**',
    redirectTo: 'list-marvel-rivals'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleMarvelRivalsRoutingModule { }
