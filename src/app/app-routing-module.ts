import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games-module').then(m => m.GamesModule)
  },
  {
    path: 'marvel-rivals',
    loadChildren: () => import('./modules/module-marvel-rivals/module-marvel-rivals-module').then(m => m.ModuleMarvelRivalsModule)
  },  
  {
    path: 'catalogo',
    loadChildren: () => import('./modules/catalogo/catalogo-module').then(m => m.CatalogoModule)
  },
  {
    path: '**',
    redirectTo: 'marvel-rivals',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
