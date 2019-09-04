import { Injectable } from '@angular/core';
import { PRODUCTS } from '../_mock-data/mock-products';
import { Product } from '../_models/product';

@Injectable()
export class ProductsDataService {

    constructor() {}

    getProducts(): Product[] {
        return PRODUCTS;
    }
}