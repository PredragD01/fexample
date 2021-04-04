import { Component, OnInit } from '@angular/core';
import {CommonGlobals} from '../../commons/globals';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  sortType = false;
  constructor() {
  }

  ngOnInit(): void {
    this.products = CommonGlobals.products;
  }

  sort(data){
    this.products = this.products.sort(this.sortBy(data, this.sortType));
  }

  sortBy(prop,sort) {
    return function(a,b){
      console.log(typeof prop)
      if(prop != 'price'){
        if (sort) {
          return a[prop].localeCompare(String(b[prop]));
        } else {
          return b[prop].localeCompare(String(a[prop]));
        }
      }else{
        if (sort) {
          return a[prop] - b[prop];
        } else {
          return b[prop] - a[prop];
        }
      }

    }
  }

}
