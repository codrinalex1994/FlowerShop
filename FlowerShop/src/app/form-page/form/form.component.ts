import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/_models/list-item';
import { ProductsDataService } from 'src/app/_services/products-data.service';
import { ListDataService } from 'src/app/_services/list-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  listItem: ListItem = {name: '', surname: '', productId: ''};
  productIds: string[];

  constructor(private productsDataService: ProductsDataService, private listDataService: ListDataService) { }

  ngOnInit() {
    this.productsDataService.getProductIds().subscribe(res => this.productIds = res);
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
    if(this.checkEmptyFields()){
      alert("All fields are mandatory!");
      return;
    }
    if(!this.checkProductId(this.listItem.productId)) {
      alert("Product id does not exist. Check products tab for the product id.");
      return;
    }
    this.listDataService.addListItem(this.listItem);
    alert("Form submitted.");
  }

  checkEmptyFields() {
    if(this.listItem.name == '' || this.listItem.surname == '' || this.listItem.productId == ''){
      return 1;
    }
    return 0;
  }

  checkProductId(productId) {
    if(this.productIds.indexOf(productId) > -1) {
      return 1;
    }
    return 0;
  }
}
