import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'producto',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '**',
    redirectTo: 'producto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
