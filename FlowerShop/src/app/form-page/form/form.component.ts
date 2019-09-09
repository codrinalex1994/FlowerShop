import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/_models/list-item';
import { ProductsDataService } from 'src/app/_services/products-data.service';
import { ListDataService } from 'src/app/_services/list-data.service';
import { Specie } from 'src/app/_models/specie';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  listItem: ListItem = {name: '', surname: '', productId: '', type: ''};
  productIds: string[];
  types: string[];
  specie: Specie;

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

  setType(type: string) {
    this.listItem.type = type;
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
    return this.listItem.name == '' || this.listItem.surname == '' || this.listItem.productId == '' || this.listItem.type == '';
  }

  isProductIdInTheList(productId: string): boolean {
    return this.productIds.indexOf(productId) > -1;
  }

  onSelectProductId(productId) {
    if(productId) {
      this.setType('');
      this.specie = undefined;
      this.setProductId(productId);
      this.setSpecieTypes();
    } else {
      this.types = [];
    }
  }

  onSelectSpecieType(type) {
    if(type) {
      this.setType(type);
      this.productsDataService.getProductTypeSpecie(type).subscribe(res => this.specie = res);
    }
  }

  setSpecieTypes() {
    this.productsDataService.getProductById(this.listItem.productId).subscribe(res => {
      this.productsDataService.getSpecieTypes(res.specie).subscribe(types => this.types = types);
    });
  }
}
