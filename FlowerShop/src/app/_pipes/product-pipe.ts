import { Pipe, PipeTransform } from '@angular/core';
import { ProductsDataService } from '../_services/products-data.service';
import { Product } from '../_models/product';

@Pipe({ name: 'productpipe' })
export class ProductPipe implements PipeTransform {

    products: Product[];

    constructor(private productsDataService: ProductsDataService) {
        productsDataService.getProducts().subscribe(res => this.products = res);
    }

    transform(productId: string, param: string) {
        if(param == 'description') {
            return this.getProductById(productId).description;
        }
        if(param == 'name') {
            return this.getProductById(productId).name;
        }
    }

    getProductById(productId):Product {
        return this.products.filter(prod => prod.id == productId)[0];
    }
}