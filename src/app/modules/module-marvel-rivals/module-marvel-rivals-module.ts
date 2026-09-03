import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleMarvelRivalsRoutingModule } from './module-marvel-rivals-routing-module';
import { MarvelRivalsComponent } from './marvel-rivals.component';


@NgModule({
  declarations: [
    MarvelRivalsComponent
  ],
  imports: [
    CommonModule,
    ModuleMarvelRivalsRoutingModule
  ]
})
export class ModuleMarvelRivalsModule { }
