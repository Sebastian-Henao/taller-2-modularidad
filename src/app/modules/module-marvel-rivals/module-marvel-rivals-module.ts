import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleMarvelRivalsRoutingModule } from './module-marvel-rivals-routing-module';
import { MarvelRivalsComponent } from './marvel-rivals.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    MarvelRivalsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModuleMarvelRivalsRoutingModule
  ]
})
export class ModuleMarvelRivalsModule { }
