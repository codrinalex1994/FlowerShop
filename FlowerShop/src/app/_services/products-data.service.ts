import { Injectable } from '@angular/core';
import { PRODUCTS, PRODUCT_IDS } from '../_mock-data/mock-products';
import { Product } from '../_models/product';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ProductsDataService {

    constructor() {}

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS).pipe(delay(200));
    }

    getProductIds(): Observable<string[]> {
        return of(PRODUCT_IDS).pipe(delay(200));
    }
}