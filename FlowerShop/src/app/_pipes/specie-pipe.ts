import { Pipe, PipeTransform } from '@angular/core';
import { ProductsDataService } from '../_services/products-data.service';

@Pipe({ name: 'speciepipe' })
export class SpeciePipe implements PipeTransform {

    constructor(private productsDataService: ProductsDataService) {}

    async transform(type: string, param: string) {
        
        const specie = await this.productsDataService.getProductTypeSpecie2(type);

            if(param == 'sunNeeds') {
                return specie.sunNeeds;
            }
            if(param == 'soilNeeds') {
                return specie.soilNeeds;
            }
    }
}