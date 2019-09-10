import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form-page/form/form.component';
import { InputComponent } from './form-page/form/input/input.component';
import { ProductsDataService } from './_services/products-data.service';
import { ListDataService } from './_services/list-data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductPipe } from './_pipes/product-pipe';
import { ProductsDetailComponent } from './products-page/products-detail/products-detail.component';
import { SpeciePipe } from './_pipes/specie-pipe';
import { ReactiveInputComponent } from './reactive-input/reactive-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    ProductsPageComponent,
    ListPageComponent,
    NavBarComponent,
    FormComponent,
    InputComponent,
    NotFoundComponent,
    ProductPipe,
    ProductsDetailComponent,
    SpeciePipe,
    ReactiveInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsDataService,
    ListDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
