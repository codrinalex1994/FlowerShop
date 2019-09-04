import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form-page/form/form.component';
import { InputComponent } from './form-page/form/input/input.component';
import { ProductsDataService } from './_services/products-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    ProductsPageComponent,
    ListPageComponent,
    NavBarComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
