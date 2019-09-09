import { Injectable } from '@angular/core';
import { PRODUCTS, PRODUCT_IDS } from '../_mock-data/mock-products';
import { Product } from '../_models/product';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SPECIES, SPECIE_TYPES } from '../_mock-data/mock-species';
import { Specie } from '../_models/specie';

@Injectable()
export class ProductsDataService {

    constructor() {}

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS).pipe(delay(200));
    }

    getProductIds(): Observable<string[]> {
        return of(PRODUCT_IDS).pipe(delay(200));
    }

    getProductById(productId: string): Observable<Product> {
        return of(PRODUCTS.filter(prod => prod.id == productId)[0]).pipe(delay(200));
    }

    getProductTypeSpecie(productType: string): Observable<Specie> {
        return of(SPECIES.filter(specie => specie.type == productType)[0]).pipe(delay(200));
    }

    getSpecieTypes(productSpecie: string): Observable<string[]> {
        return of(SPECIE_TYPES.filter(specie => specie.specie == productSpecie).map(specie_type => specie_type.type)).pipe(delay(200));
    }

}