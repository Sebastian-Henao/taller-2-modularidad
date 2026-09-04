import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleMarvelRivalsRoutingModule } from './module-marvel-rivals-routing-module';
import { MarvelRivalsComponent } from './marvel-rivals.component';
import { SharedModule } from '../shared/shared-module';
import { ListModuleMarvelRivalsComponent } from './pages/list-module-marvel-rivals/list-module-marvel-rivals.component';
import { TableModuleMarvelRivalsComponent } from './components/table-module-marvel-rivals/table-module-marvel-rivals.component';


@NgModule({
  declarations: [
    MarvelRivalsComponent,
    ListModuleMarvelRivalsComponent,
    TableModuleMarvelRivalsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleMarvelRivalsRoutingModule
  ]
})
export class ModuleMarvelRivalsModule { }
