import { Pipe, PipeTransform } from '@angular/core';
import { ProductsDataService } from '../_services/products-data.service';
import { Product } from '../_models/product';

@Pipe({ name: 'speciepipe' })
export class SpeciePipe implements PipeTransform {
    transform() {
        
    }
}