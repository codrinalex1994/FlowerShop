import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsDetailComponent } from './products-page/products-detail/products-detail.component';

const routes: Routes = [
  { path: 'form-page', component: FormPageComponent },
  { path: 'products-page', component: ProductsPageComponent, 
      children: [
        { path: ':productId', component: ProductsDetailComponent}
      ]},
  { path: 'list-page', component: ListPageComponent },
  { path: '', redirectTo: '/form-page', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
