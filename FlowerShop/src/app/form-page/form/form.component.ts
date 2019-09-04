import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/_models/list-item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  listItem: ListItem = {name: '', surname: '', productId: ''};

  constructor() { }

  ngOnInit() {
  }

  setName(name) {
    this.listItem.name = name;
  }

  setSurname(surname) {
    this.listItem.surname = surname;
  }

  setProductId(productId) {
    this.listItem.productId = productId;
  }

  doDaJob() {
    console.log(this.listItem.name, this.listItem.surname, this.listItem.productId);
  }
}
