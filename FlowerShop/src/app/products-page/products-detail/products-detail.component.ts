import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/_services/products-data.service';
import { Product } from 'src/app/_models/product';
import { Specie } from 'src/app/_models/specie';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  productId: string;
  private sub: any;
  product: Product;
  specie: Specie;
  types: string[];

  constructor(private route: ActivatedRoute, private productsDataService: ProductsDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.productsDataService.getProductById(this.productId).subscribe(res => {
        this.product = res;
        this.specie = undefined;
        this.productsDataService.getSpecieTypes(this.product.specie).subscribe(res => this.types = res);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelectType(type: string) {
    this.productsDataService.getProductTypeSpecie(type).subscribe(res => this.specie = res);
  }

}
