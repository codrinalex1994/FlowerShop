import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductsDataService } from '../_services/products-data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];

  constructor(private productDataService: ProductsDataService) { }

  ngOnInit() {
    this.productDataService.getProducts().subscribe(res => this.products = res);
  }

}
