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

  setName(name: string) {
    this.listItem.name = name;
  }

  setSurname(surname: string) {
    this.listItem.surname = surname;
  }

  setProductId(productId: string) {
    this.listItem.productId = productId;
  }

  doDaJob() {
    if(this.areEmptyFields()){
      alert("All fields are mandatory!");
      return;
    }
    if(!this.isProductIdInTheList(this.listItem.productId)) {
      alert("Product id does not exist. Check products tab for the product id.");
      return;
    }
    this.listDataService.addListItem(this.listItem);
    alert("Form submitted.");
  }

  areEmptyFields(): boolean {
    return this.listItem.name == '' || this.listItem.surname == '' || this.listItem.productId == '';
  }

  isProductIdInTheList(productId: string): boolean {
    return this.productIds.indexOf(productId) > -1;
  }
}
