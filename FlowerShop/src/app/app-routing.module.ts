import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'form-page', component: FormPageComponent },
  { path: 'products-page', component: ProductsPageComponent },
  { path: 'list-page', component: ListPageComponent },
  { path: '', redirectTo: '/form-page', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
