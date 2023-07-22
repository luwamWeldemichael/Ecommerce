import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from "../../model/Product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductsService, private router : Router) {
    const currentNavigation = this.router.getCurrentNavigation();
    if(currentNavigation && currentNavigation.extras.state && currentNavigation.extras.state['productId']){
      console.log('xxx',currentNavigation.extras.state['productId']);
    }
  }

  ngOnInit(): void {
    // this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    });
    this.productService.getTriggerProductSavedLog().subscribe(data=> {
      console.log(data, 'products');
    })
  }
}
