import { Injectable } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ListDataService {

    ListData: ListItem[] = [
        {name:'asd', surname: 'asd', productId:'2'},
        {name:'afgh', surname: 'sdf', productId:'4'}
    ];

    constructor() { }

    addListItem(listItem: ListItem) {
        this.ListData.push(listItem);
    }

    getListData() {
        return of(this.ListData).pipe(delay(200));
    }

}