import {Injectable} from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {id: '1', name: 'Laptop', price: 111.3},
    {id: '2', name: 'Tablet', price: 90, description: 'It is tab generation 1'},
    {id: '3', name: 'Iphone', price: 100}
  ];

  constructor() {
  }

  getAllProducts() : Product[]{
    return this.products;
  }
}
