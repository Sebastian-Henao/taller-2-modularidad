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
    path: 'marvel-rivals',
    loadChildren: () => import('./modules/module-marvel-rivals/module-marvel-rivals-module').then(m => m.ModuleMarvelRivalsModule)
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
