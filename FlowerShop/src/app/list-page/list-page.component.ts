import { Component, OnInit } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { ListDataService } from '../_services/list-data.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  items: ListItem[];

  constructor(private listDataService: ListDataService) { }

  ngOnInit() {
    this.listDataService.getListData().subscribe(res => this.items = res);
  }

}
