import { Injectable } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { of, Subject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ListDataService {

    subject = new Subject<ListItem>();

    ListData: ListItem[] = [
        {name:'asd', surname: 'asd', productId:'1', type:'red-rose'},
        {name:'afgh', surname: 'sdf', productId:'3', type: 'moonflower'}
    ];

    constructor() {
        this.listItemAdded().subscribe({
            next: (value) => this.ListData.push(value)
        });
    }

    addListItem(listItem: ListItem) {
        this.subject.next(listItem);
    }

    listItemAdded(): Observable<ListItem> {
        return this.subject.asObservable();
    }

    getListData() {
        return of(this.ListData).pipe(delay(200));
    }

}